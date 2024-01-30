"use strict";(self.webpackChunklun_dao=self.webpackChunklun_dao||[]).push([[9654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||h[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Hardhat mainnet forking\uff1a\u4e3b\u7db2\u5206\u53c9 (2)",description:"\u5229\u7528 Hardhat \u4e3b\u7db2\u5206\u53c9\u505a\u4e00\u4e9b\u9177\u70ab\u7684\u4e8b\u60c5",slug:"hardhat-forking-2",tags:["Mainnet Fork","Mainnet Forking","Hardhat","Nomic Labs"],authors:"a2468834"},l=void 0,o={permalink:"/blog/hardhat-forking-2",editUrl:"https://github.com/lun-dao/LunDAO/tree/main/blog/2022-03-23-hardhat-forking/hardhat-forking-2.md",source:"@site/blog/2022-03-23-hardhat-forking/hardhat-forking-2.md",title:"Hardhat mainnet forking\uff1a\u4e3b\u7db2\u5206\u53c9 (2)",description:"\u5229\u7528 Hardhat \u4e3b\u7db2\u5206\u53c9\u505a\u4e00\u4e9b\u9177\u70ab\u7684\u4e8b\u60c5",date:"2022-03-23T00:00:00.000Z",formattedDate:"March 23, 2022",tags:[{label:"Mainnet Fork",permalink:"/blog/tags/mainnet-fork"},{label:"Mainnet Forking",permalink:"/blog/tags/mainnet-forking"},{label:"Hardhat",permalink:"/blog/tags/hardhat"},{label:"Nomic Labs",permalink:"/blog/tags/nomic-labs"}],readingTime:9.84,truncated:!0,authors:[{name:"Chuan-Chun Wang",url:"https://github.com/a2468834",imageURL:"https://github.com/a2468834.png",key:"a2468834"}],prevItem:{title:"Hardhat mainnet forking\uff1a\u4e3b\u7db2\u5206\u53c9 (1)",permalink:"/blog/hardhat-forking-1"},nextItem:{title:"\u57fa\u672c\u529f\uff1a\u4ece\u5408\u7ea6\u770b token \u6570\u91cf",permalink:"/blog/total-tokens-looksrare"}},p={authorsImageUrls:[void 0]},c=[{value:"\u7bc4\u4f8b\u4e00\uff1a\u8207 <code>WETH9</code> \u5408\u7d04\u4e92\u52d5",id:"\u7bc4\u4f8b\u4e00\u8207-weth9-\u5408\u7d04\u4e92\u52d5",children:[{value:"Line 8-9",id:"line-8-9",children:[],level:3},{value:"Line 13-30",id:"line-13-30",children:[],level:3},{value:"Line 34-35",id:"line-34-35",children:[],level:3},{value:"Line 40-43,47",id:"line-40-4347",children:[],level:3},{value:"Line 50-56",id:"line-50-56",children:[],level:3},{value:"Line 64-68",id:"line-64-68",children:[],level:3},{value:"Line 72-80",id:"line-72-80",children:[],level:3},{value:"Line 84-89",id:"line-84-89",children:[],level:3},{value:"Line 93-97",id:"line-93-97",children:[],level:3}],level:2},{value:"\u7bc4\u4f8b\u4e8c\uff1a\u6293\u53d6 <code>public</code> \u8b8a\u6578\u7684\u6b77\u53f2\u6578\u64da",id:"\u7bc4\u4f8b\u4e8c\u6293\u53d6-public-\u8b8a\u6578\u7684\u6b77\u53f2\u6578\u64da",children:[{value:"Line 14-19,28-29",id:"line-14-1928-29",children:[],level:3},{value:"Line 38-51",id:"line-38-51",children:[],level:3},{value:"Line 55-56",id:"line-55-56",children:[],level:3}],level:2},{value:"Related resources",id:"related-resources",children:[],level:2},{value:"Further reading",id:"further-reading",children:[],level:2}],d={toc:c},s="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u7bc7",(0,r.kt)("a",{parentName:"p",href:"/blog/hardhat-forking-1"},"\u6587\u7ae0"),"\u6211\u5011\u5df2\u7d93\u5b78\u6703\u4e86\u600e\u9ebc\u4f7f\u7528 Hardhat mainnet forking\uff0c\u4f46\u662f\u8b80\u8005\u53ef\u80fd\u5c1a\u6709\u7591\u60d1\u4e0d\u77e5\u9053\u9019\u6a23\u7684\u529f\u80fd\u53ef\u4ee5\u505a\u4ec0\u9ebc\uff1f\u672c\u7bc7\u6587\u7ae0\u5c07\u5ef6\u7e8c\u76f8\u540c\u4e3b\u984c\uff0c\u4e26\u7d66\u51fa\u5e7e\u500b\u4f8b\u5b50\uff0c\u5411\u8b80\u8005\u5c55\u793a mainnet forking \u80fd\u5920\u70ba\u958b\u767c\u904e\u7a0b\u5e36\u4f86\u7684\u65b9\u4fbf\u6027\u3002"),(0,r.kt)("h2",{id:"\u7bc4\u4f8b\u4e00\u8207-weth9-\u5408\u7d04\u4e92\u52d5"},"\u7bc4\u4f8b\u4e00\uff1a\u8207 ",(0,r.kt)("inlineCode",{parentName:"h2"},"WETH9")," \u5408\u7d04\u4e92\u52d5"),(0,r.kt)("p",null,"\u5982\u540c\u524d\u6587\u6240\u8ff0\uff0cinteroperability \u662f smart contract \u4e00\u500b\u76f8\u7576\u91cd\u8981\u7684\u7279\u6027\uff0c\u800c\u4ee5\u7a0b\u5f0f\u7684\u89d2\u5ea6\u4f86\u770b\u5373\u70ba\u5408\u7d04\u4e92\u76f8\u547c\u53eb\u3002\u5047\u8a2d\u6211\u5011\u4eca\u5929\u8981\u958b\u767c\u4e00\u500b\u5408\u7d04\u6703\u8207 Wrapped Ether\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9"),"\uff09",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u5408\u7d04\u4e92\u52d5\uff0c\u90a3\u9ebc\u6703\u767c\u751f\u4ec0\u9ebc\u4e8b\u5462\uff1f"),(0,r.kt)("p",null,"\u82e5\u7121 mainnet forking \u53ef\u7528\uff0c\u5247\u6211\u5011\u5fc5\u9700\u5148\u5c07 ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u90e8\u5c6c\u5728 local Hardhat Network \uff08\u4e14\u6703\u5f97\u5230\u8207\u4e3b\u7db2\u4e0d\u4e00\u6a23\u7684\u5408\u7d04\u5730\u5740\uff09\uff0c\u65b9\u80fd\u8207\u4e4b\u4e92\u52d5\u3001\u9032\u884c\u5f8c\u7e8c\u7684\u958b\u767c\u6d41\u7a0b\uff1b\u53ef\u60f3\u800c\u77e5\u9019\u5c31\u662f\u589e\u52a0\u8907\u96dc\u5ea6\uff0c\u537b\u964d\u4f4e\u4eff\u771f\u5ea6\u7684\u571f\u6cd5\u7149\u92fc\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u82e5\u6709 mainnet forking \u53ef\u7528\uff0c\u5247\u6211\u5011\u4ec0\u9ebc\u90fd\u4e0d\u9700\u8981\u505a\u3002\u76f4\u63a5\u8207 Etherscan \u4e0a\u9762\u67e5\u8a62\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u5408\u7d04\u5730\u5740\u4e92\u52d5\u5373\u53ef\uff0c\u5b8c\u5168\u6a21\u64ec\u6211\u5011\u5408\u7d04\u5728\u672a\u4f86\u4e0a\u7dda\u6642\u7684\u64cd\u4f5c\u74b0\u5883\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5c07\u900f\u904e\u57f7\u884c\u4e00\u6bb5\u7c21\u77ed\u7684 JavaScript \u8173\u672c\uff0c\u5411\u8b80\u8005\u5c55\u793a\u8981\u600e\u9ebc\u5728\u5df2\u5b8c\u6210 mainnet forking \u7684 Hardhat Network \u4e4b\u5167\uff0c\u8207\u77e5\u540d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u4e92\u52d5\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5ef6\u7e8c\u524d\u6587\u7684\u64cd\u4f5c\u74b0\u5883"),(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat_fork")," \u8cc7\u6599\u593e\u5e95\u4e0b\u5275\u7acb\u65b0\u8cc7\u6599\u593e ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts")),(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80 Etherscan.io \u6216\u4efb\u4f55\u4f60\u4fe1\u4efb\u7684 Ethereum blockchain explorer \u5c0b\u627e WETH \u5408\u7d04",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code"},"https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2#code")))),(0,r.kt)("li",{parentName:"ol"},"\u5c07\u5408\u7d04 ABI \u5132\u5b58\u6210 ",(0,r.kt)("inlineCode",{parentName:"li"},"contract-abi.json")," \u6a94\u6848\uff0c\u4e26\u653e\u7f6e\u65bc ",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat_fork/scripts")," \u8cc7\u6599\u593e\u5e95\u4e0b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u82e5\u662f\u4f7f\u7528 Etherscan\uff0c\u5247\u9700\u6efe\u52d5\u81f3\u7db2\u9801\u6700\u4e0b\u65b9\uff0c\u5982\u5716\u6240\u793a")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"weth9-contract-abi",src:n(9142).Z})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u524d\u5f80\u9019\u500b Gist \u4e0b\u8f09 ",(0,r.kt)("inlineCode",{parentName:"li"},"interact.js")," \u8173\u672c\uff0c\u4e26\u4e14\u628a\u5b83\u5132\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat_fork/scripts")," \u8cc7\u6599\u593e\u5e95\u4e0b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/a2468834/6101244f5000e467ec8904ac5f0ec41d"},"https://gist.github.com/a2468834/6101244f5000e467ec8904ac5f0ec41d")),(0,r.kt)("li",{parentName:"ul"},"\u6216\u53ef\u81f3 GitHub \u4e0a\u9762 LunDAO repo \u4e0b\u8f09"))),(0,r.kt)("li",{parentName:"ol"},"\u622a\u81f3\u76ee\u524d\u70ba\u6b62\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat_fork")," \u8cc7\u6599\u593e\u61c9\u8a72\u8981\u9577\u5f97\u50cf\u9019\u6a23\u5b50",(0,r.kt)("sup",{parentName:"li",id:"fnref-8"},(0,r.kt)("a",{parentName:"sup",href:"#fn-8",className:"footnote-ref"},"8")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"\ud83d\udcc2 hardhat_fork\n \u2502\n \u251c\u2500\u2500 \ud83d\udcc2 scripts\n \u2502    \u2502\n \u2502    \u251c\u2500\u2500 \ud83d\udcc4 contract-abi.json\n \u2502    \u2502\n \u2502    \u2514\u2500\u2500 \ud83d\udcc4 interact.js\n \u2502\n \u251c\u2500\u2500 \ud83d\udcc4 .env\n \u2502\n \u2514\u2500\u2500 \ud83d\udcc4 hardhat.config.js\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u57f7\u884c\u6307\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"$ yarn hardhat --network \"hardhat\" run scripts/interact.js\nyarn run v1.22.17\n\nCheck contract status\n--------------------------------------------------------------------------------\n        ETH-Balance                     WETH-Balance\nWETH9   7160157.033871775794435313      7160157.033871775794435313\n\n[Step 0] Before we started\n--------------------------------------------------------------------------------\nAccount Address             ETH-Balance     WETH-Balance\n#0      0xf39f......2266    10000.000       0.000\n#1      0x2feb......a6f3    4.294           13813.827\n\n[Step 1] Account#1 deposits 3 ETH in contract\n--------------------------------------------------------------------------------\nAccount Address             ETH-Balance     WETH-Balance\n#0      0xf39f......2266    10000.000       0.000\n#1      0x2feb......a6f3    1.291           13816.827\n\n[Step 2] Account#1 sends 13 WETH to Account#0\n--------------------------------------------------------------------------------\nAccount Address             ETH-Balance     WETH-Balance\n#0      0xf39f......2266    10000.000       13.000\n#1      0x2feb......a6f3    1.286           13803.827\n\n[Step 3] Account#0 withdraws 13 WETH from contract\n--------------------------------------------------------------------------------\nAccount Address             ETH-Balance     WETH-Balance\n#0      0xf39f......2266    10012.997       0.000\n#1      0x2feb......a6f3    1.286           13803.827\n\n================================================================================\n{\n  hash: '0x1dfa3eee62caaf1aa06d60b9fd57d67d17fe23c9f9452c1e3284056e6fad6e48',\n  type: 2,\n  accessList: [],\n  blockHash: '0x3750ecaf4f7ccf733ceed460a0aeb54b3dd2373dc199ba5b420e062c5d39f165',\n  blockNumber: 14297760,\n...\n")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7b46\u8005\u5c07\u5c0d ",(0,r.kt)("inlineCode",{parentName:"p"},"interact.js")," \u7684\u7a0b\u5f0f\u78bc\u505a\u4e00\u4e9b\u91cd\u9ede\u89e3\u6790"),(0,r.kt)("h3",{id:"line-8-9"},"Line 8-9"),(0,r.kt)("p",null,"\u958b\u555f mainnet forking \u6a21\u5f0f\u8b93\u6211\u5011\u5f97\u4ee5\u76f4\u63a5\u8207\u771f\u5be6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u5408\u7d04\u5730\u5740\u4e92\u52d5\uff0c\u4e0d\u9700\u8981\u984d\u5916\u90e8\u5c6c\u5176\u4ed6\u5408\u7d04\u3002\u53e6\u5916\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"somebody")," \u5730\u5740\u5247\u662f\u96a8\u6a5f\u6311\u9078\u7684\u4e00\u500b\u5730\u5740\uff0c\u6070\u5de7\u8a72\u5730\u5740\u540c\u6642\u64c1\u6709 eth \u548c weth\uff0c\u5728\u63a5\u4e0b\u4f86\u7684\u64cd\u4f5c\u7576\u4e2d\u53ef\u898b\u5947\u6548\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const weth9_address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";\nconst somebody      = "0x2feb1512183545f48f6b9c5b4ebfcaf49cfca6f3";\n')),(0,r.kt)("h3",{id:"line-13-30"},"Line 13-30"),(0,r.kt)("p",null,"\u7528\u4f86\u8b93\u5370\u5728 terminal \u7684\u6587\u5b57\u770b\u8d77\u4f86\u6392\u7248\u7f8e\u7f8e\u7684\u51fd\u6578\u5011\uff0c\u4e26\u6c92\u6709\u7279\u5225\u4e4b\u8655"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function addressSlicing(address) {\n    /* Skip */\n}\n\nasync function printAccountAndBalance(provider, contract, account0, account1) {\n    /* Skip */\n}\n")),(0,r.kt)("h3",{id:"line-34-35"},"Line 34-35"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hre"),"\uff08Hardhat Runtime Environment, HRE\uff09\u662f\u4e00\u500b Hardhat Network \u555f\u52d5\u4e4b\u5f8c\uff0c\u5305\u542b\u6240\u6709 Hardhat \u5957\u4ef6\u529f\u80fd\u7684\u7269\u4ef6\uff0c\u8a73\u7d30\u5167\u5bb9\u8acb\u898b\u6587\u672b\u5ef6\u4f38\u95b1\u8b80\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hre.ethers.getSigners()")," \u56de\u50b3\u4e00\u500b\u9577\u5ea6\u70ba 20 \u7684 ethers.js Signer \u9663\u5217\uff0c\u5c31\u662f\u524d\u6587\u6240\u8ff0\u7684\u90a3\u4e8c\u5341\u500b\u5404\u6709 10000 ETH \u7684\u5e33\u865f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const HRE_EOAs = await hre.ethers.getSigners();\nconst provider = await hre.ethers.provider;\n")),(0,r.kt)("h3",{id:"line-40-4347"},"Line 40-43,47"),(0,r.kt)("p",null,"\u5728 mainnet forking \u6a21\u5f0f\u4e4b\u4e0b\uff0cHardhat Network \u5141\u8a31\u958b\u767c\u8005\u767c\u9001 tx\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5373\u4fbf\u4f60\u6839\u672c\u672a\u6301\u6709\u8a72\u5730\u5740\u7684\u79c1\u9470"),"\u3002\u6709\u4e86\u9019\u500b\u529f\u80fd\uff0c\u6211\u5011\u53ef\u4ee5\u96a8\u610f\u5c0b\u627e\u4efb\u4f55\u5177\u5099\u6211\u5011\u6709\u8208\u8da3\u689d\u4ef6\u7684\u5730\u5740\uff08EOA \u6216 contract address \u5747\u53ef\uff09\uff0c\u7136\u5f8c\u4ee5\u5b83\u7684\u540d\u7fa9\u767c\u9001 tx \u4f86\u9032\u884c\u5404\u5f0f\u64cd\u4f5c\uff0c\u8b93 mainnet forking \u7684\u6e2c\u8a66\u74b0\u5883\u517c\u5177\u9ad8\u4eff\u771f\u5ea6\u8207\u9ad8\u4fbf\u5229\u6027\u3002"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_impersonateAccount")," \u529f\u80fd\u4e4b\u5916\uff0c\u9084\u6709\u5176\u4ed6\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_setNonce"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_setBalance"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_setCode"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_setStorageAt"),"\u7b49\u529f\u80fd\uff0c\u8a73\u7d30\u53ef\u898b",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/guides/mainnet-forking.html#customizing-hardhat-network-s-behavior"},"\u9019\u908a"),"\u7684\u8aaa\u660e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await hre.network.provider.request({\n    method: "hardhat_impersonateAccount",\n    params: [somebody]\n});\n')),(0,r.kt)("h3",{id:"line-50-56"},"Line 50-56"),(0,r.kt)("p",null,"\u6b64 JavaScript \u8173\u672c\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u7684 token \u7e3d\u767c\u884c\u91cf\u8207\u6b64\u5730\u5740\u7684 balance\uff0c\u6211\u5011\u53ef\u898b\u5169\u500b\u6578\u503c\u76f8\u7b49\u4e14\u8207 Etherscan \u4e0a\u7684\u9918\u984d\u543b\u5408\u3002\u7531\u65bc Etherscan Analytics \u5206\u9801\u8b39\u986f\u793a\u7576\u65e5\u65e5\u672b\u9918\u984d\uff0c\u56e0\u6b64\u9700\u67e5\u8a62\u524d\u4e00\u65e5\u9918\u984d\u70ba\u6e96\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Etherscan-Analytics",src:n(2533).Z})),(0,r.kt)("h3",{id:"line-64-68"},"Line 64-68"),(0,r.kt)("p",null,"\u6211\u5011\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"somebody")," \u5730\u5740\u7684\u540d\u7fa9\uff08i.e., \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"signer_1")," \u767c\u51fa txn\uff09\uff0c\u5411 ",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u5408\u7d04\u5b58\u6b3e 3 eth\uff1b\u4e4b\u6240\u4ee5\u6b64\u884c\u70ba\u4e0d\u662f invalid tx\uff0c\u6b78\u529f\u65bc\u524d\u8ff0\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat_impersonateAccount")," \u529f\u80fd",(0,r.kt)("sup",{parentName:"p",id:"fnref-9"},(0,r.kt)("a",{parentName:"sup",href:"#fn-9",className:"footnote-ref"},"9")),"\uff0c\u5b83\u8b93\u6211\u5011\u80fd\u5920\u5728 Hardhat Network \u5167\u4ee5\u672a\u77e5\u5bc6\u9470\u5730\u5740\u7684\u540d\u7fa9\u767c\u9001 tx\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var overrides = {value : hre.ethers.utils.parseEther("3.0")};\nWETH9         = WETH9.connect(signer_1);\ntxn_array.push(await WETH9.deposit(overrides));\nawait printAccountAndBalance(provider, WETH9, signer_0, signer_1);\n')),(0,r.kt)("h3",{id:"line-72-80"},"Line 72-80"),(0,r.kt)("p",null,"\u9019\u500b\u6bb5\u843d\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"Account#1"),"\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"somebody")," \u5730\u5740\uff09\u7684 13 \u500b weth \u8f49\u7d66 ",(0,r.kt)("inlineCode",{parentName:"p"},"Account#0"),"\uff08\u5373 HRE \u9810\u8a2d\u5730\u5740 No.0\uff09\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'WETH9 = WETH9.connect(signer_1);\ntxn_array.push(\n    await WETH9.transferFrom(\n        signer_1.address, \n        signer_0.address, \n        hre.ethers.utils.parseEther("13.0")\n));\nawait printAccountAndBalance(provider, WETH9, signer_0, signer_1);\n')),(0,r.kt)("h3",{id:"line-84-89"},"Line 84-89"),(0,r.kt)("p",null,"\u7531\u65bc\u50b3\u9001 tx \u9700\u8981\u8017\u8cbb tx fee\uff0c\u6240\u4ee5\u6211\u5011\u53ef\u4ee5\u767c\u73fe\u6700\u7d42\u5370\u51fa\u7684\u7d50\u679c\u986f\u793a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Account #0")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Account #1")," \u7684 eth \u9918\u984d\u7e3d\u548c\u6bd4\u6700\u521d\u7684\u6642\u5019\u5c11\u4e00\u4e9b\u3002"),(0,r.kt)("h3",{id:"line-93-97"},"Line 93-97"),(0,r.kt)("p",null,"\u6700\u5f8c\u6703\u5370\u51fa\u7a0d\u65e9\u767c\u9001\u7684\u6240\u6709 tx \u7684\u7d30\u7bc0\uff1b\u8b80\u8005\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("inlineCode",{parentName:"p"},"blockNumber")," \u67e5\u89ba\u9019\u4e9b tx \u8207\u7576\u521d\u6307\u5b9a mainnet forking \u5340\u584a\u9ad8\u5ea6\u4e4b\u9593\u7684\u95dc\u806f\u6027\uff0c\u53ef\u898b Hardhat Network \u662f\u6709\u5728\u9010\u6b65\u9577\u9ad8\u3002"),(0,r.kt)("h2",{id:"\u7bc4\u4f8b\u4e8c\u6293\u53d6-public-\u8b8a\u6578\u7684\u6b77\u53f2\u6578\u64da"},"\u7bc4\u4f8b\u4e8c\uff1a\u6293\u53d6 ",(0,r.kt)("inlineCode",{parentName:"h2"},"public")," \u8b8a\u6578\u7684\u6b77\u53f2\u6578\u64da"),(0,r.kt)("p",null,"\u9019\u500b\u7bc4\u4f8b\u8981\u89e3\u6c7a\u7684\u662f\u53e6\u4e00\u500b\u4e8b\u60c5\uff1a\u8981\u600e\u9ebc\u6293\u53d6 Ethereum \u4e0a\u9762\u67d0\u500b\u6578\u64da\u7684\u6b77\u53f2\u8cc7\u6599\u5462\uff1f"),(0,r.kt)("p",null,"Etherscan \u63d0\u4f9b\u5716\u5f62\u5316\u4ecb\u9762\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u5feb\u901f\u67e5\u8a62\u5408\u7d04\u5167 ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"pure")," function \u7684\u56de\u50b3\u503c\uff0c\u4f46\u662f\u5982\u679c\u6211\u5011\u6709\u8208\u8da3\u7684\u56de\u50b3\u503c\u53ea\u6703\u51fa\u73fe\u5728\u7279\u5b9a block number \u5462\uff1f\u9019\u6642\u5019\u9664\u4e86\u4f7f\u7528 Dune Analytics \u7b49\u7db2\u7ad9\u63d0\u4f9b\u7684\u670d\u52d9\uff0c\u6211\u5011\u5176\u5be6\u53ef\u4ee5\u900f\u904e mainnet forking \u7684\u529f\u80fd\u4f86\u81ea\u5df1\u5be6\u4f5c\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5c07\u4f7f\u7528\u53e6\u4e00\u4efd JavaScript \u8173\u672c\uff0c\u53ea\u9700\u5c07\u524d\u4e00\u500b\u7bc4\u4f8b\u7684\u7b2c\u56db\u6b65\u9a5f\u6539\u70ba\u4e0b\u8f09\u6b64\u8173\u672c\uff0c\u5373\u53ef\u6210\u529f\u57f7\u884c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/a2468834/71c59d580c1da21337350cdfc47e515b"},"https://gist.github.com/a2468834/71c59d580c1da21337350cdfc47e515b")),(0,r.kt)("li",{parentName:"ul"},"\u6216\u53ef\u81f3 GitHub \u4e0a\u9762 LunDAO repo \u4e0b\u8f09"),(0,r.kt)("li",{parentName:"ul"},"\u622a\u81f3\u76ee\u524d\u70ba\u6b62\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat_fork")," \u8cc7\u6599\u593e\u61c9\u8a72\u8981\u9577\u5f97\u50cf\u9019\u6a23\u5b50",(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"\ud83d\udcc2 hardhat_fork\n \u2502\n \u251c\u2500\u2500 \ud83d\udcc2 scripts\n \u2502    \u2502\n \u2502    \u251c\u2500\u2500 \ud83d\udcc4 contract-abi.json\n \u2502    \u2502\n \u2502    \u251c\u2500\u2500 \ud83d\udcc4 interact.js\n \u2502    \u2502\n \u2502    \u2514\u2500\u2500 \ud83d\udcc4 query.js\n \u2502\n \u251c\u2500\u2500 \ud83d\udcc4 .env\n \u2502\n \u2514\u2500\u2500 \ud83d\udcc4 hardhat.config.js\n")),(0,r.kt)("p",null,"\u57f7\u884c\u6307\u4ee4\u4e4b\u5f8c\uff0c\u53ef\u898b terminal \u5370\u51fa\u985e\u4f3c\u9019\u6a23\u5b50\u7684\u6587\u5b57"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'$ yarn hardhat --network "hardhat" run scripts/query.js\nyarn run v1.22.17\n\nMethod 1\n----------------------------------------\nBlock number: 14379900\nTotalSupply:  7080076.411770262795354559\n----------------------------------------\nBlock number: 14379901\nTotalSupply:  7080077.697963348707441243\n----------------------------------------\nBlock number: 14379902\nTotalSupply:  7080074.493707533508180991\n...\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u7b46\u8005\u5c07\u5c0d ",(0,r.kt)("inlineCode",{parentName:"p"},"query.js")," \u7684\u7a0b\u5f0f\u78bc\u505a\u4e00\u4e9b\u91cd\u9ede\u89e3\u6790"),(0,r.kt)("h3",{id:"line-14-1928-29"},"Line 14-19,28-29"),(0,r.kt)("p",null,"\u6b64\u8173\u672c\u900f\u904e\u5faa\u5e8f\u8b8a\u63db mainnet forking \u7684\u5206\u53c9\u9ad8\u5ea6\uff0c\u9054\u6210\u300c\u67e5\u8a62\u67d0\u500b\u5340\u9593\u5167\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"WETH9")," \u5408\u7d04\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"totalSupply()")," \u6578\u503c\u8b8a\u5316\u300d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'var config = {  method: "hardhat_reset",\n                params: [{\n                    forking: {\n                        jsonRpcUrl: process.env.Mainnet,\n                        blockNumber: 0}}]\n};\nconfig.params[0].forking.blockNumber = block_i;\nawait hre.network.provider.request(config);\n')),(0,r.kt)("h3",{id:"line-38-51"},"Line 38-51"),(0,r.kt)("p",null,"\u4e8b\u5be6\u4e0a\uff0c\u67e5\u8a62 ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"pure")," function \u7684\u6b77\u53f2\u6578\u64da\uff0c\u4e0d\u9700\u8981\u7528\u5230 mainnet forking \u6a21\u5f0f\u3002\u53ef\u4ee5\u55ae\u7d14\u900f\u904e\u547c\u53eb\u5408\u7d04\u51fd\u6578\uff0c\u984d\u5916\u9644\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"blockTag")," \u5373\u53ef",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"method1()")," \u70ba\u4f7f\u7528 mainnet forking \u7684\u65b9\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"method2()")," \u5247\u662f\u4e0d\u9700\u4f7f\u7528 mainnet forking \u7684\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function method2() {\n    /* Skip */\n}\n")),(0,r.kt)("h3",{id:"line-55-56"},"Line 55-56"),(0,r.kt)("p",null,"\u57f7\u884c\u7684\u6642\u5019\u8a18\u5f97\u628a\u5176\u4e2d\u4e00\u884c\u7684\u8a3b\u89e3\u62ff\u6389\uff1b\u53e6\u5916\uff0cmainnet forking \u7684\u5206\u53c9\u9ad8\u5ea6\u4e0d\u80fd\u5c0f\u65bc\u60f3\u8981\u67e5\u8a62",(0,r.kt)("inlineCode",{parentName:"p"},"public")," ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"pure")," function \u7684\u6b77\u53f2\u6578\u64da\u7684\u5340\u584a\u9ad8\u5ea6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n    // Delete one of the following comments\n    //await method1();\n    //await method2();\n}\n")),(0,r.kt)("h2",{id:"related-resources"},"Related resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Yarn",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/"},"https://classic.yarnpkg.com/en/")))),(0,r.kt)("li",{parentName:"ul"},"Hardhat",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NomicFoundation/hardhat"},"https://github.com/NomicFoundation/hardhat")),(0,r.kt)("li",{parentName:"ul"},"Mainnet forking\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-network/guides/mainnet-forking.html"},"https://hardhat.org/hardhat-network/guides/mainnet-forking.html")),(0,r.kt)("li",{parentName:"ul"},"Configuration\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/config/"},"https://hardhat.org/config/")),(0,r.kt)("li",{parentName:"ul"},"Hardhat Network Reference\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-network/reference/"},"https://hardhat.org/hardhat-network/reference/")),(0,r.kt)("li",{parentName:"ul"},"Creating a task\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/guides/create-task.html"},"https://hardhat.org/guides/create-task.html")),(0,r.kt)("li",{parentName:"ul"},"Hardhat Runtime Environment (HRE)\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/advanced/hardhat-runtime-environment.html"},"https://hardhat.org/advanced/hardhat-runtime-environment.html")))),(0,r.kt)("li",{parentName:"ul"},"Alchemy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alchemy.com/"},"https://www.alchemy.com/")))),(0,r.kt)("li",{parentName:"ul"},"Ethereum on ARM",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ethereum-on-arm-documentation.readthedocs.io/en/latest/quick-guide/about-quick-start.html"},"https://ethereum-on-arm-documentation.readthedocs.io/en/latest/quick-guide/about-quick-start.html")))),(0,r.kt)("li",{parentName:"ul"},"Wrapped Ether",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://weth.io/index.html"},"https://weth.io/index.html"))))),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Infura",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://infura.io/"},"https://infura.io/")))),(0,r.kt)("li",{parentName:"ul"},"QuickNode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.quicknode.com/"},"https://www.quicknode.com/")))),(0,r.kt)("li",{parentName:"ul"},"Truffle",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Simulate Live Networks with Forked Sandboxes\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://trufflesuite.com/blog/sandbox-forking-with-truffle-teams/index.html"},"https://trufflesuite.com/blog/sandbox-forking-with-truffle-teams/index.html"))))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"\u95dc\u65bc\u4ec0\u9ebc\u662f Wrapped Ether\uff1f\u8acb\u53c3\u8003\u6587\u672b\u5ef6\u4f38\u95b1\u8b80\uff0c\u6216\u8acb\u8b80\u8005\u81ea\u884c\u67e5\u8a62\u5176\u4ed6\u7db2\u8def\u8cc7\u6599\u3002",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-8"},"\u6709\u7701\u7565\u4e00\u4e9b\u8207\u672c\u6587\u7121\u95dc\u7684\u6a94\u6848\u8207\u8cc7\u6599\u593e",(0,r.kt)("a",{parentName:"li",href:"#fnref-8",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-9"},(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-network/reference/#hardhat-impersonateaccount"},"https://hardhat.org/hardhat-network/reference/#hardhat-impersonateaccount"),(0,r.kt)("a",{parentName:"li",href:"#fnref-9",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"\u6709\u7701\u7565\u4e00\u4e9b\u8207\u672c\u6587\u7121\u95dc\u7684\u6a94\u6848\u8207\u8cc7\u6599\u593e",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},(0,r.kt)("inlineCode",{parentName:"li"},"blockTag")," \u662f ethers.js \u7684\u8a9e\u6cd5\uff0cweb3.js \u7684 API \u4f7f\u7528\u65b9\u6cd5\u53ef\u80fd\u6709\u6240\u4e0d\u540c",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},2533:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/etherscan-analytics-3438b17d267da1be587a6607b0a8fbc1.png"},9142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/weth9-contract-abi-1e48dad0a8fdf34fa37201948a0ca076.png"}}]);