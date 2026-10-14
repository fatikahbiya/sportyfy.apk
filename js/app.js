// Sportyfy · app
function go(t,c){if(t==='detail')S.n=1;S.tab=t;if(c!==undefined)S.cur=c;draw()}
function draw(){const t=S.tab;$('#v').outerHTML=`<div id="v">${SCR[t]()}</div>`;
$('#n').style.display=MAIN.includes(t)?'flex':'none';
$('#n').innerHTML=[['home','Home','house'],['explore','Explore','compass'],['bookings','Bookings','ticket'],['community','Community','users'],['profile','Profile','user']].map(([k,l,i])=>`<button class="${t===k?'on':''}" onclick="go('${k}')">${ic(i,'style="width:22px;height:22px"')}${l}</button>`).join('');
$('#sh').innerHTML=S.sheet?sheet():'';lucide&&lucide.createIcons()}
const SCR={home,explore,detail,checkout,success,bookings,community,profile,splash,onboard,login,register,search,booking,payment,cdetail,notif,txh};
S.tab='splash';draw();setTimeout(()=>{if(S.tab==='splash')go('onboard')},1600);
