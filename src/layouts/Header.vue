<script setup>
  import { ref, computed } from "vue";
  import { useAuthStore } from '@/stores/Auth'
  import { useSidebar } from "../hooks/useSidebar.js";
  import LoginIcon from "@/components/icons/LoginIcon.vue";
  import HomeIcon from "@/components/icons/HomeIcon.vue";
  import Logout from "@/components/Logout.vue";
  import IconBell from "@/components/icons/IconBell.vue";
  import IconBurger from "@/components/icons/IconBurger.vue";
  import IconLoupe from "@/components/icons/IconLoupe.vue";
  import IconUser from "@/components/icons/IconUser.vue";

  const { isOpen } = useSidebar()
  const dropdownOpen = ref(false)
  const store = computed(() => useAuthStore())
</script>

<template>
  <header class="flex justify-between items-center p-5 bg-gray-700 border-b-2 border-red-700">
    <div class="flex items-center">
      <button
        @click="isOpen = true"
        class="text-white focus:outline-none lg:hidden"
        data-testid="sidebar-button"
      >
        <IconBurger />
      </button>

      <div v-if="store.authUser" class="flex items-center space-x-5 ml-3">
        <router-link
          to="/dashboard"          
          data-testid="dashboard-link"
        >
          <HomeIcon class="w-6 h-6 text-white" />
          <span class="sr-only">Dashboard</span>
        </router-link>        
      </div>
      
      <router-link
        to="/"
        data-testid="home-link"
        v-else
      >
        <HomeIcon class="w-6 h-6 text-white" />        
      </router-link>

      <div class="relative mr-4 lg:mx-0">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
          <IconLoupe />
        </span>

        <input
          class="w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600 bg-gray-400 ml-2 "
          type="text"
          placeholder="Search"
        />
      </div>
    </div>

    <div class="flex items-center">
      <button class="flex mx-4 text-white focus:outline-none">
        <IconBell />
      </button>

      <div class="relative">
        <button
          @click="dropdownOpen = !dropdownOpen"
          class="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none"
        >
          <IconUser />         
        </button>

        <div
          v-show="dropdownOpen"
          @click="dropdownOpen = false"
          class="absolute right-0 mt-2 py-2 w-48 bg-gray-600 rounded-md shadow-xl z-20"
        >
          <router-link
            to="/profile"
            class="block px-4 py-2 text-sm text-white hover:bg-gray-400"
            data-testid="profile-link"
          >            
            {{ store.authUser ? store.authUser.name : 'Profile' }}
          </router-link>

          <router-link
            to="/"
            class="block px-4 py-2 text-sm text-white hover:bg-gray-400"
            data-testid="logout-link"
          >
            <Logout />
          </router-link> 
        </div>        
      </div>
    </div>
  </header> 
</template>
