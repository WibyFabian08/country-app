<template>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <h1 class="mb-10 font-bold text-7xl">Country</h1>

    <InputText v-model:keyword="keyword" /> 

    <div v-if="countries.length > 0" style="width: 700px" class="mt-3 shadow">
      <div v-if="isLoading">Loading...</div>
      <div v-else>
        <div v-for="country of countries" :key="country.name.common">
          <router-link :to="{ name: 'detail', params: { name: country.name.common } }">
            <div class="py-4 cursor-pointer hover:bg-background-300">
              <p class="px-4 text-sm font-normal text-black">
                {{ country.name.common }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div v-if="isNotFound" style="width: 700px">
      <div
        class="flex items-start justify-start w-full py-4 cursor-pointer hover:bg-border-100"
      >
        <p class="px-4 text-sm font-normal text-error-100">Data not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import axios from "axios";

import InputText from "../components/InputText.vue"

const keyword = ref("");
const countries = ref([]);
const isLoading = ref(false);
const isNotFound = ref(false);

function getCountries(keyword) {
  isLoading.value = true;
  axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/v3.1/name/${keyword}`)
    .then((res) => {
      if (res.data.length > 5) {
        countries.value = res.data.slice(0, 5);
        isLoading.value = false;
        isNotFound.value = false;
      } else {
        isLoading.value = false;
        isNotFound.value = false;
        countries.value = res.data;
      }
    })
    .catch((_) => {
      countries.value = [];
      isLoading.value = false;
      isNotFound.value = true;
    });
}

watch(keyword, (value) => {
  if (value.length > 2) {
    getCountries(value)
  } else {
    countries.value = [];
    isNotFound.value = false;
  }
});
</script>
