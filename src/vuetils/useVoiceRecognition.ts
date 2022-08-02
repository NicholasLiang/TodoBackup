import { watch, ref } from "vue";

const SpeechRecognition =
    window.SpeechRecognition;
const recognition = new SpeechRecognition()

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

export default function useSpeechRecognition() {
    const isListening = ref(false);
    const note = ref("");
    const error = ref(null);

    const handleListen = () => {
        if (isListening.value) {
            recognition.start();
        } else {
            recognition.stop();
        }
    };

    const toggleListening = () => {
        isListening.value = !isListening.value;
    };

    recognition.onresult = (ev: SpeechRecognitionResult) => {
        const transcript = ev[0].transcript

        note.value = transcript;
    };

    watch(isListening, () => {
        handleListen();
    });

    return {
        toggleListening,
        note,
        error
    };
}
