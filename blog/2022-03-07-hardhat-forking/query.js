// (1) Please the tutorial: https://github.com/a2468834/LunDAO/blob/article/hardhat-forking/blog/2022-03-07-hardhat-forking/hardhat-forking.md
// (2) Put the script into scripts/query.js
// (3) At the step 6 in the section Appendix, please run the following command instead:
//     $ yarn hardhat --network "hardhat" run scripts/query.js

// Constants
const EXIT_SUCCESS  = 0;
const EXIT_FAILURE  = 1;
const weth9_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const contract_ABI  = require("./contract-abi.json");

async function main() {
    var start_block = 14379900; // The starting block number you want
    var end_block   = 14379910; // The ending block number you want
    var config      = { method: "hardhat_reset",
                        params: [{
                            forking: {
                                jsonRpcUrl: process.env.Mainnet,
                                blockNumber: start_block}}]};
    
    // Prepare the ethers.js Provider object
    var provider = await hre.ethers.provider;   // The default forking block number is in 'hardhat.config.js' or the current highest block
    await hre.network.provider.request(config); // Reset the fork from another block number
    
    // Prepare the ethers.js Contract object
    var WETH9 = new hre.ethers.Contract(weth9_address, contract_ABI, provider);
    
    for(var block_i = start_block; block_i < (end_block+1); block_i++) {
        if(block_i == start_block) {
            // No need to reset Provider and Contract objects
        }
        else {
            config.params[0].forking.blockNumber = block_i;
            
            // Reset Provider and Contract objects to another forking block number
            await hre.network.provider.request(config);
            WETH9 = WETH9.connect(provider);
        }
        console.log("----------------------------------------");
        console.log(`Block number: ${await provider.getBlockNumber()}`);
        console.log(`TotalSupply:  ${ethers.utils.formatEther(await WETH9.totalSupply())}`);
    }
}

main()
    .then(() => process.exit(EXIT_SUCCESS))
    .catch((error) => {
        console.error(error);
        process.exit(EXIT_FAILURE);
    });
