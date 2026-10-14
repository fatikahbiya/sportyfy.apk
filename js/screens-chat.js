// Sportyfy · chat rooms (DEMO: messages live in the browser only, replies are simulated)
// Room ids:  c<index>   community group   (C in data.js)
//            a<id>      activity group     (only for activities you booked)
//            o<id>      direct message with the organizer of activity <id>
Object.assign(S,{msgs:{},unread:{c2:2,c0:1},room:null,typing:null});
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const hm=()=>new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
const unreadN=()=>Object.values(S.unread).reduce((s,n)=>s+n,0);

function roomInfo(id){const t=id[0],n=+id.slice(1);
 if(t==='c'){const c=C[n];return{id,k:'Community',n:c[0],sub:c[3]+' members',img:IMG.community[c[1]],s:c[1],link:`go('cdetail',${n})`,chips:['Anyone joining Sunday?','Where do we meet?','Count me in!']}}
 const a=A.find(x=>x.id===n);
 if(t==='a')return{id,k:'Activity',n:a.t,sub:a.d+' · '+a.tm+' · '+a.ft+' going',img:IMG.sport[a.s],s:a.s,link:`go('detail',${n})`,chips:['What should I bring?','On my way!','Running a bit late','Thanks!']};
 return{id,k:'Organizer',n:a.org,sub:'About '+a.t,img:IMG.sport[a.s],s:a.s,link:`go('detail',${n})`,chips:['Is it beginner friendly?','Can I bring a friend?','What should I bring?']}}
function allRooms(){const r=[];C.forEach((c,i)=>{if(S.cj[i])r.push(roomInfo('c'+i))});
 txList().filter(b=>b.st==='Paid').forEach(b=>{if(!r.find(x=>x.id==='a'+b.id))r.push(roomInfo('a'+b.id))});
 Object.keys(S.msgs).filter(k=>k[0]==='o').forEach(k=>r.push(roomInfo(k)));return r}
function seed(id){if(S.msgs[id])return;const t=id[0],a=t==='c'?null:A.find(x=>x.id===+id.slice(1));
 S.msgs[id]=t==='c'?[{n:'Raka',t:'Welcome to '+roomInfo(id).n+'! New faces are always welcome.',at:'09:10'},{n:'Aulia',t:'Is there spare gear I can borrow this week?',at:'09:24'},{n:'Raka',t:'Yes, just message here and we will sort it out.',at:'09:31'}]
 :t==='a'?[{n:a.org,t:'Hi everyone! See you at '+a.loc+'. Please arrive 10 minutes early.',at:'08:00'},{n:'Bagas',t:'Excited! First time joining.',at:'08:12'}]
 :[{n:a.org,t:'Hi! Thanks for your interest in '+a.t+'. How can I help?',at:'08:45'}]}
function openRoom(id){S.room=id;seed(id);S.unread[id]=0;go('chat');const m=$('#msgs');if(m)m.scrollTop=m.scrollHeight}
const pushMsg=(id,m)=>{seed(id);S.msgs[id].push(m)};

const bubble=(m,grp)=>m.me
 ?`<div style="align-self:flex-end;max-width:78%"><div style="background:var(--navy);color:#fff;padding:10px 14px;border-radius:18px 18px 4px 18px;font-size:14px;font-weight:500;line-height:1.4;word-break:break-word">${esc(m.t)}</div><div class="cap" style="text-align:right;margin-top:3px;font-size:10px">${m.at}</div></div>`
 :`<div style="align-self:flex-start;max-width:78%">${grp?`<div class="cap" style="font-weight:700;margin:0 0 3px 4px;color:var(--blue)">${esc(m.n)}</div>`:''}<div style="background:var(--w);border:1px solid var(--line);padding:10px 14px;border-radius:18px 18px 18px 4px;font-size:14px;font-weight:500;line-height:1.4;word-break:break-word">${esc(m.t)}</div><div class="cap" style="margin-top:3px;margin-left:4px;font-size:10px">${m.at}</div></div>`;
const msgsHtml=()=>`<div class="cap" style="text-align:center;font-size:10px;font-weight:700">TODAY · DEMO CHAT, MESSAGES STAY ON THIS DEVICE</div>${S.msgs[S.room].map(m=>bubble(m,S.room[0]!=='o')).join('')}${S.typing===S.room?'<div style="align-self:flex-start;background:var(--w);border:1px solid var(--line);border-radius:18px;padding:12px 14px"><div class="dots"><span></span><span></span><span></span></div></div>':''}`;
function drawChat(){const m=$('#msgs');if(!m)return;m.innerHTML=msgsHtml();m.scrollTop=m.scrollHeight}

function sendMsg(t){const i=$('#mi');t=(t||i.value).trim();if(!t)return;i.value='';pushMsg(S.room,{me:true,t,at:hm()});drawChat();reply(t)}
function reply(t){const id=S.room,tp=id[0],a=tp==='c'?null:A.find(x=>x.id===+id.slice(1)),who=tp==='c'?['Aulia','Bagas','Nadia'][Date.now()%3]:a.org,loc=a?a.loc:'the usual spot',
 ans=/bring|wear/i.test(t)?'Bring water, a towel and comfy shoes. Equipment is provided.':/late|way/i.test(t)?'No worries, we will save your spot!':/where|meet/i.test(t)?'We meet at '+loc+'. Look for the Sportyfy banner.':/thank/i.test(t)?'Anytime!':/beginner|friend/i.test(t)?'Yes, beginners and friends are welcome. Just book the extra spot in the app.':'Sounds good, see you there!';
 S.typing=id;drawChat();setTimeout(()=>{S.typing=null;pushMsg(id,{n:who,t:ans,at:hm()});S.tab==='chat'&&S.room===id?drawChat():S.unread[id]=(S.unread[id]||0)+1},1400)}

function chat(){const r=roomInfo(S.room);seed(S.room);return`<div style="height:100%;display:flex;flex-direction:column"><div class="row" style="padding:calc(14px + env(safe-area-inset-top,0px)) 16px 12px;gap:10px;border-bottom:1px solid var(--line);background:var(--w)"><button class="ib tap" style="background:var(--bg)" onclick="go('chats')">${ic('arrow-left')}</button><div class="ph ${r.s}" style="${pic(r.img)}width:40px;height:40px;border-radius:12px;flex:none"></div><div class="tap" style="flex:1;min-width:0" onclick="${r.link}"><div style="font-weight:800;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.n}</div><div class="cap" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.k} · ${r.sub}</div></div></div>
<div id="msgs" style="flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px">${msgsHtml()}</div>
<div style="padding:8px 12px calc(10px + env(safe-area-inset-bottom,0px));background:var(--w);border-top:1px solid var(--line)"><div class="h" style="padding:0 0 8px">${r.chips.map(c=>`<button class="chip" style="font-size:12px;padding:7px 12px" onclick="sendMsg('${c}')">${c}</button>`).join('')}</div><div class="row" style="gap:8px"><label class="search" style="flex:1;padding:11px 14px"><input id="mi" placeholder="Message" onkeydown="if(event.key==='Enter')sendMsg()"></label><button class="ib tap" style="background:var(--lime);width:46px;height:46px" onclick="sendMsg()">${ic('send')}</button></div></div></div>`}

function chats(){const l=allRooms();return`<div class="pad" style="padding-top:20px">${bk('home')}<h1 style="margin:20px 0 4px">Messages</h1><div class="sub" style="margin-bottom:18px">Your communities, activity groups and organizers.</div><div style="display:flex;flex-direction:column;gap:10px">${l.map(r=>{seed(r.id);const m=S.msgs[r.id],last=m[m.length-1],u=S.unread[r.id]||0;
return`<div class="crd row tap" onclick="openRoom('${r.id}')" style="padding:12px;gap:12px"><div class="ph ${r.s}" style="${pic(r.img)}width:52px;height:52px;border-radius:16px;flex:none"></div><div style="flex:1;min-width:0"><div class="row sb"><h3 style="font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.n}</h3><span class="cap" style="font-size:10px;flex:none">${last.at}</span></div><div class="cap" style="font-size:10px;font-weight:700;color:var(--blue)">${r.k}</div><div class="cap" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:${u?'var(--navy)':'var(--mut)'};font-weight:${u?700:500}">${last.me?'You: ':''}${esc(last.t)}</div></div>${u?`<span style="min-width:20px;height:20px;border-radius:10px;background:var(--or);color:#fff;font-size:11px;font-weight:800;display:grid;place-items:center;padding:0 6px">${u}</span>`:''}</div>`}).join('')||'<div class="sub" style="text-align:center;padding:40px 0">No chats yet. Join a community or book an activity.</div>'}</div></div>`}
