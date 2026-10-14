// Sportyfy · admin dashboard (DEMO data: 38 seeded transactions + anything booked in this session)
function sim(n, a) {
  for (let i = 0; i < n; i++) {
    S.tx++;
    const x = a || A[(S.tx * 3) % A.length],
      fe = fee(x);
    x.ft = Math.min(x.mx, x.ft + 1);
    syncA(x);
    S.bk.unshift({
      ...x,
      id2: "SPY-" + String(S.tx).padStart(3, "0"),
      paid: x.p + fe,
      fee: fe,
      n: 1,
      at: now(),
      m: x.p ? "QRIS (demo)" : "Free",
      st: "Paid",
      day: 6,
      buyer: { name: "Demo buyer " + S.tx, email: "buyer" + S.tx + "@mail.com" },
      names: ["Demo buyer " + S.tx],
    });
  }
  draw();
}
function admin() {
  const L = allTx(),
    s = stats(L),
    promo = S.promoRev,
    rev = s.rev + promo,
    net = rev - s.gw,
    pops = {};
  L.filter((b) => b.st !== "Refunded").forEach((b) => (pops[b.t] = (pops[b.t] || 0) + b.n));
  const top = Object.entries(pops)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => [
      d,
      stats(L.filter((b) => b.day === i)).rev + (i === 6 ? promo : 0),
    ]),
    dm = Math.max(...days.map((x) => x[1]), 1);
  const line = (k, v, b, c) =>
    `<div class="row sb" style="font-size:13px;${b ? "font-weight:800;font-size:15px;" : ""}${c ? "color:" + c + ";" : ""}"><span>${k}</span><span>${v}</span></div>`;
  return `<div class="pad" style="padding-top:20px">${bk("profile")}<div class="row sb" style="margin:20px 0 4px"><h1>Admin<br>dashboard</h1><span class="badge" style="background:#FFF4D6">Demo data</span></div><div class="sub" style="margin-bottom:18px">Last 7 days · amounts in Rupiah</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">${kpi("Transactions", s.n)}${kpi("Booking value (GMV)", R(s.gmv))}${kpi("Sportyfy revenue", R(rev), "var(--navy)", "#fff")}${kpi("Est. net profit", R(net), "var(--lime)")}${kpi("Cancellations / refunds", s.cancel + " · " + R(s.refund))}${kpi("Active participants", 120 + s.buyers)}</div>
<div class="crd" style="padding:16px;margin:16px 0"><h3 style="margin-bottom:12px">Where the money goes</h3><div style="display:flex;flex-direction:column;gap:8px">${line("Participants paid (GMV)", R(s.gmv), 1)}${line("− Organizer payouts", R(s.gmv - s.svc - s.com), 0, "var(--mut)")}${line("Sportyfy revenue", R(rev), 1)}${line("   Commission (" + COMMISSION * 100 + "%)", R(s.com), 0, "var(--mut)")}${line("   Service fees", R(s.svc), 0, "var(--mut)")}${line("   Promotions", R(promo), 0, "var(--mut)")}${line("− Payment gateway cost (est.)", R(s.gw), 0, "var(--mut)")}<div style="border-top:1px dashed var(--line)"></div>${line("Est. net profit", R(net), 1)}</div><div class="cap" style="margin-top:10px;line-height:1.5">GMV is money passing through, not Sportyfy income. Net profit here is before salaries, marketing and other costs.</div></div>
<div class="crd" style="padding:16px;margin-bottom:16px"><h3 style="margin-bottom:12px">Revenue by day</h3><div class="row" style="align-items:flex-end;gap:8px;height:110px">${days.map(([d, v]) => `<div style="flex:1;text-align:center"><div style="height:${Math.max(4, (v / dm) * 90)}px;background:${d === "Sun" ? "var(--lime)" : "var(--blue)"};border-radius:6px 6px 2px 2px"></div><div class="cap" style="margin-top:4px">${d}</div></div>`).join("")}</div></div>
<div class="crd" style="padding:16px;margin-bottom:16px"><h3 style="margin-bottom:12px">Most popular activities</h3><div style="display:flex;flex-direction:column;gap:10px">${top.map(([t, n]) => `<div><div class="row sb" style="font-size:13px;font-weight:600;margin-bottom:4px"><span>${t}</span><span class="cap">${n} seats</span></div>${bar(n, top[0][1])}</div>`).join("")}</div></div>
<div class="crd" style="padding:16px;margin-bottom:16px"><h3 style="margin-bottom:12px">Revenue streams</h3>${[
    ["Transaction commission", "Charged to organizers", R(s.com), "Live"],
    ["Participant service fee", "Shown before payment", R(s.svc), "Live"],
    ["Promoted activities", "Organizers pay for visibility", R(promo), "Demo"],
    ["Court booking commission", "Needs venue partners", "—", "Planned"],
    ["Organizer premium plan", "Analytics, multi-activity tools", "—", "Planned"],
  ]
    .map(
      ([t, d, v, st]) =>
        `<div class="row sb" style="padding:9px 0;border-top:1px solid var(--line)"><div><b style="font-size:13px">${t}</b><div class="cap">${d}</div></div><div style="text-align:right"><b style="font-size:13px">${v}</b><div class="cap" style="font-weight:700;color:${st === "Live" ? "#3a8f00" : "var(--mut)"}">${st}</div></div></div>`,
    )
    .join("")}</div>
<div class="row" style="gap:8px;margin-bottom:20px"><button class="btn sm" style="flex:1" onclick="sim(10,A.find(a=>a.id===1))">+10 Skate Day bookings</button><button class="btn ol sm" style="flex:1" onclick="sim(10)">+10 mixed</button></div></div>`;
}
