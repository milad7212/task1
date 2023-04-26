>
<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="light"
        location="right"
      >
        <div dir="rtl" class="‍flex flex-col gap-4">
          <router-link to="/">
          <div
            class="p-2 border-b m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-xl transition-all duration-150 ease-in-out text-gray-200"
          >
            <span class="font-bold">خانه </span>
          </div>
        </router-link>
          <router-link to="about-me">
            
            <div
            class="p-2 border-b m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-xl transition-all duration-150 ease-in-out text-gray-200"
            >
            <span class="font-bold">درباره من </span>
          </div>
        </router-link>
          <router-link to="/table">
            <div
              class="p-2 border-b w-full m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-`xl transition-all duration-150 ease-in-out text-gray-200"
            >
              <span class="font-bold w-full"> جدول </span>
            </div>
          </router-link>
        </div>

        <template v-slot:append>
          <div class="m-3 flex justify-center items-center">
            <button
              class="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-500 hover:text-white hover:scale-95 active:scale-105 transition-all duration-150 ease-in-out"
            >
              login
            </button>
          </div>
        </template>
      </v-navigation-drawer>
      <v-main
        dir="rtl"
        class="bg-gray-200 h-screen p-2 flex justify-center items-center"
      >
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
