/* empty css                  *//* empty css                         *//* empty css                   */import{_ as e,c as t,a as l,b as s,w as a,E as i,d as o,o as d,e as c,f as n,g as u,h as m}from"./index-C3HF_ROH.js";const r={class:"index"},p={class:"index2"},h={class:"custom-html md-stream-desktop"},f={slot:"footer",class:"dialog-footer"};const y=e({data:()=>({player:{},activeName:"",dialogVisible:!0}),mounted(){const e=this.$store.state;e&&(this.player=e.player,this.player.zc=!!this.player.zc&&this.player.zc,this.dialogVisible=!this.player.zc),("appassets.androidplatform.net"!==window.location.host||this.player.zc)&&this.$router.push("/home")},methods:{zhengce(e){e?this.$router.push("/home"):this.$notifys({title:"提示",message:"未同意隐私政策无法进入游戏"}),this.player.zc=e,this.dialogVisible=!1,this.$store.commit("setPlayer",this.player)},goHome(){this.player.zc?this.$router.push("/home"):this.$notifys({title:"提示",message:"未同意隐私政策无法进入游戏"})}}},[["render",function(e,y,g,_,v,V){const b=i,z=n,$=u,k=m,x=o;return d(),t("div",r,[l("div",p,[s(b,{class:"button",onClick:V.goHome},{default:a((()=>y[5]||(y[5]=[c(" 开始游戏 ")]))),_:1},8,["onClick"]),s(b,{class:"button",onClick:y[0]||(y[0]=e=>v.dialogVisible=!0)},{default:a((()=>y[6]||(y[6]=[c(" 隐私政策 ")]))),_:1})]),s(x,{modelValue:v.dialogVisible,"onUpdate:modelValue":y[4]||(y[4]=e=>v.dialogVisible=e),title:"隐私政策",width:"420px"},{default:a((()=>[l("div",h,[y[19]||(y[19]=l("p",null,"我们非常重视您的隐私，并致力于保护您的个人信息。鉴于我的文字修仙全靠刷是一款完全离线的单机游戏，我们特此明确声明：",-1)),s(k,{modelValue:v.activeName,"onUpdate:modelValue":y[1]||(y[1]=e=>v.activeName=e),accordion:""},{default:a((()=>[s(z,{name:"1"},{title:a((()=>y[7]||(y[7]=[l("div",{class:"custom-title"},"无数据收集",-1)]))),default:a((()=>[y[8]||(y[8]=l("p",null,"游戏设计为无需网络连接即可运行的单机游戏。因此，我们不会通过任何方式收集、存储、传输或使用您的个人信息，包括但不限于您的姓名、联系方式、地理位置、设备信息或游戏内行为数据。",-1))])),_:1}),s(z,{name:"2"},{title:a((()=>y[9]||(y[9]=[l("div",{class:"custom-title"},"无第三方数据共享",-1)]))),default:a((()=>[y[10]||(y[10]=l("p",null,"由于游戏不收集任何个人信息，我们自然也不会将任何数据分享给第三方机构或个人。我们承诺尊重并保护您的隐私权益，确保您的游戏体验不受任何不必要的干扰。",-1))])),_:1}),s(z,{name:"3"},{title:a((()=>y[11]||(y[11]=[l("div",{class:"custom-title"},"本地存储",-1)]))),default:a((()=>[y[12]||(y[12]=l("p",null,"虽然游戏可能需要在您的设备上存储一些必要的游戏文件（如存档、设置等），但这些数据仅用于游戏的正常运行，且完全存储在您的本地设备上。我们不会将这些数据上传至服务器或用于除游戏运行以外的任何目的。",-1))])),_:1}),s(z,{name:"4"},{title:a((()=>y[13]||(y[13]=[l("div",{class:"custom-title"},"隐私权保护",-1)]))),default:a((()=>[y[14]||(y[14]=l("p",null,"我们理解隐私权对于每位玩家都至关重要。因此，我们承诺将持续关注并遵守所有适用的隐私保护法律法规，不断改进和优化我们的隐私保护措施。",-1))])),_:1}),s(z,{name:"5"},{title:a((()=>y[15]||(y[15]=[l("div",{class:"custom-title"},"政策更新",-1)]))),default:a((()=>[y[16]||(y[16]=l("p",null,"虽然游戏的离线特性意味着我们的隐私政策不太可能发生重大变化，但我们仍保留根据法律法规变化或游戏技术更新对隐私政策进行修订的权利。任何政策更新都将在此页面上公布，并注明生效日期。",-1))])),_:1}),s($,null,{default:a((()=>y[17]||(y[17]=[c("结语")]))),_:1}),y[18]||(y[18]=l("p",null,"感谢您游玩本游戏！我们承诺将继续努力，为您带来安全、愉快的游戏体验。",-1))])),_:1},8,["modelValue"])]),l("span",f,[s(b,{onClick:y[2]||(y[2]=e=>V.zhengce(!1))},{default:a((()=>y[20]||(y[20]=[c("拒 绝")]))),_:1}),s(b,{type:"primary",onClick:y[3]||(y[3]=e=>V.zhengce(!0))},{default:a((()=>y[21]||(y[21]=[c("同 意")]))),_:1})])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-82f333df"]]);export{y as default};
