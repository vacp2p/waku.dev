"use strict";(self.webpackChunkwaku_docusaurus_template=self.webpackChunkwaku_docusaurus_template||[]).push([[507],{11448:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>u});var i=a(58168),o=(a(96540),a(15680));const n={},s="The Waku Network",r={unversionedId:"waku-network",id:"waku-network",title:"The Waku Network",description:"The Waku Network Gen 0 is the first iteration of a public network for peer-to-peer messaging built on the Waku protocol stack. Its goal is to offer a permissionless, auto-scalable, DoS protected shared messaging layer for the decentralized web.",source:"@site/about/waku-network.md",sourceDirName:".",slug:"/waku-network",permalink:"/about/waku-network",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Core contributors",permalink:"/about/team"}},l={},u=[{value:"Motive",id:"motive",level:2},{value:"Sharding and rate limiting",id:"sharding-and-rate-limiting",level:2}],c={toc:u},h="wrapper";function d(e){let{components:t,...a}=e;return(0,o.yg)(h,(0,i.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"the-waku-network"},"The Waku Network"),(0,o.yg)("p",null,"The Waku Network Gen 0 is the first iteration of a public network for peer-to-peer messaging built on the Waku protocol stack. Its goal is to offer a permissionless, auto-scalable, DoS protected shared messaging layer for the decentralized web."),(0,o.yg)("h2",{id:"motive"},"Motive"),(0,o.yg)("p",null,"The Waku Network is a solution to achieve scalability and reasonable Denial of Service (DoS) protection, even when sharing a decentralised message routing layer with other applications. The Waku Network is actively addressing the challenge of scaling a shared routing layer, where each user participates in relaying traffic for all applications. As the adoption of Waku continues to grow, the bandwidth consumption skyrockets. Users with limited bandwidth capabilities are becoming increasingly marginalised and unable to participate fully in the Waku Relay network. "),(0,o.yg)("p",null,"The Waku Network also aims to mitigate the risk of users being susceptible to spam or DoS attacks that may occur when the network is fully accessible to all users and applications."),(0,o.yg)("p",null,"Waku\u2019s mission is to enable anyone across the globe to opt out of using applications built on centralised communication components, that\u2019s why Waku protocols are designed to work on even resource-restricted devices. Without finding a way to limit bandwidth consumption, the protocol would be at risk of not enabling this mission."),(0,o.yg)("h2",{id:"sharding-and-rate-limiting"},"Sharding and rate limiting"),(0,o.yg)("p",null,"There are two main technological advances that the Waku Network Gen 0 introduces which enable the public network:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Sharding;")),(0,o.yg)("p",null,"Instead of having one relay network, the Waku Network is split into several GossipSub topics so that the application user is not required to relay all of the applications\u2019 traffic but rather just the subset of traffic on the same shard. Auto-sharding will automatically allocate messages for an application and does not require a centralised allocator. "),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Rate limiting.")),(0,o.yg)("p",null,"Rate limiting prevents attackers from flooding the network beyond the maximum expected bandwidth usage. The RLN DoS protection caps publishers to 1 message per second with a 20-second grace period before additional messages are restricted. In the future, a dimensioning mechanism will give publishers a maximum allocation of messages per day, limiting the maximum rate of these messages within the overall network."))}d.isMDXComponent=!0}}]);