<template>
  <button
    @click="$emit('go-back')"
    class="flex gap-2 px-4 py-2 font-medium text-white rounded-md outline-none bg-primary-100 focus:outline-none"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 5L4 12L11 19"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 12H20"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    Back to Homepage
  </button>
</template>

<script setup>
defineEmits(["go-back"]);
</script>
