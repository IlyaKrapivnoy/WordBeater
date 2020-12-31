window.addEventListener('load', init)

// Globals
let time = 5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const second = document.querySelector('#second');

const words = [
    'swimming',
    'gym',
    'programming',
    'sport',
    'audiobook',
    'guide',
    'winter',
    'application',
    'goals',
    'aspiration',
    'code',
    'confidence',
    'might',
    'association',
    'road',
    'shadow',
    'wind',
    'breath',
    'corrections',
    'ease',
    'unity',
    'decent',
    'framework',
    'javascript',
    'factorization',
    'string',
    'what',
    'color',
    'whatever',
    'soon',
    'integration',
    'class',
    'powerline',
    'karate'
];

// Initialize Game
function init() {
    // Load word form array
    showWord(words);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    // Output randomword
    currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        time--;
    } else if(time === 0) {
        // Game is over
        isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!'
    }
}