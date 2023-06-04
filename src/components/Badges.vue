<template>
  <div
    class="px-4 py-2 font-bold text-white rounded-3xl bg-badges-100"
  >
    {{ altSpell }}
  </div>
</template>

<script setup>
defineProps({
  altSpell: {
    type: String,
    required: true,
    default: "",
  },
});
</script>
