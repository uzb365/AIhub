// 1. HAQIQIY VAQTDAGI SOAT TIZIMI (Mutlaqo mustaqil va xatosiz ishlaydi)
function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        clockElement.innerText = now.toLocaleTimeString('uz-UZ');
    }
}
setInterval(updateClock, 1000);
updateClock();

// 2. POMODORO TAYMERI MANTIQI
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('start-timer');
let resetBtn = document.getElementById('reset-timer');
let countdown;
let timeLeft = 25 * 60; 

if (startBtn && resetBtn && timerDisplay) {
    startBtn.addEventListener('click', () => {
        clearInterval(countdown);
        countdown = setInterval(() => {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("Vaqt tugadi! Dam oling.");
                timeLeft = 25 * 60;
                timerDisplay.innerText = "25:00";
            }
        }, 1000);
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(countdown);
        timeLeft = 25 * 60;
        timerDisplay.innerText = "25:00";
    });
}

// 🤖 3. JONLI VA AQLLI MAHALLIY AI CHATBOT (Hech qanday kalit va xatoliklarsiz!)
const askAiBtn = document.getElementById('ask-ai-btn');

if (askAiBtn) {
    askAiBtn.addEventListener('click', () => {
        const query = document.getElementById('ai-input').value.trim().toLowerCase();
        const responseBox = document.getElementById('ai-response');
        
        if(!query) return alert("Savol kiriting!");
        
        responseBox.innerText = "AI o'ylamoqda... 🧠";
        
        // Sun'iy intellektning javoblar bazasi (Siz xohlagancha savol-javob qo'shishingiz mumkin)
        setTimeout(() => {
            if (query.includes("isming nima") || query.includes("kimsan")) {
                responseBox.innerText = "Men sizning shaxsiy AI yordamchingizman. HTML, CSS va JavaScript yordamida yaratilganman! 🚀";
            } 
            else if (query.includes("salom") || query.includes("assalomu alaykum")) {
                responseBox.innerText = "Assalomu alaykum! Bugun sizga qanday yordam bera olaman? Ishlarni rejalashtiramizmi yoki Pomodoro bilan fokusni oshiramizmi? 🔥";
            } 
            else if (query.includes("nima qila olasan") || query.includes("vazifang")) {
                responseBox.innerText = "Men sizga vaqtni boshqarishda, Pomodoro taymeridan foydalanishda va kundalik unumdorlikni oshirishda yordam beraman!";
            } 
            else if (query.includes("rahmat") || query.includes("sog' bo'l")) {
                responseBox.innerText = "Arziydi! Sizga yordam berganimdan xursandman. Ishlaringizga omad! 💪";
            } 
            else if (query.includes("kod yozish") || query.includes("dasturlash")) {
                responseBox.innerText = "Dasturlash — bu ajoyib soha! VS Code-da HTML, CSS va JS yordamida ajoyib narsalar qurishda davom eting. Men sizga motivatsiya berib turaman!";
            }
            else {
                // Agar kiritilgan savol bazada bo'lmasa, umumiy aqlli javob qaytaradi
                responseBox.innerText = `Siz "${query}" haqida so'radingiz. Men hozircha mahalliy (local) rejimda ishlayapman, shuning uchun ushbu savolga aniq javobim yo'q. Lekin men bilan Pomodoro taymerini ishlatib unumdorlikni oshirishingiz mumkin! ✨`;
            }
        }, 1000); // 1 soniya o'ylab javob qaytarish simulyatsiyasi
    });
}
