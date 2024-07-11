const vocabulary = [
    { character: '你好', pinyin: 'nǐ hǎo', meaning: 'Hello', audio: 'audio/nihao.mp3' },
    { character: '谢谢', pinyin: 'xiè xie', meaning: 'Thank you', audio:'audio/xiexie.mp3' },
    { character: '再见', pinyin: 'zài jiàn', meaning: 'Goodbye', audio:'audio/zaijian.mp3' },
    { character: '是', pinyin: 'shì', meaning: 'Yes', audio:'audio/shi.mp3' },
    { character: '不是', pinyin: 'bú shì', meaning: 'No', audio: 'audio/bushi.mp3'},
    { character: '请', pinyin: 'qǐng', meaning: 'Please', audio:'audio/qing.mp3' },
    { character: '你好吗？', pinyin: 'Nǐ hǎo ma?', meaning: 'How are you?', audio:'audio/nihaoma.mp3' },
    { character: '你吃饭了吗？', pinyin: 'Nǐ chīfànle ma?', meaning: 'Have you eaten already?', audio: 'audio/nichifanlema.mp3' }
];
let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;

const characterElement = document.getElementById('character');
const pinyinElement = document.getElementById('pinyin');
const meaningElement = document.getElementById('meaning');
const progressElement = document.getElementById('progress');
const audioElement = document.getElementById('audio');

function updateVocab() {
    const vocab = vocabulary[currentIndex];
    characterElement.innerText = vocab.character;
    pinyinElement.innerText = vocab.pinyin;
    meaningElement.innerText = vocab.meaning;
    audioElement.src = vocab.audio;
    progressElement.innerText = `Progress: ${currentIndex + 1}/${vocabulary.length}`;
    localStorage.setItem('currentIndex', currentIndex);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateVocab();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < vocabulary.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first item
    }
    updateVocab();
});

document.getElementById('play-audio-btn').addEventListener('click', () => {
    audioElement.play();
});

// Initialize with the current vocabulary
updateVocab();

