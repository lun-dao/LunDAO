---
title: Hardhat mainnet forking：主網分叉 (2)
description: 如何利用 Hardhat 進行主網分叉
slug: hardhat-forking
tags: [Mainnet Fork, Mainnet Forking, Hardhat, Nomic Labs]
date: 2022-03-07
authors: a2468834
---



在上一篇[文章](./hardhat-forking-1.md)我們已經學會了怎麼使用 Hardhat mainnet forking，但是讀者可能尚有疑惑不知道這樣的功能可以做什麼？本篇文章將延續相同主題，並給出幾個例子，向讀者展示 mainnet forking 能夠為開發過程帶來的方便性。



範例一：與 `WETH9` 合約互動
---
如同前文所述，interoperability 是 smart contract 一個相當重要的特性，而以程式的角度來看即為合約互相呼叫。假設我們今天要開發一個合約會與 Wrapped Ether（`WETH9`）[^3]合約互動，那麼會發生什麼事呢？

[^3]: 關於什麼是 Wrapped Ether？請參考文末延伸閱讀，或請讀者自行查詢其他網路資料。

若無 mainnet forking 可用，則我們必需先將 `WETH9` 部屬在 local Hardhat Network （且會得到與主網不一樣的合約地址），方能與之互動、進行後續的開發流程；可想而知這就是增加複雜度，卻降低仿真度的土法煉鋼方法。

若有 mainnet forking 可用，則我們什麼都不需要做。直接與 Etherscan 上面查詢到的 `WETH9` 合約地址互動即可，完全模擬我們合約在未來上線時的操作環境。

以下將透過執行一段簡短的 JavaScript 腳本，向讀者展示要怎麼在已完成 mainnet forking 的 Hardhat Network 之內，與知名的 `WETH9` 互動。

0. 延續前文的操作環境
1. 在 `hardhat_fork` 資料夾底下創立新資料夾 `scripts`
2. 前往 Etherscan.io 或任何你信任的 Ethereum blockchain explorer 尋找 WETH 合約
   - https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code
3. 將合約 ABI 儲存成 `contract-abi.json` 檔案，並放置於 `hardhat_fork/scripts` 資料夾底下
   - 若是使用 Etherscan，則需滾動至網頁最下方，如圖所示

![weth9-contract-abi](./weth9-contract-abi.png)

4. 前往這個 Gist 下載 `interact.js` 腳本，並且把它儲存在 `hardhat_fork/scripts` 資料夾底下
   - https://gist.github.com/a2468834/6101244f5000e467ec8904ac5f0ec41d
   - 或可至 GitHub 上面 LunDAO repo 下載
5. 截至目前為止，`hardhat_fork` 資料夾應該要長得像這樣子[^8]
```Shell
📂 hardhat_fork
 │
 ├── 📂 scripts
 │    │
 │    ├── 📄 contract-abi.json
 │    │
 │    └── 📄 interact.js
 │
 ├── 📄 .env
 │
 └── 📄 hardhat.config.js
```
6. 執行指令
```Shell
$ yarn hardhat --network "hardhat" run scripts/interact.js
yarn run v1.22.17

Check contract status
--------------------------------------------------------------------------------
        ETH-Balance                     WETH-Balance
WETH9   7160157.033871775794435313      7160157.033871775794435313

[Step 0] Before we started
--------------------------------------------------------------------------------
Account Address             ETH-Balance     WETH-Balance
#0      0xf39f......2266    10000.000       0.000
#1      0x2feb......a6f3    4.294           13813.827

[Step 1] Account#1 deposits 3 ETH in contract
--------------------------------------------------------------------------------
Account Address             ETH-Balance     WETH-Balance
#0      0xf39f......2266    10000.000       0.000
#1      0x2feb......a6f3    1.291           13816.827

[Step 2] Account#1 sends 13 WETH to Account#0
--------------------------------------------------------------------------------
Account Address             ETH-Balance     WETH-Balance
#0      0xf39f......2266    10000.000       13.000
#1      0x2feb......a6f3    1.286           13803.827

[Step 3] Account#0 withdraws 13 WETH from contract
--------------------------------------------------------------------------------
Account Address             ETH-Balance     WETH-Balance
#0      0xf39f......2266    10012.997       0.000
#1      0x2feb......a6f3    1.286           13803.827

================================================================================
{
  hash: '0x1dfa3eee62caaf1aa06d60b9fd57d67d17fe23c9f9452c1e3284056e6fad6e48',
  type: 2,
  accessList: [],
  blockHash: '0x3750ecaf4f7ccf733ceed460a0aeb54b3dd2373dc199ba5b420e062c5d39f165',
  blockNumber: 14297760,
...
```

以下筆者將對 `interact.js` 的程式碼做一些重點解析

### Line 8-9
開啟 mainnet forking 模式讓我們得以直接與真實的 `WETH9` 合約地址互動，不需要額外部屬其他合約。另外，`somebody` 地址則是隨機挑選的一個地址，恰巧該地址同時擁有 eth 和 weth，在接下來的操作當中可見奇效。


### Line 13-30
用來讓印在 terminal 的文字看起來排版美美的函數們，並沒有特別之處


### Line 34-35
`hre`（Hardhat Runtime Environment, HRE）是一個 Hardhat Network 啟動之後，包含所有 Hardhat 套件功能的物件，詳細內容請見文末延伸閱讀。

`hre.ethers.getSigners()` 回傳一個長度為 20 的 ethers.js Signer 陣列，就是前文所述的那二十個各有 10000 ETH 的帳號


### Line 40-43,47
在 mainnet forking 模式之下，Hardhat Network 允許開發者發送 tx，**即便你根本未持有該地址的私鑰**。有了這個功能，我們可以隨意尋找任何具備我們有興趣條件的地址（EOA 或 contract address 均可），然後以它的名義發送 tx 來進行各式操作，讓 mainnet forking 的測試環境兼具高仿真度與高便利性。

除了 `hardhat_impersonateAccount` 功能之外，還有其他例如：`hardhat_setNonce`、`hardhat_setBalance`、`hardhat_setCode`、`hardhat_setStorageAt`等功能，詳細可見[這邊](https://hardhat.org/hardhat-network/guides/mainnet-forking.html#customizing-hardhat-network-s-behavior)的說明。


### Line 50-56
此 JavaScript 腳本印出 `WETH9` 的 token 總發行量與此地址的 balance，我們可見兩個數值相等且與 Etherscan 上的餘額吻合。由於 Etherscan Analytics 分頁謹顯示當日日末餘額，因此需查詢前一日餘額為準。

![Etherscan-Analytics](./etherscan-analytics.png)


### Line 64-68
我們以 `somebody` 地址的名義，向 `WETH9` 合約存款 3 eth；之所以此行為不是 invalid tx，歸功於前述的 `hardhat_impersonateAccount` 功能[^9]，它讓我們能夠在 Hardhat Network 內以未知密鑰地址的名義發送 tx。


### Line 72-80
這個段落把 `Account#1`（即 `somebody` 地址）的 13 個 weth 轉給 `Account#0`（即 HRE 預設地址 No.0）。


### Line 84-89
由於傳送 tx 需要耗費 tx fee，所以我們可以發現最終 `Account #0` 和 `Account #1` 的 eth 餘額總和比最初的時候少一些。


### Line 93-97
最後印出稍早發送的所有 tx 的細節，讀者可以透過 `blockNumber` 查覺這些 tx 與當初指定 mainnet forking 區塊高度之間的關聯性，可見 Hardhat Network 是有在逐步長高。


[^8]: 有省略一些與本文無關的檔案與資料夾
[^9]: https://hardhat.org/hardhat-network/reference/#hardhat-impersonateaccount



範例二：抓取 `public` 變數的歷史數據
---
這個範例要解決的是另一個事情：要怎麼抓取 Ethereum 上面某個數據的歷史資料呢？

Etherscan 提供圖形化介面讓開發者可以快速查詢合約內 `public` `view`/`pure` function 的回傳值，但是如果我們有興趣的回傳值只會出現在特定 block number 呢？這時候除了使用 Dune Analytics 等網站提供的服務，我們其實可以透過 mainnet forking 的功能來自己實作。

以下將使用另一份 JavaScript 腳本，只需將前一個範例的第四步驟改為下載此腳本，即可成功執行。
- https://gist.github.com/a2468834/71c59d580c1da21337350cdfc47e515b
- 或可至 GitHub 上面 LunDAO repo 下載
- 截至目前為止，`hardhat_fork` 資料夾應該要長得像這樣子[^4]
```Shell
📂 hardhat_fork
 │
 ├── 📂 scripts
 │    │
 │    ├── 📄 contract-abi.json
 │    │
 │    ├── 📄 interact.js
 │    │
 │    └── 📄 query.js
 │
 ├── 📄 .env
 │
 └── 📄 hardhat.config.js
```

執行指令之後，可見 terminal 印出類似這樣子的文字
```Shell
$ yarn hardhat --network "hardhat" run scripts/query.js
yarn run v1.22.17

Method 1
----------------------------------------
Block number: 14379900
TotalSupply:  7080076.411770262795354559
----------------------------------------
Block number: 14379901
TotalSupply:  7080077.697963348707441243
----------------------------------------
Block number: 14379902
TotalSupply:  7080074.493707533508180991
...
```

以下筆者將對 `query.js` 的程式碼做一些重點解析

### Line 14-19,28-29
此腳本透過循序變換 mainnet forking 的分叉高度，達成「查詢某個區間內，`WETH9` 合約的 `totalSupply()` 數值變化」


### Line 38-51
事實上，想要查詢 `public` `view`/`pure` function 的歷史數據，不需要用到 mainnet forking 模式，可以單純透過呼叫合約函數，但是附加 `blockTag` 即可[^5]。


### Line 55-56
執行的時候記得把其中一行的註解拿掉；另外，mainnet forking 的分叉高度不能小於想要查詢`public` `view`/`pure` function 的歷史數據的區塊高度。


[^4]: 有省略一些與本文無關的檔案與資料夾
[^5]: `blockTag` 是 ethers.js 的語法，web3.js 的 API 使用方法可能有所不同



Related resources
---
- Yarn
  - https://classic.yarnpkg.com/en/
- Hardhat
  - GitHub：https://github.com/NomicFoundation/hardhat
  - Mainnet forking：https://hardhat.org/hardhat-network/guides/mainnet-forking.html
  - Configuration：https://hardhat.org/config/
  - Hardhat Network Reference：https://hardhat.org/hardhat-network/reference/
  - Creating a task：https://hardhat.org/guides/create-task.html
  - Hardhat Runtime Environment (HRE)：https://hardhat.org/advanced/hardhat-runtime-environment.html
- Alchemy
  - https://www.alchemy.com/
- Ethereum on ARM
  - https://ethereum-on-arm-documentation.readthedocs.io/en/latest/quick-guide/about-quick-start.html
- Wrapped Ether
  - https://weth.io/index.html

Further reading
---
- Infura
  - https://infura.io/
- QuickNode
  - https://www.quicknode.com/
- Truffle
  - Simulate Live Networks with Forked Sandboxes：https://trufflesuite.com/blog/sandbox-forking-with-truffle-teams/index.html