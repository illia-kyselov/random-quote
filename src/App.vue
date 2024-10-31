<template>
    <div class="app">
        <Header title="The random Quoter" />
        <QuotePhrase :quote="quote" />
        <div class="button-container">
            <button @click="fetchQuote">GET A NEW QUOTE</button>
        </div>
        <QuoteList :quotes="quotes" />
        <Notification :show="showErrorMessage" :message="errorMessage" type="error" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { useQuote } from './hooks/useQuote';
import Header from './components/Header.vue';
import QuotePhrase from './components/QuotePhrase.vue';
import QuoteList from './components/QuoteList.vue';
import Notification from './components/Notification.vue';

export default {
    name: 'App',
    components: {
        Header,
        QuotePhrase,
        QuoteList,
        Notification
    },
    computed: {
        ...mapState(['quote', 'quotes', 'showErrorMessage', 'errorMessage'])
    },
    setup() {
        const { fetchQuote } = useQuote();

        return { fetchQuote };
    },
    created() {
        this.fetchQuote();
    }
}
</script>

<style lang="scss" src="./styles/App.scss"></style>
