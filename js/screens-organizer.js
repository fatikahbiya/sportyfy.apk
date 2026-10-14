// Sportyfy · organizer studio (Create Activity, manage participants, earnings)
const myTx = (ids) => allTx().filter((b) => ids.includes(b.id) && b.st !== "Refunded");
const earn = (L) => {
  const g = L.reduce((s, b) => s + b.paid - b.fee, 0),
    c = Math.round(g * COMMISSION);
  return { g, c, net: g - c };
};
const kpi = (l, v, bg = "var(--w)", c = "var(--navy)") =>
  `<div style="background:${bg};color:${c};border:1px solid var(--line);border-radius:18px;padding:14px"><div class="cap" style="color:${c === "#fff" ? "#fff9" : "var(--mut)"}">${l}</div><div style="font-size:19px;font-weight:800;letter-spacing:-.5px;margin-top:2px">${v}</div></div>`;

function studio() {
  const mine = A.filter((a) => a.mine),
    e = earn(myTx(mine.map((a) => a.id)));
  return `<div class="pad" style="padding-top:20px">${bk("profile")}<div class="row sb" style="margin:20px 0 6px"><h1>Organizer<br>studio</h1><span class="badge" style="background:#EAF1FF;color:var(--blue)">${ic("badge-check")} Verified</span></div><div class="sub" style="margin-bottom:18px">Create activities and track what you earn.</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">${kpi("Activity fees collected", R(e.g))}${kpi("Sportyfy commission (" + COMMISSION * 100 + "%)", "− " + R(e.c))}</div>${kpi("Your payout", R(e.net), "var(--navy)", "#fff")}
<button class="btn" style="margin:16px 0 22px" onclick="go('create')">${ic("plus")}Create activity</button>
${secT("Your activities")}<div style="display:flex;flex-direction:column;gap:10px;margin-top:12px">${mine.map((a) => `<div class="crd" style="padding:14px"><div class="row sb"><h3>${a.t}</h3>${a.promo ? '<span class="badge" style="background:var(--vi);color:#fff">Promoted</span>' : ""}</div><div class="cap" style="margin:4px 0 10px">${a.d} · ${a.tm} · ${pk(a)}</div>${bar(a.ft, a.mx)}<div class="row sb" style="margin-top:8px"><span class="cap">${a.ft}/${a.mx} joined</span><button class="btn dk sm" onclick="go('manage',${a.id})">Manage</button></div></div>`).join("")}</div></div>`;
}

function manage() {
  const a = cur(),
    L = allTx().filter((b) => b.id === a.id),
    e = earn(L.filter((b) => b.st !== "Refunded"));
  return `<div class="pad" style="padding-top:20px">${bk("studio")}<h1 style="margin:20px 0 6px;font-size:28px">${a.t}</h1><div class="sub" style="margin-bottom:16px">${a.d} · ${a.tm} · ${a.loc}</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px">${kpi("Participants", a.ft + "/" + a.mx)}${kpi("Your payout", R(e.net))}</div>
<div class="crd row sb" style="padding:14px 16px;margin-bottom:20px"><div><h3>Promote this activity</h3><div class="cap">Shown first in Explore · Rp50,000 (demo)</div></div><button class="chip ${a.promo ? "on" : ""}" onclick="togglePromo(${a.id})">${a.promo ? "Promoted" : "Promote"}</button></div>
${secT("Participants & bookings")}<div style="display:flex;flex-direction:column;gap:8px;margin-top:12px">${L.map((b) => `<div class="crd row sb" style="padding:12px 14px"><div><b style="font-size:13px">${b.buyer.name}</b> <span class="cap">× ${b.n}</span><div class="cap">${b.buyer.email}</div></div><div style="text-align:right"><b style="font-size:13px">${R(b.paid - b.fee)}</b><div style="margin-top:3px">${stChip(b.st)}</div></div></div>`).join("") || '<div class="sub">No bookings yet.</div>'}</div></div>`;
}
function togglePromo(id) {
  const a = A.find((x) => x.id === id);
  a.promo = !a.promo;
  S.promoRev += a.promo ? 50000 : -50000;
  draw();
}

function create() {
  const f = S.cf,
    p = +f.p || 0;
  return `<div class="pad" style="padding-top:20px">${bk("studio")}<h1 style="margin:20px 0">New<br>activity</h1>${field("Title", "S.cf", f, "t", "text", "e.g. Sunday Fun Run")}<div class="cap" style="font-weight:700;margin-bottom:8px">Sport</div>${chips(
    SP.map(K).map((x) => x),
    f.s,
    "S.cf.s",
  )}<div class="cap" style="font-weight:700;margin:14px 0 8px">Level</div>${chips(["Beginner", "Intermediate", "Advanced"], f.lv, "S.cf.lv")}<div style="height:14px"></div>${field("Date", "S.cf", f, "d")}${field("Time", "S.cf", f, "tm")}${field("Location", "S.cf", f, "loc", "text", "Venue name")}${field("Price per participant (Rp)", "S.cf", f, "p", "number", "0 = free", "$('#pv').textContent=R(Math.round((+this.value||0)*(1-COMMISSION)))")}${field("Max participants", "S.cf", f, "mx", "number")}${field("Description", "S.cf", f, "desc", "text", "What will people do?")}
<div class="crd row sb" style="padding:14px 16px;margin:4px 0 110px"><span class="cap">You receive after ${COMMISSION * 100}% commission</span><b id="pv">${R(Math.round(p * (1 - COMMISSION)))}</b></div></div><div class="cta"><button class="btn" onclick="publish()">Publish activity</button></div>`;
}
function publish() {
  const f = S.cf,
    p = +f.p,
    mx = +f.mx;
  if (!f.t.trim() || !f.loc.trim() || isNaN(p) || p < 0 || !(mx >= 2)) {
    toast("Please fill title, location, price and quota");
    return;
  }
  const a = {
    id: A.length + 1,
    t: f.t.trim(),
    s: f.s,
    loc: f.loc.trim(),
    area: "Surakarta",
    d: f.d,
    dt: "week",
    tm: f.tm,
    p,
    lv: f.lv,
    mx,
    ft: 0,
    org: S.buyer.name,
    mine: true,
    rt: 0,
    rv: 0,
    desc: f.desc || "New activity on Sportyfy.",
  };
  syncA(a);
  A.push(a);
  S.cf = { ...S.cf, t: "", loc: "", desc: "" };
  toast("Activity published");
  go("studio");
}
