/* empty css                  *//* empty css                  *//* empty css                   */import{_ as t}from"./tag-DvVL0lgb.js";import{_ as i,c as e,D as s,a,F as r,m as l,b as o,w as n,E as c,q as p,o as d,s as h,e as y,t as f,l as g}from"./index-C3HF_ROH.js";const m={npcNames:()=>["云渺仙子","琉光幽姬","烟霞仙子","清韵灵姬","碧落灵仙","绮霞灵女","瑶光雪姬","琉璃雪姬","幽篁雪姬","雪舞灵姬"]},u={class:"map",ref:"map"},v={class:"grid-container"},b=["onClick"],S={class:"controls"},w={class:"wife-box"},k={class:"attributes"},$={class:"attribute-box"},z={class:"tag attribute"},I={class:"tag attribute"},C={class:"click-box"},X={key:0,class:"gift-box"},Y=["onClick"],x={class:"gift-name"};const P=i({data:()=>({grid:[],player:{},playerX:0,playerY:0,npcInfo:{},npcShow:!1,gridSize:50,giftShow:!1,npcCount:10,obstacleCount:0}),components:{tag:t},computed:{giftItems(){const t=[],i={1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},e={1:"info",2:"success",3:"primary",4:"purple",5:"warning",6:"danger"},s={1:200,2:400,3:800,4:1500,5:2e3,6:3e3};for(let a=1;a<7;a++)t.push({lv:e[a],plus:s[a]/100,name:`${i[a]}品驻颜丹`,price:s[a]});return t},totalCells(){return this.gridSize*this.gridSize},nearbyIndices(){return[(this.playerY-1)*this.gridSize+this.playerX,(this.playerY+1)*this.gridSize+this.playerX,this.playerY*this.gridSize+(this.playerX-1),this.playerY*this.gridSize+(this.playerX+1)]},isNpc(){return this.nearbyIndices.some((t=>{var i;return"npc"===(null==(i=this.grid[t])?void 0:i.type)}))},isTopObstacle(){return this.checkDirection("up")},isLeftObstacle(){return this.checkDirection("left")},isDownObstacle(){return this.checkDirection("down")},isRightObstacle(){return this.checkDirection("right")}},mounted(){this.player=this.$store.state.player,this.obstacleCount=Math.floor(.1*this.totalCells);const t=this.$store.state.mapData;t.map.length?(this.grid=t.map,this.playerY=t.y,this.playerX=t.x):this.initializeGrid(),window.addEventListener("keydown",this.move)},beforeDestroy(){window.removeEventListener("keydown",this.move)},methods:{initializeGrid(){this.grid=Array(this.totalCells).fill().map((()=>({type:"empty"})));const t=new Set;for(let i=this.playerY-1;i<=this.playerY+1;i++)for(let e=this.playerX-1;e<=this.playerX+1;e++)i>=0&&i<this.gridSize&&e>=0&&e<this.gridSize&&t.add(i*this.gridSize+e);do{this.generateItems("obstacle",this.obstacleCount,t)}while(!this.isPathAvailable());do{this.generateNpcs(this.npcCount,t)}while(!this.isPathAvailable());this.updatePlayerPosition()},isPathAvailable(){const t=new Set,i=[[this.playerY,this.playerX]],e=[[0,1],[1,0],[0,-1],[-1,0]];for(;i.length>0;){const[s,a]=i.shift();if(0===s||s===this.gridSize-1||0===a||a===this.gridSize-1)return!0;for(const[r,l]of e){const e=s+r,o=a+l,n=e*this.gridSize+o;e>=0&&e<this.gridSize&&o>=0&&o<this.gridSize&&!t.has(n)&&"empty"===this.grid[n].type&&(t.add(n),i.push([e,o]))}}return!1},generateItems(t,i,e){this.grid.forEach((t=>{"obstacle"===t.type&&(t.type="empty")}));let s=0;for(;s<i;){const i=Math.floor(Math.random()*this.totalCells);e.has(i)||"empty"!==this.grid[i].type||(this.grid[i].type=t,s++)}},generateNpcs(t,i){this.grid.forEach((t=>{"npc"===t.type&&(t.type="empty")}));const e=this.player.npcs.length?this.player.npcs:m.npcNames(),s=this.player.npcs.length,a=(t,i,e)=>({lv:144,name:t,position:i,favorability:s?e:0,reincarnation:10});let r=[];for(let l=0;l<t;l++)for(let t=!1;!t;){const o=Math.floor(Math.random()*this.totalCells);if(!i.has(o)&&"empty"===this.grid[o].type){this.grid[o].type="npc";const i=s?a(e[l].name,o,e[l].favorability):a(e[l],o,0);r.push(i),this.player.npcs=r,t=!0,this.$store.commit("setPlayer",this.player)}}},harvestNpc(t){this.$confirm("与对方结为道侣有50%的概率失败, 失败后好感度会清空, 请问还想与对方结为道侣吗?","结为道侣",{center:!0,cancelButtonText:"取消",confirmButtonText:"确定"}).then((()=>{this.isLucky(50)?(this.player.wifes.push({name:t.name,level:0,dodge:0,attack:10,health:100,defense:10,critical:0,reincarnation:0}),this.$notifys({title:"提示",message:"你成功邀请对方与你结为道侣",position:"top-left"})):(this.npcInfo.favorability=0,this.$notifys({title:"提示",message:"对方拒绝了你的邀请, 好感度清空",position:"top-left"})),this.$store.commit("setPlayer",this.player)})).catch((()=>{}))},giftInfo(t,i){this.$confirm("","赠送礼物",{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>名称: ${t.name}</p>\n                            <p>价格: ${t.price}</p>\n                            <p>增加好感度: ${t.plus}</p>\n                        </div>\n                    </div>`,lockScroll:!1,cancelButtonText:"取消赠送",confirmButtonText:"立即赠送",dangerouslyUseHTMLString:!0}).then((()=>{t.price>this.player.props.money?this.$notifys({title:"赠送提示",message:"灵石不足, 赠送失败",position:"top-left"}):(this.player.props.money-=t.price,this.npcInfo.favorability+=t.plus,this.player.props.flying+=i,this.player.props.qingyuan+=i,this.$store.commit("setPlayer",this.player),this.$notifys({title:"赠送提示",message:`赠送成功, ${this.npcInfo.name}对你的好感度增加了, 并赠与了你${i}张传送符和${i}点情缘`,position:"top-left"}))})).catch((()=>{}))},gridInfo(t,i){const e=t%this.gridSize,s=Math.floor(t/this.gridSize);this.$confirm("地图坐标信息","地图坐标信息",{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>X轴: ${e}</p>\n                            <p>Y轴: ${s}</p>\n                        </div>\n                    </div>`,lockScroll:!1,confirmButtonText:"立即传送",dangerouslyUseHTMLString:!0}).then((()=>{this.player.props.flying?"empty"==i.type?(this.playerY=s,this.playerX=e,this.updatePlayerPosition(),this.$notifys({title:"传送提示",message:"传送成功",position:"top-left"})):this.$notifys({title:"传送提示",message:"传送失败, 该坐标有障碍物或NPC",position:"top-left"}):this.$notifys({title:"传送提示",message:"传送失败, 传送符不足",position:"top-left"})})).catch((()=>{}))},updatePlayerPosition(){this.grid.forEach((t=>"player"===t.type?t.type="empty":t.type));const t=this.playerY*this.gridSize+this.playerX;this.grid[t].type="player",this.$store.commit("setMapData",{y:this.playerY,x:this.playerX,map:this.grid});this.isLucky(20)&&0!=t&&this.$router.push("/explore"),0!=t&&this.updateScroll(t)},checkDirection(t){var i;const e={up:(this.playerY-1)*this.gridSize+this.playerX,down:(this.playerY+1)*this.gridSize+this.playerX,left:this.playerY*this.gridSize+(this.playerX-1),right:this.playerY*this.gridSize+(this.playerX+1)}[t];return["obstacle","npc"].includes(null==(i=this.grid[e])?void 0:i.type)},move(t){let i=this.playerX,e=this.playerY;switch(t="string"==typeof t?t:t.key){case"up":case"ArrowUp":e>0&&e--;break;case"down":case"ArrowDown":e<this.gridSize-1&&e++;break;case"left":case"ArrowLeft":i>0&&i--;break;case"right":case"ArrowRight":i<this.gridSize-1&&i++}const s=e*this.gridSize+i;"empty"===this.grid[s].type&&(this.playerX=i,this.playerY=e),this.updatePlayerPosition()},updateScroll(t){const i=this.$refs[`cell-${t}`][0];i&&i.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})},talkToNpc(){this.npcShow=!0,this.npcInfo=this.player.npcs.find((t=>this.nearbyIndices.includes(t.position)))},isLucky:t=>100*Math.random()<t,isHaveWife(t){if(t)return this.player.wifes.some((i=>i.name===t))}}},[["render",function(i,m,P,_,N,D){const T=c,L=t,M=p;return d(),e("div",null,[m[19]||(m[19]=s('<div class="legend" data-v-cd9d1a35><div class="legend-item" data-v-cd9d1a35><div class="color-box player" data-v-cd9d1a35></div> 玩家 </div><div class="legend-item" data-v-cd9d1a35><div class="color-box npc" data-v-cd9d1a35></div> NPC </div><div class="legend-item" data-v-cd9d1a35><div class="color-box obstacle" data-v-cd9d1a35></div> 障碍物 </div><div class="legend-item" data-v-cd9d1a35><div class="color-box empty" data-v-cd9d1a35></div> 空地 </div></div>',1)),a("div",u,[a("div",v,[(d(!0),e(r,null,l(N.grid,((t,i)=>(d(),e("div",{key:i,ref_for:!0,ref:"cell-"+i,class:h(["grid-item",t.type]),onClick:e=>D.gridInfo(i,t)},null,10,b)))),128))])],512),a("div",S,[o(T,{class:"home-button",onClick:m[0]||(m[0]=t=>{i.$router.push("/home")})},{default:n((()=>m[8]||(m[8]=[y("回家")]))),_:1}),o(T,{class:"up-button",onClick:m[1]||(m[1]=t=>D.move("up")),disabled:D.isTopObstacle||0==N.playerY},{default:n((()=>m[9]||(m[9]=[y("往北")]))),_:1},8,["disabled"]),o(T,{class:"dialogue-button",onClick:D.talkToNpc,disabled:!D.isNpc},{default:n((()=>m[10]||(m[10]=[y("对话")]))),_:1},8,["onClick","disabled"]),o(T,{class:"left-button",onClick:m[2]||(m[2]=t=>D.move("left")),disabled:D.isLeftObstacle||0===N.playerX},{default:n((()=>m[11]||(m[11]=[y("往西")]))),_:1},8,["disabled"]),o(T,{class:"down-button",onClick:m[3]||(m[3]=t=>D.move("down")),disabled:D.isDownObstacle||N.playerY===N.gridSize-1},{default:n((()=>m[12]||(m[12]=[y("往南")]))),_:1},8,["disabled"]),o(T,{class:"right-button",onClick:m[4]||(m[4]=t=>D.move("right")),disabled:D.isRightObstacle||N.playerX===N.gridSize-1},{default:n((()=>m[13]||(m[13]=[y("往东")]))),_:1},8,["disabled"])]),o(M,{modelValue:N.npcShow,"onUpdate:modelValue":m[7]||(m[7]=t=>N.npcShow=t),title:N.npcInfo.name,direction:"rtl",class:"strengthen"},{default:n((()=>[a("div",w,[a("div",k,[a("div",$,[a("div",z," 境界: "+f(i.$levelNames(N.npcInfo.lv))+" ("+f(N.npcInfo.reincarnation)+"转) ",1),m[14]||(m[14]=a("div",{class:"tag attribute"}," 气血: 不详 ",-1)),m[15]||(m[15]=a("div",{class:"tag attribute"}," 攻击: 不详 ",-1)),m[16]||(m[16]=a("div",{class:"tag attribute"}," 防御: 不详 ",-1)),m[17]||(m[17]=a("div",{class:"tag attribute"}," 闪避: 不详 ",-1)),m[18]||(m[18]=a("div",{class:"tag attribute"}," 暴击: 不详 ",-1)),a("div",I," 好感度: "+f(N.npcInfo.favorability),1)])]),a("div",C,[o(T,{type:"primary",onClick:m[5]||(m[5]=t=>N.giftShow=!N.giftShow)},{default:n((()=>[y(f(N.giftShow?"取消赠送":"赠送礼物"),1)])),_:1}),o(T,{type:"primary",disabled:N.npcInfo.favorability<1e3||D.isHaveWife(N.npcInfo.name),onClick:m[6]||(m[6]=t=>D.harvestNpc(N.npcInfo))},{default:n((()=>[y(f(D.isHaveWife(N.npcInfo.name)?"已结为道侣":"结为道侣"),1)])),_:1},8,["disabled"])]),N.giftShow?(d(),e("div",X,[(d(!0),e(r,null,l(D.giftItems,((t,i)=>(d(),e("div",{class:"gift-item",key:i,onClick:e=>D.giftInfo(t,i)},[o(L,{type:t.lv},{default:n((()=>[y(f(t.name),1)])),_:2},1032,["type"]),a("span",x,f(t.price)+"灵石",1)],8,Y)))),128))])):g("",!0)])])),_:1},8,["modelValue","title"])])}],["__scopeId","data-v-cd9d1a35"]]);export{P as default};