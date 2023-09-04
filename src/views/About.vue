<script setup>
import Footer from '../components/Footer.vue';
</script>
 
<template>
<div class="about">
    <div class="w-full bg-[#2F6859] max-sm:p-0 max-sm:m-0">
    <div class="bg-[#27423D] h-5 max-sm:h-3"></div>
    <div class="flex justify-center items-center">
    <div class="w-5/6 h-full">
                <div class="mt-2 flex justify-center items-center">
                    <div class=" h-10 w-56 flex justify-center items-center text-white text-3xl tracking-widest">Non Project</div>
                </div>
    <div class="mt-5 flex justify-center items-center">
                    <div class="h-10 grid grid-cols-3 gap-16">
                        <div class="text-[#27423D] flex justify-center items-center p-1 hover:cursor-default tracking-widest bg-white rounded-full">About</div>
                        <!-- <div class="text-white flex justify-center items-center p-1 tracking-widest"><router-link to="/resume">Resume</router-link></div> -->
                        <div class="text-white flex justify-center items-center p-1 tracking-widest"><router-link to="/home">myWeb</router-link></div>
                        <!-- <div class="text-white flex justify-center items-center p-1 tracking-widest"><router-link to="/project">Project</router-link></div> -->
                        <div class="text-white flex justify-center items-center p-1 tracking-widest"><router-link to="/contact">Contact</router-link></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        <div class="w-full bg-[#2F6859] h-60 max-sm:h-44 border-2 border-[#2F6859]">
            <div class="grid grid-cols-4 pt-10 max-sm:pt-5">
            <div class="w-full grid grid-rows-2 max-sm:hidden">
                <div class="flex justify-end items-end pr-10">
                    <div class="bg-white h-2 w-full"></div>
                </div>
                <div class="bg-white h-2 mt-3 w-full"></div>
            </div>
            <div v-motion-slide-visible-bottom v-motion-slide-bottom class="max-sm:col-span-4 tracking-wide col-span-2 flex justify-center text-[#E9D8A6] max-sm:text-5xl text-8xl">Hello, I'm&nbsp;<span class="text-white font-bold">Non!</span></div>
            <div class="flex justify-center items-center col-start-2 col-span-2 mt-7 max-sm:col-span-4">
                <div class="text-white text-xl">This is my <span class="text-[#E9D8A6] tracking-widest">Curriculum Vitae.</span></div>
            </div>
            <div class="w-full grid grid-rows-2 max-sm:hidden">
                <div class="flex justify-end items-end pl-10 pt-2">
                    <div class="bg-white h-2 w-full"></div>
                </div>
                <div class="bg-white h-2 w-full mt-3"></div>
            </div>
        </div>
        </div>
        <div class="w-full bg-[#2F6859] h-60">
            <div class="flex justify-center h-full">
                <div class="w-5/6 max-sm:w-11/12 bg-white grid grid-cols-5 rounded-t-xl">
                    <div v-motion-fade-visible v-motion-fade class="mt-10 max-sm:mt-5 col-span-2 flex justify-center"><img src="images/mypic2.jpg" class="h-52 w-52 max-sm:w-36 max-sm:h-36 rounded-full"></div>
                    <div class="col-span-3 mr-3 tracking-wide max-sm:tracking-normal">
                        <div class="text-3xl text-black font-bold mt-14 max-sm:mt-5"><span class="text-[#00303D] max-sm:tracking-normal tracking-wider">&nbsp;THANINPONG</span></div>
                        <div v-motion-fade-visible v-motion-fade class="text-xl mt-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, My name is Thaninpong Panthawong, but you can call me Non. I currently reside in Nakhon Pathom province. I completed my entire schooling journey at Sukhondheerawit School, from primary to high school.
                            In my free time, I enjoy engaging with various activities. I love reading articles and keeping myself updated with the latest trends and developments in the IT field.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-[#D9D9D9] ">
            <div class="flex justify-center h-full">
                <div class="w-5/6 max-sm:w-11/12 max-sm:h-[25cm] bg-white rounded-b-xl">
                    <div class="grid grid-cols-5">
                    <div class="col-span-2 flex justify-center mt-10">
                        <div>
                            <div class="text-6xl font-bold max-sm:text-xl">THANINPONG</div>
                            <div class="text-5xl mt-5 max-sm:text-lg">PANTHAWONG</div>
                            <!-- <div class="text-xl mt-8 text-[#5A5A5A]">Front-End, Back-End, DevOps</div> -->
                            <div class="text-xl mt-5 text-[#5A5A5A]">January 29 2003</div>
                        </div>
                    </div>
                <div class=" col-span-3 text-xl text-[#202020] mt-14 mr-3 tracking-wide max-sm:mt-96">
                    <div class="max-sm:hidden max-sm:mt-10" v-motion-fade-visible v-motion-fade>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am currently a third-year student pursuing a bachelor's degree in Information Technology at King Mongkut's University of Technology Thonburi. Ever since I was in high school, I developed a passion for coding. The idea of constantly learning and exploring new technologies greatly appealed to me.</div>
                    </div>
                    </div>
                    <div class="max-sm:mt-20 max-sm:grid-cols-2 grid grid-cols-4 max-sm:mx-4 max-sm:gap-3 gap-5 h-64 mx-10 my-10 text-white tracking-wider" v-motion-slide-visible-bottom v-motion-slide-bottom>
                        <div class="border h-full rounded-xl bg-[#2F6859]">
                            <div class="flex justify-center text-2xl font-bold items-center mt-10 max-sm:mt-5">STUDY AT</div>
                            <div class="mx-5 mt-10 flex justify-center max-sm:mb-5 max-sm:mt-5">King Mongkut's University of Technology Thonburi</div>
                        </div>
                        <div class="border h-full rounded-xl bg-[#2F6859] ">
                            <div class="flex justify-center text-2xl font-bold items-center mt-10 max-sm:mt-5">LIVE IN</div>
                            <div class="mx-5 mt-10 flex justify-center max-sm:mb-5 max-sm:mt-5">NakhonPathom</div>
                        </div>
                        <div class="border h-full rounded-xl bg-[#2F6859] ">
                            <div class="flex justify-center text-2xl font-bold items-center mt-10 max-sm:mt-5">FACULTY</div>
                            <div class="mx-5 mt-10 flex justify-center max-sm:mb-10 max-sm:mt-5">School of Information Technology [ IT ]</div>
                        </div>
                        <div class="border h-full rounded-xl bg-[#2F6859] ">
                            <div class="flex justify-center text-2xl font-bold items-center mt-10 max-sm:mt-5">SKILLS</div>
                            <div class="mx-5 mt-10 flex justify-center max-sm:mb-10 max-sm:mt-5">Front-End, Back-End, DevOps</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
</div>
</template>
 
<style scoped>
.about{
    padding: 0;
    margin: 0;
}
</style>