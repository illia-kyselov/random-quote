<template>
    <div v-if="show" class="notification" :class="type">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'info',
        },
    },
}
</script>

<style lang="scss" scoped src="../styles/Notification.scss"></style>
