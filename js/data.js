// Sportyfy · data
// Helpers, constants and dummy data
const $=s=>document.querySelector(s),R=n=>'Rp'+n.toLocaleString('en-US');
const SP=['Skateboard','Badminton','Basketball','Futsal','Running','Volleyball'],K=s=>s==='Skateboard'?'skate':s.toLowerCase();
const A=[{id:1,t:'Beginner Skate Day',s:'skate',loc:'Skatepark, Surakarta',d:'Sun, 18 Oct 2026',tm:'15:00–17:00',p:25000,tag:'Beginner friendly',sl:'7/10'},
{id:2,t:'Badminton Open Play',s:'badminton',loc:'GOR Manahan',d:'Tonight',tm:'19:00',p:25000,sl:'9/12'},
{id:3,t:'Sunday Running Club',s:'running',loc:'Stadion Manahan',d:'Sun',tm:'06:00',p:0,sl:'18/30'},
{id:4,t:'3v3 Street Hoops',s:'basketball',loc:'Lapangan Kottabarat',d:'Sat',tm:'16:00',p:20000,sl:'5/6'},
{id:5,t:'Futsal Mix Night',s:'futsal',loc:'Solo Futsal Arena',d:'Fri',tm:'20:00',p:30000,sl:'8/10'}];
const S={tab:'home',cat:'All',free:false,fav:{},bk:[],tab2:'Upcoming',cur:null,pm:'GoPay',tx:0,sub:'',sheet:0};
const fee=a=>a.p?Math.round(a.p*.1):0;
S.n=1;S.q='';S.beg=0;S.u25=0;
const C=[['Solo Runners','running','Stadion Manahan, Surakarta',530],['Solo Badminton Community','badminton','GOR Manahan, Surakarta',312],['Skateboard Solo','skate','Skatepark, Surakarta',245],['Solo Futsal Squad','futsal','Surakarta',198],['Hoops Jogja','basketball','Yogyakarta',420],['Spike Club Kampus','volleyball','UNS, Surakarta',156]];
