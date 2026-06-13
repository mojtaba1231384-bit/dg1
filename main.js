// ========== المان‌ها ==========
const boxScreen = document.getElementById('boxScreen');
const memoriesScreen = document.getElementById('memoriesScreen');
const giftBox = document.getElementById('giftBox');
const boxLid = document.getElementById('boxLid');
const memoriesGrid = document.getElementById('memoriesGrid');

// مودال خاطره
const memoryModal = document.getElementById('memoryModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalIcon = document.getElementById('modalIcon');
const modalDate = document.getElementById('modalDate');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

let isBoxOpened = false;

// ========== رندر کردن خاطره‌ها ==========
function renderMemories() {
    memoriesGrid.innerHTML = '';
    
    for (let i = 0; i < 9; i++) {
        const memory = memoriesData[i];
        
        if (memory) {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.setAttribute('data-id', memory.id);
            card.innerHTML = `
                <div class="memory-icon">${memory.icon}</div>
                <div class="memory-title">${memory.title}</div>
                <div class="memory-date">${memory.date}</div>
            `;
            card.addEventListener('click', () => openMemory(memory.id));
            memoriesGrid.appendChild(card);
        }
    }
}

// ========== باز کردن خاطره ==========
function openMemory(id) {
    const memory = memoriesData.find(m => m.id === id);
    if (memory) {
        modalImage.src = memory.image;
        modalIcon.textContent = memory.icon;
        modalDate.textContent = memory.date;
        modalTitle.textContent = memory.title;
        modalText.textContent = memory.text;
        memoryModal.classList.add('show');
    }
}

// ========== باز کردن جعبه با کلیک ==========
function openBox() {
    if (isBoxOpened) return;
    
    isBoxOpened = true;
    
    boxLid.classList.add('open');
    
    setTimeout(() => {
        boxScreen.classList.add('hide');
        memoriesScreen.classList.add('show');
        renderMemories();
    }, 600);
}

giftBox.addEventListener('click', openBox);

// ========== بستن مودال ==========
modalClose.addEventListener('click', () => {
    memoryModal.classList.remove('show');
});

document.querySelector('.modal-overlay').addEventListener('click', () => {
    memoryModal.classList.remove('show');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        memoryModal.classList.remove('show');
    }
});