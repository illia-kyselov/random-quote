<template>
    <section class="quote-list">
        <div class="quote" v-for="(quote, i) in quotes.slice().reverse()" :key="i" @click="copyQuote(quote.content)">
            <div class="quote-header">{{ quote.content }}</div>
            <div class="quote-author">{{ quote.author }}</div>
        </div>

        <Notification :show="showMessage" message="Цитату скопійовано!" type="copy" />
    </section>
</template>

<script>
import { useCopyQuote } from '../hooks/useCopyQuote';
import Notification from './Notification.vue';

export default {
    components: { Notification },
    props: ['quotes'],
    setup() {
        const { copyQuote, showMessage } = useCopyQuote();

        return { copyQuote, showMessage };
    }
};
</script>

<style lang="scss" scoped src="../styles/QuoteList.scss"></style>
