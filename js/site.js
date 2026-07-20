/* ============================================================
   FREAKYVERSE — logique du site
   Le CONTENU (personnages, mondes, galeries…) est dans js/data/
   Ne modifiez ce fichier que pour changer le comportement du site.
   ============================================================ */
const FV=window.FV;
const ARCS=FV.ARCS, CINES=FV.CINES, GALLERY=FV.GALLERY, CHARS=FV.CHARS, WORLDS=FV.WORLDS, PASS=FV.PASS;

function pixelFace(p){
  // p: {bg, hair, skin, eye, mouth, hairRows}
  return `<svg class="face" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
  <rect width="8" height="8" fill="${p.bg}"/>
  <rect x="1" y="1" width="6" height="${p.hairRows||3}" fill="${p.hair}"/>
  <rect x="1" y="${1+(p.hairRows||3)}" width="6" height="${6-(p.hairRows||3)}" fill="${p.skin}"/>
  <rect x="2" y="4" width="1" height="1" fill="${p.eye}"/>
  <rect x="5" y="4" width="1" height="1" fill="${p.eye}"/>
  <rect x="3" y="6" width="2" height="1" fill="${p.mouth}"/>
  ${p.extra||""}
  </svg>`;
}


/* ================= AMBIENT CANVAS ================= */
const cv = document.getElementById('sky'), cx = cv.getContext('2d');
let stars=[], dust=[], shoot=null, W2,H2;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function resize(){W2=cv.width=innerWidth;H2=cv.height=innerHeight;
  stars=Array.from({length:Math.min(150,W2/9)},()=>({x:Math.random()*W2,y:Math.random()*H2,r:Math.random()*1.3+.3,p:Math.random()*Math.PI*2,s:.4+Math.random()*1.4}));
  dust=Array.from({length:34},()=>({x:Math.random()*W2,y:Math.random()*H2,r:Math.random()*2+1,vy:.12+Math.random()*.3,vx:(Math.random()-.5)*.14,a:.08+Math.random()*.2}));
}
addEventListener('resize',resize);resize();
function tick(t){
  cx.clearRect(0,0,W2,H2);
  for(const s of stars){
    const tw=.35+.65*Math.abs(Math.sin(t/1400*s.s+s.p));
    cx.globalAlpha=tw*.8; cx.fillStyle='#cfeef0';
    cx.beginPath();cx.arc(s.x,s.y,s.r,0,7);cx.fill();
  }
  cx.globalAlpha=1;
  for(const d of dust){
    d.y-=d.vy; d.x+=d.vx;
    if(d.y<-10){d.y=H2+10;d.x=Math.random()*W2}
    cx.globalAlpha=d.a; cx.fillStyle='#3fe8d8';
    cx.beginPath();cx.arc(d.x,d.y,d.r,0,7);cx.fill();
  }
  if(!shoot && Math.random()<.0025) shoot={x:Math.random()*W2*.8,y:Math.random()*H2*.3,l:0};
  if(shoot){
    shoot.l+=14; const ex=shoot.x+shoot.l, ey=shoot.y+shoot.l*.35;
    const g=cx.createLinearGradient(shoot.x,shoot.y,ex,ey);
    g.addColorStop(0,'rgba(63,232,216,0)');g.addColorStop(1,'rgba(220,255,250,.9)');
    cx.globalAlpha=1;cx.strokeStyle=g;cx.lineWidth=1.6;
    cx.beginPath();cx.moveTo(shoot.x,shoot.y);cx.lineTo(ex,ey);cx.stroke();
    if(shoot.l>260)shoot=null;
  }
  cx.globalAlpha=1;
  if(!reduced) requestAnimationFrame(tick);
}
if(!reduced) requestAnimationFrame(tick); else tick(0);

/* mouse parallax on fog + hero art */
if(!reduced){
  addEventListener('mousemove',e=>{
    const nx=(e.clientX/innerWidth-.5), ny=(e.clientY/innerHeight-.5);
    gsap.to('.f1',{x:nx*30,y:ny*20,duration:2,ease:'power2.out'});
    gsap.to('.f2',{x:nx*-42,y:ny*-26,duration:2.4,ease:'power2.out'});
    gsap.to('#heroScene',{x:nx*-18,y:ny*-10,duration:1.6,ease:'power2.out'});
  });
}

/* ================= INTRO SEQUENCE ================= */
const intro=document.getElementById('intro'), iLogo=document.getElementById('introLogo'),
      nav=document.getElementById('nav'), navLogo=document.getElementById('navLogo');
document.body.style.overflow='hidden';
gsap.to(iLogo,{y:-14,duration:2.6,yoyo:true,repeat:-1,ease:'sine.inOut'});
gsap.fromTo(iLogo,{opacity:0,scale:.92,filter:'blur(14px) drop-shadow(0 0 60px rgba(63,232,216,.35))'},
  {opacity:1,scale:1,filter:'blur(0px) drop-shadow(0 0 60px rgba(63,232,216,.35))',duration:1.8,ease:'power3.out'});
let entered=false;
function enter(){
  if(entered)return; entered=true;
  gsap.killTweensOf(iLogo);
  const r=navLogo.getBoundingClientRect(), ir=iLogo.getBoundingClientRect();
  const tl=gsap.timeline({defaults:{ease:'power3.inOut'}});
  tl.to(iLogo,{
      x:r.left+r.width/2-(ir.left+ir.width/2),
      y:r.top+r.height/2-(ir.top+ir.height/2),
      scale:r.width/ir.width, duration:1.5},0)
    .to(intro,{background:'transparent',duration:1.4},.2)
    .add(()=>{nav.classList.add('on')}, .9)
    .to(intro,{opacity:0,duration:.6,onComplete:()=>{intro.remove();document.body.style.overflow=''}},1.5)
    .add(()=>{if(typeof SND!=='undefined'&&SND.on)SND.swell()},.3)
    .add(revealHero,1.1);
}
intro.addEventListener('click',enter);
setTimeout(enter, 3400);

function revealHero(){
  const words=document.querySelectorAll('#heroTitle .w span');
  const tl=gsap.timeline();
  tl.to('#heroEyebrow',{opacity:1,duration:.8})
    .to(words,{y:0,duration:1,stagger:.07,ease:'power4.out'},'-=.4')
    .to('#heroSub',{opacity:1,duration:1},'-=.5')
    .to('#heroRow',{opacity:1,duration:.9},'-=.6')
    .to('#scrollcue',{opacity:1,duration:1},'-=.4');
}
/* split hero title into words */
const ht=document.getElementById('heroTitle');
ht.innerHTML=ht.innerHTML.split(/\s+/).map(w=>`<span class="w"><span>${w}</span></span>`).join(' ');

/* ================= SCROLL REVEALS ================= */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

/* hero art slow parallax on scroll */
gsap.registerPlugin(ScrollTrigger);
if(!reduced){
  gsap.to('#heroScene',{yPercent:14,ease:'none',scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}});
}

/* ================= CONSTELLATION LINES ================= */
function drawConstellation(){
  const svg=document.getElementById('constellation');
  if(innerWidth<961){svg.innerHTML='';return}
  const cos=document.getElementById('cosmos').getBoundingClientRect();
  const pts=[...document.querySelectorAll('.world .orb')].map(o=>{
    const r=o.getBoundingClientRect();
    return [r.left+r.width/2-cos.left, r.top+r.height/2-cos.top];
  });
  svg.setAttribute('viewBox',`0 0 ${cos.width} ${cos.height}`);
  let h='';
  for(let i=0;i<pts.length-1;i++)
    h+=`<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[i+1][0]}" y2="${pts[i+1][1]}"/>`;
  svg.innerHTML=h;
}
addEventListener('resize',drawConstellation);
setTimeout(drawConstellation,600);

/* ================= BUILD SECTIONS ================= */
/* characters */
const cg=document.getElementById('chargrid');
const visual=c=>c.img?`<img class="face" src="${c.img}" alt="${c.name}">`:pixelFace(c.face);

/* --- personnages ajoutés par les joueurs (stockés dans ce navigateur) --- */
const STORE='fv_chars';
let memStore=[];
function loadSaved(){try{return JSON.parse(localStorage.getItem(STORE)||'[]')}catch(e){return memStore}}
function persist(list){try{localStorage.setItem(STORE,JSON.stringify(list))}catch(e){memStore=list}}
let SAVED=loadSaved();
CHARS.push(...SAVED);

function renderChars(){
  cg.innerHTML=CHARS.map((c,i)=>`
  <div class="char" style="--cg:${c.glow}" data-char="${i}">
    <div class="halo"></div>
    ${visual(c)}
    <div class="meta">
      <div class="cname">${c.name}</div>
      <div class="cfac">${c.rp}</div>
      <div class="cquote">${c.quote||''}</div>
    </div>
  </div>`).join('')+`
  <div class="char add" id="addChar">
    <div class="plus">+</div>
    <div class="meta">
      <div class="cname">Ajouter son personnage</div>
      <div class="cfac">Réservé aux joueurs</div>
    </div>
  </div>`;
  document.getElementById('addChar').addEventListener('click',()=>{
    document.getElementById('pwErr').textContent='';
    document.getElementById('pwInput').value='';
    openOv('pwGate');
    setTimeout(()=>document.getElementById('pwInput').focus(),150);
  });
}
renderChars();

/* cinématiques par arc */
document.getElementById('cineArcs').innerHTML=ARCS.map(a=>{
  const items=CINES[a.id]||[];
  const body=items.length
    ? `<div class="cinerow">${items.map(c=>`
        <div class="cine" data-yt="${c.yt||''}" style="background-image:linear-gradient(rgba(2,10,12,.25),rgba(2,10,12,.25)),url('${c.img}')">
          <span class="badge">${c.badge}</span>
          <div class="shine"></div><div class="play"></div>
          <div class="cmeta"><div class="ct">${c.t}</div><div class="cd">${c.d}</div></div>
        </div>`).join('')}</div>`
    : `<div class="empty"><b>Prochainement</b>Les cinématiques de cet arc seront bientôt projetées ici.</div>`;
  return `<div class="archead" style="--arc:${a.color}"><span class="dot"></span>${a.name}</div>${body}`;
}).join('');

/* galerie par arc */
document.getElementById('galArcs').innerHTML=ARCS.map(a=>{
  const items=GALLERY[a.id]||[];
  const body=items.length
    ? `<div class="masonry">${items.map(g=>`
        <figure class="tile" data-cap="${g.cap}" data-img="${g.img}"><img src="${g.img}" alt="${g.cap}" loading="lazy"></figure>`).join('')}</div>`
    : `<div class="empty"><b>Galerie en préparation</b>Les fan arts et concept arts de cet arc arriveront bientôt.</div>`;
  return `<div class="archead" style="--arc:${a.color}"><span class="dot"></span>${a.name}</div>${body}`;
}).join('');

/* ================= OVERLAYS ================= */
function openOv(id){document.getElementById(id).classList.add('open');document.body.style.overflow='hidden';if(typeof SND!=='undefined'&&SND.on)SND.open()}
function closeOv(id){document.getElementById(id).classList.remove('open');document.body.style.overflow='';if(typeof SND!=='undefined'&&SND.on)SND.close()}
document.querySelectorAll('.ovclose').forEach(b=>b.addEventListener('click',()=>closeOv(b.dataset.close)));
document.querySelectorAll('.overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)closeOv(o.id)}));
addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.overlay.open').forEach(o=>closeOv(o.id))});

/* monde */
const lore=s=>(s||'').replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g,'<button class="lore" data-codex="$1">$2</button>');
let curWorld=null;
function showCodex(entry){
  document.getElementById('codexPanel').innerHTML=`
    <div class="eyebrow">${entry.type||'Archive'}</div>
    <h2>${entry.name}</h2>
    ${entry.desc?`<div class="lead" style="margin-top:1.2rem">${entry.desc}</div>`:`<div class="empty" style="margin-top:2.4rem"><b>Coming soon</b>Cette archive sera déclassifiée prochainement…</div>`}
    ${entry.imgs&&entry.imgs.length?`<div class="ovsec"><h4>Visuels</h4><div class="ovgal">${entry.imgs.map(x=>`<img src="${x.img||x}" data-img="${x.img||x}" data-cap="${x.cap||entry.name}" alt="">`).join('')}</div></div>`:''}`;
  openOv('codexSheet');
}
const PEEK_FALLBACK={
  ft1:`<svg class="face" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect width="8" height="8" fill="#20343a"/><rect x="1" y="1" width="6" height="3" fill="#0e6e64"/><rect x="1" y="4" width="6" height="3" fill="#e8c9a8"/><rect x="2" y="4" width="1" height="1" fill="#0b1d20"/><rect x="5" y="4" width="1" height="1" fill="#0b1d20"/><rect x="3" y="6" width="2" height="1" fill="#a86e50"/></svg>`,
  ft2:`<svg class="face" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect width="8" height="8" fill="#141a2e"/><rect x="1" y="1" width="6" height="3" fill="#2d3f77"/><rect x="1" y="4" width="6" height="3" fill="#d9b8ff"/><rect x="2" y="4" width="1" height="1" fill="#0b0f20"/><rect x="5" y="4" width="1" height="1" fill="#0b0f20"/><rect x="2" y="6" width="4" height="1" fill="#6a4b9e"/></svg>`,
  circus:`<svg class="face" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect width="8" height="8" fill="#301212"/><rect x="1" y="1" width="6" height="2" fill="#ff6b6b"/><rect x="1" y="3" width="6" height="4" fill="#f3f3f3"/><rect x="2" y="4" width="1" height="1" fill="#7a1414"/><rect x="5" y="4" width="1" height="1" fill="#7a1414"/><rect x="3" y="6" width="2" height="1" fill="#e0475b"/></svg>`
};
document.querySelectorAll('.world').forEach(w=>{
  const peek=w.querySelector('.peek');
  if(peek){
    w.addEventListener('mouseenter',()=>{
      const id=w.dataset.world;
      const pool=CHARS.filter(c=>(c.arcs||[]).includes(id));
      if(pool.length){
        const c=pool[Math.floor(Math.random()*pool.length)];
        peek.innerHTML=c.img?`<img class="face" src="${c.img}" alt="${c.name}">`:pixelFace(c.face);
      }else{
        peek.innerHTML=PEEK_FALLBACK[id]||'';
      }
    });
  }
});
document.querySelectorAll('.world').forEach(w=>w.addEventListener('click',()=>{
  const d=WORLDS[w.dataset.world];
  if(!d)return;
  curWorld=w.dataset.world;
  document.documentElement.style.setProperty('--accent',d.accent);
  if(d.soon){
    document.getElementById('worldPanel').innerHTML=`
      <div class="eyebrow">${d.eyebrow}</div>
      <h2>${d.title}</h2>
      <p class="lead" style="font-size:1.15rem;color:var(--white);font-weight:400">${d.tag}</p>
      <div class="empty" style="margin-top:3rem"><b>Coming soon</b>Les portes de ce monde ne sont pas encore ouvertes. Son histoire sera révélée prochainement…</div>`;
    openOv('worldOverlay');
    return;
  }
  document.getElementById('worldPanel').innerHTML=`
    <div class="eyebrow">${d.eyebrow}</div>
    <h2>${d.title}</h2>
    <p class="lead" style="font-size:1.15rem;color:var(--white);font-weight:400">${d.tag}</p>
    <div class="lead" style="margin-top:1.2rem">${lore(d.desc)}</div>
    <div class="ovsec"><h4>Chronologie</h4>
      <div class="timeline">${d.tl.map(([t,s])=>`<div class="tl"><b>${t}</b><span>${lore(s)}</span></div>`).join('')}</div>
    </div>
    <div class="ovsec"><h4>Archives</h4>
      ${(cx=>cx.length?`<div class="codexgrid">${cx.map(x=>`
        <button class="codexcard" data-codex="${x.id}">
          <span class="ctype">${x.type||'Entrée'}</span>
          <span class="cxname">${x.name}</span>
        </button>`).join('')}</div>`
        :`<div class="empty"><b>Archives en préparation</b>Les secrets de ce monde — lieux, factions, mystères — seront consignés ici au fil des révélations.</div>`)(d.codex||[])}
    </div>
    <div class="ovsec"><h4>Personnages liés</h4>
      ${(()=>{const wc=CHARS.filter(c=>(c.arcs||[]).includes(w.dataset.world));
        return wc.length?`<div class="chips">${wc.map(c=>`<button class="chip link" data-char-id="${c.id}">${c.name} ↗</button>`).join('')}</div>`
        :`<p class="lead" style="font-style:italic;color:var(--dim)">Les habitants de ce monde seront bientôt révélés.</p>`})()}
    </div>
    <div class="ovsec"><h4>Cinématiques</h4>
      ${(cs=>cs.length?`<div class="cinerow">${cs.map(c=>`
        <div class="cine" data-yt="${c.yt||''}" style="background-image:linear-gradient(rgba(2,10,12,.25),rgba(2,10,12,.25)),url('${c.img}')">
          <span class="badge">${c.badge}</span><div class="shine"></div><div class="play"></div>
          <div class="cmeta"><div class="ct">${c.t}</div><div class="cd">${c.d}</div></div>
        </div>`).join('')}</div>`
        :`<div class="empty"><b>Prochainement</b>Les cinématiques de cet arc seront bientôt projetées ici.</div>`)(CINES[w.dataset.world]||[])}
    </div>
    <div class="ovsec"><h4>Galerie du monde</h4>
      ${(g=>g.length?`<div class="ovgal">${g.map(x=>`<img src="${x.img}" alt="${x.cap}" data-cap="${x.cap}" data-img="${x.img}">`).join('')}</div>`
        :`<div class="empty"><b>En préparation</b>Les visuels de ce monde arriveront bientôt.</div>`)(GALLERY[w.dataset.world]||[])}
    </div>`;
  openOv('worldOverlay');
}));
document.getElementById('worldPanel').addEventListener('click',e=>{
  if(e.target.closest('[data-goto-chars]')){
    closeOv('worldOverlay');
    document.getElementById('personnages').scrollIntoView({behavior:'smooth'});
    return;
  }
  const cx=e.target.closest('[data-codex]');
  if(cx){
    const entry=(WORLDS[curWorld]?.codex||[]).find(x=>x.id===cx.dataset.codex);
    if(entry)showCodex(entry);
    return;
  }
  const im=e.target.closest('.ovgal img');
  if(im){
    document.getElementById('lbimg').src=im.dataset.img;
    document.getElementById('lbcap').textContent=im.dataset.cap||'';
    openOv('lightbox');return;
  }
  const b=e.target.closest('.chip.link'); if(!b)return;
  const c=CHARS.find(x=>x.id===b.dataset.charId);
  if(c){closeOv('worldOverlay');showChar(c);}
});

/* fiche personnage */
function showChar(c){
  document.documentElement.style.setProperty('--accent',c.glow);
  const relHtml = c.rel.length
    ? `<div class="chips">${c.rel.map(r=>Array.isArray(r)
        ?`<button class="chip link" data-goto="${r[1]}">${r[0]} ↗</button>`
        :`<span class="chip">${r}</span>`).join('')}</div>`
    : `<p class="lead" style="font-style:italic;color:var(--dim)">Aucune relation connue… pour le moment.</p>`;
  document.getElementById('charPanel').innerHTML=`
    <div class="sheettop">
      ${visual(c)}
      <div>
        <div class="eyebrow">${c.rp}</div>
        <h2>${c.name}</h2>
        <blockquote>${c.quote}</blockquote>
      </div>
    </div>
    <div class="ovsec"><h4>Histoire</h4><div class="lead">${c.desc}</div></div>
    ${c.perso?`<div class="ovsec"><h4>Personnalité</h4><p class="lead">${c.perso}</p></div>`:''}
    <div class="ovsec"><h4>Relations</h4>${relHtml}</div>
    <div class="ovsec"><h4>Anecdotes</h4>
      <ul class="funlist">${c.fun.map(f=>`<li>${f}</li>`).join('')}</ul>
    </div>`;
  document.getElementById('charSheet').scrollTop=0;
  openOv('charSheet');
}
cg.addEventListener('click',e=>{
  const el=e.target.closest('.char'); if(!el)return;
  showChar(CHARS[+el.dataset.char]);
});
document.getElementById('charPanel').addEventListener('click',e=>{
  const b=e.target.closest('.chip.link'); if(!b)return;
  const c=CHARS.find(x=>x.id===b.dataset.goto);
  if(c) showChar(c);
});

/* lightbox */
document.getElementById('codexPanel').addEventListener('click',e=>{
  const im=e.target.closest('.ovgal img'); if(!im)return;
  document.getElementById('lbimg').src=im.dataset.img;
  document.getElementById('lbcap').textContent=im.dataset.cap||'';
  openOv('lightbox');
});
document.getElementById('galArcs').addEventListener('click',e=>{
  const t=e.target.closest('.tile'); if(!t)return;
  document.getElementById('lbimg').src=t.dataset.img;
  document.getElementById('lbcap').textContent=t.dataset.cap;
  openOv('lightbox');
});


/* ================= AJOUT DE PERSONNAGE ================= */


document.getElementById('pwOk').addEventListener('click',checkPw);
document.getElementById('pwInput').addEventListener('keydown',e=>{if(e.key==='Enter')checkPw()});
function checkPw(){
  const v=document.getElementById('pwInput').value.trim();
  if(v===PASS){
    closeOv('pwGate'); openForm();
  }else{
    const box=document.getElementById('pwBox');
    document.getElementById('pwErr').textContent='Mot de passe incorrect';
    box.classList.remove('err'); void box.offsetWidth; box.classList.add('err');
  }
}

const ARC_SHORT={ft1:'FreakyTown S1',ft2:'FreakyTown S2',circus:'Digital Circus'};
function rpLabel(arcs){
  if(arcs.length===2&&arcs.includes('ft1')&&arcs.includes('ft2'))return 'FreakyTown — Saisons 1 & 2';
  return arcs.map(a=>ARC_SHORT[a]).join(' · ');
}

function relRow(){
  const d=document.createElement('div');d.className='relrow';
  d.innerHTML=`<input placeholder="ex : Allié de… / Rivalité avec…">
    <select><option value="">— aucun lien —</option>${CHARS.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')}</select>
    <button type="button" title="Retirer">✕</button>`;
  d.querySelector('button').addEventListener('click',()=>d.remove());
  return d;
}
document.getElementById('fAddRel').addEventListener('click',()=>document.getElementById('fRels').appendChild(relRow()));

let fImgData=null;
document.getElementById('fImg').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f)return;
  if(f.size>2.5*1024*1024){document.getElementById('fErr').textContent='Image trop lourde (max 2,5 Mo)';e.target.value='';return}
  const r=new FileReader();
  r.onload=()=>{fImgData=r.result;const p=document.getElementById('fImgPrev');p.src=fImgData;p.style.display='block'};
  r.readAsDataURL(f);
});

function openForm(){
  fImgData=null;
  document.getElementById('fErr').textContent='';
  document.getElementById('fImgPrev').style.display='none';
  ['fName','fQuote','fDesc','fPerso','fFun'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fImg').value='';
  document.getElementById('fColor').value='#3fe8d8';
  document.querySelectorAll('#fArcs input').forEach(i=>i.checked=false);
  const rels=document.getElementById('fRels');rels.innerHTML='';rels.appendChild(relRow());
  openOv('charForm');
}

document.getElementById('fSave').addEventListener('click',()=>{
  const name=document.getElementById('fName').value.trim();
  const arcs=[...document.querySelectorAll('#fArcs input:checked')].map(i=>i.value);
  const err=document.getElementById('fErr');
  if(!name){err.textContent='Le nom est obligatoire';return}
  if(!arcs.length){err.textContent='Choisissez au moins un univers';return}
  err.textContent='';
  const glow=document.getElementById('fColor').value;
  const quote=document.getElementById('fQuote').value.trim();
  const desc=document.getElementById('fDesc').value.trim().split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${p.replace(/\n/g,'<br>')}</p>`).join('')||'<p>Histoire à venir…</p>';
  const perso=document.getElementById('fPerso').value.trim();
  const fun=document.getElementById('fFun').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const rel=[...document.querySelectorAll('#fRels .relrow')].map(r=>{
    const label=r.querySelector('input').value.trim();
    const to=r.querySelector('select').value;
    if(!label)return null;
    return to?[label,to]:label;
  }).filter(Boolean);
  const id=name.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'-'+Date.now().toString(36);
  const hue=parseInt(glow.slice(1,3),16);
  const c={id,name,arcs,rp:rpLabel(arcs),glow,quote:quote?`« ${quote.replace(/^[«"\s]+|[»"\s]+$/g,'')} »`:'',
    desc,perso,rel,fun:fun.length?fun:['Nouveau visage du multivers.'],
    img:fImgData||null,
    face:fImgData?null:{bg:'#0d2530',hair:glow,skin:'#e8c9a8',eye:'#0b1d20',mouth:'#a86e50'}};
  CHARS.push(c);
  SAVED.push(c); persist(SAVED);
  renderChars();
  closeOv('charForm');
  showChar(c);
});


/* ================= SOUND DESIGN (Web Audio, 100% procédural) ================= */
const SND=(()=>{
  let ctx=null,master=null,verb=null,on=false;
  let droneNodes=[],windNodes=[],sparkTimer=null;

  function makeImpulse(seconds=2.8,decay=3.2){
    const rate=ctx.sampleRate,len=rate*seconds,buf=ctx.createBuffer(2,len,rate);
    for(let ch=0;ch<2;ch++){const d=buf.getChannelData(ch);
      for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,decay);}
    return buf;
  }
  function init(){
    if(ctx)return;
    ctx=new (window.AudioContext||window.webkitAudioContext)();
    master=ctx.createGain();master.gain.value=0;master.connect(ctx.destination);
    verb=ctx.createConvolver();verb.buffer=makeImpulse();
    const vg=ctx.createGain();vg.gain.value=.5;
    verb.connect(vg);vg.connect(master);
  }
  /* gamme pentatonique — l'ossature "magique" de l'ambiance */
  const SCALE=[440,493.88,554.37,659.25,739.99,880,987.77,1108.73,1318.5];
  function chime(f,vol=.03,dur=3){
    if(!on)return;
    const now=ctx.currentTime;
    [[1,vol],[2,vol*.3],[3.01,vol*.12]].forEach(([mult,v])=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sine';o.frequency.value=f*mult;
      g.gain.setValueAtTime(0,now);
      g.gain.linearRampToValueAtTime(v,now+.06);
      g.gain.exponentialRampToValueAtTime(.0001,now+dur);
      o.connect(g);g.connect(master);
      const rg=ctx.createGain();rg.gain.value=1.2;g.connect(rg);rg.connect(verb);
      o.start(now);o.stop(now+dur+.1);
    });
  }
  function startAmbient(){
    /* --- nappe éthérée : accord suspendu qui respire, aucun grondement --- */
    const pad=[[220,.014,.05],[330,.011,.037],[440,.009,.043],[554.37,.006,.031]];
    pad.forEach(([f,g,rate])=>{
      const o=ctx.createOscillator(),gn=ctx.createGain(),lfo=ctx.createOscillator(),lg=ctx.createGain();
      o.type='sine';o.frequency.value=f;gn.gain.value=g*.4;
      lfo.frequency.value=rate;lg.gain.value=g*.6;
      lfo.connect(lg);lg.connect(gn.gain);
      o.connect(gn);gn.connect(master);
      const rg=ctx.createGain();rg.gain.value=.8;gn.connect(rg);rg.connect(verb);
      o.start();lfo.start();droneNodes.push(o,lfo);
    });
    /* --- boîte à musique céleste : notes pentatoniques génératives --- */
    const nextNote=()=>{
      if(on){
        const f=SCALE[Math.floor(Math.random()*SCALE.length)];
        chime(f,.022+Math.random()*.014,2.6+Math.random()*1.6);
        if(Math.random()<.3)setTimeout(()=>chime(SCALE[Math.floor(Math.random()*SCALE.length)],.018,2.4),380+Math.random()*300);
      }
      sparkTimer=setTimeout(nextNote,2600+Math.random()*3800);
    };
    nextNote();
    /* --- étincelles occasionnelles --- */
    setInterval(()=>{if(on&&Math.random()<.5)sparkle();},9000);
  }
  function tone(f1,f2,dur,vol,type='sine',rev=.6){
    if(!on)return;
    const o=ctx.createOscillator(),g=ctx.createGain(),now=ctx.currentTime;
    o.type=type;o.frequency.setValueAtTime(f1,now);
    o.frequency.exponentialRampToValueAtTime(f2,now+dur);
    g.gain.setValueAtTime(0,now);
    g.gain.linearRampToValueAtTime(vol,now+.012);
    g.gain.exponentialRampToValueAtTime(.0001,now+dur);
    o.connect(g);g.connect(master);
    if(rev){const rg=ctx.createGain();rg.gain.value=rev;g.connect(rg);rg.connect(verb);}
    o.start(now);o.stop(now+dur+.05);
  }
  function whoosh(down=true,dur=.55,vol=.16){
    if(!on)return;
    const len=ctx.sampleRate*dur,nb=ctx.createBuffer(1,len,ctx.sampleRate),d=nb.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*(1-i/len);
    const src=ctx.createBufferSource();src.buffer=nb;
    const f=ctx.createBiquadFilter();f.type='lowpass';f.Q.value=1.1;
    const now=ctx.currentTime;
    f.frequency.setValueAtTime(down?2400:300,now);
    f.frequency.exponentialRampToValueAtTime(down?260:2000,now+dur);
    const g=ctx.createGain();g.gain.setValueAtTime(vol,now);
    g.gain.exponentialRampToValueAtTime(.0001,now+dur);
    src.connect(f);f.connect(g);g.connect(master);g.connect(verb);
    src.start(now);
  }
  function sparkle(){
    const base=900+Math.random()*1400;
    tone(base,base*1.5,1.6,.028,'sine',1);
    setTimeout(()=>tone(base*1.34,base*2,1.4,.02,'sine',1),140);
  }
  return {
    enable(){
      init();ctx.resume();
      if(!droneNodes.length)startAmbient();
      on=true;
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setTargetAtTime(.5,ctx.currentTime,.8);
    },
    disable(){
      if(!ctx)return;on=false;
      master.gain.setTargetAtTime(0,ctx.currentTime,.25);
    },
    hover(){tone(520,760,.14,.045,'sine',.3)},
    hoverWorld(){chime(SCALE[2],.035,1.8);setTimeout(()=>chime(SCALE[5],.025,1.6),90)},
    click(){tone(340,220,.16,.06,'triangle',.4)},
    open(){whoosh(false,.5,.14);setTimeout(()=>tone(660,990,.9,.04,'sine',1),120)},
    close(){whoosh(true,.4,.11)},
    swell(){chime(220,.04,3.4);setTimeout(()=>chime(440,.03,3),260);setTimeout(()=>sparkle(),700)},
    get on(){return on}
  };
})();

/* --- bouton + mémoire du choix --- */
const sndBtn=document.getElementById('sndBtn'),sndTip=document.getElementById('sndTip');
function setSnd(v){
  if(v){SND.enable();sndBtn.classList.add('on');sndBtn.setAttribute('aria-label','Couper le son');}
  else{SND.disable();sndBtn.classList.remove('on');sndBtn.setAttribute('aria-label','Activer le son');}
  try{localStorage.setItem('fv_sound',v?'1':'0')}catch(e){}
  sndTip.classList.remove('show');
}
sndBtn.addEventListener('click',()=>setSnd(!SND.on));
/* préférence retenue : on réactive au premier geste (règle des navigateurs) */
let wantSound=false;
try{wantSound=localStorage.getItem('fv_sound')==='1'}catch(e){}
if(wantSound){
  const arm=()=>{setSnd(true);removeEventListener('pointerdown',arm);removeEventListener('keydown',arm);};
  addEventListener('pointerdown',arm);addEventListener('keydown',arm);
}else{
  setTimeout(()=>{if(!SND.on)sndTip.classList.add('show')},4600);
  setTimeout(()=>sndTip.classList.remove('show'),11000);
}

/* --- sons d'interface (délégation) --- */
let lastHover=0;
document.addEventListener('pointerover',e=>{
  if(!SND.on)return;
  const world=e.target.closest('.world:not(.mystery)');
  const el=e.target.closest('a,button,.char,.cine,.tile,.com,.hcard,.codexcard');
  const tgt=world||el;
  if(!tgt||tgt===e.relatedTarget||tgt.contains(e.relatedTarget))return;
  const now=performance.now();
  if(now-lastHover<70)return;lastHover=now;
  world?SND.hoverWorld():SND.hover();
});
document.addEventListener('click',e=>{
  if(!SND.on)return;
  if(e.target.closest('a,button,.char,.cine,.tile,.world,.com,.codexcard'))SND.click();
});

/* burger */
document.getElementById('burger').addEventListener('click',()=>document.getElementById('navlinks').classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>document.getElementById('navlinks').classList.remove('open')));

/* --- cinématiques : clic = ouvre la vidéo (champ yt dans les données) --- */
document.addEventListener('click',e=>{
  const cn=e.target.closest('.cine');
  if(cn&&cn.dataset.yt)window.open(cn.dataset.yt,'_blank','noopener');
});
