import { createStore } from 'vuex';
import categories from './modules/categories';

const store = createStore({
    state: {
        quote: {
            content: '',
            author: '',
            category: ''
        },
        quotes: [],
        selectedCategory: '', // Зберігаємо вибрану категорію тут
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
        SET_CATEGORY(state, category) {
            state.selectedCategory = category; // Оновлюємо вибрану категорію
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
        async fetchQuote({ state, commit }) {
            const categoryParam = state.selectedCategory ? `?category=${state.selectedCategory}` : '';
            const apiUrl = `https://api.api-ninjas.com/v1/quotes${categoryParam}`;

            try {
                const response = await fetch(apiUrl, {
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
        },
        updateCategory({ commit, dispatch }, category) {
            commit('SET_CATEGORY', category);
            dispatch('fetchQuote');
        }
    },
    modules: {
        categories
    }
});

export default store;
