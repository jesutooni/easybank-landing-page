<template>
    <div class="fixed w-full bg-white">
        <div class="p-4 md:py-0 flex justify-between items-center max-w-6xl md:mx-auto">
            <img class="cursor-pointer" src="../assets/images/logo.svg" alt="">
            <img @click="toggleNav" v-if="!navDropDown" class="md:hidden" src="../assets/images/icon-hamburger.svg" alt="">
            <img @click="toggleNav" v-if="navDropDown" class="md:hidden" src="../assets/images/icon-close.svg" alt="">
            <ul class="md:flex hidden text-blueGray">
                <li class="cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Home</li>
                <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">About</li>
                <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Contact</li>
                <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Blog</li>
                <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Careers</li>
            </ul>
            <button class="hidden md:block py-1.5 px-4 text-white bg-gradient-to-r from-greenLime to-cyanBright rounded-full hover:opacity-60 duration-100">Request Invite</button>
        </div>
        <div @click="toggleNav" v-if="navDropDown" class="fixed w-full top-12 h-full p-4 bg-gradient-to-b from-blueDark bg-opacity-60">
            <div @click.stop="" class="text-center py-5 bg-white rounded-md">
                <ul class="">
                    <li class="py-2">Home</li>
                    <li class="py-2">About</li>
                    <li class="py-2">Contact</li>
                    <li class="py-2">Blog</li>
                    <li class="py-2">Careers</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navDropDown: false
        }
    },
    methods: {
        toggleNav() {
            this.navDropDown = !this.navDropDown
        }
    }
}
</script>