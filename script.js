/* ===================== STORAGE HELPERS ===================== */
const DB_KEY = "slinfo_db_v1";

function loadDB(){
  const raw = localStorage.getItem(DB_KEY);
  if(raw) return JSON.parse(raw);
  return seedDB();
}
function saveDB(){ localStorage.setItem(DB_KEY, JSON.stringify(DB)); }

function uid(prefix){ return prefix + "_" + Math.random().toString(36).slice(2,9); }

/* ===================== SEED DATA ===================== */
function seedDB(){
  const users = {
    "rara_official": {
      username:"rara_official", name:"Rara Amelia", password:"123456",
      avatar:"https://i.pravatar.cc/150?img=47",
      bio:"Suka bahas isu viral & teknologi ✨", followers:["duta_news","bagas_tv"], following:["duta_news"]
    },
    "duta_news": {
      username:"duta_news", name:"Duta Pratama", password:"123456",
      avatar:"https://i.pravatar.cc/150?img=12",
      bio:"Jurnalis lepas — laporan cepat, akurat.", followers:["rara_official"], following:["bagas_tv","rara_official"]
    },
    "bagas_tv": {
      username:"bagas_tv", name:"Bagas TV", password:"123456",
      avatar:"https://i.pravatar.cc/150?img=33",
      bio:"Konten hiburan & olahraga tiap hari.", followers:[], following:["rara_official"]
    }
  };

  const posts = [
    {
      id: uid("post"), author:"duta_news", category:"Viral",
      title:"Video Kucing Pakai Sepatu Roda Ini Bikin Warganet Heboh Semalaman",
      content:"Sebuah video pendek yang menampilkan seekor kucing oren mengenakan sepatu roda mini mendadak viral di berbagai platform media sosial. Dalam video berdurasi 20 detik itu, si kucing terlihat meluncur santai di lantai keramik rumah pemiliknya.\n\nUnggahan tersebut sudah dibagikan ulang lebih dari seratus ribu kali dan memunculkan berbagai versi tiruan dari pengguna lain yang mencoba hal serupa dengan hewan peliharaan mereka.",
      image:"https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80",
      timestamp: Date.now() - 1000*60*30, likes:["rara_official","bagas_tv"], saves:[],
      comments:[{user:"bagas_tv", text:"Lucu banget wkwk", ts:Date.now()-1000*60*20}]
    },
    {
      id: uid("post"), author:"bagas_tv", category:"Olahraga",
      title:"Timnas Menang Telak, Suporter Padati Jalan Sampai Dini Hari",
      content:"Kemenangan besar timnas dalam laga tadi malam disambut gegap gempita oleh para suporter yang tumpah ruah di sejumlah titik kota. Konvoi kendaraan bermotor dengan bendera merah putih terlihat memenuhi jalan protokol hingga menjelang pagi.\n\nPihak kepolisian menyiagakan personel tambahan untuk mengatur arus lalu lintas yang sempat terhambat akibat euforia warga.",
      image:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
      timestamp: Date.now() - 1000*60*60*3, likes:["rara_official"], saves:["rara_official"],
      comments:[]
    },
    {
      id: uid("post"), author:"rara_official", category:"Teknologi",
      title:"Fitur Baru Aplikasi Chat Ini Bikin Percakapan Grup Jadi Lebih Rapi",
      content:"Pembaruan terbaru pada salah satu aplikasi pesan instan populer menghadirkan fitur pengelompokan topik dalam satu grup chat. Pengguna kini bisa memisahkan pembahasan tanpa perlu membuat grup baru.\n\nFitur ini disambut positif oleh komunitas kerja jarak jauh yang sering menggunakan grup besar untuk koordinasi tim.",
      image:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80",
      timestamp: Date.now() - 1000*60*60*8, likes:[], saves:[],
      comments:[{user:"duta_news", text:"Akhirnya, udah lama ditunggu fitur ini", ts:Date.now()-1000*60*60*7}]
    },
    {
      id: uid("post"), author:"duta_news", category:"Nasional",
      title:"Harga Bahan Pokok di Sejumlah Pasar Tradisional Mulai Stabil",
      content:"Setelah sempat mengalami kenaikan pada pekan lalu, harga sejumlah bahan pokok seperti beras, minyak goreng, dan cabai di beberapa pasar tradisional mulai menunjukkan tren stabil. Pedagang menyebut pasokan dari distributor kembali lancar.\n\nPemerintah daerah setempat menyatakan akan terus memantau harga menjelang musim liburan mendatang.",
      image:"https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      timestamp: Date.now() - 1000*60*60*20, likes:["bagas_tv"], saves:[],
      comments:[]
    },
    {
      id: uid("post"), author:"bagas_tv", category:"Hiburan",
      title:"Konser Reuni Band Lawas Terjual Habis dalam 15 Menit",
      content:"Tiket konser reuni salah satu band legendaris tanah air ludes terjual hanya dalam hitungan menit setelah dibuka untuk umum. Banyak penggemar mengaku rela begadang demi mendapatkan tiket.\n\nPromotor acara berencana menambah satu tanggal pertunjukan tambahan karena tingginya animo penonton.",
      image:"https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      timestamp: Date.now() - 1000*60*60*30, likes:["rara_official","duta_news"], saves:[],
      comments:[]
    },
    {
      id: uid("post"), author:"rara_official", category:"Gaya Hidup",
      title:"Tren Jalan Kaki 10 Ribu Langkah Sehari Kembali Digandrungi",
      content:"Kebiasaan berjalan kaki sejauh sepuluh ribu langkah per hari kembali populer di kalangan anak muda kota besar, didorong oleh berbagai unggahan pengalaman pribadi di media sosial. Banyak yang mengaku merasa lebih segar dan tidur lebih nyenyak.\n\nPara pemerhati gaya hidup sehat menyarankan agar aktivitas ini diimbangi dengan pola makan yang seimbang.",
      image:"https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      timestamp: Date.now() - 1000*60*60*50, likes:[], saves:[],
      comments:[]
    }
  ];

  const notifications = {
    "rara_official":[
      {type:"follow", from:"bagas_tv", ts:Date.now()-1000*60*60},
      {type:"like", from:"duta_news", postTitle:"Tren Jalan Kaki 10 Ribu Langkah Sehari Kembali Digandrungi", ts:Date.now()-1000*60*120},
      {type:"comment", from:"bagas_tv", postTitle:"Video Kucing Pakai Sepatu Roda Ini Bikin Warganet Heboh Semalaman", ts:Date.now()-1000*60*180}
    ],
    "duta_news":[
      {type:"follow", from:"rara_official", ts:Date.now()-1000*60*300}
    ],
    "bagas_tv":[]
  };

  const chats = {
    "rara_official":[
      {with:"duta_news", messages:[
        {from:"duta_news", text:"Rar, udah baca berita yang tadi?", ts:Date.now()-1000*60*90},
        {from:"rara_official", text:"Udah, gila ya rame banget", ts:Date.now()-1000*60*85}
      ]}
    ],
    "duta_news":[
      {with:"rara_official", messages:[
        {from:"duta_news", text:"Rar, udah baca berita yang tadi?", ts:Date.now()-1000*60*90},
        {from:"rara_official", text:"Udah, gila ya rame banget", ts:Date.now()-1000*60*85}
      ]}
    ],
    "bagas_tv":[]
  };

  const db = { users, posts, notifications, chats, currentUser:null, theme:"light", bg:"default" };
  localStorage.setItem(DB_KEY, JSON.stringify(db));
  return db;
}

let DB = loadDB();

/* ===================== THEME / BACKGROUND ===================== */
function applyTheme(){
  document.documentElement.setAttribute("data-theme", DB.theme);
  document.querySelectorAll(".mode-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.mode === DB.theme);
  });
  applyBackground();
}
function applyBackground(){
  document.querySelectorAll(".swatch").forEach(s=>s.classList.remove("selected"));
  if(DB.bg === "default"){
    document.body.style.background = "";
    document.body.style.removeProperty("--paper-override");
    const defSwatch = document.querySelector('.swatch[data-bg="default"]');
    if(defSwatch) defSwatch.classList.add("selected");
    return;
  }
  document.documentElement.style.setProperty("--paper", DB.bg);
  const match = document.querySelector(`.swatch[data-bg="${DB.bg}"]`);
  if(match) match.classList.add("selected");
}

/* ===================== TOAST ===================== */
let toastTimer;
function toast(msg){
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>el.classList.add("hidden"), 2200);
}

/* ===================== AUTH ===================== */
const authScreen = document.getElementById("auth-screen");
const appEl = document.getElementById("app");

function showAuthForm(name){
  document.querySelectorAll(".auth-form").forEach(f=>f.classList.remove("active"));
  document.getElementById(name + "-form").classList.add("active");
}

document.querySelectorAll(".auth-tab").forEach(tab=>{
  tab.addEventListener("click", ()=>{
    document.querySelectorAll(".auth-tab").forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
    showAuthForm(tab.dataset.tab);
  });
});

document.querySelectorAll(".btn-social").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const provider = btn.dataset.provider;
    if(provider === "whatsapp") showAuthForm("whatsapp");
    else if(provider === "google") quickSocialLogin("Google");
    else if(provider === "facebook") quickSocialLogin("Facebook");
  });
});
document.querySelectorAll("[data-back]").forEach(btn=>{
  btn.addEventListener("click", ()=> showAuthForm(btn.dataset.back));
});

function quickSocialLogin(provider){
  // Demo: masuk sebagai akun contoh pertama untuk mensimulasikan OAuth
  const username = Object.keys(DB.users)[0];
  loginAs(username);
  toast(`Berhasil masuk dengan ${provider}`);
}

document.getElementById("login-form").addEventListener("submit", e=>{
  e.preventDefault();
  const u = document.getElementById("login-username").value.trim();
  const p = document.getElementById("login-password").value;
  const user = DB.users[u];
  if(user && user.password === p){
    loginAs(u);
  } else {
    toast("Nama pengguna atau kata sandi salah");
  }
});

document.getElementById("gmail-form").addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("gmail-email").value.trim();
  const username = email.split("@")[0] || uid("user");
  if(!DB.users[username]){
    DB.users[username] = {
      username, name: username, password:"", avatar:`https://i.pravatar.cc/150?u=${username}`,
      bio:"", followers:[], following:[]
    };
    DB.notifications[username] = [];
    DB.chats[username] = [];
  }
  saveDB();
  loginAs(username);
  toast("Berhasil masuk dengan Gmail");
});

document.getElementById("whatsapp-form").addEventListener("submit", e=>{
  e.preventDefault();
  const num = document.getElementById("whatsapp-number").value.trim();
  const username = "wa_" + num.replace(/\D/g,"").slice(-6);
  if(!DB.users[username]){
    DB.users[username] = {
      username, name:"Pengguna " + num, password:"", avatar:`https://i.pravatar.cc/150?u=${username}`,
      bio:"", followers:[], following:[]
    };
    DB.notifications[username] = [];
    DB.chats[username] = [];
  }
  saveDB();
  loginAs(username);
  toast("Berhasil masuk dengan WhatsApp");
});

document.getElementById("register-form").addEventListener("submit", e=>{
  e.preventDefault();
  const name = document.getElementById("reg-name").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  if(DB.users[username]){ toast("Nama pengguna sudah dipakai"); return; }
  DB.users[username] = {
    username, name, password, avatar:`https://i.pravatar.cc/150?u=${username}`,
    bio:"Pengguna baru di SlInfo.", followers:[], following:[]
  };
  DB.notifications[username] = [];
  DB.chats[username] = [];
  saveDB();
  loginAs(username);
  toast("Akun berhasil dibuat, selamat datang!");
});

function loginAs(username){
  DB.currentUser = username;
  saveDB();
  authScreen.classList.add("hidden");
  appEl.classList.remove("hidden");
  initAppView();
}

document.getElementById("logout-btn").addEventListener("click", ()=>{
  DB.currentUser = null;
  saveDB();
  closeAllOverlays();
  appEl.classList.add("hidden");
  authScreen.classList.remove("hidden");
});

/* ===================== NAV / PAGES ===================== */
document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.addEventListener("click", ()=> goToPage(btn.dataset.page));
});
function goToPage(name){
  document.querySelectorAll(".nav-btn").forEach(b=> b.classList.toggle("active", b.dataset.page === name));
  document.querySelectorAll(".page").forEach(p=> p.classList.toggle("active", p.id === "page-" + name));
  if(name === "saved") renderSavedFeed();
  if(name === "inbox") renderInbox();
}

/* ===================== OVERLAYS ===================== */
function closeAllOverlays(){
  ["settings-overlay","profile-overlay","followlist-overlay","post-overlay"].forEach(id=>{
    document.getElementById(id).classList.add("hidden");
  });
}
document.getElementById("profile-trigger").addEventListener("click", ()=>{
  renderProfile();
  document.getElementById("profile-overlay").classList.remove("hidden");
});
document.getElementById("profile-close").addEventListener("click", closeAllOverlays);
document.getElementById("settings-close").addEventListener("click", closeAllOverlays);
document.getElementById("followlist-close").addEventListener("click", ()=>{
  document.getElementById("followlist-overlay").classList.add("hidden");
});
document.getElementById("post-close").addEventListener("click", ()=>{
  document.getElementById("post-overlay").classList.add("hidden");
});
document.getElementById("open-settings-from-profile").addEventListener("click", ()=>{
  document.getElementById("profile-overlay").classList.add("hidden");
  document.getElementById("settings-overlay").classList.remove("hidden");
});

/* ===================== SETTINGS ===================== */
document.querySelectorAll(".mode-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    DB.theme = btn.dataset.mode;
    saveDB();
    applyTheme();
  });
});
document.querySelectorAll(".swatch[data-bg]").forEach(sw=>{
  sw.addEventListener("click", ()=>{
    DB.bg = sw.dataset.bg;
    saveDB();
    applyBackground();
  });
});
document.getElementById("custom-color-picker").addEventListener("input", e=>{
  DB.bg = e.target.value;
  saveDB();
  document.documentElement.style.setProperty("--paper", DB.bg);
  document.querySelectorAll(".swatch").forEach(s=>s.classList.remove("selected"));
});

/* ===================== HELPERS ===================== */
function timeAgo(ts){
  const diff = Math.floor((Date.now() - ts) / 1000);
  if(diff < 60) return "baru saja";
  if(diff < 3600) return Math.floor(diff/60) + " menit lalu";
  if(diff < 86400) return Math.floor(diff/3600) + " jam lalu";
  return Math.floor(diff/86400) + " hari lalu";
}
function currentUser(){ return DB.users[DB.currentUser]; }
function excerpt(text){ return text.length > 110 ? text.slice(0,110) + "…" : text; }

/* ===================== FEED ===================== */
const CATEGORIES = ["Semua","Viral","Nasional","Hiburan","Olahraga","Teknologi","Gaya Hidup"];
let activeCategory = "Semua";

function renderCategoryChips(){
  const row = document.getElementById("category-chips");
  row.innerHTML = "";
  CATEGORIES.forEach(cat=>{
    const chip = document.createElement("button");
    chip.className = "chip" + (cat === activeCategory ? " active" : "");
    chip.textContent = cat;
    chip.addEventListener("click", ()=>{ activeCategory = cat; renderCategoryChips(); renderFeed(); });
    row.appendChild(chip);
  });
}

function postCardHTML(post){
  const author = DB.users[post.author];
  return `
    <div class="post-card" data-id="${post.id}">
      ${post.image ? `<img class="post-thumb" src="${post.image}" alt="">` : ""}
      <div class="post-body">
        <div class="post-meta"><span class="cat-dot"></span>${post.category} · ${author ? author.name : post.author} · ${timeAgo(post.timestamp)}</div>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${excerpt(post.content)}</p>
        <div class="post-stats">
          <span>❤ ${post.likes.length}</span>
          <span>💬 ${post.comments.length}</span>
        </div>
      </div>
    </div>`;
}

function renderFeed(){
  const feed = document.getElementById("feed");
  const list = DB.posts
    .filter(p => activeCategory === "Semua" || p.category === activeCategory)
    .sort((a,b)=> b.timestamp - a.timestamp);
  feed.innerHTML = list.length ? list.map(postCardHTML).join("") : emptyState("Belum ada berita di kategori ini.");
  attachCardHandlers(feed);
}
function emptyState(msg){
  return `<div style="padding:40px 10px;text-align:center;color:var(--text-muted);font-size:14px;">${msg}</div>`;
}
function attachCardHandlers(container){
  container.querySelectorAll(".post-card").forEach(card=>{
    card.addEventListener("click", ()=> openPost(card.dataset.id));
  });
}

/* ===================== SEARCH ===================== */
const searchSuggestions = ["Viral","Timnas","Teknologi","Konser","Harga sembako","Gaya hidup"];
function renderSearchSuggestions(){
  const row = document.getElementById("search-suggestions");
  row.innerHTML = searchSuggestions.map(s=>`<button class="chip">${s}</button>`).join("");
  row.querySelectorAll(".chip").forEach(chip=>{
    chip.addEventListener("click", ()=>{
      document.getElementById("search-input").value = chip.textContent;
      doSearch();
    });
  });
}
function doSearch(){
  const q = document.getElementById("search-input").value.trim().toLowerCase();
  const results = document.getElementById("search-results");
  if(!q){ results.innerHTML = ""; return; }
  const matches = DB.posts.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.content.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ).sort((a,b)=> b.timestamp - a.timestamp);
  results.innerHTML = matches.length ? matches.map(postCardHTML).join("") : emptyState(`Tidak ada hasil untuk "${q}"`);
  attachCardHandlers(results);
}
document.getElementById("search-btn").addEventListener("click", doSearch);
document.getElementById("search-input").addEventListener("keydown", e=>{
  if(e.key === "Enter") doSearch();
});

/* ===================== CREATE ===================== */
document.getElementById("create-form").addEventListener("submit", e=>{
  e.preventDefault();
  const title = document.getElementById("create-title").value.trim();
  const category = document.getElementById("create-category").value;
  const content = document.getElementById("create-content").value.trim();
  const image = document.getElementById("create-image").value.trim();
  const post = {
    id: uid("post"), author: DB.currentUser, category, title, content,
    image: image || "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80",
    timestamp: Date.now(), likes:[], saves:[], comments:[]
  };
  DB.posts.unshift(post);
  saveDB();
  e.target.reset();
  toast("Berita berhasil dipublikasikan");
  activeCategory = "Semua";
  renderCategoryChips();
  renderFeed();
  goToPage("home");
});

/* ===================== POST DETAIL ===================== */
function openPost(id){
  const post = DB.posts.find(p=>p.id === id);
  if(!post) return;
  const author = DB.users[post.author];
  const me = currentUser();
  const liked = post.likes.includes(DB.currentUser);
  const saved = post.saves.includes(DB.currentUser);
  const detail = document.getElementById("post-detail");
  detail.innerHTML = `
    ${post.image ? `<img class="pd-image" src="${post.image}" alt="">` : ""}
    <div class="pd-meta">${post.category} · ${author ? author.name : post.author} · ${timeAgo(post.timestamp)}</div>
    <h1 class="pd-title">${post.title}</h1>
    <div class="pd-content">${post.content}</div>
    <div class="post-actions">
      <button class="pd-btn ${liked ? "liked":""}" id="like-btn">❤ Suka (${post.likes.length})</button>
      <button class="pd-btn ${saved ? "saved":""}" id="save-btn">🔖 ${saved ? "Tersimpan" : "Simpan"}</button>
    </div>
    <div class="comments">
      <h4>Komentar (${post.comments.length})</h4>
      <div id="comments-list">
        ${post.comments.map(c=>`<div class="comment"><b>${DB.users[c.user] ? DB.users[