<script setup>
import Footer from '../components/Footer.vue';

</script>

<template>
<div>
    <div class="max-sm:min-h-[750px] min-h-[600px]">
    <div class="w-full">
    <div class="bg-[#1F413B] h-5 max-sm:h-3"></div>
    <div class="flex justify-center items-center">
    <div class="w-5/6 h-full max-sm:w-11/12">
                <div class="mt-2 flex justify-center items-center">
                    <div class=" h-10 w-56 flex justify-center items-center text-[#27423D] text-3xl tracking-widest">Non Project</div>
                </div>
    <div class="mt-5 flex justify-center items-center">
                    <div class="h-10 grid grid-cols-3 gap-16">
                        <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/about">About</router-link></div>
                        <!-- <div class="text-black flex justify-center items-center p-1 tracking-widest"><router-link to="/resume">Resume</router-link></div> -->
                        <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/home">myWeb</router-link></div>
                        <!-- <div class="text-black flex justify-center items-center p-1 tracking-widest"><router-link to="/project">Project</router-link></div> -->
                        <div class="text-white flex justify-center items-center p-1 tracking-widest hover:cursor-default bg-[#34623F] rounded-full">Contact</div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center mt-10">
            <div class="w-5/6  max-sm:w-11/12">
                <div class="shadow-2xl p-5 max-sm:p-2 rounded-xl ">
                    <!-- <div class="  max-sm:hidden">

                    </div> -->
                    <div class="">
                        <div class="grid grid-cols-2 max-sm:grid-cols-1 h-full max-sm:gap-3 gap-2">
                            <div class="rounded-xl bg-[#2F6859] h-32 max-sm:h-24 grid grid-cols-3 max-sm:p-1 p-2 shadowBox">
                                <div class="bg-white rounded-xl max-sm:hidden">

                                </div>
                                <div class="col-span-2 text-white pl-5 max-sm:pl-2 h-full flex items-center">
                                    <div>
                                        <div class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]">EMAIL :</div>
                                        <div class="tracking-wider max-sm:text-xl">thaninpong.non@mail.kmutt.ac.th</div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-xl bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox">
                                <div class="bg-white rounded-xl max-sm:hidden"></div>
                                <div class="col-span-2 text-[#2F6859] pl-5 max-sm:pl-2 h-full flex items-center">
                                    <div>
                                        <div class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]">PHONE :</div>
                                        <div class="tracking-wider max-sm:text-xl">099-145-0959</div>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-xl max-sm:bg-[#2F6859] bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox">
                                <div class="bg-white rounded-xl max-sm:hidden"></div>
                                <div class="col-span-2 max-sm:text-white text-[#2F6859] pl-5 max-sm:pl-2 h-full flex items-center">
                                    <div>
                                        <div class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]">LINKTREE :</div>
                                        <a href="https://linktr.ee/nonybueno" target="_blank" class="tracking-wider max-sm:text-xl">linktr.ee/nonybueno</a>
                                    </div>
                                </div>
                            </div>
                            <div class="rounded-xl bg-[#2F6859] max-sm:bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox">
                                <div class="bg-white rounded-xl max-sm:hidden"></div>
                                <div class="col-span-2 max-sm:text-[#2F6859] text-white pl-5 max-sm:pl-2 h-full flex items-center">
                                    <div>
                                        <div class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]">GITHUB :</div>
                                        <a href="https://github.com/nonybueno" target="_blank" class="tracking-wider max-sm:text-xl">github.com/nonybueno</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
<Footer/>
</div>
</template>
 
<style scoped>
.shadowBox{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>