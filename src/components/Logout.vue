<script setup>
import { computed } from "vue"
import { useAuthStore } from '@/stores/Auth'
import LogoutIcon from "@/components/icons/LogoutIcon.vue";

const authStore = computed(() => useAuthStore())
const logout = () => authStore.value.logout()
</script>

<template>
  <button
    type="button"
    @click="logout"
    class="inline-flex items-center space-x-2"
  >
    <span class="hidden sm:inline">Logout</span>
    <LogoutIcon class="w-6 h-6 text-white" />
  </button>
</template>

