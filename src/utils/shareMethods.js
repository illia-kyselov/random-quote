export const shareOnTwitter = (quote) => {
    const tweetText = `${quote.content} - ${quote.author || 'Невідомий автор'}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank');
};

export const shareOnTelegram = (quote) => {
    const tweetText = `${quote.content} - ${quote.author || 'Невідомий автор'}`;
    const url = `https://telegram.me/share/url?url=${encodeURIComponent(tweetText)}`;
    window.open(url, '_blank');
};

export const shareByEmail = (quote) => {
    const quoteText = `${quote.content} - ${quote.author || 'Невідомий автор'}`;
    const subject = 'My quote for you!';
    const body = `Quote:\n\n${quoteText}`;
    const mailToLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailToLink, '_blank');
};
