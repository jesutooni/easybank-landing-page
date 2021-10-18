<template>
    <div class="p-4 md:py-0 flex justify-between items-center">
        <img class="cursor-pointer" src="../assets/images/logo.svg" alt="">
        <img class="md:hidden" src="../assets/images/icon-hamburger.svg" alt="">
        <ul class="md:flex hidden text-blueGray">
            <li class="cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Home</li>
            <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">About</li>
            <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Contact</li>
            <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Blog</li>
            <li class="ml-8 cursor-pointer py-6 border-b-4 border-transparent hover:border-greenLime hover:text-black duration-150">Careers</li>
        </ul>
        <button class="hidden md:block py-1.5 px-4 text-white bg-gradient-to-r from-greenLime to-cyanBright rounded-full hover:opacity-60 duration-100">Request Invite</button>
    </div>
</template>

<script>
export default {
}
</script>