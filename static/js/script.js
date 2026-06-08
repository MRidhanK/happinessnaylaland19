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