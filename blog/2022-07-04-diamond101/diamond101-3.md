---
title: Diamond 101 (3)
description: EIP-2535 Diamond Contract
slug: diamond101-3
tags: [eip2535, diamond, proxy]
authors: wiasliaw
---

本文為 Diamond 101 系列的第三篇文章，將解釋這個 EIP 具體的實作細節。

<!--truncate-->

上一篇[文章](./diamond101-2.md)介紹了 Diamond 的 Lookup Table，用來紀錄 function selector 和要調用的合約地址進去，當需要調用合約時則會透過 `msg.sig` 查詢 Lookup Table，並 delegatecall 到紀錄的地址。

## Storage Management

先看看之前的 Proxy 怎麼管理 storage。Transparent Proxy 跟 UUPS 主要的 storage layout 都是定義在 Logic Contract 上，Proxy 紀錄的地址都會儲存在特定的 slot 上 (參考 EIP-1967)， Upgrade 時則換掉記錄在 Proxy 上的地址，對開發者來說只要處理好新的 Logic Contract 不要跟舊的合約發生 storage collision 即可。而 Diamond 要管理 Lookup Table 的 storage 還有數個 Logic Contract 要儲存和寫入的 storage。這邊以「不同 Logic Contract 的處理」舉例。

看看下面兩個 Logic Contract，如果註冊到 Diamond 裡面會發生什麼事？因為兩個函式的 side effect 都是作用在同一個 slot 上，先調用 `setA` 寫入的數值之後再調用 `setB` 就會被覆寫掉。而 Solidity 沒有那麼聰明知道這個 slot 專屬於哪個 Logic Contract 並防止其他 Logic Contract 寫入，因此以 Diamond 設計的合約架構需要設計一套 storage 的管理機制來限制 Logic Contract。

```javascript
contract LogicA {
  uint256 private _a; // slot 0

  function setA(uint256 a_) external {
    _a = a_;
  }
}

contract LogicB {
  uint256 private _b; // slot 0

  function setB(uint256 b_) external {
    _b = b_;
  } 
}
```

### 1. EIP-1967

EIP-2535 沒有規定如何管理 storage。但是作者在其他文章提出相關的做法。第一個是參考 EIP-1967 將資料擺到特定的 slot 上。每個 Logic Contract 都定義一個特定的地方來放資料就不會發生 storage collision 了。Lookup Table 也是一樣，放到特定的 slot 上，也不會和 LogicA, LogicB 發生 storage collision。

拿上面兩個合約修改，如下。Solidity 可以 inline assembly 指定要資料要放到哪個 slot 裡，通常以一段字串的雜湊作為特定的 index 儲存。
```javascript
contract LogicA {
  bytes32 constant private _slot_a = keccak256("logic_a");

  struct AStorage {
    uint256 value; // slot[keccak256("logic_a")]
  }

  function _storage() private pure returns (AStorage storage s) {
      bytes32 position = _slot_a;
      assembly {
          s.slot := position
      }
  }

  function setA(uint256 a_) external {
    _storage().value = a_;
  }
}

contract LogicB {
  bytes32 constant private _slot_b = keccak256("logic_b");

  struct BStorage {
    uint256 value; // slot[keccak256("logic_b")]
  }

  function _storage() private pure returns (BStorage storage s) {
      bytes32 position = _slot_b;
      assembly {
          s.slot := position
      }
  }

  function setB(uint256 b_) external {
    _storage().value = b_;
  } 
}
```

### 2. AppStorage

作者提出的另外一個作法稱為 `AppStorage`，在每個合約都定義好一模一樣的 layout，就不會有誤寫到其他 slot 了。可以參考 [aavegotchi](https://github.com/aavegotchi/aavegotchi-contracts/blob/ff456818465623d9d718869da9047ddce54d9a6e/contracts/Aavegotchi/libraries/LibAppStorage.sol#L189) 怎麼定義 AppStorage 的。不過 aavegotchi 中 Lookup Table 還是使用 EIP-1967 的方式放在別的 slot。

拿上面兩個合約修改，如下：
```javascript
contract LogicA {
  struct GlobalStruct {
    uint256 a; // slot 0
    uint256 b; // slot 1
  }

  GlobalStruct private _gs;

  function setA(uint256 a_) external {
    _gs.a = a_;
  }
}

contract LogicB {
  struct GlobalStruct {
    uint256 a; // slot 0
    uint256 b; // slot 1
  }

  GlobalStruct private _gs;

  function setB(uint256 b_) external {
    _gs.b = b_;
  } 
}
```

## Reference

- [eip2535 diamonds substack](https://eip2535diamonds.substack.com/)
- [aavegotchi contract](https://github.com/aavegotchi/aavegotchi-contracts)
