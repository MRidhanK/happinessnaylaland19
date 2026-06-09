const { createClient } = supabase;

const supabaseClient = supabase.createClient(
    "https://iwgmuiudxvndkkyzohbs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3Z211aXVkeHZuZGtreXpvaGJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NDA0OTksImV4cCI6MjA5NjQxNjQ5OX0.fxWaHyQc6j6oC85LrVNN4_BtRRlBMxf1CTp6gkQVVM8"
);


// Tahun-Bulan-Tanggal Jam:Menit:Detik
const birthdayDate = new Date("2026-06-18 00:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".countdown-container").style.display = "none";

        document.getElementById("birthdayMessage").innerHTML = `
            🎉 HAPPY 19TH BIRTHDAY NAYLA 🎉
            <br>
            #HappinessNaylalaland19
        `;

        confetti({
            particleCount: 300,
            spread: 180,
            origin: { y: 0.6 }
        });

    }

}, 1000);
window.addEventListener("load", () => {

    setTimeout(() => {

        confetti({
            particleCount:150,
            spread:120,
            origin:{ y:0.5 }
        });

    },1500);

});
const scanBtn = document.getElementById("scanBtn");

scanBtn.addEventListener("click", () => {
    

    document.getElementById("scanSound").play();
    const scanner = document.getElementById("scanner");

    scanner.style.opacity = "1";

    let pos = 0;

    const scan = setInterval(() => {

        pos += 8;

        scanner.style.transform =
        `translateY(${pos}px)`;

        if(pos > 350){

            clearInterval(scan);

            scanner.style.opacity = "0";

            openTheater();
        }

    },15);

});
function openTheater(){

    document
        .querySelector(".curtain-left")
        .classList.add("open-left");

    document
        .querySelector(".curtain-right")
        .classList.add("open-right");

    launchSiteWideConfetti();

    setTimeout(() => {

        const curtain =
        document.getElementById("curtain");

        curtain.style.display = "none";

        document.body.style.overflowY = "auto";

    }, 2200);

}
function launchSiteWideConfetti() {

    const duration = 8000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 30,
            angle: 60,
            spread: 90,
            origin: {
                x: 0,
                y: Math.random() * 0.8
            }
        });

        confetti({
            particleCount: 30,
            angle: 120,
            spread: 90,
            origin: {
                x: 1,
                y: Math.random() * 0.8
            }
        });

        confetti({
            particleCount: 20,
            spread: 180,
            origin: {
                x: Math.random(),
                y: Math.random()
            }
        });

        if (Date.now() > end) {
            clearInterval(interval);
        }

    }, 250);

}
function showVerifiedScreen(){

    const verified =
    document.getElementById("verifiedScreen");

    verified.classList.add("show");

    setTimeout(() => {

        verified.classList.remove("show");

        openTheater();

    },1000);

}

function showVerifiedScreen(){

    const verified =
    document.getElementById("verifiedScreen");

    verified.classList.add("show");

    confetti({
        particleCount:100,
        spread:70,
        origin:{ y:0.6 }
    });

    setTimeout(() => {

        verified.classList.remove("show");

        openTheater();

    },1000);

}
const candle =
document.getElementById("candle");

const flame =
document.getElementById("flame");

const wishText =
document.getElementById("wishText");

candle.addEventListener("click", () => {

    // stop background music
    bgMusic.pause();
    bgMusic.currentTime = 0;

    flame.classList.add("out");

    document.body.classList.add("dark-stage");

    setTimeout(() => {

        wishText.style.display = "block";

        launchBirthdayShow();

    },1200);

});
function launchBirthdayShow(){

    // ledakan utama
    confetti({
        particleCount: 500,
        spread: 360,
        startVelocity: 50,
        origin: { x: 0.5, y: 0.6 }
    });

    // hujan confetti 5 detik
    const duration = 5000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 20,
            spread: 120,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.7
            }
        });
        confetti({
            particleCount: 100,
            angle: 60,
            spread: 80,
            origin: { x: 0, y: 0.7 }
        });

        confetti({
            particleCount: 100,
            angle: 120,
            spread: 80,
            origin: { x: 1, y: 0.7 }
        });
        if (Date.now() > end) {
            clearInterval(interval);
        }

    }, 150);

    startFireworks();

    const song =
    document.getElementById("birthdaySong");

    if(song){

        playExclusive(song);

    }
}

function startFireworks(){

    const duration = 5000;

    const end =
    Date.now() + duration;

    const interval = setInterval(() => {

        confetti({

            particleCount:50,

            angle:60,

            spread:80,

            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }

        });

        confetti({

            particleCount:50,

            angle:120,

            spread:80,

            origin:{
                x:Math.random(),
                y:Math.random()*0.5
            }

        });

        if(Date.now() > end){

            clearInterval(interval);
        }

    },300);

}
const fanForm =
document.getElementById("fanForm");

if(fanForm){

    fanForm.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const name =
        document.getElementById("fanName").value;

        const message =
        document.getElementById("fanMessage").value;

        const { error } =
        await supabaseClient
        .from("fan_messages")
        .insert([
            {
                name: name,
                message: message
            }
        ]);

        if(error){

            console.error(error);

            alert("Gagal mengirim pesan");

            return;
        }

        fanForm.reset();

        loadMessages();

        confetti({
            particleCount:100,
            spread:90
        });

    });

}
async function loadMessages(){

    const container =
    document.getElementById("messages");

    if(!container) return;

    const { data, error } =
    await supabaseClient
    .from("fan_messages")
    .select("*")
    .order(
        "created_at",
        {
            ascending:false
        }
    );
        console.log("WISH DATA:", data);
        console.log("WISH ERROR:", error);

    if(error){

        console.error(error);

        return;
    }
    console.log(container);
    console.log(data);

    container.innerHTML = "";

    data.forEach(msg => {

        container.innerHTML += `

            <div class="letter-card">

                <h3>
                    🩷🩵 ${msg.name}
                </h3>

                <p>
                    ${msg.message}
                </p>

            </div>

        `;

    });

}
loadMessages();
async function initVisitorCounter() {

    let visitorId =
    localStorage.getItem("visitor_id");

    if (!visitorId) {

        visitorId =
        crypto.randomUUID();

        localStorage.setItem(
            "visitor_id",
            visitorId
        );

        const { error } =
        await supabaseClient
        .from("visitors")
        .insert([
            {
                visitor_id: visitorId
            }
        ]);

        if(error){
            console.error(error);
        }

    }

    loadVisitorCount();
}

async function loadHallOfWishes(){

    const container =
    document.getElementById(
        "wishScroller"
    );

    if(!container) return;

    const { data, error } =
    await supabaseClient
    .from("fan_messages")
    .select("*")
    .order(
        "created_at",
        {
            ascending:false
        }
    );

    if(error){
        console.error(error);
        return;
    }

    container.innerHTML = "";

    data.forEach(msg => {

       container.innerHTML += `
    <div class="wish-card">

        <div class="avatar">
            ${msg.name.charAt(0).toUpperCase()}
        </div>

        <div class="wish-content">
            <div class="wish-name">
                ${msg.name}
            </div>

            <div class="wish-message">
                ${msg.message}
            </div>
        </div>

    </div>
`;

    });

}
loadHallOfWishes();

async function loadVisitorCount() {

    const { count, error } =
    await supabaseClient
    .from("visitors")
    .select(
        "*",
        {
            count:"exact",
            head:true
        }
    );

    if(error){

        console.error(error);
        return;
    }

    const counter =
    document.getElementById(
        "visitorCount"
    );

    if(counter){

        counter.innerText =
        count.toLocaleString();
        document.getElementById(
    "visitorLabel"
).innerHTML =
`👥 ${count.toLocaleString()} Naylaland visited this website`;
    }
}

initVisitorCounter();
const galleryImages =
document.querySelectorAll(".gallery-card img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const closeLightbox =
document.getElementById("closeLightbox");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// =====================
// LOVE COUNTER LOAD
// =====================
async function loadLoveCount() {

    const { count, error } = await supabaseClient
        .from("loves")
        .select("*", { count: "exact", head: true });

    if (error) {
        console.error(error);
        return;
    }

    document.getElementById("loveCount").innerText =
        `${count} Loves ❤️`;
}

loadLoveCount();


async function loadLoveCount() {
    const { count, error } = await supabaseClient
        .from("loves")
        .select("*", { count: "exact", head: true });

    if (error) {
        console.error(error);
        return;
    }

    const el = document.getElementById("loveCount");
    if (el) {
        el.innerText = `${count.toLocaleString()} Loves ❤️`;
    }
}

// =====================
// CLICK LOVE BUTTON
// =====================
const loveBtn = document.getElementById("loveBtn");

if (loveBtn) {
    loveBtn.addEventListener("click", async () => {

        // anti spam simple
        if (localStorage.getItem("hasLoved")) return;

        loveBtn.disabled = true;

        const { error } = await supabaseClient
            .from("loves")
            .insert([{ created_at: new Date() }]);

        if (error) {
            console.error(error);
            loveBtn.disabled = false;
            return;
        }

        localStorage.setItem("hasLoved", "true");

        await loadLoveCount();

        confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.6 }
        });

        loveBtn.innerText = "❤️ Loved";
    });
}

// =====================
// REALTIME UPDATE (PRO STYLE)
// =====================
supabaseClient
    .channel("loves-channel")
    .on(
        "postgres_changes",
        {
            event: "*",
            schema: "public",
            table: "loves"
        },
        () => {
            loadLoveCount();
        }
    )
    .subscribe();

// initial load
loadLoveCount();

const birthdayUnlockDate =
new Date("2026-06-18T00:00:00");

const openLetter =
document.getElementById("openLetter");

const lockStatus =
document.getElementById("lockStatus");

const secretLetter =
document.getElementById("secretLetter");

const now = new Date();

if(now >= birthdayUnlockDate){

    openLetter.innerHTML = "✉️";

    openLetter.classList.remove("locked");

    openLetter.classList.add("unlocked");

    lockStatus.innerHTML =
    "💌 Birthday Letter Available";

}else {

    openLetter.innerHTML = "🔒";

    openLetter.classList.add("locked");

    lockStatus.innerHTML =
    "🔒 Locked until 18 June 2026";

}
const letterText = `
Hai Nayla, 🎂🩵🩷

Selamat ulang tahun yang ke-19! 🥳✨

Semoga di umur yang baru ini kamu selalu diberikan kesehatan, kebahagiaan, dan dikelilingi oleh orang-orang baik yang selalu mendukung kamu.

Jujur aku bingung harus mulai dari mana, karena aku memang nggak terlalu pintar merangkai kata-kata hehe. Tapi aku tetap pengen nulis surat ini karena ada satu hal yang ingin aku sampaikan.

Terima kasih karena sudah terus berjuang dan memberikan yang terbaik sampai hari ini. Melihat perjalanan, usaha, dan perkembangan kamu dari waktu ke waktu selalu menjadi sesuatu yang menyenangkan dan membanggakan untuk disaksikan.

Jangan terlalu keras pada diri sendiri ya. Nikmati setiap prosesnya, rayakan setiap pencapaian kecil, dan tetap percaya pada dirimu sendiri. Kamu sudah melangkah sejauh ini, dan itu adalah sesuatu yang patut dibanggakan.

Semoga tahun ini membawa lebih banyak senyum, pengalaman indah, serta hal-hal baik yang selama ini kamu harapkan. Semoga semua mimpi yang sedang kamu kejar bisa tercapai pada waktu yang tepat.

Happy Birthday, Nayla. 🎂✨

Tetap sehat, tetap bahagia, dan terus bersinar dengan caramu sendiri. 🩵🩷
`;

openLetter.addEventListener("click", () => {

    const now = new Date();

if(now < birthdayUnlockDate){

    updateLockCountdown();

    const countdownInterval =
    setInterval(updateLockCountdown,1000);

    lockedPopup.classList.add("show");

    openLetter.classList.add("shake");

    setTimeout(() => {

        openLetter.classList.remove("shake");

    },500);

    closePopup.onclick = () => {

        lockedPopup.classList.remove("show");

        clearInterval(countdownInterval);

    };

    return;
}

    secretLetter.classList.add("show");

    openLetter.innerHTML = "📬";

    document.getElementById("letterContent").innerHTML =
        letterText.replace(/\n/g,"<br>");

    confetti({
        particleCount:200,
        spread:120,
        origin:{ y:0.6 }
    });

});
const lockedPopup =
document.getElementById("lockedPopup");

const closePopup =
document.getElementById("closePopup");

closePopup.addEventListener("click", () => {

    lockedPopup.classList.remove("show");

});
const lockDays =
document.getElementById("lockDays");

const lockHours =
document.getElementById("lockHours");

const lockMinutes =
document.getElementById("lockMinutes");

const lockSeconds =
document.getElementById("lockSeconds");

function updateLockCountdown(){

    const now = new Date().getTime();

    const distance =
    birthdayUnlockDate.getTime() - now;

    if(distance <= 0){

        lockDays.innerText = "0";
        lockHours.innerText = "0";
        lockMinutes.innerText = "0";
        lockSeconds.innerText = "0";

        return;
    }

    lockDays.innerText =
    Math.floor(
        distance /
        (1000*60*60*24)
    );

    lockHours.innerText =
    Math.floor(
        (distance %
        (1000*60*60*24))
        /
        (1000*60*60)
    );

    lockMinutes.innerText =
    Math.floor(
        (distance %
        (1000*60*60))
        /
        (1000*60)
    );

    lockSeconds.innerText =
    Math.floor(
        (distance %
        (1000*60))
        /
        1000
    );
}
const bgMusic =
document.getElementById("bgMusic");

const songSelect =
document.getElementById("songSelect");

const playMusic =
document.getElementById("playMusic");

const pauseMusic =
document.getElementById("pauseMusic");

playMusic.addEventListener("click", () => {

    bgMusic.src = songSelect.value;

    playExclusive(bgMusic);

});

pauseMusic.addEventListener("click", () => {

    bgMusic.pause();

});
function startMidnightBirthdayEvent(){
    document.body.style.animation = "birthdayFlash 1s infinite";
    const overlay =
    document.getElementById(
        "birthdayEventOverlay"
    );

    overlay.classList.add("show");

    confetti({
        particleCount:1000,
        spread:360,
        startVelocity:60,
        origin:{ y:0.6 }
    });

    const song =
    document.getElementById(
        "birthdaySong"
    );

    if(song){

        playExclusive(song);

    }

    startMegaFireworks();

    autoOpenBirthdayLetter();

    document
    .querySelector(".hero")
    .classList.add("birthday-mode");

    setTimeout(() => {

        overlay.classList.remove("show");

    },10000);
}
function startMegaFireworks(){

    const duration = 15000;

    const end =
    Date.now() + duration;

    const interval =
    setInterval(() => {

        confetti({

            particleCount:100,

            spread:120,

            startVelocity:50,

            origin:{
                x:Math.random(),
                y:Math.random()*0.6
            }

        });

        if(Date.now() > end){

            clearInterval(interval);

        }

    },250);

}
function autoOpenBirthdayLetter(){

    const letter =
    document.getElementById(
        "secretLetter"
    );

    const content =
    document.getElementById(
        "letterContent"
    );

    letter.classList.add("show");

    content.innerHTML =
    letterText.replace(
        /\n/g,
        "<br>"
    );

}

const generateBtn =
document.getElementById("generateMessage");

if(generateBtn){

    generateBtn.addEventListener(
        "click",
        async () => {

        const name =
        document.getElementById("userName").value;

        const relationship =
        document.getElementById("relationship").value;

        const mood =
        document.getElementById("mood").value;

        if(!name){
            alert("Please enter your name");
            return;
        }

        const result =
        document.getElementById("generatedMessage");

        result.style.display = "block";
        result.innerHTML =
        "🤖 Generating birthday message...";

        try{

            const response =
            await fetch(
                "/generate-message",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":
                        "application/json"
                    },
                    body:JSON.stringify({
                        name,
                        relationship,
                        mood
                    })
                }
            );

            const data =
            await response.json();

            result.innerHTML =
            data.message;

            confetti({
                particleCount:100,
                spread:90
            });

        }catch(err){

            console.error(err);

            result.innerHTML =
            "Failed to generate message.";
        }

    });

}
function getRandomColor(){

    const colors = [
        "#ff69b4", // pink
        "#4fc3f7", // biru
        "#FFD700", // emas
        "#9c27b0",
        "#00e676"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];
}
loadHallOfWishes();
supabaseClient
.channel("hall-wishes")
.on(
    "postgres_changes",
    {
        event:"INSERT",
        schema:"public",
        table:"fan_messages"
    },
    async (payload) => {

        await loadHallOfWishes();

        const latestWish =
        document.querySelector(".latest-wish");

        if(latestWish){
            latestWish.innerHTML =
            `💌 Latest Wish Just Arrived from ${payload.new.name}`;
        }

        confetti({
            particleCount:150,
            spread:120
        });
    }
)
.subscribe();
const sendToFanWallBtn =
document.getElementById("sendToFanWall");

if(sendToFanWallBtn){

    sendToFanWallBtn.addEventListener(
        "click",
        async () => {

        const name =
        document.getElementById("userName").value;

        const message =
        document.getElementById("generatedMessage")
        .innerText;

        if(!name){
            alert("Please enter your name");
            return;
        }

        if(
            !message ||
            message.includes("Generating")
        ){
            alert(
                "Generate AI message first"
            );
            return;
        }

        const { error } =
        await supabaseClient
        .from("fan_messages")
        .insert([
            {
                name: name,
                message: message
            }
        ]);

        if(error){

            console.error(error);

            alert(
                "Failed to send to Fan Wall"
            );

            return;
        }

        confetti({
            particleCount:150,
            spread:120
        });

        alert(
            "💌 Message sent to Fan Wall!"
        );

        await loadHallOfWishes();

    });

}
const finalScene = document.getElementById("finalScene");
const typingText = document.getElementById("typingText");


let finalPlayed = false;

function startFinalScene(){

    if(finalPlayed) return;
    finalPlayed = true;
    finalScene.style.display = "flex";
    /* =====================
       CONFETTI
    ===================== */

    const duration = 8000;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:4,
            angle:60,
            spread:70,
            origin:{x:0}
        });

        confetti({
            particleCount:4,
            angle:120,
            spread:70,
            origin:{x:1}
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }

    })();


      if(bgMusic && !bgMusic.paused){

        let fade = setInterval(()=>{

            if(bgMusic.volume > 0.05){

                bgMusic.volume -= 0.05;

            }else{

                bgMusic.pause();
                bgMusic.volume = 1;

                clearInterval(fade);

                startEndingMusic();
            }

        },200);

    }else{

        startEndingMusic();
    }

    /* =====================
       TYPING EFFECT
    ===================== */

    const message =
    "🌸 Here's To More Smiles, Memories, and Adventures 🌸";

    let i = 0;

    typingText.innerHTML = "";

    const typing = setInterval(()=>{

        typingText.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){
            clearInterval(typing);
        }

    },100);
    if(i >= message.length){

    clearInterval(typing);

    setTimeout(() => {

        const endText =
        document.createElement("h3");

        endText.innerHTML =
        "🌟 Thank You For Visiting Naylaland 🌟";

        endText.style.marginTop = "30px";
        endText.style.color = "white";

        if(!document.getElementById("finalThanks")){

            const endText =
            document.createElement("h3");

            endText.id = "finalThanks";

            endText.innerHTML =
            "🌟 Thank You For Visiting Naylaland 🌟";

            document
            .querySelector(".final-content")
            .appendChild(endText);

        }

    },1000);

}
function startEndingMusic(){

    if(!endingMusic) return;

    playExclusive(endingMusic);

    endingMusic.volume = 0;

    let volume = 0;

    const fadeIn = setInterval(() => {

        volume += 0.05;

        if(volume >= 1){

            volume = 1;

            clearInterval(fadeIn);

        }

        endingMusic.volume = volume;

    },200);

}

}
window.addEventListener("scroll", () => {

    const scrollPosition =
        window.innerHeight + window.scrollY;

    const pageHeight =
        document.body.offsetHeight;

    if(scrollPosition >= pageHeight - 100){

        startFinalScene();

    }

});
const endingMusic =
document.getElementById("endingMusic");
function stopAllMusic() {

    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {

        audio.pause();
        audio.currentTime = 0;

    });

}

function playExclusive(audio) {

    if (!audio) return;

    stopAllMusic();

    audio.currentTime = 0;

    audio.play().catch(err => {
        console.log("Audio play blocked:", err);
    });

}
const muteBtn = document.getElementById("muteAllBtn");

let muted = false;

muteBtn.addEventListener("click", () => {

    const audios = document.querySelectorAll("audio");

    muted = !muted;

    audios.forEach(audio => {
        audio.muted = muted;
    });

    muteBtn.textContent = muted
        ? "🔇 Music OFF"
        : "🔊 Music ON";
});
const LANG = {
    en: {

        gallery2023:"The First Step of a Beautiful Journey",
        gallery2024:"Growing Through JKT48 School",
        gallery2025:"Promoted to Core Member & Trusted Translator at Sister Reunion Festiva",
        gallery2026:"#HappinessNaylalaland19 🎂",

        timeline2023:
        "2023 — The First Step of a Beautiful Journey",

        timeline2024:
        "2024 — Shonichi as a Trainee in Theater",

        timeline2025:
        "2025 — A Year of Growth: Promoted to Core Member and Trusted as Translator at Sister Reunion Festival Personal Meet n Greet",

        timeline2026:
        "2026 — Happy 19th Birthday, Nayla!",
                
        ticketTitle: "SPECIAL BIRTHDAY SHOW",
        ticketGuest: "Guest : Naylaland",
        ticketSeat: "Seat : A01",
        ticketBottom: "Admit One",
        ticketDate: "18 June 2026",
        Name: 'NAYLA',
        Hastag: '#HappinessNaylalaland19',

        scanBtn: "🎟 Scan Ticket",
        verifiedTitle: "TICKET VERIFIED",
        verifiedWelcome: "WELCOME TO",

        heroTitle: "HAPPY 19TH BIRTHDAY",

        playlistTitle: "🎵 Nayla Playlist",
        playMusic: "▶ Play Music",
        pauseMusic: "⏸ Pause",

        timelineTitle: "Journey Stage",

        cakeTitle: "Birthday Cake",
        cakeHint: "Click the candle to make a wish ✨",

        galleryTitle: "📸 Nayla Memory Gallery",

        visitorTitle: "🌍 Naylaland Visitors",
        visitorLabel: "👥 Naylaland Visited",

        countdownTitle: "🎂 Countdown Birthday Nayla 🎂",

        loveTitle: "❤️ Send Love To Nayla",
        loveBtn: "❤️ Send Love",

        secretTitle: "🔐 Secret Letter From Developer - Voltre",
        lockStatus: "Letter Locked Until 18 June 2026 🎂",
        closeBtn: "OK",

        aiTitle: "🤖 AI Birthday Message Generator",
        yourName: "Your Name",

        generateBtn: "✨ Generate AI Message",
        sendToFanWall: "💌 Send To Fan Wall",

        fanWallTitle: "💌 Fan Letter For Nayla",
        fanName: "Name",
        fanMessage: "Write a message for Nayla...",
        sendLetter: "Send Letter 💌",

        hallTitle: "✨ Hall of Wishes ✨",
        latestWish: "💌 Latest Wish Just Arrived",

        finalTitle: "🎂 A New Chapter Begins",
        finalText:
            "Thank you for every smile, every performance, every memory.",

        muteOn: "🔊 Music ON",
        muteOff: "🔇 Music OFF",

        day: "Days",
        hour: "Hours",
        minute: "Minutes",
        second: "Seconds",

        lockedTitle: "Secret Letter Locked",
        lockedDesc: "This letter will be available on 18 June 2026 🎂",
        
        fanOption: "Fan",
        friendOption: "Friend",
        supporterOption: "Supporter",
    },

    id: {

        gallery2023: "Langkah Pertama dari Sebuah Perjalanan Indah",

        gallery2024: "Bertumbuh Bersama JKT48 School",

        gallery2025: "Dipromosikan Menjadi Core Member & Dipercaya Sebagai Penerjemah di Sister Reunion Festival",

        gallery2026: "#HappinessNaylalaland19 🎂",
        
        timeline2023:
        "2023 — Langkah Pertama dari Sebuah Perjalanan Indah",

        timeline2024:
        "2024 — Shonichi sebagai Trainee di Teater",

        timeline2025:
        "2025 — Tahun Penuh Pertumbuhan: Dipromosikan menjadi Core Member dan Dipercaya sebagai Penerjemah di Sister Reunion Festival Personal Meet & Greet",

        timeline2026:
        "2026 — Selamat Ulang Tahun ke-19, Nayla!",
        Name: 'NAYLA',
        day: "Hari",
        hour: "Jam",
        minute: "Menit",
        second: "Detik",

        lockedTitle: "Surat Rahasia Terkunci",

        lockedDesc:
        "Surat ini akan tersedia pada 18 Juni 2026 🎂",

        fanOption: "Fans",
        friendOption: "Teman",
        supporterOption: "Pendukung",

        ticketTitle: "PERTUNJUKAN ULANG TAHUN SPESIAL",
        ticketGuest: "Tamu : Naylaland",
        ticketSeat: "Kursi : A01",
        ticketBottom: "Satu Tiket Masuk",
        ticketDate: "18 Juni 2026",
        Name: 'NAYLA',
        Hastag: '#HappinessNaylalaland19',

        scanBtn: "🎟 Scan Tiket",
        verifiedTitle: "TIKET TERVERIFIKASI",
        verifiedWelcome: "SELAMAT DATANG DI",

        heroTitle: "SELAMAT ULANG TAHUN KE-19",

        playlistTitle: "🎵 Playlist Nayla",
        playMusic: "▶ Putar Musik",
        pauseMusic: "⏸ Jeda",

        timelineTitle: "Perjalanan Nayla",

        cakeTitle: "Kue Ulang Tahun",
        cakeHint: "Klik lilin untuk membuat harapan ✨",

        galleryTitle: "📸 Galeri Kenangan Nayla",

        visitorTitle: "🌍 Pengunjung Naylaland",
        visitorLabel: "👥 Sudah Berkunjung",

        countdownTitle: "🎂 Hitung Mundur Ulang Tahun Nayla 🎂",

        loveTitle: "❤️ Kirim Cinta Untuk Nayla",
        loveBtn: "❤️ Kirim Cinta",

        secretTitle: "🔐 Surat Rahasia Dari Developer - Voltre",
        lockStatus: "Surat Terkunci Hingga 18 Juni 2026 🎂",
        closeBtn: "Tutup",

        aiTitle: "🤖 Generator Ucapan AI",
        yourName: "Nama Kamu",

        generateBtn: "✨ Buat Ucapan AI",
        sendToFanWall: "💌 Kirim Ke Fan Wall",

        fanWallTitle: "💌 Surat Untuk Nayla",
        fanName: "Nama",
        fanMessage: "Tulis pesan untuk Nayla...",
        sendLetter: "Kirim Surat 💌",

        hallTitle: "✨ Aula Harapan ✨",
        latestWish: "💌 Harapan Terbaru Baru Saja Datang",

        finalTitle: "🎂 Babak Baru Dimulai",
        finalText:
            "Terima kasih untuk setiap senyuman, penampilan, dan kenangan.",

        muteOn: "🔊 Musik ON",
        muteOff: "🔇 Musik OFF"
    },

    jp: {

        gallery2023: "美しい旅の第一歩",

        gallery2024: "JKT48 Schoolとともに成長",

        gallery2025: "正規メンバーへ昇格し、シスターグループ再会フェスティバルで通訳として活躍",

        gallery2026: "#HappinessNaylalaland19 🎂",
        timeline2023:
        "2023 — 美しい旅の第一歩",

        timeline2024:
        "2024 — 研究生として劇場デビュー（初日）",

        timeline2025:
        "2025 — 成長の一年：正規メンバーへ昇格し、シスターグループ再会フェスティバル個別ミート＆グリートで通訳を担当",

        timeline2026:
        "2026 — ナイラ、19歳のお誕生日おめでとう！",

        day: "日",
        hour: "時間",
        minute: "分",
        second: "秒",

        lockedTitle: "秘密の手紙はロックされています",

        lockedDesc:
        "この手紙は2026年6月18日に公開されます 🎂",

        fanOption: "ファン",
        friendOption: "友達",
        supporterOption: "サポーター",
        ticketTitle: "特別バースデー公演",
        ticketGuest: "ゲスト : Naylaland",
        ticketSeat: "座席 : A01",
        ticketBottom: "入場券",
        ticketDate: "2026年6月18日",
        Name: 'ナイラ',
        Hastag: '#HappinessNaylalaland19',

        scanBtn: "🎟 チケットをスキャン",
        verifiedTitle: "チケット認証完了",
        verifiedWelcome: "ようこそ",

        heroTitle: "19歳のお誕生日おめでとう",

        playlistTitle: "🎵 ナイラプレイリスト",
        playMusic: "▶ 音楽を再生",
        pauseMusic: "⏸ 一時停止",

        timelineTitle: "ナイラの歩み",

        cakeTitle: "誕生日ケーキ",
        cakeHint: "ろうそくをクリックして願い事をしよう ✨",

        galleryTitle: "📸 ナイラ思い出ギャラリー",

        visitorTitle: "🌍 ナイランド来場者",
        visitorLabel: "👥 訪問者",

        countdownTitle: "🎂 ナイラ誕生日カウントダウン 🎂",

        loveTitle: "❤️ ナイラへ愛を送ろう",
        loveBtn: "❤️ 愛を送る",

        secretTitle: "🔐 開発者からの秘密の手紙",
        lockStatus: "2026年6月18日までロックされています 🎂",
        closeBtn: "閉じる",

        aiTitle: "🤖 AI誕生日メッセージ生成",
        yourName: "あなたの名前",

        generateBtn: "✨ AIメッセージ生成",
        sendToFanWall: "💌 ファンウォールへ送信",

        fanWallTitle: "💌 ナイラへの手紙",
        fanName: "名前",
        fanMessage: "ナイラへのメッセージを書いてください",
        sendLetter: "手紙を送る 💌",

        hallTitle: "✨ 願いのホール ✨",
        latestWish: "💌 新しい願いが届きました",

        finalTitle: "🎂 新しい章の始まり",
        finalText:
            "たくさんの笑顔、パフォーマンス、思い出をありがとう。",

        muteOn: "🔊 音楽 ON",
        muteOff: "🔇 音楽 OFF"
    }
};

function changeLanguage(lang) {
    const t = LANG[lang];

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    const setQuery = (selector, value) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    };

    setText("timeline2023", t.timeline2023);
    setText("timeline2024", t.timeline2024);
    setText("timeline2025", t.timeline2025);
    setText("timeline2026", t.timeline2026);

    setText("gallery2023", t.gallery2023);
    setText("gallery2024", t.gallery2024);
    setText("gallery2025", t.gallery2025);
    setText("gallery2026", t.gallery2026);

    setText("dayLabel", t.day);
    setText("hourLabel", t.hour);
    setText("minuteLabel", t.minute);
    setText("secondLabel", t.second);

    setText("lockedTitle", t.lockedTitle);
    setText("lockedDesc", t.lockedDesc);

    setText("optFan", t.fanOption);
    setText("optFriend", t.friendOption);
    setText("optSupporter", t.supporterOption);

    setText("moodHappy", t.moodHappy);
    setText("moodProud", t.moodProud);
    setText("moodThankful", t.moodThankful);
    setText("moodExcited", t.moodExcited);

    setText("ticketTitle", t.ticketTitle);
    setText("ticketGuest", t.ticketGuest);
    setText("ticketSeat", t.ticketSeat);
    setText("ticketDate", t.ticketDate);
    setText("ticketBottom", t.ticketBottom);
    setText("heroName", t.Name);
    setText("heroHashtag", t.Hastag);

    setText("scanBtn", t.scanBtn);
    setText("verifiedTitle", t.verifiedTitle);
    setText("verifiedWelcome", t.verifiedWelcome);

    setText("visitorLabel", t.visitorLabel);
    setText("lockStatus", t.lockStatus);
    setText("closePopup", t.closeBtn);

    setQuery(".hero h1", t.heroTitle);

    setQuery(".music-player h2", t.playlistTitle);
    setText("playMusic", t.playMusic);
    setText("pauseMusic", t.pauseMusic);

    setQuery(".timeline h2", t.timelineTitle);

    setQuery(".wish h2", t.cakeTitle);
    setQuery(".blow-hint", t.cakeHint);

    setQuery(".memory-gallery h2", t.galleryTitle);

    setQuery(".visitor-section h2", t.visitorTitle);

    setQuery(".countdown-section h2", t.countdownTitle);

    setQuery(".love-section h2", t.loveTitle);
    setText("loveBtn", t.loveBtn);

    setQuery(".secret-letter-section h2", t.secretTitle);

    setQuery(".ai-generator h2", t.aiTitle);

    setText("generateMessage", t.generateBtn);
    setText("sendToFanWall", t.sendToFanWall);

    setQuery(".fan-wall h2", t.fanWallTitle);

    const fanName = document.getElementById("fanName");
    if (fanName) fanName.placeholder = t.fanName;

    const fanMessage = document.getElementById("fanMessage");
    if (fanMessage) fanMessage.placeholder = t.fanMessage;

    const userName = document.getElementById("userName");
    if (userName) userName.placeholder = t.yourName;

    const fanBtn = document.querySelector("#fanForm button");
    if (fanBtn) fanBtn.textContent = t.sendLetter;

    setQuery(".hall-of-wishes h2", t.hallTitle);
    setQuery(".latest-wish", t.latestWish);

    setQuery("#finalScene h1", t.finalTitle);
    setQuery("#finalScene p", t.finalText);

    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    const languageToggle =
document.getElementById("languageToggle");

const languageMenu =
document.querySelector(".language-menu");

languageToggle.addEventListener("click", () => {
    languageMenu.classList.toggle("show");
});

document.querySelectorAll(".lang-btn")
.forEach(btn => {

    btn.addEventListener("click", () => {

        changeLanguage(btn.dataset.lang);

        languageMenu.classList.remove("show");

    });

});

    changeLanguage(
        localStorage.getItem("language") || "en"
    );
});
