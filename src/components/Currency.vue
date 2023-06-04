<template>
    <div class="">
          <h5 class="mb-3 text-lg font-medium">Currency</h5>
          <h2 class="mb-2 text-5xl font-bold text-primary-100">
            {{ currencyData }}
          </h2>
          <h5 class="mb-3 text-sm font-medium">
            <span class="underline text-primary-100">1 country</span> with this
            currency
          </h5>
        </div>
</template>

<script setup>
defineProps({
    currencyData: {
    type: String,
    required: true,
    default: {},
  },
});
</script>