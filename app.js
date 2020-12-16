const button = document.querySelector('.talk');
const content = document.querySelector('.content')

try {
    const SpeechRecongition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recogition = new SpeechRecongition();

    recogition.onstart = () => {
        console.log("Say something......")
    }
    recogition.onresult = event => {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;
        content.textContent = transcript;
        
        readOutLoud(transcript);
    }

    button.addEventListener('click', () => {
        recogition.start();
    })
} catch (e) { 

}

const readOutLoud = message => {
    const speech = new SpeechSynthesisUtterance();

    speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
