// Sportyfy · data
// Helpers, constants and dummy data
const $=s=>document.querySelector(s),R=n=>'Rp'+n.toLocaleString('en-US');
const SP=['Skateboard','Badminton','Basketball','Futsal','Running','Volleyball'],K=s=>s==='Skateboard'?'skate':s.toLowerCase();
// level: Beginner | Intermediate | Advanced   ·  dt: today | wkend | week   ·  mx = max participants, ft = already joined
const A=[
{id:1,t:'Beginner Skate Day',s:'skate',loc:'Skatepark, Surakarta',area:'Surakarta',d:'Sun, 18 Oct 2026',dt:'wkend',tm:'15:00–17:00',p:25000,lv:'Beginner',mx:10,ft:7,org:'Raka Pratama',rt:4.9,rv:32,desc:'A fun, beginner-friendly session for people trying skateboarding for the first time.'},
{id:2,t:'Badminton Open Play',s:'badminton',loc:'GOR Manahan',area:'Surakarta',d:'Tonight',dt:'today',tm:'19:00',p:25000,lv:'Intermediate',mx:12,ft:9,org:'Dimas Arya',rt:4.7,rv:58,desc:'Rotating doubles on two courts. Shuttlecocks provided.'},
{id:3,t:'Sunday Running Club',s:'running',loc:'Stadion Manahan',area:'Surakarta',d:'Sun',dt:'wkend',tm:'06:00',p:0,lv:'Beginner',mx:30,ft:18,org:'Solo Runners',rt:4.8,rv:120,desc:'An easy 5K loop with a coffee stop after. All paces welcome.'},
{id:4,t:'3v3 Street Hoops',s:'basketball',loc:'Lapangan Kottabarat',area:'Surakarta',d:'Sat',dt:'wkend',tm:'16:00',p:20000,lv:'Intermediate',mx:6,ft:5,org:'Hoops Jogja',rt:4.6,rv:41,desc:'Quick half-court games. Winners stay on.'},
{id:5,t:'Futsal Mix Night',s:'futsal',loc:'Solo Futsal Arena',area:'Sukoharjo',d:'Fri',dt:'week',tm:'20:00',p:30000,lv:'Intermediate',mx:10,ft:8,org:'Solo Futsal Squad',rt:4.5,rv:27,desc:'Mixed teams, friendly games, one hour on the pitch.'},
{id:6,t:'Weekend Fun Match',s:'badminton',loc:'GOR Manahan',area:'Surakarta',d:'Sat',dt:'wkend',tm:'09:00–11:00',p:35000,lv:'Advanced',mx:12,ft:8,org:'Fatikah',mine:true,rt:4.8,rv:14,desc:'Competitive but friendly matches for experienced players.'},
{id:7,t:'Campus Spike Session',s:'volleyball',loc:'GOR UNS',area:'Surakarta',d:'Sun',dt:'wkend',tm:'16:00',p:15000,lv:'Beginner',mx:14,ft:10,org:'Spike Club Kampus',rt:4.7,rv:19,desc:'Learn the basics of serving and spiking, then play short games.'}];
const syncA=a=>{a.sl=a.ft+'/'+a.mx;a.tag=a.lv==='Beginner'?'Beginner friendly':''};A.forEach(syncA);
const S={tab:'home',cat:'All',free:false,fav:{},bk:[],tab2:'Upcoming',cur:null,pm:'GoPay',tx:0,sub:'',sheet:0};
const fee=a=>a.p?Math.round(a.p*.1):0;
S.n=1;S.q='';S.beg=0;S.u25=0;
const C=[['Solo Runners','running','Stadion Manahan, Surakarta',530,'Every Sun · 06:00 · Stadion Manahan',4.8],['Solo Badminton Community','badminton','GOR Manahan, Surakarta',312,'Every Tue & Thu · 19:00 · GOR Manahan',4.7],['Skateboard Solo','skate','Skatepark, Surakarta',245,'Every Sun · 15:00 · Skatepark',4.9],['Solo Futsal Squad','futsal','Surakarta',198,'Every Fri · 20:00 · Solo Futsal Arena',4.5],['Hoops Jogja','basketball','Yogyakarta',420,'Every Sat · 16:00 · Lapangan Kottabarat',4.6],['Spike Club Kampus','volleyball','UNS, Surakarta',156,'Every Sun · 16:00 · GOR UNS',4.7]];

// ---- Receipts / transactions ----
const now=()=>new Date().toLocaleString('en-GB',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});
function dlRc(){const t=document.title;document.title='Sportyfy-Receipt-'+S.rc.id2;window.print();document.title=t}

// ---- Business model (change the rates here) ----
const COMMISSION=0.10;   // Sportyfy commission on the activity fee, charged to the organizer
const PG_FEE=0.007;      // demo estimate of payment-gateway cost (share of GMV)
// Participant service fee = 10% of the activity fee, see fee() above

Object.assign(S,{buyer:{name:'Fatikah',email:'fatikah@mail.com'},names:[],err:0,paying:0,
  f:{lv:'All',area:'All',dt:'Any',pr:'Any'},exm:'Activities',cj:{0:true,2:true},rv:{},star:5,rt:null,promoRev:0,rep:'',
  cf:{t:'',s:'badminton',lv:'Beginner',d:'Sat, 24 Oct 2026',tm:'09:00–11:00',loc:'',p:'25000',mx:'12',desc:''}});

// Seed reviews shown on activity pages (demo)
const REV=[['Aulia',5,'Super friendly organizer, felt safe the whole time.'],['Bagas',4,'Great vibes. Come 10 minutes early.'],['Nadia',5,'Easy to join and I met a lot of new people.']];

// ---- Demo transactions ----
// Past transactions of the demo user (shown in Bookings > Completed and Transaction history)
const ME={name:'Fatikah',email:'fatikah@mail.com'};
const PAST=[
 {...A[1],id2:'SPY-000',paid:27500,fee:2500,n:1,st:'Paid',m:'QRIS (demo)',at:'10 Oct 2026, 17:42',d:'Sat, 10 Oct 2026',buyer:ME,names:['Fatikah'],day:5},
 {...A[2],id2:'SPY-099',paid:0,fee:0,n:1,st:'Paid',m:'Free',at:'4 Oct 2026, 20:10',d:'Sun, 4 Oct 2026',buyer:ME,names:['Fatikah'],day:6}];
// 38 other users' transactions so the admin dashboard has realistic numbers
const SEED=Array.from({length:38},(_,i)=>{const a=A[i%A.length],n=1+(i%4===0?1:0),fe=fee(a)*n;
 return{...a,id2:'SPY-'+String(100+i),n,fee:fe,paid:a.p*n+fe,st:i%13===5?'Refunded':'Paid',m:a.p?'QRIS (demo)':'Free',at:'—',day:i%7,
 buyer:{name:'Demo user '+(i+1),email:'user'+(i+1)+'@mail.com'},names:['Demo user '+(i+1)]}});
const txList=()=>[...S.bk,...PAST];          // the demo user's own transactions
const allTx=()=>[...S.bk,...PAST,...SEED];    // everyone (admin)
const byId=id=>allTx().find(b=>b.id2===id);
const openTk=id=>{S.rc=byId(id);go('ticket')};
const openRcId=id=>{S.rc=byId(id);go('receipt')};

// GMV = what participants paid. Revenue = commission + service fees. Net profit = revenue - costs.
function stats(L){const ok=L.filter(b=>b.st!=='Refunded'),rf=L.filter(b=>b.st==='Refunded'),
 gmv=ok.reduce((s,b)=>s+b.paid,0),svc=ok.reduce((s,b)=>s+b.fee,0),com=Math.round((gmv-svc)*COMMISSION);
 return{n:L.length,ok:ok.length,gmv,svc,com,rev:svc+com,gw:Math.round(gmv*PG_FEE),cancel:rf.length,refund:rf.reduce((s,b)=>s+b.paid,0),buyers:new Set(L.map(b=>b.buyer.email)).size}}
