:root{
  --void:#020a0c;
  --abyss:#041418;
  --ink:#072027;
  --white:#f0fbfa;
  --mist:#93bcbd;
  --dim:#5d8486;
  --teal:#00a99d;
  --glow:#3fe8d8;
  --line:rgba(63,232,216,.13);
  --accent:#3fe8d8;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  background:var(--void);
  color:var(--white);
  font-family:'Outfit',sans-serif;
  font-weight:300;
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}
::selection{background:rgba(63,232,216,.28);color:#fff}
::-webkit-scrollbar{width:10px}
::-webkit-scrollbar-track{background:var(--void)}
::-webkit-scrollbar-thumb{background:#0c3238;border-radius:5px}
::-webkit-scrollbar-thumb:hover{background:var(--teal)}

/* ---------- ambient background ---------- */
#sky{position:fixed;inset:0;z-index:0;pointer-events:none}
.fog{position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0;will-change:transform;opacity:.55}
.fog.f1{width:65vw;height:65vw;left:-22vw;top:-18vw;background:radial-gradient(circle,rgba(0,90,96,.34),transparent 65%);animation:drift1 26s ease-in-out infinite alternate}
.fog.f2{width:55vw;height:55vw;right:-20vw;top:32vh;background:radial-gradient(circle,rgba(0,169,157,.16),transparent 62%);animation:drift2 32s ease-in-out infinite alternate}
.fog.f3{width:70vw;height:50vw;left:8vw;bottom:-34vh;background:radial-gradient(circle,rgba(5,32,40,.35),transparent 62%);animation:drift1 38s ease-in-out infinite alternate-reverse}
@keyframes drift1{from{transform:translate(0,0) scale(1)}to{transform:translate(6vw,4vh) scale(1.12)}}
@keyframes drift2{from{transform:translate(0,0) scale(1.05)}to{transform:translate(-5vw,-4vh) scale(.94)}}

/* ---------- intro ---------- */
#intro{
  position:fixed;inset:0;z-index:100;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  background:radial-gradient(ellipse at 50% 60%,#06272c 0%,var(--void) 62%);
}
#intro::after{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");pointer-events:none}
#introLogo{width:min(62vw,760px);filter:drop-shadow(0 0 60px rgba(63,232,216,.35)) drop-shadow(0 14px 40px rgba(0,0,0,.6));will-change:transform;position:relative;z-index:2}

/* ---------- nav ---------- */
nav{
  position:fixed;top:0;left:0;right:0;z-index:60;
  display:flex;align-items:center;justify-content:space-between;
  padding:1.1rem clamp(1.2rem,4vw,3.4rem);
  opacity:0;transform:translateY(-16px);
  background:linear-gradient(rgba(2,10,12,.82),rgba(2,10,12,.35) 75%,transparent);
  backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(63,232,216,.07);
}
nav.on{opacity:1;transform:none;transition:opacity .8s,transform .8s}
#navLogo{height:44px;display:block;filter:drop-shadow(0 0 14px rgba(63,232,216,.25))}
.navlinks{display:flex;gap:clamp(.9rem,2vw,2rem);align-items:center;list-style:none}
.navlinks a{
  color:var(--mist);text-decoration:none;font-size:.82rem;font-weight:400;letter-spacing:.14em;
  text-transform:uppercase;position:relative;transition:color .3s;font-family:'Outfit',sans-serif;
}
.navlinks a::after{content:'';position:absolute;left:0;bottom:-6px;width:0;height:1px;background:var(--glow);transition:width .35s;box-shadow:0 0 8px var(--glow)}
.navlinks a:hover{color:var(--white)}
.navlinks a:hover::after{width:100%}
.cta{
  font-family:'Space Mono',monospace;font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;
  color:var(--void)!important;background:var(--glow);padding:.65rem 1.4rem;border-radius:999px;
  box-shadow:0 0 24px rgba(63,232,216,.35);transition:.3s;
}
.cta:hover{box-shadow:0 0 44px rgba(63,232,216,.6);transform:translateY(-1px)}
.cta::after{display:none}
#burger{display:none;background:none;border:1px solid var(--line);border-radius:8px;color:var(--glow);font-size:1.1rem;padding:.4rem .7rem;cursor:pointer}

/* ---------- shared section chrome ---------- */
main{position:relative;z-index:1}
section{position:relative;padding:clamp(5rem,12vh,9rem) clamp(1.2rem,6vw,5rem)}
.eyebrow{
  font-family:'Space Mono',monospace;font-size:.7rem;letter-spacing:.5em;text-transform:uppercase;
  color:var(--glow);margin-bottom:1.2rem;display:flex;align-items:center;gap:1rem;
}
.eyebrow::before{content:'';width:34px;height:1px;background:var(--glow);box-shadow:0 0 10px var(--glow)}
h2{
  font-family:'Unbounded',sans-serif;font-weight:600;
  font-size:clamp(1.7rem,4.4vw,3.2rem);line-height:1.12;letter-spacing:-.01em;margin-bottom:1rem;
}
.lead{color:var(--mist);max-width:56ch;font-size:clamp(.95rem,1.4vw,1.1rem);line-height:1.75}
.rv{opacity:0;transform:translateY(34px)}
.rv.in{opacity:1;transform:none;transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
.rv.d1.in{transition-delay:.1s}.rv.d2.in{transition-delay:.22s}.rv.d3.in{transition-delay:.34s}

/* ---------- hero ---------- */
#hero{
  min-height:100svh;display:flex;flex-direction:column;justify-content:flex-end;
  padding-bottom:9vh;overflow:hidden;
}
#heroScene{
  position:absolute;inset:0;z-index:-1;overflow:hidden;will-change:transform;
  -webkit-mask-image:linear-gradient(#000 72%,transparent 98%);
  mask-image:linear-gradient(#000 72%,transparent 98%);
}
#heroScene .glowcore{
  position:absolute;left:50%;top:30%;width:80vmin;height:80vmin;transform:translate(-50%,-50%);
  background:radial-gradient(circle,rgba(0,169,157,.14),rgba(0,90,96,.06) 45%,transparent 70%);
  filter:blur(30px);animation:corePulse 9s ease-in-out infinite;
}
@keyframes corePulse{0%,100%{opacity:.7;transform:translate(-50%,-50%) scale(1)}50%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}}
.crystal{position:absolute;will-change:transform;filter:drop-shadow(0 0 18px rgba(90,200,255,.35))}
.crystal svg{display:block;width:100%;height:auto}
.crystal.c1{width:52px;left:9%;top:20%;animation:cfloat 11s ease-in-out infinite}
.crystal.c2{width:34px;left:22%;top:58%;animation:cfloat 14s ease-in-out infinite -4s}
.crystal.c3{width:66px;right:10%;top:16%;animation:cfloat 13s ease-in-out infinite -7s}
.crystal.c4{width:28px;right:26%;top:48%;animation:cfloat 16s ease-in-out infinite -2s}
.crystal.c5{width:40px;right:42%;top:10%;animation:cfloat 12s ease-in-out infinite -9s}
@keyframes cfloat{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-26px) rotate(7deg)}}
.spark{position:absolute;color:var(--glow);filter:drop-shadow(0 0 10px currentColor);animation:twinkle 4.5s ease-in-out infinite}
.spark svg{display:block;width:100%;height:auto}
.spark.s1{width:30px;left:16%;top:34%}
.spark.s2{width:18px;left:38%;top:14%;animation-delay:-1.4s;color:#cfeef0}
.spark.s3{width:24px;right:18%;top:36%;animation-delay:-2.6s}
.spark.s4{width:14px;right:34%;top:64%;animation-delay:-.8s;color:#cfeef0}
.spark.s5{width:20px;left:6%;top:66%;animation-delay:-3.4s}
@keyframes twinkle{0%,100%{opacity:.25;transform:scale(.75) rotate(0deg)}50%{opacity:1;transform:scale(1.12) rotate(14deg)}}

#hero h1{
  font-family:'Unbounded',sans-serif;font-weight:800;
  font-size:clamp(2.1rem,6.6vw,5.4rem);line-height:1.06;letter-spacing:-.015em;
  max-width:16ch;margin:1.4rem 0 1.6rem;
}
#hero h1 .w{display:inline-block;overflow:hidden;vertical-align:bottom}
#hero h1 .w span{display:inline-block;transform:translateY(110%)}
#hero h1 em{font-style:normal;color:var(--glow);text-shadow:0 0 34px rgba(63,232,216,.5)}
.hero-sub{color:var(--mist);max-width:52ch;font-size:clamp(.95rem,1.5vw,1.15rem);line-height:1.8;opacity:0}
.hero-row{display:flex;gap:1rem;margin-top:2.4rem;flex-wrap:wrap;opacity:0}
.btn{
  font-family:'Space Mono',monospace;font-size:.74rem;letter-spacing:.22em;text-transform:uppercase;
  text-decoration:none;padding:1rem 2rem;border-radius:999px;transition:.35s;
}
.btn.solid{background:var(--glow);color:var(--void);box-shadow:0 0 30px rgba(63,232,216,.3)}
.btn.solid:hover{box-shadow:0 0 55px rgba(63,232,216,.6);transform:translateY(-2px)}
.btn.ghost{color:var(--white);border:1px solid rgba(63,232,216,.35)}
.btn.ghost:hover{border-color:var(--glow);background:rgba(63,232,216,.07);box-shadow:0 0 26px rgba(63,232,216,.15)}
#scrollcue{
  position:absolute;bottom:2.2rem;right:clamp(1.4rem,5vw,4rem);
  display:flex;flex-direction:column;align-items:center;gap:.7rem;
  font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.4em;color:var(--dim);
  writing-mode:vertical-rl;opacity:0;
}
#scrollcue::after{content:'';width:1px;height:56px;background:linear-gradient(var(--glow),transparent);animation:cue 2.2s ease-in-out infinite}
@keyframes cue{0%,100%{transform:scaleY(.4);opacity:.4}50%{transform:scaleY(1);opacity:1}}

/* home cards */
.homecards{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.1rem;margin-top:3rem}
.hcard{
  border:1px solid var(--line);border-radius:18px;padding:1.6rem;
  background:linear-gradient(160deg,rgba(7,32,39,.5),rgba(4,20,24,.25));
  backdrop-filter:blur(8px);transition:.45s cubic-bezier(.2,.7,.2,1);position:relative;overflow:hidden;
  text-decoration:none;color:inherit;display:block;
}
.hcard::before{content:'';position:absolute;top:-40%;left:-40%;width:70%;height:70%;background:radial-gradient(circle,rgba(63,232,216,.14),transparent 70%);opacity:0;transition:.5s}
.hcard:hover{transform:translateY(-6px);border-color:rgba(63,232,216,.4);box-shadow:0 18px 50px rgba(0,0,0,.45),0 0 34px rgba(63,232,216,.1)}
.hcard:hover::before{opacity:1}
.hcard .ic{font-size:1.4rem;margin-bottom:1rem;display:block;filter:drop-shadow(0 0 10px rgba(63,232,216,.5))}
.hcard h3{font-family:'Unbounded',sans-serif;font-weight:400;font-size:1rem;margin-bottom:.5rem}
.hcard p{color:var(--dim);font-size:.86rem;line-height:1.6}

/* ---------- carte céleste ---------- */
#univers{min-height:110vh}
#cosmos{position:relative;margin-top:2rem;min-height:88vh}
#constellation{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible}
#constellation line{stroke:rgba(63,232,216,.16);stroke-width:1;stroke-dasharray:3 7}
.world{
  position:absolute;width:min(300px,74vw);cursor:pointer;
  display:flex;flex-direction:column;align-items:center;text-align:center;
  transition:transform .5s cubic-bezier(.2,.7,.2,1);
}
.world .orbwrap{position:relative;width:170px;height:170px;display:grid;place-items:center}
.world .peek{
  position:absolute;left:50%;top:-8px;transform:translate(-50%,52%) scale(.85);
  width:74px;opacity:0;transition:.55s cubic-bezier(.3,1.4,.4,1);z-index:0;
  filter:drop-shadow(0 6px 14px rgba(0,0,0,.55));
}
.world .peek svg,.world .peek img{width:100%;display:block}
.world .peek img{max-height:110px;object-fit:contain;object-position:bottom}
.world .orb{
  width:150px;height:150px;border-radius:50%;position:relative;z-index:1;
  transition:.5s cubic-bezier(.2,.7,.2,1);
  animation:orbfloat 7s ease-in-out infinite;
}
.world:nth-child(3) .orb{animation-delay:-2.4s}
.world:nth-child(4) .orb{animation-delay:-4.6s}
@keyframes orbfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.world .ring{position:absolute;inset:-16px;border-radius:50%;border:1px solid rgba(63,232,216,.22);transform:rotateX(68deg);z-index:2;pointer-events:none;transition:.5s}
.world:hover{transform:scale(1.07);z-index:5}
.world:hover .orb{box-shadow:0 0 70px var(--wglow),0 0 140px color-mix(in srgb,var(--wglow) 40%,transparent)!important}
.world:hover .peek{transform:translate(-50%,-46%) scale(1);opacity:1}
.world:hover .ring{border-color:color-mix(in srgb,var(--wglow) 60%,transparent)}
.world .wname{font-family:'Unbounded',sans-serif;font-weight:600;font-size:1.02rem;margin-top:1.5rem;letter-spacing:.02em}
.world .wtag{font-family:'Space Mono',monospace;font-size:.62rem;letter-spacing:.34em;text-transform:uppercase;color:var(--dim);margin-top:.5rem;transition:.4s}
.world:hover .wtag{color:var(--wglow)}
.world .winfo{
  max-height:0;overflow:hidden;opacity:0;transition:.55s;color:var(--mist);
  font-size:.84rem;line-height:1.6;max-width:30ch;
}
.world:hover .winfo{max-height:120px;opacity:1;margin-top:.8rem}
.wenter{
  margin-top:.9rem;font-family:'Space Mono',monospace;font-size:.64rem;letter-spacing:.3em;text-transform:uppercase;
  color:var(--wglow);opacity:0;transform:translateY(8px);transition:.45s .1s;
}
.world:hover .wenter{opacity:1;transform:none}
.world.mystery{cursor:default}
.world.mystery .orb{
  background:radial-gradient(circle at 34% 30%,#233a40,#0d1c20 58%,#050c0e 92%);
  box-shadow:0 0 30px rgba(120,170,175,.18);
  display:grid;place-items:center;overflow:visible;
}
.world.mystery:hover .orb{box-shadow:0 0 50px rgba(150,200,205,.28),0 0 100px rgba(120,170,175,.12)!important}
.world.mystery .qm{
  position:absolute;font-family:'Unbounded',sans-serif;font-weight:300;color:rgba(180,220,222,.55);
  text-shadow:0 0 14px rgba(150,220,220,.4);animation:qmfloat 6s ease-in-out infinite;pointer-events:none;
}
.world.mystery .qm:nth-child(1){font-size:2.3rem;animation-delay:0s}
.world.mystery .qm:nth-child(2){font-size:1.1rem;transform:translate(-38px,-30px);animation-delay:-2s;opacity:.6}
.world.mystery .qm:nth-child(3){font-size:.95rem;transform:translate(36px,26px);animation-delay:-4s;opacity:.5}
@keyframes qmfloat{0%,100%{translate:0 0}50%{translate:0 -9px}}
.world.mystery .ring{border-style:dashed;animation:ringspin 26s linear infinite}
@keyframes ringspin{from{transform:rotateX(68deg) rotateZ(0)}to{transform:rotateX(68deg) rotateZ(360deg)}}

/* ---------- personnages ---------- */
#chargrid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
  gap:1.1rem;margin-top:3rem;
}
.char{
  position:relative;border-radius:16px;overflow:hidden;cursor:pointer;
  border:1px solid var(--line);
  background:linear-gradient(180deg,rgba(7,32,39,.55),rgba(3,13,16,.85));
  aspect-ratio:3/4.1;
  transition:transform .5s cubic-bezier(.2,.7,.2,1),opacity .5s,filter .5s,border-color .4s,box-shadow .5s;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
}
#chargrid:hover .char:not(:hover):not(.ghost){opacity:.32;filter:saturate(.4) brightness(.6);transform:scale(.96)}
.char.add{border-style:dashed;border-color:rgba(63,232,216,.3);background:rgba(4,20,24,.3);justify-content:center}
.char.add:hover{border-color:var(--glow);box-shadow:0 0 40px rgba(63,232,216,.15);transform:scale(1.03)}
.char.add .plus{font-family:'Unbounded',sans-serif;font-size:3.4rem;font-weight:300;color:var(--glow);text-shadow:0 0 28px rgba(63,232,216,.5);transition:.4s;margin-top:-18%}
.char.add:hover .plus{transform:rotate(90deg) scale(1.1)}
.char.add .cfac{color:var(--glow)}

/* --- porte mot de passe --- */
#pwGate .ovpanel{display:grid;place-items:center;min-height:100vh}
.pwbox{
  width:min(400px,92vw);border:1px solid rgba(63,232,216,.25);border-radius:20px;
  background:linear-gradient(165deg,rgba(7,32,39,.85),rgba(3,13,16,.95));
  padding:2.6rem 2.2rem;text-align:center;backdrop-filter:blur(10px);
  box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 60px rgba(63,232,216,.08);
}
.pwbox h3{font-family:'Unbounded',sans-serif;font-weight:400;font-size:1.1rem;margin-bottom:.6rem}
.pwbox p{color:var(--dim);font-size:.84rem;margin-bottom:1.6rem;line-height:1.6}
.pwbox.err{animation:shake .4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
.pwerr{color:#ff7a8a;font-family:'Space Mono',monospace;font-size:.66rem;letter-spacing:.2em;margin-top:.9rem;min-height:1em;text-transform:uppercase}

/* --- formulaire --- */
input,textarea,select{
  width:100%;background:rgba(2,10,12,.6);border:1px solid rgba(63,232,216,.2);border-radius:10px;
  color:var(--white);font-family:'Outfit',sans-serif;font-weight:300;font-size:.94rem;
  padding:.85rem 1rem;transition:.3s;outline:none;
}
input:focus,textarea:focus,select:focus{border-color:var(--glow);box-shadow:0 0 20px rgba(63,232,216,.12)}
textarea{min-height:110px;resize:vertical;line-height:1.6}
select{cursor:pointer}
select option{background:var(--abyss)}
.field{margin-bottom:1.6rem}
.field label{
  display:block;font-family:'Space Mono',monospace;font-size:.64rem;letter-spacing:.34em;
  text-transform:uppercase;color:var(--glow);margin-bottom:.7rem;
}
.field .hint{color:var(--dim);font-size:.76rem;margin-top:.45rem;line-height:1.5}
.arcpick{display:flex;flex-wrap:wrap;gap:.7rem}
.arcpick input{display:none}
.arcpick span{
  display:inline-block;font-family:'Space Mono',monospace;font-size:.66rem;letter-spacing:.2em;
  text-transform:uppercase;color:var(--mist);border:1px solid rgba(63,232,216,.25);border-radius:999px;
  padding:.6rem 1.2rem;cursor:pointer;transition:.3s;
}
.arcpick input:checked+span{color:var(--void);background:var(--glow);border-color:var(--glow);box-shadow:0 0 20px rgba(63,232,216,.35)}
.relrow{display:grid;grid-template-columns:1.4fr 1fr auto;gap:.6rem;margin-bottom:.6rem}
.relrow button{border:1px solid rgba(255,120,140,.3);background:none;color:#ff7a8a;border-radius:10px;padding:0 .9rem;cursor:pointer;font-size:1rem}
.addbtn{
  font-family:'Space Mono',monospace;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;
  color:var(--glow);background:none;border:1px dashed rgba(63,232,216,.35);border-radius:999px;
  padding:.6rem 1.3rem;cursor:pointer;transition:.3s;
}
.addbtn:hover{border-color:var(--glow);box-shadow:0 0 18px rgba(63,232,216,.15)}
.formfoot{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2.4rem}
.btn.solid{border:none;cursor:pointer;font-family:'Space Mono',monospace}
.imgprev{max-width:140px;border-radius:12px;margin-top:.8rem;display:none}
.char:hover{transform:scale(1.06);z-index:4;border-color:rgba(63,232,216,.5);box-shadow:0 22px 60px rgba(0,0,0,.55),0 0 46px rgba(63,232,216,.14)}
.char .halo{position:absolute;inset:0;background:radial-gradient(circle at 50% 34%,color-mix(in srgb,var(--cg,#3fe8d8) 20%,transparent),transparent 62%);opacity:0;transition:.5s}
.char:hover .halo{opacity:1}
.char svg.face{width:56%;image-rendering:pixelated}
.char .face{transition:.5s cubic-bezier(.2,.7,.2,1);filter:drop-shadow(0 10px 22px rgba(0,0,0,.5));z-index:1;margin-top:-10%}
.char img.face{width:82%;max-height:64%;object-fit:contain}
.char:hover .face{transform:translateY(-10px) scale(1.08)}
.char .meta{
  position:absolute;left:0;right:0;bottom:0;padding:1.1rem 1rem 1rem;z-index:2;
  background:linear-gradient(transparent,rgba(2,10,12,.94) 42%);
}
.char .cname{font-family:'Unbounded',sans-serif;font-weight:400;font-size:.92rem}
.char .cfac{font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.3em;text-transform:uppercase;color:var(--cg,#3fe8d8);margin-top:.35rem}
.char .cquote{
  font-size:.78rem;color:var(--mist);font-style:italic;line-height:1.5;
  max-height:0;opacity:0;overflow:hidden;transition:.5s;
}
.char:hover .cquote{max-height:70px;opacity:1;margin-top:.55rem}

/* ---------- cinématiques ---------- */
.cinerow{display:flex;gap:1.2rem;overflow-x:auto;padding:.4rem .4rem 1.2rem;scroll-snap-type:x mandatory;scrollbar-width:thin}
.cine{
  position:relative;flex:0 0 min(340px,80vw);aspect-ratio:16/9.4;border-radius:14px;overflow:hidden;
  border:1px solid var(--line);cursor:pointer;scroll-snap-align:start;
  transition:transform .5s cubic-bezier(.2,.7,.2,1),box-shadow .5s,border-color .4s;
  background-size:cover;background-position:center;
}
.cine:hover{transform:scale(1.045) translateY(-4px);border-color:rgba(63,232,216,.45);box-shadow:0 20px 55px rgba(0,0,0,.6),0 0 40px rgba(63,232,216,.12);z-index:3}
.cine::before{content:'';position:absolute;inset:0;background:linear-gradient(transparent 30%,rgba(2,10,12,.92));transition:.4s}
.cine .shine{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(63,232,216,.14) 48%,transparent 62%);transform:translateX(-120%);transition:transform .9s}
.cine:hover .shine{transform:translateX(120%)}
.cine .play{
  position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(.7);
  width:58px;height:58px;border-radius:50%;border:1px solid rgba(63,232,216,.6);
  background:rgba(2,10,12,.55);backdrop-filter:blur(6px);
  display:grid;place-items:center;opacity:0;transition:.45s;
}
.cine .play::after{content:'';border-left:14px solid var(--glow);border-top:9px solid transparent;border-bottom:9px solid transparent;margin-left:4px;filter:drop-shadow(0 0 8px var(--glow))}
.cine:hover .play{opacity:1;transform:translate(-50%,-50%) scale(1)}
.cine .cmeta{position:absolute;left:1.1rem;right:1.1rem;bottom:1rem;z-index:2}
.cine .ct{font-family:'Unbounded',sans-serif;font-weight:400;font-size:.95rem}
.cine .cd{font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.3em;color:var(--mist);text-transform:uppercase;margin-top:.4rem}
.cine .badge{position:absolute;top:.9rem;left:.9rem;font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.25em;text-transform:uppercase;color:var(--glow);border:1px solid rgba(63,232,216,.4);border-radius:999px;padding:.3rem .7rem;background:rgba(2,10,12,.55);backdrop-filter:blur(5px)}

/* ---------- galerie ---------- */
.masonry{columns:4 240px;column-gap:1rem}
.tile{
  break-inside:avoid;margin-bottom:1rem;border-radius:14px;overflow:hidden;position:relative;
  border:1px solid rgba(63,232,216,.08);cursor:zoom-in;
}
.tile img{width:100%;display:block;transition:transform .8s cubic-bezier(.2,.7,.2,1),filter .6s;filter:saturate(.92)}
.tile::after{content:attr(data-cap);position:absolute;left:1rem;bottom:.9rem;font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;color:var(--white);opacity:0;transition:.45s;z-index:2;text-shadow:0 2px 10px #000}
.tile::before{content:'';position:absolute;inset:0;background:linear-gradient(transparent 55%,rgba(2,10,12,.85));opacity:0;transition:.45s;z-index:1}
.tile:hover img{transform:scale(1.07);filter:saturate(1.1)}
.tile:hover::after,.tile:hover::before{opacity:1}

.archead{display:flex;align-items:center;gap:1.1rem;margin:3.2rem 0 1.4rem;font-family:'Space Mono',monospace;font-size:.74rem;letter-spacing:.4em;text-transform:uppercase;color:var(--white)}
.archead::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,rgba(63,232,216,.35),transparent)}
.archead .dot{width:9px;height:9px;border-radius:50%;background:var(--arc,#3fe8d8);box-shadow:0 0 12px var(--arc,#3fe8d8)}
.empty{
  border:1px dashed rgba(63,232,216,.22);border-radius:16px;padding:2.8rem 1.6rem;text-align:center;
  color:var(--dim);font-size:.9rem;line-height:1.7;background:rgba(4,20,24,.25);
}
.empty b{display:block;font-family:'Space Mono',monospace;font-weight:400;font-size:.68rem;letter-spacing:.35em;text-transform:uppercase;color:var(--mist);margin-bottom:.6rem}
.empty::before{content:'✦';display:block;color:var(--glow);font-size:1.2rem;margin-bottom:.8rem;text-shadow:0 0 14px var(--glow)}

/* ---------- communauté ---------- */
#comgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:1.1rem;margin-top:3rem}
.com{
  position:relative;border:1px solid var(--line);border-radius:20px;padding:2.2rem 1.8rem;
  text-decoration:none;color:inherit;overflow:hidden;
  background:linear-gradient(165deg,rgba(7,32,39,.5),rgba(3,13,16,.7));
  transition:.5s cubic-bezier(.2,.7,.2,1);
}
.com::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 0%,rgba(63,232,216,.16),transparent 60%);opacity:0;transition:.5s}
.com:hover{transform:translateY(-8px);border-color:rgba(63,232,216,.45);box-shadow:0 24px 60px rgba(0,0,0,.5),0 0 44px rgba(63,232,216,.12)}
.com:hover::before{opacity:1}
.com .cic{font-size:1.9rem;display:block;margin-bottom:1.2rem;filter:drop-shadow(0 0 12px rgba(63,232,216,.45))}
.com h3{font-family:'Unbounded',sans-serif;font-weight:400;font-size:1.05rem;margin-bottom:.5rem}
.com p{color:var(--dim);font-size:.84rem;line-height:1.6}
.com .go{position:absolute;top:1.4rem;right:1.5rem;color:var(--glow);opacity:0;transform:translate(-6px,6px);transition:.4s}
.com:hover .go{opacity:1;transform:none}
.com.main{grid-column:1/-1;border-color:rgba(63,232,216,.35);background:linear-gradient(135deg,rgba(0,169,157,.14),rgba(3,13,16,.75));box-shadow:0 0 44px rgba(63,232,216,.08)}
.com.main .mainlabel{position:absolute;top:1.3rem;left:1.8rem;font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.3em;text-transform:uppercase;color:var(--glow)}
.com.main .cic{margin-top:1.6rem}
.com.soon{border-style:dashed;border-color:rgba(63,232,216,.2);background:rgba(4,20,24,.3);cursor:default}
.com.soon .cic{opacity:.7;animation:twinkle 4.5s ease-in-out infinite}
.com.soon h3{color:var(--mist)}
.com.soon:hover{transform:none;box-shadow:none;border-color:rgba(63,232,216,.35)}

/* ---------- à propos + footer ---------- */
#apropos .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:4rem;align-items:center}
#foxart{
  width:100%;max-width:420px;justify-self:center;border-radius:24px;
  -webkit-mask-image:radial-gradient(circle at 50% 46%,#000 46%,transparent 74%);
  mask-image:radial-gradient(circle at 50% 46%,#000 46%,transparent 74%);
  filter:drop-shadow(0 0 60px rgba(63,232,216,.15));
  animation:orbfloat 9s ease-in-out infinite;
}
footer{
  position:relative;z-index:1;border-top:1px solid rgba(63,232,216,.08);
  padding:3rem clamp(1.2rem,6vw,5rem);display:flex;flex-wrap:wrap;gap:1.4rem;
  align-items:center;justify-content:space-between;color:var(--dim);
  font-family:'Space Mono',monospace;font-size:.66rem;letter-spacing:.24em;text-transform:uppercase;
}
footer img{height:34px;opacity:.85}

/* ---------- overlays (monde / perso / lightbox) ---------- */
.overlay{
  position:fixed;inset:0;z-index:90;display:none;overflow-y:auto;
  background:radial-gradient(ellipse at 50% 0%,color-mix(in srgb,var(--accent) 9%,var(--void)),var(--void) 60%);
  backdrop-filter:blur(10px);
}
.overlay.open{display:block;animation:ovin .6s cubic-bezier(.2,.7,.2,1)}
@keyframes ovin{from{opacity:0;transform:scale(1.03)}to{opacity:1;transform:none}}
.ovpanel{max-width:960px;margin:0 auto;padding:7rem clamp(1.2rem,5vw,3rem) 5rem}
.ovclose{
  position:fixed;top:1.4rem;right:1.6rem;z-index:95;width:48px;height:48px;border-radius:50%;
  border:1px solid rgba(63,232,216,.4);background:rgba(2,10,12,.6);color:var(--glow);
  font-size:1.15rem;cursor:pointer;backdrop-filter:blur(8px);transition:.3s;
}
.ovclose:hover{box-shadow:0 0 30px rgba(63,232,216,.35);transform:rotate(90deg)}
.ovpanel .eyebrow{color:var(--accent)}
.ovpanel .eyebrow::before{background:var(--accent);box-shadow:0 0 10px var(--accent)}
.ovpanel h2 em{font-style:normal;color:var(--accent);text-shadow:0 0 30px color-mix(in srgb,var(--accent) 55%,transparent)}
.ovsec{margin-top:3.2rem}
.ovsec h4{font-family:'Space Mono',monospace;font-size:.72rem;letter-spacing:.42em;text-transform:uppercase;color:var(--accent);margin-bottom:1.4rem}
.timeline{border-left:1px solid color-mix(in srgb,var(--accent) 35%,transparent);padding-left:1.6rem;display:flex;flex-direction:column;gap:1.6rem}
.tl{position:relative}
.tl::before{content:'';position:absolute;left:calc(-1.6rem - 5px);top:.45em;width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.tl b{font-weight:500;font-family:'Outfit',sans-serif}
.tl span{display:block;color:var(--mist);font-size:.88rem;margin-top:.3rem;line-height:1.6}
.chips{display:flex;flex-wrap:wrap;gap:.6rem}
.chip{font-family:'Space Mono',monospace;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--mist);border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);border-radius:999px;padding:.5rem 1rem;transition:.3s}
.chip:hover{color:var(--accent);border-color:var(--accent);box-shadow:0 0 18px color-mix(in srgb,var(--accent) 25%,transparent)}
button.chip{background:none;cursor:pointer}
.chip.link{color:var(--accent);border-color:color-mix(in srgb,var(--accent) 45%,transparent)}
.ovgal{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.8rem}
.ovgal img{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.06);cursor:zoom-in;transition:.35s}
.ovgal img:hover{transform:scale(1.04);box-shadow:0 10px 30px rgba(0,0,0,.5)}

/* codex */
.codexgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:.8rem}
.codexcard{
  text-align:left;border:1px solid color-mix(in srgb,var(--accent) 25%,transparent);border-radius:14px;
  background:linear-gradient(160deg,rgba(7,32,39,.5),rgba(3,13,16,.6));padding:1.2rem 1.1rem;
  cursor:pointer;transition:.35s;display:flex;flex-direction:column;gap:.5rem;color:inherit;
}
.codexcard:hover{border-color:var(--accent);box-shadow:0 10px 30px rgba(0,0,0,.4),0 0 26px color-mix(in srgb,var(--accent) 18%,transparent);transform:translateY(-3px)}
.codexcard .ctype{font-family:'Space Mono',monospace;font-size:.58rem;letter-spacing:.3em;text-transform:uppercase;color:var(--accent)}
.codexcard .cxname{font-family:'Unbounded',sans-serif;font-weight:400;font-size:.92rem;color:var(--white)}
.lore{
  background:none;border:none;padding:0;font:inherit;color:var(--accent);cursor:pointer;
  border-bottom:1px dotted color-mix(in srgb,var(--accent) 60%,transparent);transition:.3s;
}
.lore:hover{text-shadow:0 0 12px color-mix(in srgb,var(--accent) 60%,transparent);border-bottom-style:solid}

/* char sheet */
#charSheet .sheettop{display:flex;gap:2.4rem;align-items:center;flex-wrap:wrap}
#charSheet .face{width:170px;filter:drop-shadow(0 16px 34px rgba(0,0,0,.6)) drop-shadow(0 0 30px color-mix(in srgb,var(--accent) 30%,transparent))}
#charSheet img.face{width:230px}
.lead p+p{margin-top:.95rem}
.hrp{color:var(--dim);font-style:italic;border-left:2px solid rgba(63,232,216,.25);padding-left:1rem;font-size:.92em}
.funlist{list-style:none;display:flex;flex-direction:column;gap:.9rem}
.funlist li{color:var(--mist);font-size:.92rem;line-height:1.6;padding-left:1.6rem;position:relative}
.funlist li::before{content:'✦';position:absolute;left:0;color:var(--accent);text-shadow:0 0 10px var(--accent)}
#charSheet blockquote{font-size:1.05rem;font-style:italic;color:var(--mist);border-left:2px solid var(--accent);padding-left:1.2rem;line-height:1.7;margin-top:1.2rem}

/* lightbox */
#lightbox{background:rgba(2,10,12,.94)}
#lightbox .ovpanel{display:grid;place-items:center;min-height:100vh;padding-top:4rem}
#lightbox img{max-width:min(92vw,1000px);max-height:80vh;border-radius:14px;box-shadow:0 30px 90px rgba(0,0,0,.7),0 0 60px rgba(63,232,216,.1)}
#lightbox figcaption{margin-top:1.2rem;text-align:center;font-family:'Space Mono',monospace;font-size:.66rem;letter-spacing:.34em;text-transform:uppercase;color:var(--mist)}

/* ---------- bouton son ---------- */
#sndBtn{
  position:fixed;bottom:1.6rem;right:1.6rem;z-index:70;width:52px;height:52px;border-radius:50%;
  border:1px solid rgba(63,232,216,.35);background:rgba(4,20,24,.7);backdrop-filter:blur(10px);
  cursor:pointer;display:grid;place-items:center;transition:.35s;
}
#sndBtn:hover{border-color:var(--glow);box-shadow:0 0 26px rgba(63,232,216,.25)}
#sndBtn .bars{display:flex;gap:3px;align-items:flex-end;height:16px}
#sndBtn .bars i{width:3px;background:var(--glow);border-radius:2px;height:5px;transition:.3s;box-shadow:0 0 6px var(--glow)}
#sndBtn.on .bars i{animation:eq 1s ease-in-out infinite}
#sndBtn.on .bars i:nth-child(1){animation-delay:0s}
#sndBtn.on .bars i:nth-child(2){animation-delay:.25s}
#sndBtn.on .bars i:nth-child(3){animation-delay:.5s}
#sndBtn:not(.on) .bars i{height:4px;opacity:.45;background:var(--mist);box-shadow:none}
#sndBtn:not(.on)::after{
  content:'';position:absolute;width:30px;height:1.5px;background:var(--mist);opacity:.6;
  transform:rotate(-45deg);border-radius:2px;
}
@keyframes eq{0%,100%{height:5px}50%{height:15px}}
#sndTip{
  position:fixed;bottom:2.15rem;right:5.6rem;z-index:70;
  font-family:'Space Mono',monospace;font-size:.6rem;letter-spacing:.28em;text-transform:uppercase;
  color:var(--mist);background:rgba(4,20,24,.75);border:1px solid rgba(63,232,216,.2);
  padding:.55rem 1rem;border-radius:999px;backdrop-filter:blur(8px);
  opacity:0;transform:translateX(8px);transition:.6s;pointer-events:none;white-space:nowrap;
}
#sndTip.show{opacity:1;transform:none}

/* ---------- responsive ---------- */
@media(max-width:960px){
  .navlinks{
    position:fixed;inset:0 0 auto 0;top:64px;flex-direction:column;align-items:flex-start;
    background:rgba(2,10,12,.96);backdrop-filter:blur(18px);padding:1.6rem 2rem 2.2rem;gap:1.3rem;
    border-bottom:1px solid var(--line);display:none;
  }
  .navlinks.open{display:flex}
  #burger{display:block}
  #apropos .wrap{grid-template-columns:1fr;gap:2.4rem}
  #cosmos{min-height:auto;display:flex;flex-direction:column;gap:3.4rem;align-items:center;padding:2rem 0}
  .world{position:static!important}
  #constellation{display:none}
}
@media (prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001s!important;transition-duration:.2s!important}
  html{scroll-behavior:auto}
}
