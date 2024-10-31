import { ref } from 'vue';

export function useCopyQuote() {
    const showMessage = ref(false);

    const copyQuote = async (content) => {
        try {
            await navigator.clipboard.writeText(content);
            showMessage.value = true;
            setTimeout(() => {
                showMessage.value = false;
            }, 2000);
        } catch (error) {
            console.error('Не вдалося скопіювати текст: ', error);
        }
    };

    return { copyQuote, showMessage };
}
