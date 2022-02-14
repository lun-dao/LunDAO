---
title: MEV - 最大可提取價值
description: 解釋 MEV (最大可提取價值) 的成因以及原理，並且簡述目前的解決方案。
slug: mev
tags: [MEV, Miner Extractable Value, Maximal Extractable Value]
date: 2022-02-13
image: ./mev/pending-tx.png
authors: yurenju
---

最大可提取價值 (Maximal Extractable Value, MEV) 是一種透過改變交易順序來獲得利益的方法。比如說礦工可以在 Uniswap 交易中發現可以營利的機會並且自動化的執行特定的策略來營利，而這樣的行為有可能會讓原本的交易者虧損，但有趣的是這也沒有違反區塊鏈的規則，只是利用區塊鏈來完成的一種行為，當然這樣的行為有可能傷害區塊鏈的生態系。本文將會以 Ethereum 作為範例來講解這樣行為的運作原理。

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

## 三明治攻擊 (Sandwich Attack)
由於礦工可以自行決定哪些交易要被打包進去區塊裡面，而這些 pending tx 在 mempool 裡面是一個公開的資訊，一般節點會提供公開的方法讓任何人可以查詢目前 mempool 裡面有哪些交易正在等待被打包。

這邊就出現了一些可以操作的空間。

前面舉例的 Alice 打算用 3,000 USDC 交換 1 ETH，而每次的交易都會影響下一次交易的價格。

這樣的交易內容是可以直接從 pending tx 中被解析出來。如果有人發現一種自動的邏輯，他分析 mempool 裡面的每一個交易，並且找到一個方法可以從中獲利，比如說 Bob 發現 mempool 裡面有 Alice 這筆交易，而且他只要可以排序這些交易的執行順序：
1. Bob 先用 6,000 USDC 買 2 ETH 導致 ETH 漲價，影響到 Alice 的交易
2. Alice 用 3,000 USDC 只能買到 0.8 ETH，此時 ETH 再度漲價
3. Bob 再次把 2 ETH 賣掉，由於 Alice 把價格也墊高了，所以 Bob 可以把 2 ETH 賣到 6,600 USDC

![MEV](./mev/mev.png)

這樣 Bob 只要可以排序交易，第一步花費的 6000 USDC 在第三步就賺回來了，這樣就可以憑空賺 600 USDC，這樣的行為我們稱為三明治攻擊 (Sandwich Attack)

但是要怎麼更動交易順序呢？這就是一件礦工（或是任何可以改變交易的人）能做到的事情了。當礦工發現一個交易在他前後夾擊兩個額外的交易就可以從中獲利時，同時他還要有能力讓當下這個區塊是能夠由他取得記帳權的。所以實際發生的流程會是：

1. 礦工發現可提取價值的交易
2. 自動產生夾擊的交易並且排入區塊內
3. 取得該區塊的記帳權並且獲利

而第三步當你有更高的算力時，能夠執行成功的機率越大。如果發現這個機會的那個區塊沒有取得記帳權，這個機會就消失了，他原本用來夾擊的兩個交易在下個區塊就不會再出現。比如說一個礦工（或是礦池、礦場）有全網 20% 的算力，如果在每次他發現有利可圖的交易時都自動的發出夾擊交易企圖獲利，透過他相對高的算力累積下來可能就會是很大一筆收益，即時他的算力沒辦法讓他每次都能夠取得記帳權。

這樣的三明治攻擊行為被稱為 Miner Extractable Value (MEV) 或是 Maximal Extractable Value，而 MEV 只要是透過變更交易順序就可以歸類到此種行為，除了三明治攻擊之外還有更簡單的 MEV 方式如 front running。

## Front running
front running 是只要偵測到特定單一筆交易發現可以獲利時，就會發出一模一樣的交易，但更高 gas 的交易來獲利，而執行後可能原本執行交易的人的交易就會失敗（或是減少獲利）。

front running 的行為如果不是礦工也可以做到，只要花費大量的 gas 即可。我們用一個清算的例子來看看 front running 的 MEV 會怎麼進行。

1. Alice 抵押在 Compound 的 100 ETH 因為抵押品不足的原因要被清算了，Compound 以市價 1 ETH = 3000 USDC 的 95% 拍賣 Alice 的 100 ETH，原本價值 300,000 USDC 打折後只剩 285,000 USDC。
2. Bob 見到此機會立刻用 285,000 USDC 想要買下 100 ETH，並且將 gas 設定成 50，將交易送出。
3. Chris 作為一個監聽 mempool 的人，察覺到了一筆清算交易發到了 mempool，即時計算後得知此交易可獲利 5%，所以發出了一筆跟 Bob 一模一樣的交易，用 285,000 USDC 來買下 100 ETH，並且把 gas 加倍成 100 來企圖蓋過原本的交易，並且發出了交易。
4. 此時有全網 20% 算力的礦工 Dexter 同樣也發現了此機會，mempool 裡面有兩筆交易都想透過清算賺錢，所以他也發了一模一樣的清算交易，但是他是礦工，所以直接把自己的交易放到接下來要送出的區塊內，並且不發到 mempool 裡面直接自己競爭記帳權。
5. 最終的結果 Dexter 透過自己 20% 的算力，在這次競爭中獲得了利潤，他笑了笑，礦工的快樂就是如此樸實無華且枯燥。

由於利益的驅動並且 mempool 是公開的情況下，會有很多人撰寫許多非常有彈性的腳本來監控 mempool，當他發現排序交易可以帶來利益時，就會自動的排序交易來獲利。這樣就會變成機器人大戰，無數的機器人監控著 mempool，發現賺錢機會就會自動的排序交易，如果 MEV 發起者不是礦工，所以需要把交易送回 mempool 時，監控著 mempool 的其他人看到你新發出的交易時，同樣也會毫不留情的再出發新的交易企圖獲得你的收益。

所以只要你踏入了 mempool 就像踏入了三體的黑暗森林一樣，當你發出意圖或是信號時，強大的掠食者就會撲面而來。

## 實際發生的 MEV 案例

Flashbots 的 [MEV Explore][6] 提供了一個排名可以偵測出單一交易的 MEV，所以可以從這邊來看到一些透過 front running 的行為，不過三明治攻擊因為涉及到多筆交易，所以在這個網站上就沒辦法偵測到。目前在網站上所追蹤到最高的一次 MEV 是交易 [0xd70b...7d41][8] 從中獲取了高達三百萬美金的利潤。

這個交易結合了閃電貸 (Flashloan) 來達成這次的 MEV 行為，往後我們可以更深入的探討閃電貸。

Uniswap 或其他有考慮到這樣行為的智能合約會實作一些機制來防範這種行為，但是這種攻擊如果是自動發動的情況下，任何沒有考慮 MEV 行為的智能合約都有可能自動的成為提取價值的對象。

## 解決方案
有些方法是「打不過就加入他」，[Eden Network][1] 發行了代幣，當你加入他們的經濟體制後，他會幫你優先發送交易，同時，你也成為了掠食者。

[CowSwap][3] 讓你簽署一個 [meta transaction][2]，並且在鏈下進行訂單的撮合，如果撮合成功就直接把交易透過無法發動 MEV 的方式發布上鏈，如果沒辦法鏈下撮合成功，則會透過鏈上的交易所進行交易，但是會直接送到由 CowSwap 所管理的節點，不會暴露在公開的 mempool 上面，但是撮合機制就變成不是在鏈上運行，減低了去中心化的程度。

而 [Flashbots][4] 提供了修改過後的 go-ethereum 讓交易直接送給礦工，而不會暴露在 mempool，而諷刺的是目前很大一部分的 MEV 攻擊行為都是透過 flashbots 達成。

你有知道其他更好的解決方案嗎？歡迎到 LunDAO 的 [GitHub Discussion][5] 討論！

## 注釋
- 目前 Miner Extractable Value 逐漸的採用一個新的名詞 Maximal Extractable Value 來取代來更準確的描述這樣的行為，詳情請見 [Why MEV as Maximal Extractable Value instead of Miner Extractable Value?][7] 

[1]: https://www.edennetwork.io/
[2]: https://yurenju.medium.com/perp-meta-tx-e53cfb65367
[3]: https://cowswap.exchange/
[4]: https://ethereum.org/en/developers/docs/mev/#mev-extraction-flashbots
[5]: https://github.com/lun-dao/LunDAO/discussions/76
[6]: https://explore.flashbots.net/leaderboard
[7]: https://explore.flashbots.net/faq
[8]: https://etherscan.io/tx/0xd70b42daec5bb9ac6e5df3d25d309f186db50df701f667e1f20b22448ea27d41