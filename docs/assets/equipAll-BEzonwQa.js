/* empty css                  *//* empty css                    */import{_ as e}from"./tag-DvVL0lgb.js";import{a as t}from"./achievement-D7rAOyFA.js";import{_ as a,c as s,b as n,w as i,a as o,p as l,E as c,o as r,F as d,m as p,k as m,e as u,t as h,l as v,y}from"./index-C3HF_ROH.js";const f={drawPrize(e){const t=[{type:"weapon",data:this.equipWeapons()},{type:"armor",data:this.equipArmors()},{type:"accessory",data:this.equipAccessories()},{type:"sutra",data:this.equipSutras()}],a={info:50,success:20,primary:15,purple:9,warning:5,danger:1,pink:0},s={sutra:"法器",armor:"护甲",weapon:"兵器",accessory:"灵宝"},n=Object.keys(a),i=(e,t,a,s)=>{const n={info:1.2,success:2,primary:3,purple:5,warning:7,danger:10,pink:15}[s],i=1e3*t,o=1e4*t,l="pink"==s?.25:.1;return{score:this.calculateEquipmentScore(l,i,o,l,l),dodge:["accessory","sutra"].includes(e)?l*n:0,attack:["weapon","accessory","sutra"].includes(e)?Math.floor(i*n):0,health:["armor","accessory","sutra"].includes(e)?Math.floor(o*n):0,defense:["armor","accessory","sutra"].includes(e)?Math.floor(i*n):0,critical:["weapon","accessory","sutra"].includes(e)?l*n:0}[a]};return t.map((({type:t,data:o})=>({type:t,name:s[t],data:o.flatMap(((s,o)=>s.map((s=>({name:s,type:t,level:e,score:i(t,e,"score",n[o]),prize:a[n[o]],dodge:i(t,e,"dodge",n[o]),attack:i(t,e,"attack",n[o]),health:i(t,e,"health",n[o]),defense:i(t,e,"defense",n[o]),critical:i(t,e,"critical",n[o]),quality:n[o]})))))})))},equipWeapons:()=>[["白玉净尘剑","雪魄寒冰枪","白龙吟风弓","月华流光扇","白玉玄灵笛","霜雪无痕鞭","云隐白凰刃","净世白莲杖","冰魄寒光轮","白玉玲珑塔"],["翠玉青藤剑","碧影灵蛇鞭","绿叶风暴弓","青木长生杖","翡翠灵犀刃","藤蔓缠绕索","翠竹清风扇","生命之泉壶","绿野仙踪笛","森罗万象轮"],["寒冰破晓剑","碧海潮生笛","蓝玉冰魄弓","苍穹蓝龙枪","冰魄寒光剑","鲛人织梦扇","深海之怒戟","碧波凌霄杖","幽蓝蝶舞鞭","银河落霜刃"],["紫霄龙吟剑","幽冥紫蝶刃","星河紫电枪","紫玉寒冰弓","紫焰凤凰琴","苍穹紫雷锤","紫莲幽光扇","紫晶破晓戟","幽冥紫影鞭","紫霄凌虚杖"],["金煌剑","炽焰长枪","琥珀流光弓","龙鳞金斧","破晓黄玉锤","炎阳鞭","流光扇","战神金戟","黄芒闪电刃","日曜乾坤轮"],["赤焰凤凰剑","血玉红莲枪","烈焰焚天弓","赤霄神火戟","火舞流云扇","朱雀炎翼鞭","赤龙焚世刃","炎狱魔瞳镰","炽血星辰杖","红莲业火轮"],["粉晶月刃剑","樱花吹雪弓","蔷薇缠绕鞭","蜜桃梦境杖","粉蝶幻光刃","粉晶流光扇","甜梦水晶枪","粉樱魔法杖","粉钻心语弩","柔粉蔷薇盾"]],equipArmors:()=>[["瑶池仙绡羽衣","广寒玉兔霜甲","昆仑玉璧战袍","白龙吐珠云裳","九天玄女素绫","瑶光星辰织锦","冰魄银丝战衣","凌霄琼华宝衣","雪域神女雪绒","云隐龙鳞轻铠"],["翠竹幽兰轻衫","碧落青藤云裳","碧眼麒麟战衣","青鸾翔翼织锦","苍梧古木灵袍","绿野仙踪羽衣","灵蛇翠蔓软甲","翡翠琉璃长裙","松风竹影轻裘","春水碧于天衣"],["寒冰护甲衣","碧波守护铠","蓝玉冰心链甲","苍穹蓝灵披风","深海蛟龙鳞甲","冰魄幽光战铠","蓝蝶轻舞护腕","银河之盾胸甲","鲛人织梦护腿","碧波凌波靴"],["紫云织锦袍","幽冥紫霜甲","星河紫霞衣","紫玉冰心链甲","紫焰凤凰披风","苍穹紫雷战铠","紫莲幽光护腕","紫晶凌霄战裙","幽冥紫影护腿","紫霄逐风靴"],["金辉流光锦袍","琥珀流光战衣","黄土龙纹长袍","日炎金鳞铠甲","秋菊金缎华服","蜜蜡黄绸云裳","凤凰涅槃黄衫","黄沙漫天披风","金穗流光纱裙","辉煌金羽战袍"],["烈焰红莲战甲","赤霄火凤云裳","朱雀焚天织锦","赤焰龙鳞宝衣","血色蔷薇华服","丹霞流光长袍","炎阳炽烈战袍","炽火红莲披风","火舞凤凰羽衣","红莲业火锦衣"],["粉樱绮梦裳","甜梦粉蝶衣","蜜桃恋曲裙","粉晶流光铠","樱花恋歌袍","柔粉蔷薇甲","粉蝶翩翩袖","甜梦羽织衣","粉晶幻彩裙","蜜桃梦境袍"]],equipAccessories:()=>[["瑶池白玉簪","月华流光坠","寒霜凝露链","九天玄女玉佩","云锦织梦镯","龙涎润雪环","白鹤衔珠珮","昆仑雪莲花链","瑶台仙露耳环","银河织梦项链"],["翠竹凝露簪","碧泉幽兰链","青藤绕梦镯","翡翠灵叶耳环","灵山仙草玉佩","松柏长青戒","翠影轻舞项链","绿野仙踪手环","碧波荡漾珠链","春回大地玉珮"],["碧海珊瑚簪","冰魄幽蓝链","深海珍珠耳环","蓝田玉髓镯","苍穹蓝宝坠","鲛人泪滴珠","碧波荡漾戒","银河之心项链","蓝蝶飞舞手环","深海龙鳞珮"],["紫霄流光戒","幽冥紫蝶项链","星河紫玉耳环","紫玉冰心手链","紫焰凤凰簪","苍穹紫雷吊坠","紫莲幽光发带","紫晶破晓护符","幽冥紫影指环","紫霄凌虚玉佩"],["金辉日冕簪","琥珀流光链","黄粱一梦镯","皇天后土玉佩","蜜蜡福瑞戒","秋收万颗项链","暖阳照耀耳环","炎黄子孙玉珮","金色麦田手环","盛世繁华珠链"],["赤焰凤凰翎","血珀琉璃坠","烈焰红宝石链","朱雀之翼耳环","红莲业火镯","丹霄火凤戒","玛瑙赤焰项链","炽天使之泪珮","绯红织锦手环","火凤涅槃珠链"],["粉晶梦蝶链","樱花恋曲簪","甜梦蔷薇戒","蜜桃绮梦环","粉蝶轻舞坠","粉晶甜蜜链","柔粉心语珥","樱花绮梦镯","蜜桃梦境簪","粉蝶幻彩带"]],equipSutras:()=>[["白玉净瓶","寒霜琉璃镜","瑶池雪莲珠","九天玄冰尺","月华宝莲灯","白云隐龙笛","玉清昆仑扇","净世白莲座","银河落雪琴","碧落瑶光盘"],["翠玉葫芦","青木长生杖","碧落灵珠","幽冥鬼藤鞭","万木回春图","绿绮琴音笛","青鸾火凤羽扇","翠影追魂剑","草木皆兵符","碧泉灵泉壶"],["碧波神珠","冰魄寒玉葫","深海龙息珠","苍穹蓝灵珠","鲛人织梦灯","银河落霜瓶","蓝玉冰心镜","寒冰净世莲","碧波幽兰笛","深海龙吟佩"],["紫霄神雷珠","幽冥紫蝶翼","星河紫玉壶","紫玉冰心镜","紫焰凤凰翎","苍穹紫雷鼎","紫莲幽光轮","紫晶破晓琴","幽冥紫影幡","紫霄凌虚印"],["金蛟剪","乾坤圈","黄金玲珑塔","戊己杏黄旗","轩辕黄帝鼎","镇妖伏魔镜","落日熔金轮","万寿无疆葫芦","金翅大鹏羽扇","地黄玄玉珠"],["炽焰灵珠阵图","火凤涅槃炉鼎","红莲业火净世碑","血玉轮回盘","朱雀翔天翼","烈焰焚天炉","丹霄火域图","赤龙炼魂珠","火灵炽心镜","九转炎灵祭坛"],["粉樱梦幻笛","甜心粉蝶壶","蜜桃恋语镜","粉晶流光珠","柔粉绮梦石","樱花纷飞扇","甜梦绮罗盘","蜜桃幻影灯","粉蝶织梦琴","粉樱守护符"]],calculateEquipmentScore(e=0,t=0,a=0,s=0,n=0){const i=e*1.6*100+t*1.5+a/100*1+n*1.2+s*1.8*100;return Math.floor(i)}},$={class:"Illustrations"},g={class:"tag inventory-box"},k={class:"inventory-content"},b=["onClick"],A={key:0,class:"achievement-content"},_=["onClick"],q={key:1,class:"achievement-content"},C={class:"actions"};const w=a({data:()=>({activeName:"illustrations",achievementAll:[],achievementActive:"pet",illustrationsItems:[],illustrationsActive:"weapon"}),components:{tag:e},mounted(){this.achievementAll=t.all(),this.illustrationsItems=f.drawPrize(this.$maxLv)},methods:{getTagClass(e,t){const a=this.$store.state.player.achievement[e]||[];return Array.isArray(a)&&a.some((e=>e.id===t))},achievementInfo(e){this.$confirm("",`${e.name}`,{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>气血: ${e.condition.health}</p>\n                            <p>攻击: ${e.condition.attack}</p>\n                            <p>防御: ${e.condition.defense}</p>\n                            <p>闪避率: ${(100*e.condition.dodge).toFixed(2)}%</p>\n                            <p>暴击率: ${(100*e.condition.critical).toFixed(2)}%</p>\n                            <p>完成奖励: ${e.award}培养丹</p>\n                        </div>\n                    </div>`,confirmButtonText:"知道了",dangerouslyUseHTMLString:!0}).then((()=>{})).catch((()=>{}))},illustrationsInfo(e,t){const a=this.illustrationsItems[e].data[t];this.$confirm("",a.name,{center:!0,message:`<div class="monsterinfo">\n                        <div class="monsterinfo-box">\n                            <p>类型: ${this.$genre[a.type]}</p>\n                            <p>境界: ${this.$levelNames(a.level)}</p>\n                            <p>品质: ${this.$levels[a.quality]}</p>\n                            <p>气血: ${this.$formatNumberToChineseUnit(a.health)}</p>\n                            <p>攻击: ${this.$formatNumberToChineseUnit(a.attack)}</p>\n                            <p>防御: ${this.$formatNumberToChineseUnit(a.defense)}</p>\n                            <p>闪避率: ${a.dodge>0?100*a.dodge>100?100:(100*a.dodge).toFixed(2):0}%</p>\n                            <p>暴击率: ${a.critical>0?100*a.critical>100?100:(100*a.critical).toFixed(2):0}%</p>\n                            <p>装备评分: ${this.$formatNumberToChineseUnit(a.score)}</p>\n                            <p>获得率: ${a.prize}%</p>\n                        </div>\n                    </div>`,dangerouslyUseHTMLString:!0}).catch((()=>{}))}}},[["render",function(t,a,f,w,x,I){const T=e,U=y,V=l,N=c;return r(),s("div",$,[n(V,{modelValue:x.activeName,"onUpdate:modelValue":a[2]||(a[2]=e=>x.activeName=e),type:"border-card"},{default:i((()=>[n(U,{label:"装备图鉴",name:"illustrations"},{default:i((()=>[o("div",g,[n(V,{modelValue:x.illustrationsActive,"onUpdate:modelValue":a[0]||(a[0]=e=>x.illustrationsActive=e),stretch:!0},{default:i((()=>[(r(!0),s(d,null,p(x.illustrationsItems,((e,t)=>(r(),m(U,{label:e.name,name:e.type,key:t},{default:i((()=>[o("div",k,[(r(!0),s(d,null,p(e.data,((a,o)=>(r(),s(d,null,[a.type==e.type?(r(),s("div",{class:"Illustration-item",key:o,onClick:e=>I.illustrationsInfo(t,o)},[n(T,{type:a.quality},{default:i((()=>[u(h(a.name),1)])),_:2},1032,["type"])],8,b)):v("",!0)],64)))),256))])])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])])),_:1}),n(U,{label:"我的成就",name:"achievement"},{default:i((()=>[n(V,{modelValue:x.achievementActive,"onUpdate:modelValue":a[1]||(a[1]=e=>x.achievementActive=e),stretch:!0},{default:i((()=>[(r(!0),s(d,null,p(x.achievementAll,((e,t)=>(r(),m(U,{label:e.name,name:e.type,key:t},{default:i((()=>[e.data.length>0?(r(),s("div",A,[(r(!0),s(d,null,p(e.data,((t,a)=>(r(),s("div",{class:"achievement-item",key:a,onClick:e=>I.achievementInfo(t)},[n(T,{type:I.getTagClass(e.type,t.id)?"success":"info"},{default:i((()=>[u(h(t.name)+" ("+h(I.getTagClass(e.type,t.id)?"已完成":"未完成")+") ",1)])),_:2},1032,["type"])],8,_)))),128))])):(r(),s("div",q," 此类成就暂未发布 "))])),_:2},1032,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),o("div",C,[n(N,{type:"success",onClick:a[3]||(a[3]=e=>t.$router.push("/home"))},{default:i((()=>a[4]||(a[4]=[u(" 返回家中 ")]))),_:1})])])}],["__scopeId","data-v-51b8ec64"]]);export{w as default};