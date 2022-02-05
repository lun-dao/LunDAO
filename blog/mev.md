---
title: MEV - 礦工可提取價值
description: 解釋 MEV (礦工可提取價值) 的成因以及原理，並且簡述目前的解決方案。
slug: mev
tags: [MEV, Miner Extractable Value]
date: 2022-02-05
image: ./mev/pending-tx.png
---

礦工可提取價值 (Miner Extractable Value, MEV) 是一種礦工利用自身的優勢在各種交易中獲得利益的方法。比如說礦工可能可以在 Uniswap 交易中發現可以營利的機會並且自動化的執行特定的策略來營利，而這樣的行為有可能會讓原本的交易者虧損，但有趣的是這也沒有違反區塊鏈的規則，只是利用區塊鏈來完成的一種行為，當然這樣的行為有可能傷害區塊鏈的生態系。本文將會以 Ethereum 作為範例來講解這樣行為的運作原理。

<!--truncate-->

首先我們需要了解在 Ethereum 交易是怎麼被執行的。

## 發生交易前，你的 tx 在哪裡？
Alice 想要送出一個交易在 Uniswap 上面將 3000 USDC 換成 1 ETH，當按下 MetaMask 上面的送出之後，實際上他的交易是怎麼樣被處理的呢？

「在 Uniswap 上用 3000 USDC 交換 1 ETH」這件事情我們可以看成是 Alice 的意圖，一件他想要執行的事情，稱為 pending transaction。這個 pending tx 會被傳送到 Ethereum 上面的節點，而節點之間會互相交換 pending tx，盡可能的讓更多節點知道使用者有這個需求，這些還沒被打包到區塊裡面的 pending tx 就會被放到節點特定區域先儲藏起來，這個區域叫做 mempool。而每個節點因為會收取來自不同地方的 pending tx，所以每個節點的 mempool 內容可能都不一樣，排序也會不一樣。

![pending tx](mev/pending-tx.png)

節點有幾種不同的型態，而礦工也是節點的一種型態，他的工作是負責把 mempool 裡面的 pending tx 打包起來變成一個區塊，然後跟其他礦工一起競爭記帳權，當其中一個礦工爭取到了記帳權後，這個區塊就會被發佈出去，此時 Alice 的 pending tx 才變成一個已經上鏈的交易 (transaction)。

## 礦工怎麼挑選 pending tx
因為包裝、發布區塊是一件利益導向的事情，每發布一個區塊礦工可以得到固定的區塊獎勵，還有在這個區塊裡面的交易所提供的交易費。比如說 14143088 這個區塊總共有 360 個被打包進去的交易，而發布這個區塊可以得到的固定獎勵是 2 ETH (依照今天的匯率是 16 萬台幣)，而後面兩個數字 `2.410435284410848966 - 2.13247814979521476 ~= 0.2 ETH` 則是所有交易提供的交易費加總。為什麼有兩個數字涉及到 EIP-1559 這邊就不先深入討論。

![block 14143088](./mev/block-14143088.png)

至於礦工是怎麼挑選哪些交易要被放到這個區塊裡面，基本上就是前面講的利益導向。一般的情況，礦工會排序所有交易裡面提供的交易費，並且優先打包提供比較多交易費的交易。所以交易費提供較多的交易會排序在前面被打包進去區塊裡面，如果你交易費提供的少，就會過了很久等到所有交易都消化的差不多才會輪到你。

但這邊是指一般的情況，實際上要把什麼交易打包進去區塊並沒有限制，礦工可以用各種方式決定哪些區塊要打包。

## 礦工可提取價值 (Miner Extractable Value, MEV)
由於礦工可以自行決定哪些交易要被打包進去區塊裡面，而這些 pending tx 在 mempool 裡面是一個公開的資訊，一般節點會提供公開的方法讓任何人可以查詢目前 mempool 裡面有哪些交易正在等待被打包。

這邊就出現了一些可以操作的空間。

前面舉例的 Alice 打算用 3,000 USDC 交換 1 ETH，而每次的交易都會影響下一次交易的價格。

這樣的交易內容是可以直接從 pending tx 中被解析出來。如果有人發現一種自動的邏輯，他分析 mempool 裡面的每一個交易，並且找到一個方法可以從中獲利，比如說 Bob 發現 mempool 裡面有 Alice 這筆交易，而且他只要可以排序這些交易的執行順序：
1. Bob 先用 6,000 USDC 買 2 ETH 導致 ETH 漲價，影響到 Alice 的交易
2. Alice 用 3,000 USDC 只能買到 0.8 ETH，此時 ETH 再度漲價
3. Bob 再次把 2 ETH 賣掉，由於 Alice 把價格也墊高了，所以 Bob 可以把 2 ETH 賣到 6,600 USDC

![MEV](./mev/mev.png)

這樣 Bob 只要可以排序交易，就可以憑空賺 600 USDC，前後相抵他沒有花費任何成本，而這之中能夠更動交易排序的就是礦工了，所以這樣的行為被稱為 Miner Extractable Value (MEV)。當然 Uniswap 有實作一些機制來防範這種行為，但 MEV 可以設計成自動發動的。

由於利益的驅動並且 mempool 是公開的情況下，會有很多人撰寫許多非常有彈性的腳本來監控 mempool，當他發現排序交易可以帶來利益時，就會自動的排序交易來獲利。這樣就會變成機器人大戰，無數的機器人監控著 mempool，發現賺錢機會就會自動的排序交易，而當他又把交易送到 mempool 之後，背後更厲害的機器人觀測到了，又再次排序，螳螂捕蟬黃雀在後。

所以只要你踏入了 mempool 就像踏入了三體的黑暗森林一樣，當你發出意圖或是信號時，強大的掠食者就會撲面而來。

## 解決方案
有些方法是「打不過就加入他」，[Eden Network][1] 發行了代幣，當你加入他們的經濟體制後，他會幫你優先發送交易，同時，你也成為了掠食者。

[CowSwap][3] 讓你簽署一個 [meta transaction][2]，並且在鏈下進行訂單的撮合，如果撮合成功就直接把交易透過無法發動 MEV 的方式發布上鏈，如果沒辦法鏈下撮合成功，則會透過鏈上的交易所進行交易，但是會直接送到由 CowSwap 所管理的節點，不會暴露在公開的 mempool 上面，但是撮合機制就變成不是在鏈上運行，減低了去中心化的程度。

而 [Flashbots][4] 提供了修改過後的 go-ethereum 讓交易直接送給礦工，而不會暴露在 mempool，而諷刺的是目前很大一部分的 MEV 攻擊行為都是透過 flashbots 達成。

你有知道其他更好的解決方案嗎？歡迎到 LunDAO 的 [GitHub Discussion][5] 討論！


[1]: https://www.edennetwork.io/
[2]: https://yurenju.medium.com/perp-meta-tx-e53cfb65367
[3]: https://cowswap.exchange/
[4]: https://ethereum.org/en/developers/docs/mev/#mev-extraction-flashbots
[5]: https://github.com/lun-dao/LunDAO/discussions/76