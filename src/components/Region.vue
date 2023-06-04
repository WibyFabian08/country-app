<template>
  <div class="p-5 rounded-md shadow border-border-100">
    <h5 class="mb-3 text-lg font-normal">
      Capital : <span class="font-medium">{{ country.capital[0] }}</span>
    </h5>
    <h5 class="mb-3 text-lg font-normal">
      Region : <span class="font-medium">{{ country.region }}</span>
    </h5>
    <h5 class="mb-3 text-lg font-normal">
      Subregion : <span class="font-medium">{{ country.subregion }}</span>
    </h5>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>
