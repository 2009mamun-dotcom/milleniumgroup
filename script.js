// আপনার টেস্ট পেপার ডাটা (JSON)
const questions = [
    {
        id: 1,
        chapter: "logic-gate",
        text: "NAND গেটের আউটপুট কখন ১ হয়?",
        board: "ঢাকা বোর্ড ২০২৩",
        solved: false
    },
    {
        id: 2,
        chapter: "networking",
        text: "ব্লুটুথ এর স্ট্যান্ডার্ড কোনটি?",
        board: "রাজশাহী বোর্ড ২০২২",
        solved: false
    }
];

const questionArea = document.getElementById('questionArea');
const chapterFilter = document.getElementById('chapterFilter');

// প্রশ্ন দেখানোর ফাংশন
function displayQuestions(filter) {
    questionArea.innerHTML = "";
    const filtered = filter === "all" ? questions : questions.filter(q => q.chapter === filter);

    filtered.forEach(q => {
        const card = document.createElement('div');
        card.className = `card ${q.solved ? 'solved' : ''}`;
        card.innerHTML = `
            <span class="tag">${q.board}</span>
            <p><strong>প্রশ্ন:</strong> ${q.text}</p>
            <button class="btn-solve" onclick="markSolved(${q.id})">
                ${q.solved ? 'সমাধান করা হয়েছে' : 'সমাধান হিসেবে মার্ক করুন'}
            </button>
        `;
        questionArea.appendChild(card);
    });
}

// সলভড মার্ক করার ফাংশন
function markSolved(id) {
    const q = questions.find(item => item.id === id);
    if(q) {
        q.solved = !q.solved;
        displayQuestions(chapterFilter.value);
        updateStats();
    }
}

function updateStats() {
    const count = questions.filter(q => q.solved).length;
    document.getElementById('solvedCount').innerText = count;
}

// ফিল্টার চেঞ্জ ইভেন্ট
chapterFilter.addEventListener('change', (e) => {
    displayQuestions(e.target.value);
});

// শুরুতে সব প্রশ্ন দেখাও
displayQuestions("all");
