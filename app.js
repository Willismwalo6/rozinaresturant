document.documentElement.classList.add('js');
const WA='254711482700',$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const wa=t=>`https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
const DIR='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent("Rozina's Restaurant Westside Mall Kenyatta Avenue Nakuru");
const FB='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#541D2B"/><stop offset="1" stop-color="#25211F"/></linearGradient></defs><rect width="400" height="300" fill="url(#g)"/><text x="200" y="165" font-family="Georgia,serif" font-size="34" fill="#C6A15B" text-anchor="middle">Rozina’s</text></svg>');
const IM={biryani:'1563379091339-03b21ab4a4f8',pilau:'1596797038530-2c107229654b',grill:'1555939594-58d7cb561ad1',chicken:'1598103442097-8b74394b95c6',pizza:'1513104890138-7c749659a591',pizza2:'1565299624946-b28f40a0ae38',pasta:'1621996346565-e3dbc646d9a9',curry:'1585937421612-70a008356fbe',butter:'1631452180519-c014fe946bc7',naan:'1565557623262-b51c2513a641',burger:'1568901346375-23c9450c58cd',sandwich:'1528735602780-2552fd46c7af',fries:'1573080496219-bb080dd4f877',wings:'1567620832903-9fc6debc209f',steak:'1544025162-d76694265947',mixed:'1504674900247-0877df9cc836',fish:'1467003909585-2f8a72700288',prawns:'1565680018434-b513d5e5fd47',seafood:'1559847844-5315695dadae',veg:'1546069901-ba9599a7e63c',dessert:'1551024601-bec78aea704b',cake:'1578985545062-69928b1d9587',juice:'1600271886742-f049cd451bba',shake:'1572490122747-3968b75cc699',coffee:'1509042239860-f550ce710b93',in1:'1517248135467-4c7edcad34c4',in2:'1555396273-367ea4eb4db5',table:'1414235077428-338989a2e8c0',soup:'1547592166-23ac45744acd',salad:'1512621776951-a57141f2eefd',samosa:'1601050690597-df0568f70950'};
const img=(k,w=640,alt='',c='')=>`<img class="${c}" src="images/${k}.jpg" alt="${alt}" loading="lazy" decoding="async" onerror="this.onerror=function(){this.onerror=null;this.src=FB};this.src='https://images.unsplash.com/photo-${IM[k]}?auto=format&fit=crop&w=${w}&q=70'">`;
$$('[data-img]').forEach(e=>{e.outerHTML=img(e.dataset.img,+e.dataset.w||640,e.dataset.alt||'',e.className)});
const ksh=n=>'KSh '+n.toLocaleString('en-KE');
/* menu data: [cat,name,desc,price,from?,img] — names/prices from Rozina's Nakuru menu PDF */
const CATS={swahili:'Swahili & East African',indian:'Indian',italian:'Italian',grills:'Grills & Barbecue',burgers:'Burgers & Light Meals',seafood:'Seafood',veg:'Vegetarian',desserts:'Desserts & Drinks'};
const MENU=[
['swahili','Chicken Pilau','Fragrant spiced rice cooked with tender chicken.',1300,0,'pilau'],
['swahili','Beef Pilau','Aromatic coastal-style pilau with beef.',1400,0,'pilau'],
['swahili','Swahili Chicken Biryani','Layered biryani rice with chicken, Swahili style.',1300,0,'biryani'],
['swahili','Swahili Fish','Fish in a rich coconut sauce, with chips, rice, veg or mash.',1450,0,'fish'],
['swahili','Swahili Prawns','Grilled prawns served with coconut sauce. Queen size shown.',1800,1,'prawns'],
['swahili','½ Boneless Swahili Chicken','Boneless chicken simmered in coconut sauce.',1300,0,'curry'],
['swahili','Swahili Cassava','Cassava cooked the Swahili way, with chips, rice or naan.',750,0,'veg'],
['swahili','Chicken Chapati','Chapati rolled with spiced chicken (single egg).',750,0,'sandwich'],
['indian','Chicken Biryani','Classic Indian-style biryani with chicken.',1300,0,'biryani'],
['indian','Boneless Chicken Tikka','Tandoor-style chicken tikka with chips or naan.',1450,0,'chicken'],
['indian','¼ Chicken Tikka (Leg)','Charcoal-grilled, served with chips or naan.',750,0,'chicken'],
['indian','Chicken Butter Curry','Chicken in a rich buttery curry sauce. Also in Masala, Jeera Mari, Swahili.',1300,0,'butter'],
['indian','Paneer Tikka','Delicately spiced cottage cheese cooked in the tandoor.',950,0,'curry'],
['indian','Garlic Tandoori (Naan)','Fresh tandoor-baked garlic bread.',200,0,'naan'],
['indian','Samosa (3 pcs)','Crisp samosas, veg, meat or chicken.',280,0,'samosa'],
['indian','Maru Bhajia','Spiced potato fritters, a Kenyan-Indian favourite.',450,0,'fries'],
['italian','Margherita Pizza','Tomato and cheese on a classic base.',1100,0,'pizza'],
['italian','Hawaiian Pizza','Tomato, cheese, chicken, pineapple and corn.',1400,0,'pizza2'],
['italian','Spicy Tikka Pizza','Tomato, cheese and tikka.',1400,0,'pizza'],
['italian','Barbeque Chicken Pizza','Smoky barbeque chicken on a cheesy base.',1400,0,'pizza2'],
['italian','Marinara Pizza','Tomato, cheese, fish and prawns.',1600,0,'pizza'],
['italian','Spaghetti Bolognese','Spaghetti in a rich minced meat sauce.',1000,0,'pasta'],
['italian','Penne Al Fungi','Penne with mushrooms.',1000,0,'pasta'],
['italian','Lasagne (Beef / Chicken)','Baked layers of pasta and sauce. Vegetable KSh 1,150.',1350,0,'pasta'],
['grills','Mixed Grill (House Special)','Tikka, kebab, mishkaki, lamb chops and tandoori with chips or naan.',2600,0,'mixed'],
['grills','Chicken Chooza','Whole spring chicken with chips or naan.',1700,0,'chicken'],
['grills','Plate of Mishkaki','Skewered, marinated and char-grilled.',750,0,'grill'],
['grills','Lamb Chop Tikka','Tender lamb chops from the charcoal grill.',1000,0,'steak'],
['grills','Pepper Steak (Tenderloin)','Tenderloin steak with chips, rice, veg or mash.',1400,0,'steak'],
['grills','Jumbo T-Bone (450g)','Special cut, served with chips, rice, veg or mash.',2200,0,'steak'],
['grills','Chicken Wings','Deep fried in our home sauce.',700,0,'wings'],
['grills','Beef / Mutton Kebab','Spiced kebabs from the grill.',800,0,'grill'],
['burgers','Beef Burger','Juicy beef patty in a soft bun.',650,0,'burger'],
['burgers','Chicken Burger','Crisp, tasty chicken burger.',650,0,'burger'],
['burgers','Mombasa Burger','Double patty, cheese, chillies and house special sauce.',1100,0,'burger'],
['burgers','Rozina’s Chips','Choose Masala, Peri Peri, Garlic, Poussin or Akber.',380,0,'fries'],
['burgers','Cheese Chips','Golden chips loaded with cheese.',500,0,'fries'],
['burgers','Chicken Sandwich','Freshly made chicken sandwich.',750,0,'sandwich'],
['burgers','Club Sandwich','Chicken, cheese, egg, steak and tomato.',1000,0,'sandwich'],
['seafood','Fish in Breadcrumbs','Crumb-fried fish with chips, rice, veg or mash.',1450,0,'fish'],
['seafood','Prawns (Queen)','Many sauces: Garlic, Akber, Pili Pili, Masala, Peri Peri. King 2,500 · Jumbo 3,300.',1800,1,'prawns'],
['seafood','Calamari Fritters','Battered calamari rings with tartar sauce.',950,0,'seafood'],
['seafood','Oysters (Garlic Butter)','Oven-grilled with garlic butter.',1200,0,'seafood'],
['seafood','Fisherman’s Basket','Prawns, calamari, fish and chips.',3100,0,'seafood'],
['seafood','Seafood Platter (2 pax)','Prawn cocktail, crab, fish, calamari, lobster, prawns and chips.',6400,0,'seafood'],
['veg','Chili Paneer','Cottage cheese with onion and green pepper, wet or dry.',950,0,'curry'],
['veg','Mutter Paneer','Paneer and peas in a spiced sauce.',950,0,'curry'],
['veg','Vegetable Curry','Seasonal vegetables in a fragrant curry.',950,0,'veg'],
['veg','Coconut Corn','Corn in a creamy coconut sauce.',800,0,'veg'],
['veg','Chili Garlic Mushrooms','Mushrooms tossed in chilli and garlic.',750,0,'veg'],
['veg','Fungi Pizza','Tomato, cheese and mushroom.',1300,0,'pizza'],
['veg','Mixed Salad','Fresh garden salad.',450,0,'salad'],
['desserts','Tiramisu','Classic coffee-flavoured Italian dessert.',500,0,'cake'],
['desserts','Home Made Kulfi','Traditional Indian ice cream.',500,0,'dessert'],
['desserts','White Lady','Ice cream with hot chocolate sauce.',500,0,'dessert'],
['desserts','Banana Boat','Banana with ice cream and toppings.',650,0,'dessert'],
['desserts','Fruit Salad with Ice Cream','Fresh fruit with a scoop of ice cream.',550,0,'dessert'],
['desserts','Fresh Juice, Shakes, Tea & Coffee','Not on the printed menu. Ask us for today’s drinks list.',0,0,'juice']
];
const LOGO=`<a class="logo" href="index.html" aria-label="Rozina's Restaurant home"><img src="logo.png" alt="Rozina's Restaurant" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'wm',innerHTML:'Rozina’s<small>Restaurant</small>'}))"></a>`;
const pg=document.body.dataset.page,L=[['index.html','Home','home'],['menu.html','Menu','menu'],['about-contact.html','About & Contact','about']];
const links=c=>L.map(l=>`<a href="${l[0]}" class="${l[2]==pg?'on':''}">${l[1].replace('&','&amp;')}</a>`).join('');
const WAI='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg>';
$('#hd').outerHTML=`<header class="hd"><div class="wrap">${LOGO}<ul class="nav">${L.map(l=>`<li><a href="${l[0]}" class="${l[2]==pg?'on':''}">${l[1].replace('&','&amp;')}</a></li>`).join('')}</ul><div class="hd-r"><a class="btn sm" href="${wa("Hello Rozina's! I'd like to place an order.")}" target="_blank" rel="noopener">${WAI}<span>Order on WhatsApp</span></a><button class="burger" aria-expanded="false" aria-controls="mn" aria-label="Open menu"><i></i><i></i><i></i></button></div></div><nav class="mnav" id="mn" aria-label="Mobile">${links()}</nav></header>`;
const bg=$('.burger'),mn=$('#mn');bg.onclick=()=>{const o=mn.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
$('#ft').outerHTML=`<footer class="ft"><div class="wrap"><div><div class="wm">Rozina’s<small>Restaurant</small></div><p style="margin-top:14px;max-width:34ch">Multi-cuisine dining at Westside Mall, Nakuru. Swahili, Indian, Italian and grilled favourites.</p></div><div><h3>Explore</h3>${links()}</div><div><h3>Visit & Contact</h3><p>Westside Mall, Kenyatta Avenue, Nakuru, Kenya</p><p>Daily 8AM – 10PM</p><a href="tel:+254711482700">+254 711 482700</a><a href="${DIR}" target="_blank" rel="noopener">Get Directions</a></div><div><h3>Order</h3><a class="btn g sm" href="${wa("Hello Rozina's! I have an enquiry.")}" target="_blank" rel="noopener">${WAI} WhatsApp Us</a><h3 style="margin-top:20px">Legal</h3><a href="about-contact.html#cookies">Cookie Policy</a><a href="about-contact.html#terms">Terms &amp; Conditions</a></div></div><div class="copy">© <span id="yr"></span> Rozina’s Restaurant, Nakuru. Menu and prices are subject to change.</div></footer><a class="wafab" href="${wa("Hello Rozina's! I have an enquiry.")}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24"><path d="M4 3h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9l-5 4v-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/></svg></a><div class="ck" id="ck" role="dialog" aria-label="Cookie notice"><p>We use only essential storage to remember this choice. Third-party images and maps may set their own cookies. <a href="about-contact.html#cookies">Cookie Policy</a></p><button class="btn g sm" id="ckb">Got it</button></div>`;
$('#yr').textContent=new Date().getFullYear();
try{if(!localStorage.getItem('rz_ck'))$('#ck').classList.add('show')}catch(e){$('#ck').classList.add('show')}
$('#ckb').onclick=()=>{$('#ck').classList.remove('show');try{localStorage.setItem('rz_ck','1')}catch(e){}};
/* directions + order links */
$$('[data-dir]').forEach(a=>{a.href=DIR;a.target='_blank';a.rel='noopener'});
$$('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
/* reveal */
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;
$$('.rv').forEach((e,i)=>{e.style.setProperty('--d',(i%3)*.08+'s');io?io.observe(e):e.classList.add('in')});
/* hero slideshow */
const sl=$$('.slide');if(sl.length){let i=0,t;const dots=$('.dots'),go=n=>{sl[i].classList.remove('on');dots.children[i].classList.remove('on');i=n;sl[i].classList.add('on');dots.children[i].classList.add('on')};
sl.forEach((_,n)=>{const b=document.createElement('button');b.setAttribute('aria-label','Slide '+(n+1));b.onclick=()=>{go(n);run()};dots.appendChild(b)});dots.children[0].classList.add('on');
const run=()=>{clearInterval(t);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)t=setInterval(()=>go((i+1)%sl.length),5500)};run();let x0=null;const hi=$('.hero-img');hi.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});hi.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>40){go((i+(d<0?1:sl.length-1))%sl.length);run()}x0=null})}
/* featured cards */
const FEAT=$('#feat');if(FEAT){const f=['Chicken Biryani','Beef Burger','Boneless Chicken Tikka','Margherita Pizza','Hawaiian Pizza','Mixed Grill (House Special)'];
FEAT.innerHTML=f.map(n=>MENU.find(m=>m[1]==n)).map(m=>card(m)).join('')}
function card(m){const p=m[3]?`<span class="price">${m[4]?'<small>from </small>':''}${ksh(m[3])}</span>`:'<span class="price"><small>Ask for today’s list</small></span>';
return `<article class="card rv" data-cat="${m[0]}"><div class="ph">${img(m[5],560,m[1])}</div><div class="cb"><h3>${m[1]}</h3><p>${m[2]}</p>${p}<a class="btn sm" href="${wa("Hello Rozina's! I'd like to order / enquire about: "+m[1]+(m[3]?' ('+ksh(m[3])+')':'')+'. Is it available today?')}" target="_blank" rel="noopener">${FEAT?'Order Now and Inquire':'Enquire on WhatsApp'}</a></div></article>`}
/* menu page */
const MG=$('#mgrid');if(MG){const ch=$('#chips');let cat='all',q='';
ch.innerHTML=`<button class="chip on" data-c="all">All</button>`+Object.entries(CATS).map(([k,v])=>`<button class="chip" data-c="${k}">${v}</button>`).join('');
const draw=()=>{const r=MENU.filter(m=>(cat=='all'||m[0]==cat)&&(m[1]+' '+m[2]).toLowerCase().includes(q));MG.innerHTML=r.map(card).join('');$$('.rv',MG).forEach(e=>e.classList.add('in'));$('#empty').style.display=r.length?'none':'block';$('#cnt').textContent=r.length+' dishes'};
ch.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;cat=b.dataset.c;$$('.chip',ch).forEach(c=>c.classList.toggle('on',c==b));draw()};
$('#q').oninput=e=>{q=e.target.value.trim().toLowerCase();draw()};
const h=location.hash.slice(1);if(CATS[h]){cat=h;$$('.chip',ch).forEach(c=>c.classList.toggle('on',c.dataset.c==h))}draw()}
/* reservation form */
const RF=$('#rf');if(RF){const d=$('#date');d.min=new Date().toISOString().slice(0,10);
RF.onsubmit=e=>{e.preventDefault();let ok=true;const v={};$$('[name]',RF).forEach(f=>{v[f.name]=f.value.trim();const need=f.required,bad=need&&!v[f.name]||f.name=='phone'&&!/^\+?[0-9\s-]{9,15}$/.test(v.phone||'0');f.classList.toggle('bad',bad);f.nextElementSibling.textContent=bad?'Please enter a valid '+f.dataset.l:'';if(bad)ok=false});
if(!ok){$('.bad',RF).focus();return}
const t=`Hello Rozina's! Reservation enquiry:\nName: ${v.name}\nPhone: ${v.phone}\nDate: ${v.date}\nTime: ${v.time}\nGuests: ${v.guests}\nSpecial requests: ${v.notes||'None'}\nPlease confirm availability.`;
$('#rmsg').hidden=false;window.open(wa(t),'_blank','noopener')}}
