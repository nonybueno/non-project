<script setup>
import { ref,computed } from 'vue';
import Footer from '../components/Footer.vue';
const name = ref(['Thaninpong', 'Developer']);
const currentIndex = ref(0);
const currentCharIndex = ref(0);

const displayedText = computed(() => {
    const currentName = name.value[currentIndex.value];
      if (currentCharIndex.value < currentName.length) {
        return currentName.substring(0, currentCharIndex.value + 1);
      } else {
        return currentName;
      }
});

setInterval(() => {
      if (currentCharIndex.value === name.value[currentIndex.value].length) {
        currentIndex.value = (currentIndex.value + 1) % name.value.length;
        currentCharIndex.value = 0;
      } else {
        currentCharIndex.value++;
      }
}, 200);

</script>
 
<template>
    <div class="home">
        <div class="bg-[#27423D] h-5 max-sm:h-3"></div>
        <div class="flex justify-center h-[12.5cm] max-sm:h-[9cm] max-sm:w-fit bg-[url('/images/D3-Pan-145.jpg')] w-full">
            <div class="w-5/6 max-sm:w-11/12 h-full">
                <div class="mt-2 flex justify-center items-center">
                    <div class=" h-10 w-56 flex justify-center items-center text-[#27423D] text-3xl tracking-widest">Non Project</div>
                </div>
                <div class="mt-5 flex justify-center items-center">
                    <div class="h-10 grid grid-cols-3 gap-16">
                        <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/about">About</router-link></div>
                        <!-- <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/resume">Resume</router-link></div> -->
                        <div class="text-white flex justify-center items-center p-1 tracking-widest hover:cursor-default bg-[#34623F] rounded-full">myWeb</div>
                        <!-- <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/project">Project</router-link></div> -->
                        <div class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"><router-link to="/contact">Contact</router-link></div>
                    </div>
                </div>
                <div v-motion-slide-right v-motion-slide-visible-right class="text-white flex text-7xl max-sm:text-4xl items-center max-sm:mt-10 mt-24 ml-20 max-sm:ml-0 tracking-wider">
                    Hi,I'm<span class="font-bold ml-5 max-sm:ml-3 text-[#34623F]">{{ displayedText }}</span>
                </div>
                <div v-motion-slide-left class=" mt-8 ml-20 max-sm:ml-0 max-sm:mt-4 max-sm:text-sm w-fit px-2 py-1 text-xl bg-white tracking-widest">I am developer for <span class="text-[#c9184a]">Front-End</span>, <span class="text-[#c9184a]">Back-End</span> and <span class="text-[#c9184a]">DevOps</span></div>
                <div class=" ml-20 h-24 w-full flex items-center gap-8 max-sm:ml-0 max-sm:justify-center">
                    <a href="https://www.facebook.com/lnw.non.1" target="_blank" class="hover:scale-125 h-12 rounded-full bg-[#1F413B] w-12 max-sm:h-10 max-sm:w-10"><img src="/images/facebook.png" alt="facebook" class="rounded-full p-1"></a>
                    <a href="https://www.instagram.com/nonchyy_/" target="_blank" class="hover:scale-125 h-12 rounded-full bg-[#1F413B] w-12 max-sm:h-10 max-sm:w-10"><img src="/images/ig.png" alt="ig" class="rounded-full p-2"></a>
                    <a href="https://github.com/nonybueno" target="_blank" class="hover:scale-125 h-12 rounded-full bg-[#1F413B] w-12 max-sm:h-10 max-sm:w-10"><img src="/images/github.png" alt="github" class="rounded-full p-1.5"></a>
                    <a href="mailto:thaninpong.non@mail.kmutt.ac.th" target="_blank" class="hover:scale-125 h-12 rounded-full bg-[#1F413B] w-12 max-sm:h-10 max-sm:w-10"><img src="/images/email.png" alt="email" class="rounded-full"></a>
                </div>
            </div>
        </div>
        <div class="flex justify-center ">
            <div class="w-5/6 max-sm:w-11/12">
                <div class="flex justify-end mt-10 pb-9 text-xl max-sm:text-sm max-sm:mt-5 tracking-wider text-[#1F413B] font-bold" v-motion-fade-visible v-motion-fade>
                MORE ABOUT ME <span class="ml-10 max-sm:ml-2">></span>
            </div>
            <div class="h-[15cm] max-sm:h-[7cm] max-sm:pl-2 relative pl-8 bg-[#2F6859]" v-motion-fade-visible v-motion-fade>
                <div class="h-[16cm] border-[0.15cm] max-sm:h-[8cm] border-white max-sm:w-3/6 w-1/3 absolute bottom-9 max-sm:bottom-3">
                    <img src="/images/D3-Pan-481.jpg" alt="myPic" class="h-full">
                </div>
                <div class=" w-full h-full grid grid-cols-3">
                    <div class="col-start-2 col-span-2 h-full max-sm:ml-2">
                        <div class="ml-10 h-full text-white max-sm:ml-16">
                            <div class="mt-10 max-sm:mt-2 mb-6 text-7xl font-bold max-sm:text-2xl max-sm:mb-2" v-motion-slide-left v-motion-slide-visible-left>Transforming Ideas Into Functional Websites.</div>
                            <div class="tracking-widest max-sm:tracking-normal max-sm:text-xs">Full Stack Web Developer with a Passion for creating Engaging User Experiences</div>
                            <div class="flex items-center mt-24 max-sm:mt-5 max-sm:text-xs">
                                <div class="rounded-md h-10 w-32 max-sm:h-7 max-sm:w-20 bg-white text-[#1F413B] flex justify-center items-center cursor-pointer hover:scale-110">
                                    <a href="/resume/Thaninpongs_Resume.pdf" target="_blank" download>
                                        <div class="font-bold flex justify-center items-center"><div class="mr-2 max-sm:mr-0.5 max-sm:ml-1">Resume</div>  <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.99996 33.3333C9.0833 33.3333 8.2983 33.0066 7.64496 32.3533C6.99163 31.7 6.66552 30.9155 6.66663 30V25H9.99996V30H30V25H33.3333V30C33.3333 30.9166 33.0066 31.7016 32.3533 32.355C31.7 33.0083 30.9155 33.3344 30 33.3333H9.99996ZM20 26.6666L11.6666 18.3333L14 15.9166L18.3333 20.25V6.66663H21.6666V20.25L26 15.9166L28.3333 18.3333L20 26.6666Z" fill="#1F413B"/>
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                                <div class="ml-10 max-sm:ml-3 underline tracking-wider font-bold"><router-link to="/contact">Contact</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class=" mt-10 max-sm:mt-4">
                <div class="h-10 grid grid-cols-4 max-sm:grid-cols-6 max-sm:h-8">
                    <div class="col-span-3 max-sm:col-span-4 text-xl max-sm:text-sm tracking-wider font-bold text-[#1F413B]">MY SKILLSET <span class="text-[#2F6859]">(hard skill)</span><span class="ml-20 max-sm:ml-3">></span></div>
                    <div class="col-start-4 max-sm:col-start-5 max-sm:col-span-2 text-xl max-sm:text-sm tracking-wider text-[#1F413B]">created by <span class="font-bold">Non</span></div>
                </div>
                <div class="grid grid-cols-4 gap-5 max-sm:gap-2 max-sm:grid-cols-2 h-[10cm] max-sm:h-[4cm] mt-5 max-sm:mt-3" v-motion-fade-visible v-motion-fade>
                    <div class="border h-full bg-[#1F413B] rounded-xl">
                        <div class="flex justify-center text-white my-3 text-xl">FRONT-END</div>
                        <div class="grid grid-cols-2 bg-white mx-5 max-sm:grid-cols-2 max-sm:mx-2 max-sm:mb-2 rounded-lg">
                            <div class="flex justify-center mt-5">
                                <img src="/images/image_18.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center mt-5">
                                <img src="/images/image_19.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center my-5">
                                <img src="/images/image_20.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center my-5">
                                <img src="/images/image_21.png" class="h-20 max-sm:h-14">
                            </div>
                        </div>
                    </div>
                    <div class="border h-full bg-[#1F413B] rounded-xl">
                        <div class="flex justify-center text-white my-3 text-xl">BACK-END</div>
                        <div class="grid grid-cols-1 bg-white mx-5 max-sm:mx-2 max-sm:mb-2 rounded-lg">
                            <div class="flex justify-center mt-5">
                                <img src="/images/image_22.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center my-5">
                                <img src="/images/image_23.png" class="h-20 max-sm:h-14">
                            </div>
                        </div>
                    </div>
                    <div class="border h-full bg-[#1F413B] rounded-xl">
                        <div class="flex justify-center text-white my-3 text-xl">DATABASE</div>
                        <div class="grid grid-cols-1  bg-white mx-5 max-sm:mx-2 max-sm:mb-2 rounded-lg">
                            <div class="flex justify-center mt-5">
                                <img src="/images/image_28.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center my-5">
                                <img src="/images/oracle.png" class="h-20 max-sm:h-14">
                            </div>
                        </div>
                    </div>
                    <div class="border h-full bg-[#1F413B] rounded-xl">
                        <div class="flex justify-center text-white my-3 text-xl">DEVOPS</div>
                        <div class="grid grid-cols-1  bg-white mx-5 max-sm:mx-2 max-sm:mb-2 rounded-lg">
                            <div class="flex justify-center mt-5">
                                <img src="/images/image_25.png" class="h-20 max-sm:h-14">
                            </div>
                            <div class="flex justify-center my-5">
                                <img src="/images/image_26.png" class="h-20 max-sm:h-14">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-[#2F6859] flex justify-center mt-10 h-full max-sm:mt-96">
        <div class="w-5/6 max-sm:w-11/12">
            <div class="text-xl tracking-wider font-bold text-white mt-7 max-sm:mt-4 max-sm:text-sm">MY ACTIVITIES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></div>
        
        <div class="grid grid-cols-2 mt-5 gap-5 max-sm:mt-3 max-sm:gap-2">
            <div class="text-white">
                <div class="h-[28rem] max-sm:h-[16rem] bg-white m-3 max-sm:m-0" v-motion-fade-visible v-motion-fade>
                    <img src="/images/D1-202.jpg" alt="group" class="h-full w-full max-sm:h-full">
                </div>
                <div class="text-xl max-sm:text-xs tracking-widest mt-8 max-sm:mt-3 flex items-center max-sm:grid max-sm:grid-cols-9">
                    <img src="/images/ig.png" alt="ig" class="h-10 w-10 mr-5 max-sm:mr-0.5 max-sm:h-5 max-sm:w-5">
                    <span class="max-sm:col-start-2 font-bold">IG:</span>
                    <div class="max-sm:col-start-2 max-sm:col-span-7">sit.it.starterpack</div>
                </div>
                <div class="text-xl max-sm:text-xs tracking-widest my-5 flex items-center max-sm:my-4 max-sm:grid max-sm:grid-cols-9">
                    <img src="/images/facebook.png" alt="facebook" class="h-10 w-10 mr-5 max-sm:mr-0.5 max-sm:h-5 max-sm:w-5">
                    <span class="max-sm:col-start-2 font-bold">FACEBOOK:</span>
                    <div class="max-sm:col-start-2 max-sm:col-span-7">IT#29 Starter Pack</div>
                </div>
                <div class="grid grid-cols-3 gap-5 ml-10 max-sm:ml-1 max-sm:gap-0.5">
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24 bg-white">
                        <img src="/images/start.png">
                    </div>
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24 bg-[url('/images/Profile.png')]">
                    </div>
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24 bg-[url('/images/Neptune-bg.png')]">
                        <img src="/images/Neptune.png" class="">
                    </div>
                </div>
            </div>
            <div class=" text-white">
                <div class="text-4xl max-sm:text-lg font-semibold tracking-wider"><span class="text-7xl max-sm:text-xl font-bold">IT</span>#29 STARTER PACK</div>
                <div class="border-b-2 mx-5 mt-2 mb-10 max-sm:mb-3"></div>
                <div class="ml-5 max-sm:ml-2">
                    <div class="text-xl tracking-wide max-sm:text-xs">
                        <ul class="list-disc">
                            <li>I serve as both an academic and content creator for teaching at this camp.</li>
                        </ul>
                    </div>
                    <div class="text-xl tracking-wide max-sm:text-xs my-10 max-sm:my-2">
                        <ul class="list-disc">
                            <li>My duties in the academic part are to control the content teaching, supervise the teaching of staff, and support staff and learner in the classroom.</li> 
                        </ul>
                    </div>
                    <div class="text-xl tracking-wide max-sm:text-xs">
                        <ul class="list-disc">
                        <li>In the content creator part, where my duties are check the content that will be taught in the HTML, CSS languages and  post-test content that will be used after completing the camp.</li> 
                        </ul>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-10 mb-5 max-sm:mt-3" v-motion-fade-visible v-motion-fade>
                    <div>
                        <img src="/images/D3-Pan-149.jpg" alt="myPic" class="h-60 w-full max-sm:h-20">
                    </div>
                    <div>
                        <img src="/images/D3-Pan-162.jpg" alt="myPic" class="h-60 w-full max-sm:h-20">
                    </div>
                    <div>
                        <img src="/images/D3-Pan-171.jpg" alt="myPic" class="h-60 w-full max-sm:h-20">
                    </div>
                </div>
            </div>

        </div>



    </div>
    </div>

     <div class=" flex justify-center h-full text-[#34623F]">
        <div class="w-5/6 max-sm:w-11/12">
        <div class="grid grid-cols-2  w-full mt-5 gap-5 mb-10 max-sm:mb-5">
            
            <div class="">
                <div class="text-4xl font-semibold tracking-wider max-sm:text-lg"><span class="text-7xl max-sm:text-xl font-bold">Hello</span>&nbsp;#WORLD FENNEC</div>
                <div class="border-b-2 mx-5 mt-2 mb-10 max-sm:mb-3"></div>
                <div class="text-xl max-sm:text-xs tracking-wide">
                    <ul class="list-disc">
                        <li>I serve as a person who manages various learning materials and also helps in procuring various materials.</li>
                    </ul>
                </div>
                <div class="text-xl max-sm:text-xs tracking-wide my-10 max-sm:my-2">
                    <ul class="list-disc">
                       <li>I will check the computers for any problems and take care of them.</li>
                    </ul>
                </div>
                <div class="text-xl max-sm:text-xs tracking-wide">
                    <ul class="list-disc">
                       <li>In this camp, I will be a support person in providing assistance and assistance in various operations. To carry out the tutorial go notifications.</li>
                    </ul>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-16 mb-5 max-sm:mt-3" v-motion-fade-visible v-motion-fade>
                    <div class="">
                        <img src="/images/IMG_3878.jpg" alt="myPic" class="h-60 w-full max-sm:h-20">
                    </div>
                    <div class="">
                        <img src="/images/IMG_3885.jpg" alt="myPic" class="h-60 max-sm:h-20">
                    </div>
                    <div class="">
                        <img src="/images/IMG_3889.jpg" alt="myPic" class="h-60 w-full max-sm:h-20">
                    </div>
                </div>
            </div>
            <div class="">
                <div class="h-[28rem] max-sm:h-[15rem] max-md:m-0 bg-gray-400 m-3" v-motion-fade-visible v-motion-fade>
                    <img src="/images/pic11.jpg" alt="group" class="h-full">
                </div>
                <div class="text-xl max-sm:text-xs tracking-widest mt-8 max-sm:mt-3 flex items-center max-sm:grid max-sm:grid-cols-9">
                    <img src="/images/ig.png" alt="ig" class="h-10 w-10 mr-5 max-sm:mr-0.5 max-sm:h-5 max-sm:w-5">
                    <span class="max-sm:col-start-2 font-bold">IG:</span>
                    <div class="max-sm:col-start-2 max-sm:col-span-7">sithelloworld</div>
                </div>
                <div class="text-xl max-sm:text-xs tracking-widest max-sm:my-4 mt-8 max-sm:mt-3 flex items-center max-sm:grid max-sm:grid-cols-9">
                    <img src="/images/facebook.png" alt="facebook" class="h-10 w-10 mr-5 max-sm:mr-0.5 max-sm:h-5 max-sm:w-5">
                    <span class="max-sm:col-start-2 font-bold">FACEBOOK:</span>
                    <div class="max-sm:col-start-2 max-sm:col-span-7">SIT HelloWorld</div>
                </div>
                <div class="grid grid-cols-3 gap-5 ml-10 max-sm:ml-1 max-sm:gap-0.5">
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24 bg-white"> 
                        <img src="/images/f1.png" class="max-sm:h-12 max-sm:w-12 h-24">
                    </div>
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24">
                        <img src="/images/f2.png" class="max-sm:h-12 max-sm:w-12 h-24">
                    </div>
                    <div class="max-sm:h-12 max-sm:w-12 h-24 rounded-full w-24">
                        <img src="/images/f3.png" class="max-sm:h-12 max-sm:w-12 h-24">
                    </div>
                </div> 
            </div>
        </div>


        <div class="h-10 grid grid-cols-4 max-sm:grid-cols-6 max-sm:h-5">
            <div class="col-span-3 text-xl max-sm:text-sm tracking-wider font-bold text-[#1F413B]">MY PROJECT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></div>
            <div class="col-start-4 text-xl max-sm:flex max-sm:justify-end max-sm:col-span-3 max-sm:text-sm tracking-wider text-[#1F413B]">group team <span class="font-bold max-sm:ml-0.5">Project</span></div>
        </div>
        <div class="grid grid-cols-4 gap-5 h-80 mt-8 max-sm:mt-4 max-sm:grid-cols-2">
                <div class="h-full w-full border p-3 rounded-xl bg-[#1F413B]">
                    <div class="h-4/5 border w-full rounded-lg bg-[#2F6859] flex justify-center  items-center">
                        <img src="/images/alumili-1.png" class="h-40 w-40 max-sm:w-fit">
                    </div>
                    <div class=" grid grid-cols-2 gap-3 h-10 mt-4 max-sm:h-8 max-sm:mt-2">
                        <a href="https://clinquant-bienenstitch-fe9c36.netlify.app/" target="_blank"><div class="h-full flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">LINK</div></a>
                        <a href="https://github.com/Nine0512/PROJECT1-SEC-2-Alumilize" target="_blank" class="flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">GitHub</a>
                    </div>
                </div>
            <div class="h-full w-full border p-3 rounded-xl bg-[#1F413B]">
                <div class="h-4/5 border w-full rounded-lg bg-[#2F6859] flex justify-center items-center">
                    <img src="/images/alumili-2.png" class="h-40 w-40 max-sm:w-fit">
                </div>
                <div class=" grid grid-cols-2 gap-3 h-10 mt-4 max-sm:h-8 max-sm:mt-2">
                    <a href="" target="_blank"><div class="h-full flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">LINK</div></a>
                    <a href="https://github.com/Nine0512/PROJECT2-SEC-2-Alumilize" target="_blank" class="flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">GitHub</a>
                </div>
            </div>
            <div class="h-full w-full border p-3 rounded-xl bg-[#1F413B]">
                <div class="h-4/5 border w-full rounded-lg bg-[#2F6859] flex justify-center items-center">
                    <img src="/images/B_N_W-3.png" class="h-40 w-40 max-sm:w-fit">
                </div>
                <div class=" grid grid-cols-2 gap-3 h-10 mt-4 max-sm:h-8 max-sm:mt-2">
                    <a href="http://intproj22.sit.kmutt.ac.th/ssa2/announcement" target="_blank"><div class="h-full flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">LINK</div></a>
                    <a href="https://github.com/nonybueno/PROJECT-BNW" target="_blank" class="flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">GitHub</a>
                </div>
            </div>
            <div class="h-full w-full border p-3 rounded-xl bg-[#1F413B]">
                <div class="h-4/5 border w-full rounded-lg bg-[#2F6859] flex justify-center items-center">
                    <img src="/images/buz.jpg" class="h-full w-full rounded-lg max-sm:w-fit">
                </div>
                <div class=" grid grid-cols-2 gap-3 h-10 mt-4 max-sm:h-8 max-sm:mt-2">
                    <a href="https://www.figma.com/proto/M35yOfYD32UABPsZNHPNFN/Untitled?node-id=1-4&starting-point-node-id=1%3A4&mode=design&t=qDeFwD38kURP25KB-1" target="_blank"> <div class="h-full flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">LINK</div></a>
                    <a href="https://www.figma.com/file/M35yOfYD32UABPsZNHPNFN/Untitled?type=design&node-id=0%3A1&mode=design&t=MwjzZlppmIeLvwMP-1" target="_blank" class="flex justify-center items-center border rounded-sm cursor-pointer hover:scale-105 bg-white">Figma</a>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-4 my-5 gap-5 max-sm:hidden">
            <div class="text-xl text-[#34623F] pl-2">Word Typing Test Website
                <div class="text-sm text-gray-400">INT-203 Client-side</div>
            </div>
            <div class="text-xl text-[#34623F] pl-2">E-Book Online Bookstore
                <div class="text-sm text-gray-400">INT-203 Client-side</div>
            </div>
            <div class="text-xl text-[#34623F] pl-2">SIT-Announcement System
                <div class="text-sm text-gray-400">INT0221 Integrated Projects</div>
            </div>
            <div class="text-xl text-[#34623F] pl-2">Bus Ticket Booking System
                <div class="text-sm text-gray-400">INT-104 User Experience Design</div>
            </div>
        </div>
    </div>
    </div>
    <div class=" max-sm:mb-6">
        <div class="flex justify-center my-5 max-sm:mt-48">
            <div class="w-5/6 max-sm:w-11/12 font-bold tracking-widest flex justify-between items-end max-sm:justify-center">
                <div class="text-5xl text-[#2F6859] max-sm:text-2xl"><span class="text-6xl max-sm:text-3xl">F</span>RONT-END TEAM</div>
                <div class="text-[#1F413B] text-xs"><span class="font-normal">2022</span> INT203-PROJECT I & II</div>
            </div>
        </div>
        <div class="w-screen bg-[#2F6859] h-96 flex max-sm:h-fit">
            <div class="w-2/5">
                <img src="/images/al-1.jpg" alt="alumilize" class="h-full w-full max-sm:hidden">
                <div class="h-full w-full p-1 mob">
                    <img src="/images/alMob.png" class="rounded-xl bg-white w-full h-full"/>
                </div>
            </div>
            <div class="ml-5 mt-3 text-white w-2/4 max-sm:ml-2">
                <div class="text-4xl max-sm:text-lg font-semibold tracking-wider"><span class="text-7xl font-bold max-sm:text-2xl">Word</span>&nbsp;#TYPING TEST WEBSITE</div>
                <div class="text-xl max-sm:text-xs">INT-203 Client-side group project</div>
                <div class="mt-3 text-xl max-sm:mt-1 max-sm:text-xs max-sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creating a website typing speed test that enables users to check their typing speed, accuracy, and completion time.</div>
                <div class="text-xl mt-3 max-sm:text-xs max-sm:mt-1">Used Languages, libaries, frameworks: <span class="text-yellow-500">Vue.js, HTML, CSS, JavaScript, Tailwind</span></div>
                <div class="text-xl mt-3 max-sm:text-xs max-sm:mt-1">Repository: <a href="https://github.com/Nine0512/PROJECT1-SEC-2-Alumilize" class="underline-offset-1 underline" target="_blank">github.com/Nine0512/PROJECT1-SEC-2-Alumilize</a></div>
                <div class="text-xl mt-3 max-sm:text-xs max-sm:mt-1">Website: <a href="https://clinquant-bienenstitch-fe9c36.netlify.app/" class="underline-offset-1 underline" target="_blank">https://clinquant-bienenstitch-fe9c36.netlify.app/</a></div>
                <div class="flex justify-end max-sm:mb-2">
                    <a href="https://clinquant-bienenstitch-fe9c36.netlify.app/" target="_blank" class="cursor-pointer rounded-xl bg-white text-[#2F6859] w-24 flex justify-center h-8 items-center text-md mt-3 max-sm:h-6 max-sm:w-16 max-sm:text-xs hover:scale-110">Website</a>
                </div>
            </div>
        </div>

         <div class="w-screen bg-white h-96 flex max-sm:h-fit">
            <div class="w-2/5">
                <img src="/images/al-b.jpg" alt="alumilize" class="h-full w-full max-sm:hidden">
                <div class="h-full w-full p-1 mob">
                    <img src="/images/al2Mob.png" class="rounded-xl bg-white w-full h-full"/>
                </div>
            </div>
            <div class="ml-5 mt-3 text-[#1F413B] w-2/4 max-sm:ml-2">
                <div class="text-4xl max-sm:text-lg font-semibold tracking-wider"><span class="text-7xl font-bold max-sm:text-2xl">E</span>&nbsp;-Book Online Bookstore</div>
                <div class="text-xl max-sm:text-xs">INT-203 Client-side group project</div>
                <div class="mt-3 text-xl max-sm:text-xs max-sm:hidden">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        Create a website for users. It is a bookstore online that is a one stop service that has the ordering of products and authentication for safety.</div>
                <div class="text-xl mt-3 max-sm:text-xs max-sm:mt-1">Used Languages, libaries, frameworks: <span class="text-yellow-500">Vue.js, HTML, CSS, JavaScript, Tailwind</span></div>
                <div class="text-xl mt-3 max-sm:mt-1 max-sm:text-xs">Repository: <a href="https://github.com/Nine0512/PROJECT2-SEC-2-Alumilize" class="underline-offset-1 underline" target="_blank">github.com/Nine0512/PROJECT2-SEC-2-Alumilize</a></div>
                <div class="text-xl mt-3 max-sm:text-xs max-sm:mt-1">Website: <a href="" class="underline-offset-1 underline" target="_blank">https://alumilize-Ebook.com</a></div>
                <div class="flex justify-end">
                    <div class="cursor-pointer rounded-xl bg-[#2F6859] text-white w-24 flex justify-center h-8 items-center max-sm:text-xs max-sm:w-16 max-sm:h-6 text-md mt-5 hover:scale-110 max-sm:mt-2">Website</div>
                </div>
            </div>
        </div>
        <div class="flex justify-center my-5">
            <div class="w-5/6 max-sm:w-11/12 font-bold tracking-widest">
                <div class="text-5xl text-[#2F6859] max-sm:text-2xl"><span class="text-6xl max-sm:text-3xl">F</span>RONT-END, <span class="text-6xl max-sm:text-3xl">B</span>ACK-END, <span class="text-6xl max-sm:text-3xl">D</span>EV<span class="text-6xl max-sm:text-3xl">O</span>PS</div>
                <div class="text-[#1F413B] text-xl max-sm:text-xs"><span class="font-normal">2022</span>&nbsp;INT221-Integrated Projects I</div>
            </div>
        </div>
        <div class="w-screen bg-[#2F6859] h-96 flex max-sm:h-fit">
            <div class="w-2/5">
                <img src="/images/bnw.jpg" alt="bnw" class="w-full h-full max-sm:h-24 max-sm:hidden">
                <div class="h-full w-full p-1 mob">
                    <img src="/images/bnwMob.png" class="rounded-xl bg-white w-full h-full"/>
                </div>
            </div>
            <div class="ml-5 text-white w-2/4 mt-1 max-sm:ml-2">
                <div class="text-4xl font-semibold tracking-wider max-sm:text-lg"><span class="text-7xl font-bold max-sm:text-2xl">SIT</span>&nbsp;-Announcement System</div>
                <div class="text-xl max-sm:text-xs">Integrated Projects</div>
                <div class="mt-2 text-xl max-sm:text-xs max-sm:hidden max-sm:mt-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Participating in: Front-End and Back-End Team Create a website for students by making announcements and posts from the university. which is accessible to all students.</div>
                <div class="text-xl mt-2 max-sm:text-xs max-sm:mt-1">Used Languages, libaries, frameworks: <span class="text-yellow-500">Vue.js, HTML, CSS, JavaScript, Tailwind, Spring Boots, Java</span></div>
                <div class="text-xl mt-2 max-sm:text-xs max-sm:mt-1">Repository: <a href="https://github.com/nonybueno/PROJECT-BNW" class="underline-offset-1 underline" target="_blank">github.com/nonybueno/PROJECT-BNW</a></div>
                <div class="text-xl mt-2 max-sm:text-xs max-sm:mt-1">Website: <a href="http://intproj22.sit.kmutt.ac.th/ssa2/admin/announcement" class="underline-offset-1 underline" target="_blank">intproj22.sit.kmutt.ac.th/ssa2</a></div>
                <div class="flex justify-end">
                    <a href="http://intproj22.sit.kmutt.ac.th/ssa2/admin/announcement" target="_blank" class="cursor-pointer rounded-xl bg-white text-[#2F6859] w-24 flex justify-center h-8 items-center max-sm:text-xs text-md mt-2 hover:scale-110 max-sm:w-16 max-sm:h-6 max-sm:mb-2">Website</a>
                </div>
            </div>
        </div>

        <div class="flex justify-center my-5">
            <div class="w-5/6 max-sm:w-11/12 font-bold flex justify-between items-end">
                <div class="text-5xl text-[#2F6859] tracking-widest max-sm:text-2xl"><span class="text-6xl max-sm:text-3xl">U</span>X/UI DESIGN</div>
                <div class="text-[#1F413B] text-xl max-sm:text-xs"><span class="font-normal">2021</span>&nbsp;INT-204 USER EXPERIENCE DESIGN</div>
            </div>
        </div>
        <div class="w-screen bg-[#2F6859] h-96 flex max-sm:h-fit">
            <div class=" w-2/5">
                <img src="/images/bus.jpg" class="h-full w-full max-sm:hidden">
                <div class="h-full w-full p-1 mob">
                    <img src="/images/busMob.png" class="rounded-xl bg-white w-full h-full"/>
                </div>
            </div>
            <div class="ml-5 text-white w-2/4 mt-1 max-sm:ml-2">
                <div class="text-4xl max-sm:text-lg font-semibold tracking-wider"><span class="text-7xl font-bold max-sm:text-2xl">BUS</span>&nbsp;#Ticket Booking System</div>
                <div class="text-xl max-sm:text-xs">INT-104 User Experience Design</div>
                <div class="mt-2 max-sm:mt-1 text-xl max-sm:hidden max-sm:text-xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Design a mobile app used to track buses and calculate fares based on distance traveled.</div>
                <div class="text-xl mt-2 max-sm:mt-1  max-sm:text-xs">Used Languages, libaries, frameworks: <span class="text-yellow-500">Figma</span></div>
                <div class="text-xl mt-2 max-sm:mt-1 max-sm:text-xs">Figma : <a href="https://www.figma.com/file/M35yOfYD32UABPsZNHPNFN/Untitled?type=design&node-id=0%3A1&mode=design&t=k4I02xaPjViXgfxS-1" class="underline-offset-1 underline" target="_blank">https://www.figma.com/</a></div>
                <div class="text-xl mt-2 max-sm:mt-1 max-sm:text-xs">Website : <a href="https://www.figma.com/proto/M35yOfYD32UABPsZNHPNFN/Untitled?type=design&node-id=1-4&t=aQ1CdYke7oDSDd20-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1&mode=design" class="underline-offset-1 underline" target="_blank">Prototype</a></div>
                <div class="flex justify-end mt-5 max-sm:mt-2">
                    <a href="https://www.figma.com/proto/M35yOfYD32UABPsZNHPNFN/Untitled?type=design&node-id=1-4&t=aQ1CdYke7oDSDd20-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A4&show-proto-sidebar=1&mode=design" target="_blank"><div class="hover:scale-110 cursor-pointer rounded-xl bg-white text-[#2F6859] w-24 flex justify-center h-8 items-center text-md mt-2 max-sm:text-xs max-sm:h-6 max-sm:w-14 max-sm:mb-2">Website</div></a>
                </div>
            </div> 
        </div>
    </div>

    <div class="">
        <Footer/> 
    </div>
</div>
    
</template>
 
<style scoped>
@media only screen and (min-width: 768px) {
    .mob{
        display: none;
    }
}
.home{
    padding: 0;
    margin: 0;
}
</style>