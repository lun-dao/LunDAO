---
title: Hardhat mainnet forking：主網分叉
description: 教學如何利用 Hardhat 進行主網分叉，並且提供簡單範例展示其強大潛力。
slug: hardhat-forking
tags: [Forking, Mainnet Forking, Ethereum, Hardhat, Nomic Labs]
date: 2022-03-07
authors: Chuan-Chun Wang (@2468834)
---

在以太坊（Ethereum）上面進行 Dapp 相關開發，必定會撰寫一份智能合約（smart contract）；除了使用 Geth（Go Ethereum）、OpenEthereum 等工具自行建立 local testnet，並且將合約部屬在上面之外，還可以將合約部屬到各大e公開測試網（testnet） [^1]。然而，這些方法雖然都使用與主網（mainnet）幾乎相同的 [^2] 程式碼當作 L1 底層，但是與直接部屬在 Mainnet 最大的差異就是：你幾乎無法令你的 Dapp 與其他知名合約、DEX 作互動。




[^1]: 例如：Rinkeby、Goerli、Kintsugi 等
[^2]: 可能因不同 testnet 共識機制，而與主網略有差異，但是一般來說很罕見出現 Dapp 能夠運行於 testnet 卻無法運行於 mainnet，尤其所有網路的 EVM 實作細節均相同



Related resources
---


Further reading
---
