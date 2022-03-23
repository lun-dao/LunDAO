// Interact with WETH9 contract using Hardhat network + mainnet forking
// #0 = No. 0 of Hardhat Network default accounts
// #1 = A randomly picked address

// Constants
const EXIT_SUCCESS  = 0;
const EXIT_FAILURE  = 1;
const weth9_address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const somebody      = "0x2feb1512183545f48f6b9c5b4ebfcaf49cfca6f3";
const contract_ABI  = require("./contract-abi.json"); // WETH9's ABI

// Auxiliary functions
function addressSlicing(address) {
    return `${address.toLowerCase().slice(0, 6)}......${address.toLowerCase().slice(-4)}`;
}

async function printAccountAndBalance(provider, contract, account0, account1) {
    const decimals = 3;
    console.log("--------------------------------------------------------------------------------");
    console.log("Account Address             ETH-Balance     WETH-Balance");
    console.log(`#0     `, 
                `${addressSlicing(account0.address)}   `, 
                `${(+hre.ethers.utils.formatEther(await provider.getBalance(account0.address))).toFixed(decimals)}\t   `, 
                `${(+hre.ethers.utils.formatEther(await contract.balanceOf(account0.address))).toFixed(decimals)}`);
    console.log(`#1     `, 
                `${addressSlicing(account1.address)}   `, 
                `${(+hre.ethers.utils.formatEther(await provider.getBalance(account1.address))).toFixed(decimals)}\t   `, 
                `${(+hre.ethers.utils.formatEther(await contract.balanceOf(account1.address))).toFixed(decimals)}`);
    console.log("\n");
}

// Main function
async function main() {
    const HRE_EOAs  = await hre.ethers.getSigners(); // Get HRE's default 20 accounts
    const provider  = await hre.ethers.provider;
    var   WETH9     = new hre.ethers.Contract(weth9_address, contract_ABI, provider);
    var   txn_array = []; // Store transaction receipts
    
    // Enable impersonating sending txn by specific address
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [somebody]
    });
    
    // Prepare the signers of account#0 and account#1
    const signer_0 = HRE_EOAs[0];
    const signer_1 = await hre.ethers.getSigner(somebody);
    
    // Print the balance and the total supply of WETH9 contract
    console.log("\nCheck contract status");
    console.log("--------------------------------------------------------------------------------");
    console.log("        ETH-Balance                     WETH-Balance");
    console.log(`WETH9  `, 
                `${ethers.utils.formatEther(await provider.getBalance(WETH9.address))}     `, 
                `${ethers.utils.formatEther(await WETH9.totalSupply())}`);
    console.log("\n");
    
    {
        console.log("[Step 0] Before we started");
        await printAccountAndBalance(provider, WETH9, signer_0, signer_1);
    }

    {
        console.log("[Step 1] Account#1 deposits 3 ETH in contract");
        var overrides = {value : hre.ethers.utils.parseEther("3.0")};
        WETH9         = WETH9.connect(signer_1);
        txn_array.push(await WETH9.deposit(overrides));
        await printAccountAndBalance(provider, WETH9, signer_0, signer_1);
    }
    
    {
        console.log("[Step 2] Account#1 sends 13 WETH to Account#0");
        WETH9 = WETH9.connect(signer_1);
        txn_array.push(
            await WETH9.transferFrom(
                signer_1.address, 
                signer_0.address, 
                hre.ethers.utils.parseEther("13.0")
        ));
        await printAccountAndBalance(provider, WETH9, signer_0, signer_1);
    }
    
    {
        console.log("[Step 3] Account#0 withdraws 13 WETH from contract");
        WETH9 = WETH9.connect(signer_0);
        txn_array.push(
            await WETH9.withdraw(hre.ethers.utils.parseEther("13.0")
        ));
        await printAccountAndBalance(provider, WETH9, signer_0, signer_1);
    }
    
    // Print all tx receipts in the last
    console.log("================================================================================");
    for(var index = 0; index < txn_array.length; index++) {
        console.log(txn_array[index]);
        console.log();
    }
}

main()
    .then(() => process.exit(EXIT_SUCCESS))
    .catch((error) => {
        console.error(error);
        process.exit(EXIT_FAILURE);
    });