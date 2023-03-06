class j{constructor(t){this.properties=t??[]}get(t){const n=this.properties.filter(o=>o.name===t).map(o=>o.value);if(n.length>1)throw new Error('Expected only one property to be named "'+t+'"');if(n.length!==0)return n[0]}getString(t){return this.getByType(t,"string")}getNumber(t){return this.getByType(t,"number")}getBoolean(t){return this.getByType(t,"boolean")}getByType(t,n){const o=this.get(t);if(o!==void 0){if(n!=="json"&&typeof o!==n)throw new Error('Expected property "'+t+'" to have type "'+n+'"');return o}}mustGetString(t){return this.mustGetByType(t,"string")}mustGetNumber(t){return this.mustGetByType(t,"number")}mustGetBoolean(t){return this.mustGetByType(t,"boolean")}mustGetByType(t,n){const o=this.get(t);if(o===void 0)throw new Error('Property "'+t+'" is missing');if(n!=="json"&&typeof o!==n)throw new Error('Expected property "'+t+'" to have type "'+n+'"');return o}getType(t){const n=this.properties.filter(o=>o.name===t).map(o=>o.type);if(n.length>1)throw new Error('Expected only one property to be named "'+t+'"');if(n.length!==0)return n[0]}}const K="https://unpkg.com/@workadventure/scripting-api-extra@1.4.6/dist";class de{constructor(t){this.name=t.name,this.x=t.x,this.y=t.y,this.properties=new j(t.properties)}get isReadable(){const t=this.properties.getString("readableBy");return t?WA.player.tags.includes(t):!0}get isWritable(){const t=this.properties.getString("writableBy");return t?WA.player.tags.includes(t):!0}}function F(e){const t=e?"#"+e.join():"";WA.nav.openCoWebSite(K+"/configuration.html"+t)}async function fe(e,t){const n=await WA.room.getTiledMap(),o=new Map;return ae(n.layers,o,e,t),o}function ae(e,t,n,o){for(const r of e)if(r.type==="objectgroup"){for(const a of r.objects)if(a.type==="variable"||a.class==="variable"){if(n&&r.name!==n||o&&!o.includes(a.name))continue;t.set(a.name,new de(a))}}else r.type==="group"&&ae(r.layers,t,n,o)}let q;async function V(){return q===void 0&&(q=he()),q}async function he(){return ye(await WA.room.getTiledMap())}function ye(e){const t=new Map;return se(e.layers,"",t),t}function se(e,t,n){for(const o of e)o.type==="group"?se(o.layers,t+o.name+"/",n):(o.name=t+o.name,n.set(o.name,o))}async function ge(){const e=await V(),t=[];for(const n of e.values())if(n.type==="objectgroup")for(const o of n.objects)(o.type==="area"||o.class==="area")&&t.push(o);return t}function me(e){let t=1/0,n=1/0,o=0,r=0;const a=e.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<e.height;s++)for(let i=0;i<e.width;i++)a[i+s*e.width]!==0&&(t=Math.min(t,i),r=Math.max(r,i),n=Math.min(n,s),o=Math.max(o,s));return{top:n,left:t,right:r+1,bottom:o+1}}function ie(e){let t=1/0,n=1/0,o=0,r=0;for(const a of e){const s=me(a);s.left<t&&(t=s.left),s.top<n&&(n=s.top),s.right>r&&(r=s.right),s.bottom>o&&(o=s.bottom)}return{top:n,left:t,right:r,bottom:o}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var be=Object.prototype.toString,x=Array.isArray||function(t){return be.call(t)==="[object Array]"};function X(e){return typeof e=="function"}function Ae(e){return x(e)?"array":typeof e}function $(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function J(e,t){return e!=null&&typeof e=="object"&&t in e}function We(e,t){return e!=null&&typeof e!="object"&&e.hasOwnProperty&&e.hasOwnProperty(t)}var we=RegExp.prototype.test;function ve(e,t){return we.call(e,t)}var Se=/\S/;function Pe(e){return!ve(Se,e)}var Ce={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Me(e){return String(e).replace(/[&<>"'`=\/]/g,function(n){return Ce[n]})}var Ee=/\s*/,Le=/\s+/,Q=/\s*=/,ke=/\s*\}/,Te=/#|\^|\/|>|\{|&|=|!/;function xe(e,t){if(!e)return[];var n=!1,o=[],r=[],a=[],s=!1,i=!1,u="",f=0;function y(){if(s&&!i)for(;a.length;)delete r[a.pop()];else a=[];s=!1,i=!1}var W,S,U;function B(M){if(typeof M=="string"&&(M=M.split(Le,2)),!x(M)||M.length!==2)throw new Error("Invalid tags: "+M);W=new RegExp($(M[0])+"\\s*"),S=new RegExp("\\s*"+$(M[1])),U=new RegExp("\\s*"+$("}"+M[1]))}B(t||A.tags);for(var p=new O(e),P,b,w,R,D,E;!p.eos();){if(P=p.pos,w=p.scanUntil(W),w)for(var N=0,pe=w.length;N<pe;++N)R=w.charAt(N),Pe(R)?(a.push(r.length),u+=R):(i=!0,n=!0,u+=" "),r.push(["text",R,P,P+1]),P+=1,R===`
`&&(y(),u="",f=0,n=!1);if(!p.scan(W))break;if(s=!0,b=p.scan(Te)||"name",p.scan(Ee),b==="="?(w=p.scanUntil(Q),p.scan(Q),p.scanUntil(S)):b==="{"?(w=p.scanUntil(U),p.scan(ke),p.scanUntil(S),b="&"):w=p.scanUntil(S),!p.scan(S))throw new Error("Unclosed tag at "+p.pos);if(b==">"?D=[b,w,P,p.pos,u,f,n]:D=[b,w,P,p.pos],f++,r.push(D),b==="#"||b==="^")o.push(D);else if(b==="/"){if(E=o.pop(),!E)throw new Error('Unopened section "'+w+'" at '+P);if(E[1]!==w)throw new Error('Unclosed section "'+E[1]+'" at '+P)}else b==="name"||b==="{"||b==="&"?i=!0:b==="="&&B(w)}if(y(),E=o.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+p.pos);return Re(Be(r))}function Be(e){for(var t=[],n,o,r=0,a=e.length;r<a;++r)n=e[r],n&&(n[0]==="text"&&o&&o[0]==="text"?(o[1]+=n[1],o[3]=n[3]):(t.push(n),o=n));return t}function Re(e){for(var t=[],n=t,o=[],r,a,s=0,i=e.length;s<i;++s)switch(r=e[s],r[0]){case"#":case"^":n.push(r),o.push(r),n=r[4]=[];break;case"/":a=o.pop(),a[5]=r[2],n=o.length>0?o[o.length-1][4]:t;break;default:n.push(r)}return t}function O(e){this.string=e,this.tail=e,this.pos=0}O.prototype.eos=function(){return this.tail===""};O.prototype.scan=function(t){var n=this.tail.match(t);if(!n||n.index!==0)return"";var o=n[0];return this.tail=this.tail.substring(o.length),this.pos+=o.length,o};O.prototype.scanUntil=function(t){var n=this.tail.search(t),o;switch(n){case-1:o=this.tail,this.tail="";break;case 0:o="";break;default:o=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=o.length,o};function T(e,t){this.view=e,this.cache={".":this.view},this.parent=t}T.prototype.push=function(t){return new T(t,this)};T.prototype.lookup=function(t){var n=this.cache,o;if(n.hasOwnProperty(t))o=n[t];else{for(var r=this,a,s,i,u=!1;r;){if(t.indexOf(".")>0)for(a=r.view,s=t.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(u=J(a,s[i])||We(a,s[i])),a=a[s[i++]];else a=r.view[t],u=J(r.view,t);if(u){o=a;break}r=r.parent}n[t]=o}return X(o)&&(o=o.call(this.view)),o};function m(){this.templateCache={_cache:{},set:function(t,n){this._cache[t]=n},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}m.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};m.prototype.parse=function(t,n){var o=this.templateCache,r=t+":"+(n||A.tags).join(":"),a=typeof o<"u",s=a?o.get(r):void 0;return s==null&&(s=xe(t,n),a&&o.set(r,s)),s};m.prototype.render=function(t,n,o,r){var a=this.getConfigTags(r),s=this.parse(t,a),i=n instanceof T?n:new T(n,void 0);return this.renderTokens(s,i,o,t,r)};m.prototype.renderTokens=function(t,n,o,r,a){for(var s="",i,u,f,y=0,W=t.length;y<W;++y)f=void 0,i=t[y],u=i[0],u==="#"?f=this.renderSection(i,n,o,r,a):u==="^"?f=this.renderInverted(i,n,o,r,a):u===">"?f=this.renderPartial(i,n,o,a):u==="&"?f=this.unescapedValue(i,n):u==="name"?f=this.escapedValue(i,n,a):u==="text"&&(f=this.rawValue(i)),f!==void 0&&(s+=f);return s};m.prototype.renderSection=function(t,n,o,r,a){var s=this,i="",u=n.lookup(t[1]);function f(S){return s.render(S,n,o,a)}if(u){if(x(u))for(var y=0,W=u.length;y<W;++y)i+=this.renderTokens(t[4],n.push(u[y]),o,r,a);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(t[4],n.push(u),o,r,a);else if(X(u)){if(typeof r!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,r.slice(t[3],t[5]),f),u!=null&&(i+=u)}else i+=this.renderTokens(t[4],n,o,r,a);return i}};m.prototype.renderInverted=function(t,n,o,r,a){var s=n.lookup(t[1]);if(!s||x(s)&&s.length===0)return this.renderTokens(t[4],n,o,r,a)};m.prototype.indentPartial=function(t,n,o){for(var r=n.replace(/[^ \t]/g,""),a=t.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!o)&&(a[s]=r+a[s]);return a.join(`
`)};m.prototype.renderPartial=function(t,n,o,r){if(o){var a=this.getConfigTags(r),s=X(o)?o(t[1]):o[t[1]];if(s!=null){var i=t[6],u=t[5],f=t[4],y=s;u==0&&f&&(y=this.indentPartial(s,f,i));var W=this.parse(y,a);return this.renderTokens(W,n,o,y,r)}}};m.prototype.unescapedValue=function(t,n){var o=n.lookup(t[1]);if(o!=null)return o};m.prototype.escapedValue=function(t,n,o){var r=this.getConfigEscape(o)||A.escape,a=n.lookup(t[1]);if(a!=null)return typeof a=="number"&&r===A.escape?String(a):r(a)};m.prototype.rawValue=function(t){return t[1]};m.prototype.getConfigTags=function(t){return x(t)?t:t&&typeof t=="object"?t.tags:void 0};m.prototype.getConfigEscape=function(t){if(t&&typeof t=="object"&&!x(t))return t.escape};var A={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){z.templateCache=e},get templateCache(){return z.templateCache}},z=new m;A.clearCache=function(){return z.clearCache()};A.parse=function(t,n){return z.parse(t,n)};A.render=function(t,n,o,r){if(typeof t!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+Ae(t)+'" was given as the first argument for mustache#render(template, view, partials)');return z.render(t,n,o,r)};A.escape=Me;A.Scanner=O;A.Context=T;A.Writer=m;class ue{constructor(t,n){this.template=t,this.state=n,this.ast=A.parse(t)}getValue(){return this.value===void 0&&(this.value=A.render(this.template,this.state)),this.value}onChange(t){const n=[];for(const o of this.getUsedVariables().values())n.push(this.state.onVariableChange(o).subscribe(()=>{const r=A.render(this.template,this.state);r!==this.value&&(this.value=r,t(this.value))}));return{unsubscribe:()=>{for(const o of n)o.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const t=new Set;return this.recursiveGetUsedVariables(this.ast,t),t}recursiveGetUsedVariables(t,n){for(const o of t){const r=o[0],a=o[1],s=o[4];["name","&","#","^"].includes(r)&&n.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function Ie(){var e;const t=await ge();for(const n of t){const o=(e=n.properties)!==null&&e!==void 0?e:[];for(const r of o){if(r.type==="int"||r.type==="bool"||r.type==="object"||typeof r.value!="string")continue;const a=new ue(r.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await ee(n.name,r.name,s),a.onChange(async i=>{await ee(n.name,r.name,i)})}}}async function Ge(){var e;const t=await V();for(const[n,o]of t.entries())if(o.type!=="objectgroup"){const r=(e=o.properties)!==null&&e!==void 0?e:[];for(const a of r){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new ue(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();te(n,a.name,i),s.onChange(u=>{te(n,a.name,u)})}}}async function ee(e,t,n){console.log(e),(await WA.room.area.get(e)).setProperty(t,n)}function te(e,t,n){WA.room.setProperty(e,t,n),t==="visible"&&(n?WA.room.showLayer(e):WA.room.hideLayer(e))}let H,Y=0,Z=0;function ne(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const n of t.split(`
`))WA.room.showLayer(n);t=e.properties.mustGetString("closeLayer");for(const n of t.split(`
`))WA.room.hideLayer(n)}else{let t=e.properties.mustGetString("openLayer");for(const n of t.split(`
`))WA.room.hideLayer(n);t=e.properties.mustGetString("closeLayer");for(const n of t.split(`
`))WA.room.showLayer(n)}}function je(e){const t=e.properties.getString("openSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const r=ce(e.properties.mustGetString("openLayer").split(`
`));if(r>n)return;o=1-r/n}t&&WA.sound.loadSound(t).play({volume:o})}function ze(e){const t=e.properties.getString("closeSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const r=ce(e.properties.mustGetString("closeLayer").split(`
`));if(r>n)return;o=1-r/n}t&&WA.sound.loadSound(t).play({volume:o})}function le(e){return e.map(t=>H.get(t)).filter(t=>(t==null?void 0:t.type)==="tilelayer")}function ce(e){const t=le(e),n=ie(t),o=((n.right-n.left)/2+n.left)*32,r=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(Y-o,2)+Math.pow(Z-r,2))}function Ve(e){WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]?je(e):ze(e),ne(e)}),ne(e)}function Oe(e,t,n,o){const r=e.name;let a,s,i=!1;const u=n.getString("tag");let f=!0;u&&!WA.player.tags.includes(u)&&(f=!1);const y=!!u;function W(){var p;a&&a.remove(),a=WA.ui.displayActionMessage({message:(p=n.getString("closeTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,S()}})}function S(){var p;a&&a.remove(),a=WA.ui.displayActionMessage({message:(p=n.getString("openTriggerMessage"))!==null&&p!==void 0?p:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,W()}})}function U(p){const P=ie(le(t.properties.mustGetString("closeLayer").split(`
`)));s=WA.room.website.create({name:"doorKeypad"+p,url:o+"/keypad.html#"+encodeURIComponent(p),position:{x:P.right*32,y:P.top*32,width:32*3,height:32*4},allowApi:!0})}function B(){s&&(WA.room.website.delete(s.name),s=void 0)}WA.room.onEnterLayer(r).subscribe(()=>{if(i=!0,n.getBoolean("autoOpen")&&f){WA.state[t.name]=!0;return}if(!WA.state[t.name]&&(y&&!f||!y)&&(n.getString("code")||n.getString("codeVariable"))){U(r);return}f&&(WA.state[t.name]?W():S())}),WA.room.onLeaveLayer(r).subscribe(()=>{i=!1,n.getBoolean("autoClose")&&(WA.state[t.name]=!1),a&&a.remove(),B()}),WA.state.onVariableChange(t.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[t.name]===!0&&W(),s&&WA.state[t.name]===!0&&B(),!n.getBoolean("autoOpen")&&WA.state[t.name]===!1&&S())})}function Ue(e){const t=e.properties.mustGetString("bellSound"),n=e.properties.getNumber("soundRadius");let o=1;if(n){const r=Math.sqrt(Math.pow(e.x-Y,2)+Math.pow(e.y-Z,2));if(r>n)return;o=1-r/n}WA.sound.loadSound(t).play({volume:o})}function De(e){WA.state[e.name]===void 0&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe(()=>{WA.state[e.name]&&Ue(e)})}function _e(e,t,n){let o;const r=t.getString("bellPopup");WA.room.onEnterLayer(n).subscribe(()=>{var a;r?o=WA.ui.openPopup(r,"",[{label:(a=t.getString("bellButtonText"))!==null&&a!==void 0?a:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1}),WA.room.onLeaveLayer(n).subscribe(()=>{o&&(o.close(),o=void 0)})}async function Ne(e){e=e??K;const t=await fe();H=await V();for(const n of t.values())n.properties.get("door")&&Ve(n),n.properties.get("bell")&&De(n);for(const n of H.values()){const o=new j(n.properties),r=o.getString("doorVariable");if(r&&n.type==="tilelayer"){const s=t.get(r);if(s===void 0)throw new Error('Cannot find variable "'+r+'" referred in the "doorVariable" property of layer "'+n.name+'"');Oe(n,s,o,e)}const a=o.getString("bellVariable");a&&_e(a,o,n.name)}WA.player.onPlayerMove(n=>{Y=n.x,Z=n.y})}function qe(e,t){const n=e.getString("bindVariable");if(n){const o=e.get("enterValue"),r=e.get("leaveValue"),a=e.getString("triggerMessage"),s=e.getString("tag");$e(n,t,o,r,a,s)}}function $e(e,t,n,o,r,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(t).subscribe(()=>{r||(WA.state[e]=n)}),o!==void 0&&WA.room.onLeaveLayer(t).subscribe(()=>{WA.state[e]=o}))}async function He(){const e=await V();for(const t of e.values()){const n=new j(t.properties);qe(n,t.name)}}let oe;async function Ke(e){const t=await WA.room.getTiledMap();e=e??K,oe=await V();const n=t.layers.find(o=>o.name==="configuration");if(n){const r=new j(n.properties).getString("tag");(!r||WA.player.tags.includes(r))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)});for(const a of oe.values()){const s=new j(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Xe(i.split(","),a.name,s)}}}function Xe(e,t,n){let o;const r=n.getString("openConfigAdminTag");let a=!0;r&&!WA.player.tags.includes(r)&&(a=!1);function s(){var u;o&&o.remove(),o=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>F(e)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(t).subscribe(()=>{const u=n.getString("openConfigTrigger");a&&(u&&u==="onaction"?s():F(e))}),WA.room.onLeaveLayer(t).subscribe(()=>{o&&o.remove(),i()})}function Ye(){return WA.onInit().then(()=>{Ne().catch(e=>console.error(e)),He().catch(e=>console.error(e)),Ke().catch(e=>console.error(e)),Ge().catch(e=>console.error(e)),Ie().catch(e=>console.error(e))}).catch(e=>console.error(e))}console.log("Script started successfully");let C,_,g,h,l=0,c=0,k,I=0,G=0;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("sfire").subscribe(()=>{h=WA.sound.loadSound("sound/fire2.wav").play(d)}),WA.room.area.onLeave("sfire").subscribe(()=>{re()}),WA.room.area.onEnter("npcpiratezone").subscribe(()=>{C=WA.ui.openPopup("npcpiratepopup","CAPTAIN BOTTLE-TOP: Welcome aboard, matey! Our ship crashed on this planet, and we need to find all the fragments of the disk with pieces of the encryption key to restart the ship's systems and return home. Each fragment contains a part of the key necessary to start up systems like engines and fire-extinguishing system.",[]);var e=WA.sound.loadSound("sound/npc/pirate.wav");e.play(d)}),WA.room.area.onLeave("npcpiratezone").subscribe(L),WA.room.area.onEnter("npcrobotzone").subscribe(()=>{C=WA.ui.openPopup("npcrobotpopup","IRON SAMSON: Excellent! Did you complete the task? I don't know, and I don't care. Now, enter your answers into the terminal, and I'll see if you did the task right. Hope you remember how to use a keyboard, ha-ha-ha!",[]);var e=WA.sound.loadSound("sound/npc/robot.mp3");e.play(d)}),WA.room.area.onLeave("npcrobotzone").subscribe(L),WA.room.area.onEnter("npcadminzone").subscribe(()=>{C=WA.ui.openPopup("npcadmin1popup","BoJack: Did you notice the violation? Lets ban him?",[]),_=WA.ui.openPopup("npcadmin2popup","Zaragossa: I'll keep an eye on him from an ambush...",[]);var e=WA.sound.loadSound("sound/npc/horse.mp3");e.play(d);var t=WA.sound.loadSound("sound/npc/mouse.mp3");t.play(d)}),WA.room.area.onLeave("npcadminzone").subscribe(L),WA.room.area.onLeave("npcadminzone").subscribe(Ze),WA.room.area.onEnter("npcpidginzone").subscribe(()=>{C=WA.ui.openPopup("npcpidginpopup","FLIPPER: Hello! I find myself in a strange place surrounded by ancient Egyptian pyramids, and I feel that there are secrets hidden behind them that no one has yet uncovered. Can you help me find the answer to what lies behind these images?",[]);var e=WA.sound.loadSound("sound/npc/pidgin.mp3");e.play(d)}),WA.room.area.onLeave("npcpidginzone").subscribe(L),WA.room.area.onEnter("npcfrogzone").subscribe(()=>{C=WA.ui.openPopup("npcfrogpopup","FROG: Hey, help me out here! The horse and quokka are making me spin this wheel to generate energy for the server.",[]);var e=WA.sound.loadSound("sound/npc/frog.mp3");e.play(d)}),WA.room.area.onLeave("npcfrogzone").subscribe(L),WA.room.area.onEnter("npcpanda").subscribe(()=>{C=WA.ui.openPopup("npcpandapopup","Friend, don't ask me about Sei, better find me a bamboo.",[]);var e=WA.sound.loadSound("sound/npc/panda.mp3");e.play(d)}),WA.room.area.onLeave("npcpanda").subscribe(L),WA.room.area.onEnter("npcjay").subscribe(()=>{C=WA.ui.openPopup("npcjaypopup","TEXT",[]);var e=WA.sound.loadSound("sound/npc/meat.mp3");e.play(d)}),WA.room.area.onLeave("npcjay").subscribe(L),WA.room.area.onEnter("bubble").subscribe(()=>{var e=WA.sound.loadSound("sound/npc/bubble.mp3");e.play(d),WA.player.onPlayerMove(t=>{l=t.x,c=t.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{var t=WA.sound.loadSound("sound/scan.wav");t.play(d),console.log(l,c),WA.room.website.create({name:"bubblerweb",url:"https://media.discordapp.net/attachments/1081590822379720724/1081947537352699914/bubblers.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("bubble").subscribe(()=>{v(),WA.room.website.delete("bubblerweb")}),WA.room.area.onEnter("woodenstatue").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1081590822379720724/1081981852493025300/woodenstatue.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("woodenstatue").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("shark").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1081590822379720724/1081947537843425350/sandshark.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("shark").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("crystal").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1081590822379720724/1081992872443789373/crystal.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("crystal").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("twistedtree").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1081590822379720724/1081995416826040361/tree.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("twistedtree").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("bushes").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1081590822379720724/1082000121409052763/bushes.png?width=596&height=675",position:{x:l+100,y:c-335,width:596,height:675},allowApi:!0})}})}),WA.room.area.onLeave("bushes").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("piramidmain").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081654218450010243/e2b43b93f01f5797.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("piramidmain").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("piramid1").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081655031121592320/2.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("piramid1").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("piramid2").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081655039891865660/3.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("piramid2").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("piramid3").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081655077820965006/4.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("piramid3").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("piramid4").subscribe(()=>{WA.player.onPlayerMove(e=>{l=e.x,c=e.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081655106652614746/5.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("piramid4").subscribe(()=>{v(),WA.room.website.delete("coWeb")}),WA.room.area.onEnter("bzzz").subscribe(()=>{var e=WA.sound.loadSound("sound/npc/bzzz.mp3");e.play(d),WA.player.onPlayerMove(t=>{l=t.x,c=t.y}),g=WA.ui.displayActionMessage({message:"Press the 'SPACE' to scan",callback:()=>{h=WA.sound.loadSound("sound/scan.wav").play(d),WA.room.website.create({name:"coWeb",url:"https://media.discordapp.net/attachments/1080545432163340309/1081655106652614746/5.png?width=911&height=676",position:{x:l+100,y:c-335,width:911,height:676},allowApi:!0})}})}),WA.room.area.onLeave("bzzz").subscribe(()=>{v(),WA.room.website.delete("coWeb"),re()}),WA.player.onPlayerMove(e=>{l=e.x,c=e.y,k=e.direction}),WA.room.area.onEnter("test").subscribe(()=>{console.log(l,c,k),WA.controls.disablePlayerControls(),WA.player.setOutlineColor(255,0,0),k==="left"?(console.log("nav is left"),I=l+400,G=c):k==="right"?(I=l-400,G=c,console.log("right")):k==="up"?(G=c+400,I=l,console.log("up")):k==="down"?(G=c-400,I=l,console.log("down")):console.log("error"),h=WA.sound.loadSound("sound/lab/fear.wav").play(d),h=WA.sound.loadSound("sound/lab/monster.wav").play(d),setTimeout(()=>{h=WA.sound.loadSound("sound/lab/scream.wav").play(d)},200),WA.player.moveTo(I,G,20),setTimeout(()=>{WA.controls.restorePlayerControls(),WA.player.removeOutlineColor()},2e3)}),WA.room.area.onEnter("teleport").subscribe(()=>{h=WA.sound.loadSound("sound/lab/fear.wav").play(d),WA.nav.goToRoom("https://play.workadventu.re/_/global/pepe17031.github.io/SeiGame/maps/map.tmj#start")}),Ye().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function L(){C!==void 0&&(C.close(),C=void 0)}function Ze(){_!==void 0&&(_.close(),_=void 0)}function v(){g!==void 0&&(g.remove(),g=void 0)}function re(){h!==void 0&&(WA.sound.loadSound(h).stop(),h=void 0)}var d={volume:.4,loop:!1,rate:1,detune:1,delay:0,seek:0,mute:!1};