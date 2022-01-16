---
slug: total-tokens-looksrare
title: 基本功：从合约看 token 数量
tags: [ERC20, Looksrare]
---

如果你已经了解 `ERC20` 中 `totalSupply` 本文可能就太罗嗦了。

```js
function totalSupply() public view returns (uint256)
```

如果你和我一样，总是担心关注的 token 增发，那就深入合约来探个究竟吧。让我们以最近发行的 Looksrare 项目为例。 可以从 Coingecko 看到有 `Total Supply` 和 `Max Supply` 两个概念。从 Etherscan 的 token 页面又会看到 `Max Total Supply`。 这三个数字并不一致。我并不清楚 Coingecko 和 Etherscan 的具体机制，所以直接看看这个 token 的合约吧。 Code is Law！ 


| ![coingecko](./coingecko.png) |
|:--:|
| 2022-01-16 Coingecko 截图 |
| ![etherscan](./etherscan-looks.png) |
| 2022-01-16 Etherscan 截图 |


以太坊智能合约部署后，首先运行的就是 `ctor` 函数。可以看出 LOOKS 的 `ctor` 有三个参数。 在 Etherscan 上找出该合约的信息，页面的最下面就是 `Constructor Arguments`。 看到 `_cap` 传入的值为 `1000000000000000000000000000`，这个值除 10^18 就是 1000 mil，就能和 Coingecko 中的`Max Supply`对应上了。

```js
    // File 1 of 7 : LooksRareToken.sol
    constructor(
        address _premintReceiver,
        uint256 _premintAmount,
        uint256 _cap
    ) ERC20("LooksRare Token", "LOOKS") {
        require(_cap > _premintAmount, "LOOKS: Premint amount is greater than cap");
        // Transfer the sum of the premint to address
        _mint(_premintReceiver, _premintAmount);
        _SUPPLY_CAP = _cap;
    }
```

```js
    // File 3 of 7 : ERC20.sol
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
```

那么 Coingecko 的 `Total Supply` 又是什么呢？ 这个数字和 Etherscan 的 `Max Total Supply` 是接近的，都是 200+ mil。有理由猜测这是一个动态的数字，两个网站都想监测这个动态数字，但不太同步。有了这个猜想后，再回头看看 LOOKS 的合约。符合 `ERC20` 标准的 token 都有只读函数 `totalSupply()`

```js
    // File 3 of 7 : ERC20.sol
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }
```

之前注意到的 `_cap` 只是传给了 `_SUPPLY_CAP` 变量，并没有改变 `_totalSupply`。

推荐阅读
https://medium.com/taipei-ethereum-meetup/solidity-weekly-11-70c5208a3bf1
