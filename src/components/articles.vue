<template>
    <div class="bg-grayLight">
        <div class="p-4 py-10 max-w-6xl md:mx-auto">
            <h1 class="text-blueDark text-3xl text-center md:text-left my-7">Latest Articles</h1>
            <div class="md:flex gap-7">
                <div v-for="article in articles" :key="article.title" class="rounded-md overflow-hidden mb-6">
                    <div class="">
                        <img :src="article.img" alt="">
                    </div>
                    <div class="p-5 bg-white text-blueGray">
                        <h1 class="text-sm">By {{ article.author }}</h1>
                        <h1 class="text-xl my-3 text-blueDark">{{ article.title }}</h1>
                        <p class="text-sm">{{ article.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articles: [
                {
                    img: require('../assets/images/image-currency.jpg'),
                    author: 'Claire Robinson',
                    title: 'Receive money in any currency with no fees',
                    content: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."
                },
                {
                    img: require('../assets/images/image-restaurant.jpg'),
                    author: 'Wilson Hutton',
                    title: 'Treat yourself without worrying about money',
                    content: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."
                },
                {
                    img: require('../assets/images/image-plane.jpg'),
                    author: 'Wilson Hutton',
                    title: 'Take your Easybank card wherever you go',
                    content: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ..."
                },
                {
                    img: require('../assets/images/image-confetti.jpg'),
                    author: 'Claire Robinson',
                    title: 'Our invite-only Beta accounts are now live!',
                    content: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ..."
                }
            ]
        }
    }
}
</script>