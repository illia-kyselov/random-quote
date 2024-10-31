<template>
    <div class="select-container">
        <select v-model="selectedCategory" @change="onCategoryChange">
            <option value="">CHOOSE A CATEGORY</option>
            <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allCategories']),
        selectedCategory: {
            get() {
                return this.$store.state.selectedCategory;
            },
            set(value) {
                this.updateCategory(value);
            }
        },
        categories() {
            return this.allCategories;
        }
    },
    methods: {
        ...mapActions(['updateCategory']),
    }
};
</script>

<style lang="scss" scoped src="../styles/SelectCategories.scss"></style>
