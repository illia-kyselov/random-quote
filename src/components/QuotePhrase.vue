<template>
    <section class="quote">
        <div class="quote-content" @click="copyQuote(quote.content)">
            {{ quote.content }}
        </div>

        <div class="quote-info">
            <div class="quote-info-anime">
                {{ quote.category }}
            </div>
            <div class="quote-info-author">
                {{ quote.author }}
            </div>
        </div>

        <Notification v-if="showMessage" :show="showMessage" message="Цитату скопійовано!" type="copy" />
    </section>
</template>

<script>
import { useCopyQuote } from '../hooks/useCopyQuote';
import Notification from './Notification.vue';

export default {
    props: ['quote'],
    components: { Notification },
    setup() {
        const { copyQuote, showMessage } = useCopyQuote();

        return { copyQuote, showMessage };
    }
}
</script>

<style lang="scss" scoped src="../styles/QuotePhrase.scss"></style>
