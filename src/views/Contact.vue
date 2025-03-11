<script setup>
import Footer from "../components/Footer.vue";
</script>

<template>
  <div>
    <div class="max-sm:min-h-[750px] min-h-[600px]">
      <div class="w-full">
        <div class="bg-[#1F413B] h-5 max-sm:h-3"></div>
        <div class="flex justify-center items-center lg:px-32">
          <div class="w-5/6 h-full max-sm:w-11/12">
            <div class="mt-2 flex justify-center items-center">
              <div
                class="h-10 w-56 flex justify-center items-center text-[#27423D] text-3xl tracking-widest"
              >
                Non Project
              </div>
            </div>
            <div class="mt-5 flex justify-center items-center">
              <div class="h-10 grid grid-cols-3 gap-16">
                <div
                  class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"
                >
                  <router-link to="/about">About</router-link>
                </div>
                <!-- <div class="text-black flex justify-center items-center p-1 tracking-widest"><router-link to="/resume">Resume</router-link></div> -->
                <div
                  class="text-[#34623F] flex justify-center items-center p-1 tracking-widest"
                >
                  <router-link to="/home">myWeb</router-link>
                </div>
                <!-- <div class="text-black flex justify-center items-center p-1 tracking-widest"><router-link to="/project">Project</router-link></div> -->
                <div
                  class="text-white flex justify-center items-center p-1 tracking-widest hover:cursor-default bg-[#34623F] rounded-full"
                >
                  Contact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-10">
        <div class="w-5/6 max-sm:w-11/12">
          <div class="shadow-2xl p-5 max-sm:p-2 rounded-xl">
            <!-- <div class="  max-sm:hidden">

                    </div> -->
            <div class="">
              <div
                class="grid grid-cols-2 max-sm:grid-cols-1 h-full max-sm:gap-3 gap-2"
              >
                <div
                  class="rounded-xl bg-[#2F6859] h-32 max-sm:h-24 grid grid-cols-3 max-sm:p-1 p-2 shadowBox"
                  v-motion-slide-right
                  v-motion-slide-visible-right
                >
                  <div
                    class="bg-white rounded-xl max-sm:hidden flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#2F6859"
                        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                      />
                    </svg>
                  </div>
                  <div
                    class="col-span-2 text-white pl-5 max-sm:pl-2 h-full flex items-center"
                  >
                    <div>
                      <div
                        class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]"
                      >
                        EMAIL :
                      </div>
                      <div class="tracking-wider max-sm:text-xl">
                        thaninpong.non@mail.kmutt.ac.th
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="rounded-xl bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox"
                  v-motion-slide-left
                  v-motion-slide-visible-left
                >
                  <div
                    class="bg-white rounded-xl max-sm:hidden flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#2F6859"
                        d="m19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.05 15.05 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2 2 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98"
                      />
                    </svg>
                  </div>
                  <div
                    class="col-span-2 text-[#2F6859] pl-5 max-sm:pl-2 h-full flex items-center"
                  >
                    <div>
                      <div
                        class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-[#2F6859] max-sm:text-[#27423D] max-sm:bg-white text-white"
                      >
                        PHONE :
                      </div>
                      <div class="tracking-wider max-sm:text-xl">
                        099-145-0959
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="rounded-xl max-sm:bg-[#2F6859] bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox"
                  v-motion-slide-right
                  v-motion-slide-visible-right
                >
                  <div
                    class="bg-white rounded-xl max-sm:hidden flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#2F6859"
                        d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                      />
                    </svg>
                  </div>
                  <div
                    class="col-span-2 max-sm:text-white text-[#2F6859] pl-5 max-sm:pl-2 h-full flex items-center"
                  >
                    <div>
                      <div
                        class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 max-sm:bg-white max-sm:text-[#27423D] text-white bg-[#2F6859]"
                      >
                        LINKTREE :
                      </div>
                      <a
                        href="https://linktr.ee/nonybueno"
                        target="_blank"
                        class="tracking-wider max-sm:text-xl"
                        >linktr.ee/nonybueno</a
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="rounded-xl bg-[#2F6859] max-sm:bg-white h-32 max-sm:h-24 grid grid-cols-3 p-2 shadowBox"
                  v-motion-slide-left
                  v-motion-slide-visible-left
                >
                  <div
                    class="bg-white rounded-xl max-sm:hidden flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#2F6859"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </div>
                  <div
                    class="col-span-2 max-sm:text-[#2F6859] text-white pl-5 max-sm:pl-2 h-full flex items-center"
                  >
                    <div>
                      <div
                        class="max-sm:text-2xl tracking-widest rounded-lg w-fit px-1 py-0.5 bg-white text-[#27423D]"
                      >
                        GITHUB :
                      </div>
                      <a
                        href="https://github.com/nonybueno"
                        target="_blank"
                        class="tracking-wider max-sm:text-xl"
                        >github.com/nonybueno</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.shadowBox {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}
</style>
