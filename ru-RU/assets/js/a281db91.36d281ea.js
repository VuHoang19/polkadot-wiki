(self.webpackChunk=self.webpackChunk||[]).push([[5003],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88057:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>u,toc:()=>p,default:()=>d});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts"},l=void 0,u={unversionedId:"learn-simple-payouts",id:"learn-simple-payouts",isDocsHomePage:!1,title:"Simple Payouts",description:"Polkadot and Kusama make stakers claim their rewards for past eras by submitting a transaction. This",source:"@site/../docs/learn-simple-payouts.md",sourceDirName:".",slug:"/learn-simple-payouts",permalink:"/ru-RU/docs/learn-simple-payouts",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-simple-payouts.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625029193,formattedLastUpdatedAt:"30.06.2021",frontMatter:{id:"learn-simple-payouts",title:"Simple Payouts",sidebar_label:"Simple Payouts"},sidebar:"docs",previous:{title:"Sequential Phragm\xe9n Method",permalink:"/ru-RU/docs/learn-phragmen"},next:{title:"Cryptography Explainer",permalink:"/ru-RU/docs/learn-cryptography"}},p=[{value:"Claiming Rewards",id:"claiming-rewards",children:[]},{value:"F.A.Q. and Cautionary Notes",id:"faq-and-cautionary-notes",children:[]}],c={toc:p};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot and Kusama make stakers claim their rewards for past eras by submitting a transaction. This\nnaturally leads to spreading out reward distribution, as people make transactions at disparate\ntimes, rather than updating the accounts of all stakers in a single block."),(0,o.kt)("p",null,"Even if everyone submitted a reward claim at the same time, the fact that they are individual\ntransactions would allow the block construction algorithm to process only a limited number per block\nand ensure that the network maintains a constant block time. If all rewards were sent out in one\nblock, this could cause serious issues with the stability of the network."),(0,o.kt)("p",null,"Simple payouts requires one transaction per validator per era to claim rewards. The reason Polkadot\nrequires this is to avoid an attack where someone has several thousand accounts nominating a single\nvalidator. The major cost in reward distribution is mutating the accounts in storage, and Polkadot\ncannot pay out several thousand accounts in a single transaction."),(0,o.kt)("h2",{id:"claiming-rewards"},"Claiming Rewards"),(0,o.kt)("p",null,"Polkadot stores up to 84 eras of reward info like maps of era number to validator points,\ninflationary rewards, and nomination exposures. Rewards will not be claimable more than 84 eras\nafter they were earned. This means that all rewards must be claimed within 84 eras."),(0,o.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index. Polkadot will\nautomatically calculate that validator's reward, find the top 256\nnominators for that era, and distribute the rewards pro rata."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The Staking system only applies the highest 256 nominations to\neach validator to reduce the complexity of the staking set.")),(0,o.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,o.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"pending-payouts",src:a(35733).Z})),(0,o.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"select-payouts",src:a(17088).Z})),(0,o.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"transaction-payouts",src:a(61603).Z})),(0,o.kt)("h2",{id:"faq-and-cautionary-notes"},"F.A.Q. and Cautionary Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Rewards expire after 84 eras. On Polkadot, that's about 84 days. On Kusama, it is approximately\n21 days."),(0,o.kt)("li",{parentName:"ol"},"Claiming rewards (or neglecting to claim rewards) does not affect nominations in any way.\nNominations will persist after claiming rewards or after the rewards expire."),(0,o.kt)("li",{parentName:"ol"},'Rewards are not minted until they are claimed. Therefore, if your reward destination is "stash,\nincreasing amount at stake", then your staked amount does not reflect your rewards until you\nclaim them. If you want to maximize compounding, then you will need to claim often or nominate\nvalidators which regularly claim for you.'),(0,o.kt)("li",{parentName:"ol"},"Staking operations at the end of an era are closed to allow the off-chain validator election to\ntake place. See ",(0,o.kt)("a",{parentName:"li",href:"learn-phragmen#off-chain-phragmen"},"Off-chain Phragm\xe9n")," for more information.")))}d.isMDXComponent=!0},61603:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},35733:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},17088:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"}}]);