<template>
  <div class="container px-20 mx-auto mt-24">
    <Button @go-back="goBack()" />
    
    <div v-if="country !== null" class="mt-14">
      <div class="flex items-start gap-4">
        <h2 class="mb-2 text-5xl font-bold">{{ country.name.common }}</h2>
        <img
          class="object-contain w-10 h-10"
          :src="country.flags.png"
          alt="flag"
        />
      </div>
      <div class="flex items-center gap-2">
        <Badges
          v-for="altSpell of country.altSpellings"
          :key="altSpell"
          :altSpell="altSpell"
        />
      </div>

      <div class="grid grid-cols-1 gap-5 mt-20 md:grid-cols-2">
        <LatLong :country="country"/>
        <Region :country="country"/>
        <Code :callingCode="callingCode"/>
        <Currency :currencyData="currencyData"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

import Button from "../components/Button.vue"
import Badges from "../components/Badges.vue"
import LatLong from "../components/LatLong.vue"
import Region from "../components/Region.vue"
import Code from "../components/Code.vue"
import Currency from "../components/Currency.vue";

const router = useRouter();
const route = useRoute();

const country = ref(null);
const currencyData = ref(null);
const callingCode = ref(null);

function goBack() {
  router.go(-1);
}

function getCountry(keyword) {
  axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/v3.1/name/${keyword}`)
    .then((res) => {
      for (const key in res.data[0].currencies) {
        currencyData.value = key;
      }

      callingCode.value = `${res.data[0].idd.root}${res.data[0].idd.suffixes[0]}`;
      country.value = res.data[0];
    })
    .catch((_) => {
      country.value = null;
    });
}

onMounted(() => {
  if (route.params.name) {
    getCountry(route.params.name);
  } else {
    country.value = null;
  }
});
</script>
