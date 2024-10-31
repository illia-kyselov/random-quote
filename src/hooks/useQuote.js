import { useStore } from 'vuex';

export function useQuote() {
    const store = useStore();

    const fetchQuote = async () => {
        await store.dispatch('fetchQuote');
    };

    return { fetchQuote };
}
