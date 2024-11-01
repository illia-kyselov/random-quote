<template>
    <button @click="onClick">GET A NEW QUOTE</button>
</template>

<script>
export default {
    name: 'QuoteButton',
    methods: {
        onClick() {
            this.$emit('fetchQuote');
        }
    }
};
</script>

<style lang="scss" scoped src="../styles/QuoteButton.scss"></style>
