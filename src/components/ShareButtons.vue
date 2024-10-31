<template>
    <div class="share-buttons">
        <a @click.prevent="shareOnTwitter">
            <img :src="twitterIcon" alt="Share on Twitter" />
        </a>
        <a @click.prevent="shareOnTelegram">
            <img :src="telegramIcon" alt="Share on Telegram" />
        </a>
        <a @click.prevent="shareByEmail">
            <img :src="emailIcon" alt="Share by Email" />
        </a>
    </div>
</template>

<script>
import twitterIcon from '../icon/twitter.svg';
import telegramIcon from '../icon/telegram.svg';
import emailIcon from '../icon/mail.svg';
import { shareOnTwitter, shareOnTelegram, shareByEmail } from '../utils/shareMethods';

export default {
    props: ['quote'],
    data() {
        return {
            twitterIcon,
            telegramIcon,
            emailIcon,
        };
    },
    methods: {
        shareOnTwitter() {
            shareOnTwitter(this.quote);
        },
        shareOnTelegram() {
            shareOnTelegram(this.quote);
        },
        shareByEmail() {
            shareByEmail(this.quote);
        }
    }
};
</script>

<style lang="scss" scoped src="../styles/ShareButtons.scss"></style>
