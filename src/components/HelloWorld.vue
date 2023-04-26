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
          <div
            class="p-2 border-b m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-xl transition-all duration-150 ease-in-out text-gray-200 "
          >
            <span class="font-bold">خانه </span>
          </div>
          <div
            class="p-2 border-b m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-xl transition-all duration-150 ease-in-out text-gray-200 "
          >
            <span class="font-bold">درباره من </span>
          </div>
          <div
            class="p-2 border-b m-2 my-4 rounded-md cursor-pointer hover:bg-gray-200/50 hover:text-gray-600 hover:text-`xl transition-all duration-150 ease-in-out text-gray-200 "
          >
            <span class="font-bold">ارتباط با من </span>
          </div>
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
        <h1 class="font-black text-2xl animate-pulse">TASK #1</h1>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
