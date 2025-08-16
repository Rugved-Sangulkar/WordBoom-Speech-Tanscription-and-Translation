const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const clearBtn = document.getElementById('clearBtn');
const translateBtn = document.getElementById('translateBtn');
const transcript = document.getElementById('transcript');
const translated = document.getElementById('translated');
const language = document.getElementById('language');
const info = document.getElementById('info');

let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            finalTranscript += event.results[i][0].transcript;
        }
        transcript.value = finalTranscript;
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error", event);
    };
}

startBtn.onclick = () => {
    recognition.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    info.innerText = "Listening...";
};

stopBtn.onclick = () => {
    recognition.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
    info.innerText = "Stopped listening.";
};

clearBtn.onclick = () => {
    transcript.value = '';
    translated.textContent = '';
    info.innerText = "Click Start to begin speaking";
};

translateBtn.onclick = async () => {
    const text = transcript.value;
    const lang = language.value;
    if (text.trim() === '') return;

    const res = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, target_lang: lang })
    });

    const data = await res.json();
    if (data.translated) {
        translated.textContent = data.translated;
    } else {
        translated.textContent = 'Translation failed.';
    }
};