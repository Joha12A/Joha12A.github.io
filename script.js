/* ===== DONNÉES DU PORTFOLIO ===== */
const DATA={

 photo:"assets/images/profil.jpeg", photoAlt:"Portrait de Johanès Amoussouga", cv:"assets/cv/CV-Johanes-Amoussouga.pdf",

 links:{email:"mailto:johanesamoussouga@gmail.com",linkedin:"https://www.linkedin.com/in/johanès-abdon-amoussouga-16b75231b",github:"https://github.com/Joha12A"},

 nav:[["Profil","#profil"],["Compétences","#competences"],["Certifications","#certifications"],["Projets","#projets"],["Parcours","#parcours"],["Contact","#contact"]],

 labs:{v:"15+",l:"Labs & CTF documentés"},

 about:[["Formation","Licence — Sécurité informatique","ESGIS Bénin"],["Orientation","Pentest · Réseaux","Cybersecurity Engineering"],["Approche","Labs · CTF","Projets pratiques"]],

 skills:[

  {t:"Systèmes",d:"Administration et sécurisation d’environnements Linux et Windows.",i:[["Linux",1],["Kali Linux",1],["Windows Server",1],["Active Directory",1]]},

  {t:"Réseaux",d:"Compréhension des protocoles, configuration et sécurisation de services, analyse du trafic.",i:[["TCP/IP",1],["DNS / DNSSEC",1],["SSH",1],["IIS",0],["Nmap",1],["Wireshark",1]]},

  {t:"Sécurité offensive",d:"Pratique en environnement contrôlé : labs et CTF.",i:[["CTF",1],["Pentest web",1],["Burp Suite",1],["SQLMap",1]]},

  {t:"Développement & automatisation",d:"Scripts et outils pour automatiser et reproduire des environnements.",i:[["Python",1],["Git / GitHub",1],["Docker",1],["n8n",0]]}],

 certs:[

  {n:"Introduction to Cybersecurity",o:"Cisco Networking Academy",date:"2024",img:"assets/images/introduction-to-cybersecurity.png",url:"assets/certs/Introduction-to-Cybersecurity.pdf",status:"Obtenue",d:"Principes fondamentaux de la sécurité : confidentialité, intégrité et disponibilité (CIA), typologies des cyberattaques et stratégies globales de cyberdéfense.",tags:["Sécurité des SI","Modèle CIA","Menaces Réseau","Cisco NetAcad"]},

  {n:"Networking Basics",o:"Cisco Networking Academy",date:"2024",img:"assets/images/networking-basics.png",url:"assets/certs/Networking-Basics.pdf",status:"Obtenue",d:"Architecture et protocoles réseaux, modèle OSI, suite TCP/IP, routage, commutation et bases de l'adressage IPv4/IPv6.",tags:["Architecture Réseau","Modèle OSI","TCP/IP","Routage & Switch"]},

  {n:"CCEP — Certified Cybersecurity Educator Professional",o:"Red Team Leaders",date:"2026",img:"assets/images/CCEP.png",url:"assets/certs/CCEP.pdf",status:"Obtenue",d:"Transmission des compétences et pédagogie appliquée à la cybersécurité, sensibilisation aux risques et bonnes pratiques de sécurité.",tags:["Pédagogie Cyber","Sensibilisation","Social Engineering","Bonnes Pratiques"]},

  {n:"CLLMSP — Certified LLM Security Practitioner",o:"Red Team Leaders",date:"2026",img:"assets/images/CLLMSP.png",url:"assets/certs/CLLMSP.pdf",status:"Obtenue",d:"Sécurité des grands modèles de langage (LLM) : prévention des injections de prompts, fuite de données et sécurisation des applications IA.",tags:["LLM Security","Prompt Injection","OWASP LLM Top 10","Sécurité IA"]},

  {n:"Security Awareness for Everyone",o:"CyberExam",date:"2026",img:"assets/images/cyberexam.png",url:"assets/certs/CyberExam-Certificate-Security-Awareness-for-Everyone.pdf",status:"Obtenue",d:"Sensibilisation globale aux cybermenaces : ingénierie sociale, détection des attaques de phishing, protection des données et hygiène numérique.",tags:["Sensibilisation","Anti-Phishing","Social Engineering","Cyber Hygiène"]},

  {n:"Introduction à la cybersécurité",o:"Cursa",date:"2024",img:"assets/images/cursa-cybersecurite.jpeg",url:"assets/certs/cursa-cybersecurite.pdf",status:"Obtenue",d:"Panorama des cybermenaces, sensibilisation aux risques numériques et sécurisation des environnements de travail.",tags:["Hygiène Informatique","Protection Données","Cybermenaces"]},

  {n:"Langage Python",o:"Cursa",date:"2024",img:"assets/images/cursa-python.jpeg",url:"assets/certs/cursa-python.pdf",status:"Obtenue",d:"Programmation en Python, structures de données, algorithmique et bases pour l'automatisation de scripts système.",tags:["Python","Algorithmique","Automatisation","Scripting"]}],

 projects:[

  {n:"Cyberdéfense autonome pour PME africaines",k:"Mémoire de Licence",on:1,t:["IA","Cyberdéfense","Prototype"],d:"Plateforme de cyberdéfense basée sur l’IA, avec un prototype autonome adapté aux contraintes des PME africaines.",obj:"Concevoir une plateforme de cyberdéfense intelligente et accessible adaptée au contexte économique et infrastructurel local.",ctx:"Mémoire de Licence en Sécurité Informatique (ESGIS Bénin).",did:["Étude des menaces récurrentes ciblant les PME","Conception de l'architecture de détection basée sur l'intelligence artificielle","Développement du prototype et préparation des démonstrations"],learn:"Intégration de modèles IA pour la détection d'anomalies, prise en compte des contraintes de ressources en entreprise.",github:""},

  {n:"Lab Active Directory (AD DS) & Hardening",k:"Lab Sécurité Infrastructure",on:1,t:["Active Directory","Windows Server","GPO","Hardening","Kerberos"],d:"Déploiement d’une forêt AD DS complète, configuration de GPO de durcissement et simulation d'attaques d'escalade de privilèges.",obj:"Mettre en place un environnement d'entreprise complet pour maîtriser l'administration et la sécurité offensive/défensive d'Active Directory.",ctx:"Lab personnel de cybersécurité d'entreprise.",did:["Installation et configuration du contrôleur de domaine Windows Server (AD DS, DNS, DHCP)","Création et application de GPO de durcissement (désactivation LLMNR/NBT-NS, politiques de mots de passe, AppLocker)","Audit de sécurité et cartographie des chemins d'attaque avec BloodHound"],learn:"Compréhension approfondie des protocoles d'authentification Windows (Kerberos, NTLM), du cloisonnement des privilèges et des vecteurs de compromission internes.",github:""},

  {n:"Déploiement SIEM & Monitoring SOC (Wazuh)",k:"Lab Défense & Détection",on:1,t:["SIEM","Wazuh","SOC","Analyse de logs","Détection"],d:"Mise en place d'une solution SIEM avec collecte télémétrique multi-sources et alertes de compromission en temps réel.",obj:"Centraliser la surveillance des postes Windows et serveurs Linux pour détecter les comportements suspects et les intrusions.",ctx:"Lab de supervision et défense opérationnelle.",did:["Installation du gestionnaire SIEM et déploiement d'agents sur endpoints Linux et Windows","Écriture et ajustement de règles de détection sur des scénarios réels (bruteforce SSH/RDP, exécution suspecte)","Création de tableaux de bord de sécurité et workflows de réponse à incident"],learn:"Analyse de télémétrie et logs d'événements (Sysmon, auth.log), corrélation d'incidents et réflexes d'analyste SOC.",github:""},

  {n:"DNS à horizon partagé & DNSSEC",k:"Travaux pratiques réseau",t:["DNS","DNSSEC","Kali Linux","Wireshark","IIS"],d:"Installation et configuration d’un DNS à horizon partagé avec DNSSEC, suivi d'une simulation d'attaque et analyse du trafic.",obj:"Mettre en place et sécuriser un service DNS critique, puis évaluer sa résistance face aux attaques courantes.",ctx:"Travaux pratiques de réseau (ESGIS Bénin).",did:["Configuration de zones DNS internes et externes distinctes (Split-Horizon)","Signature cryptographique des enregistrements avec DNSSEC","Simulation d'attaques d'empoisonnement de cache avec Kali Linux et capture de flux sous Wireshark","Configuration d'un serveur web IIS"],learn:"Maîtrise approfondie des protocoles DNS/DNSSEC, de l'authentification cryptographique et de l'analyse de paquets réseau.",github:""},

  {n:"Installation et sécurisation d’un serveur SSH",k:"Travaux pratiques · Groupe 11",t:["SSH","Ubuntu Server","Kali Linux"],d:"Déploiement et durcissement (hardening) d’un serveur SSH avec audit offensif de résistance.",obj:"Déployer un accès distant hautement sécurisé et éliminer les vecteurs d'attaque par force brute.",ctx:"Travaux pratiques système & sécurité (ESGIS Bénin).",did:["Installation d'Ubuntu Server et configuration initiale","Durcissement SSH (authentification par clé uniquement, changement de port par défaut, Fail2Ban)","Tests de pénétration et tentatives de bruteforce depuis Kali Linux","Rédaction d'un rapport technique détaillé"],learn:"Hardening Linux, gestion stricte des privilèges et des clés cryptographiques, analyse des logs d'authentification.",github:""},

  {n:"Application Node.js / MySQL sous Docker",k:"Travaux pratiques conteneurs",t:["Docker","Node.js","MySQL"],d:"Conteneurisation complète d’une application web connectée à une base de données relationnelle.",obj:"Créer un environnement applicatif reproductible, isolé et prêt pour le déploiement.",ctx:"Travaux pratiques d'administration système & DevOps (ESGIS Bénin).",did:["Création de Dockerfiles optimisés pour Node.js","Orchestration multi-conteneurs avec Docker Compose","Configuration du réseau virtuel et de la persistance des données MySQL"],learn:"Isolation de conteneurs, gestion des volumes persistants et interconnexion réseau de services conteneurisés.",github:""},

  {n:"Manuel « Linux pour la cybersécurité »",k:"Projet de rédaction",on:1,t:["Linux","Pédagogie"],d:"Guide technique pratique dédié à l'apprentissage de Linux pour les passionnés et étudiants en cybersécurité.",obj:"Accompagner pas à pas les débutants dans la maîtrise du terminal et des commandes fondamentales de sécurité.",ctx:"Projet pédagogique personnel structuré en modules progressifs.",did:["Rédaction structurée des modules théoriques et pratiques","Mise en situation avec des exercices guidés sur machines virtuelles"],learn:"Vulgarisation de concepts techniques complexes et consolidation des connaissances d'administration Linux.",github:""}],

 journey:[

  {y:"2021–2024",t:"DT IMI — Installation et maintenance en informatique",s:"Lycée Technique et Professionnel de Kpondéhou"},

  {y:"JUIL.–AOÛT 2024",t:"Stage : assistant informatique",s:"Ministère de la Santé du Bénin, Cotonou : assistance réseau, maintenance des équipements réseau et des postes de travail"},

  {y:"DEPUIS OCT. 2024",t:"Licence Sécurité Informatique",s:"ESGIS Bénin · Club Hacking · labs, CTF, pratique Linux, réseaux et sécurité"},

  {y:"2024–2026",t:"Certifications Cybersécurité & Réseaux",s:"Cisco (Introduction to Cybersecurity, Networking Basics), Red Team Leaders (CCEP, CLLMSP), Cursa"},

  {y:"OBJECTIF",t:"Pentester / Cybersecurity Engineer",s:"Recherche active d'un stage / d'une opportunité en sécurité offensive"}],

 focus:["Web Pentesting","Active Directory Security","SOC & Detection","Python Security Automation","AI + Cybersecurity"]

};

/* ===== RENDU ===== */

const $=s=>document.querySelector(s),L=DATA.links,pad=i=>String(i+1).padStart(2,"0");let ph=false;

$("#nl").innerHTML=DATA.nav.map(n=>`<li><a href="${n[1]}">${n[0]}</a></li>`).join("")+`<li><a class="cv" href="${DATA.cv||"#contact"}" target="_blank">CV</a></li>`;

if(DATA.cv){
  const cvb=$("#cvb");
  if(cvb){
    cvb.href=DATA.cv;
    cvb.target="_blank";
  }
}

$("#fr").insertAdjacentHTML("beforeend",DATA.photo?`<img src="${DATA.photo}" alt="${DATA.photoAlt}" width="400" height="500" fetchpriority="high">`:`<div><div class="mg">JA</div><small>CYBERSECURITY</small></div>`);

const tech=[...new Set(DATA.skills.flatMap(s=>s.i.map(x=>x[0])))],m=tech.map(t=>`<span>${t}</span>`).join("");$("#mq").innerHTML=m+m;

$("#stats").innerHTML=[{v:"2024",l:"Début de la Licence en cybersécurité"},{v:DATA.certs.length,l:"Certifications obtenues"},{v:DATA.projects.length,l:"Projets & travaux présentés"},{...DATA.labs}].map(s=>`<div class="stat"><b>${s.v}</b><span>${s.l}</span></div>`).join("");

$("#about").innerHTML=DATA.about.map(a=>`<div class="card"><span class="mono">${a[0]}</span><div class="ii" style="margin-top:.7rem"><b>${a[1]}</b><span>${a[2]}</span></div></div>`).join("");

$("#skills").innerHTML=DATA.skills.map((c,i)=>`<div class="card" tabindex="0"><span class="mono">${pad(i)} · ${c.t}</span><div style="margin-top:.7rem">${c.i.map(x=>`<div class="sk"><span>${x[0]}</span><span class="mt" title="${x[1]?"Pratique régulière":"En progression"}"><i class="f"></i><i class="f"></i><i class="${x[1]?"f":""}"></i></span></div>`).join("")}</div><p class="more">${c.d}</p></div>`).join("");

$("#certs").innerHTML=DATA.certs.map(c=>`<article class="card"><a class="cb" href="${c.url}" target="_blank" rel="noopener noreferrer" title="Ouvrir le certificat ${c.n}">${c.img?`<img src="${c.img}" alt="Certificat ${c.n}" loading="lazy" width="480" height="270">`:`<b>${c.o.split(" ").map(w=>w[0]).join("").slice(0,3)}</b><small>OBTENUE</small>`}</a><span class="mono">${c.o}${c.date?" · "+c.date:""}</span><span class="bd ok">✓ ${c.status||"Obtenue"}</span><h3>${c.n}</h3><p>${c.d}</p><div class="tg">${(c.tags||[]).map(t=>`<span>${t}</span>`).join("")}</div><div class="cert-foot"><a class="btn-cert" href="${c.url}" target="_blank" rel="noopener noreferrer">📄 Ouvrir le certificat ↗</a></div></article>`).join("");

$("#projs").innerHTML=DATA.projects.map((p,i)=>`<article class="pr" data-p="${i}" tabindex="0" role="button" aria-label="Voir le projet ${p.n}"><span class="pn">${pad(i)}</span><div class="pt"><span class="mono">${p.k}</span><span class="bd${p.on?" w":""}">${p.on?"EN COURS":"LAB / TP"}</span><h3>${p.n}</h3><p>${p.d}</p><div class="tg">${p.t.map(t=>`<span>${t}</span>`).join("")}</div></div><button class="go" data-p="${i}">Voir le projet →</button></article>`).join("");

$("#tl").innerHTML=DATA.journey.map(j=>`<li><span class="y">${j.y}</span><b>${j.t}</b><span class="s">${j.s}</span></li>`).join("");

$("#focus").innerHTML=DATA.focus.map((f,i)=>`<li><b>${pad(i)}</b>${f}</li>`).join("");

const lk=[["Email",L.email],["LinkedIn",L.linkedin],["GitHub",L.github]];

$("#links").innerHTML=lk.map((l,i)=>l[1]?`<a class="btn${i===0?" p":""}" href="${l[1]}" ${l[1].startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}>${l[0]}</a>`:`<a class="btn" href="#contact" title="Bientôt disponible">${l[0]}</a>`).join("");

$("#fl").innerHTML=lk.map(l=>l[1]?`<a href="${l[1]}" ${l[1].startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}>${l[0]}</a>`:`<span>${l[0]}</span>`).join("");

/* modales */

const dlg=$("#dlg"),open=h=>{$("#dm").innerHTML=`<button class="x" onclick="dlg.close()">Fermer</button>`+h;dlg.showModal()};

document.addEventListener("click",e=>{if(e.target===dlg){dlg.close();return;}if(e.target.closest("[data-close-dialog]")){dlg.close();return;}const b=e.target.closest("[data-c],[data-p]");if(!b)return;

 if(b.dataset.c){const c=DATA.certs[b.dataset.c];open(`<span class="mono">${c.o}${c.date?" · "+c.date:""}</span><h3 id="dt">${c.n}</h3><p style="color:var(--mu);margin-top:1rem">Certification officiellement obtenue et validée. Le justificatif est en cours de numérisation et sera consultable ici directement très prochainement.</p><p style="margin-top:1rem">${c.d}</p>`)}

 else{const p=DATA.projects[b.dataset.p];open(`<span class="mono">${p.k}</span><h3 id="dt">${p.n}</h3><h4>OBJECTIF</h4><p>${p.obj}</p><h4>CONTEXTE</h4><p>${p.ctx}</p><h4>TECHNOLOGIES</h4><div class="tg">${p.t.map(t=>`<span>${t}</span>`).join("")}</div><h4>CE QUE J’AI RÉALISÉ</h4><ul>${p.did.map(x=>`<li>${x}</li>`).join("")}</ul><h4>CE QUE J’AI APPRIS</h4><p>${p.learn}</p>${p.github?`<p style="margin-top:1.4rem"><a class="btn p" href="${p.github}" target="_blank" rel="noopener noreferrer">Consulter le projet sur GitHub ↗</a></p>`:""}`)}});

/* nav, scroll, reveal, spotlight */

const hd=$("#hd"),bg=$("#bg"),nv=$("#nv"),tl=$("#tl"),sc=()=>{hd.classList.toggle("on",scrollY>20);const r=tl.getBoundingClientRect();tl.style.setProperty("--p",Math.max(0,Math.min(1,(innerHeight*.7-r.top)/r.height)))};

addEventListener("scroll",sc,{passive:true});sc();

const cl=()=>{nv.classList.remove("open");bg.setAttribute("aria-expanded","false")};

bg.onclick=()=>{const o=nv.classList.toggle("open");bg.setAttribute("aria-expanded",o)};

nv.addEventListener("click",e=>{if(e.target.closest("a"))cl()});addEventListener("keydown",e=>{if(e.key==="Escape")cl()});

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});

document.querySelectorAll(".rv").forEach(el=>io.observe(el));

if(matchMedia("(hover:hover)").matches)document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}},{passive:true});


/* Accessibilité clavier pour les fiches projets. */
document.addEventListener("keydown", e => {
  const row = e.target.closest && e.target.closest("article.pr[data-p]");
  if (!row || e.target.closest("button")) return;
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); row.querySelector(".go")?.click(); }
});
