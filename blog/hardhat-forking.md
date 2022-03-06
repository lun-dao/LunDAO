---
title: Hardhat mainnet forking：主網分叉
description: 教學如何利用 Hardhat 進行主網分叉，並且提供簡單範例展示其強大潛力。
slug: hardhat-forking
tags: [Mainnet Fork, Mainnet Forking, Ethereum, Hardhat, Nomic Labs]
date: 2022-03-07
authors: Chuan-Chun Wang (@2468834)
---

在 Ethereum 進行 Dapp 開發少不了撰寫智能合約（smart contract）；除了使用 Geth（Go Ethereum）、OpenEthereum 等工具自行建立 local testnet，並且將合約部屬在上面之外，還可以將合約部屬到各大公開測試網（testnet）[^1]。然而，這些方法雖然都使用與主網（mainnet）幾乎相同的[^2]程式碼當作 L1 底層，但是與直接部屬在 Mainnet 最大的差異就是：你幾乎無法讓 Dapp 與其他知名合約、DEX 作互動。

DeFi 之所以在近年受到全球矚目，其中一個原因莫過於其高度的互操作性（interoperability）；各個合約之間可以透過程式呼叫，輕鬆地與彼此互動，達成傳統金融所無法企及的巨大靈活能力。

然而，如果你正在開發的 Dapp/DeFi 專案，無法在極度擬真的環境當中進行最完整的測試就貿然上線，則此服務將暴露於巨大風險之下。

部屬合約於 (local) testnet 當中，為求最精緻的模擬環境，你將會耗費極大心力逐一複製所有第三方合約、DEX 的程式碼，並重新佈署於模擬環境當中，這完全不是一個可行的方法。

這篇教學文章將展示內建於知名開發工具 Hardhat 的主網分叉功能（mainnet forking），開發者可以任意指定欲分叉的區塊鏈高度，並與 Hardhat 內建的自定義 testnet（Hardhat Network）結合，享受最高仿真度、最簡便的開發環境。

> You can start an instance of Hardhat Network that forks mainnet. This means that it will simulate having the same state as mainnet, but it will work as a local development network.[^3]

[^1]: 例如：Rinkeby、Goerli、Kintsugi 等
[^2]: 可能因不同 testnet 共識機制，而與主網略有差異，但是一般來說很罕見出現 Dapp 能夠運行於 testnet 卻無法運行於 mainnet，尤其所有網路的 EVM 實作細節均相同
[^3]: https://hardhat.org/hardhat-network/guides/mainnet-forking.html#mainnet-forking


背景知識與環境設定
---
本文**不會**提供 Hardhat 與其他相關套件的安裝指引，亦**不會**細探任何與 Dapp 和 smart contract 有關的知識與開發技巧；請讀者應了解如何撰寫、部屬、呼叫合約[^4]，並且準備好下述之軟硬體開發環境。另外，Truffle（Ganache）亦有提供 mainnet forking 功能，在抽象概念方面雷同，然本文僅介紹 Hardhat 環境需如何設定。

- Software
  - Windows
    - OS：Windows 10 Pro 21H1 (w/o WSL)
    - nodejs v14.17.4
    - yarn 1.22.17
    - 使用 `yarn add` 安裝
      - hardhat@2.8.4
      - @nomiclabs/hardhat-ethers@2.0.5
      - @nomiclabs/hardhat-waffle@2.0.2
      - @nomiclabs/hardhat-web3@2.0.0
  - Linux
    - OS：Ubuntu 20.04.4 LTS (GNU/Linux 5.4.0-1053-raspi aarch64)
    - 其他同 Windows 軟體配置
- Hardware
  - 基本上無限制，下列為經過測試可行的組合
  - Windows：Intel Core i7-10510U (16GB) with 4G LTE cellular hotspot
  - Linux：Raspberry Pi 4B (4GB) with 1Gbps network

[^4]: 若您已知道如何利用 Hardhat 或 Truffle 或任何開發框架，部屬最基本的 ERC-20 合約，則本文深度恰巧適合您。


重要必備條件
---
由於 mainnet forking 的實作細節是與一個歸檔節點（archived node）的歷史資料作互動，藉此方能實現於開發者指定的任意區塊高度進行主網分叉；因此，**你必需準備好 archived node** 並使得 Hardhat 能夠連接上它。最直白地方式就是透過 Geth、OpenEthereum 等工具自架節點[^5]，或是使用市面上知名的數家 SaaS 節點供應商之服務[^6]。

[^5]: 我已多次透過樹梅派 4B 搭配 1TB SATA SSD 成功搭建歸檔節點，不以挖礦為目的之下，搭建節點非難事
[^6]: Infura、Alchemy、QuickNode 均有提供存取歸檔節點的服務，其中 Alchemy 在作者撰文時為免費服務。








Related resources
---


Further reading
---
- Hardhat
  - Mainnet forking：https://hardhat.org/hardhat-network/guides/mainnet-forking.html
- Alchemy
  - https://www.alchemy.com/
- Infura
  - https://infura.io/
- QuickNode
  - https://www.quicknode.com/
- Truffle
  - Simulate Live Networks with Forked Sandboxes：https://trufflesuite.com/blog/sandbox-forking-with-truffle-teams/index.html