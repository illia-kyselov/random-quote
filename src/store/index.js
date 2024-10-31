import { createStore } from 'vuex';

const store = createStore({
    state: {
        quote: {
            content: '',
            author: '',
            category: ''
        },
        quotes: [],
        showErrorMessage: false,
        errorMessage: ''
    },
    mutations: {
        SET_QUOTE(state, quote) {
            state.quote = quote;
        },
        ADD_QUOTE(state, quote) {
            state.quotes.push(quote);
        },
        SET_ERROR(state, { message }) {
            state.errorMessage = message;
            state.showErrorMessage = true;
            setTimeout(() => {
                state.showErrorMessage = false;
            }, 3000);
        }
    },
    actions: {
        async fetchQuote({ commit }) {
            try {
                const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
                    headers: {
                        'X-Api-Key': process.env.VUE_APP_API_KEY
                    }
                });

                if (!response.ok) {
                    commit('SET_ERROR', { message: 'Сталася помилка при отриманні даних!' });
                    return;
                }

                const data = await response.json();
                const quote = {
                    content: data[0].quote,
                    author: data[0].author,
                    category: data[0].category
                };

                commit('SET_QUOTE', quote);
                if (quote.content) {
                    commit('ADD_QUOTE', quote);
                }
            } catch (error) {
                commit('SET_ERROR', { message: 'Сталася помилка з підключенням до сервера!' });
            }
        }
    }
});

export default store;
