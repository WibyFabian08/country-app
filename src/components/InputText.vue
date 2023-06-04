<template>

<div
      class="flex items-center py-4 border rounded-md px-7 border-border-100 focus:border-red-500"
      :class="{ 'border-primary-100 border-2': keyword.length > 0 }"
      style="width: 700px"
    >
      <input
        placeholder="Type any country name"
        type="text"
        :value="keyword"
        @input="$emit('update:keyword', $event.target.value)"
        class="flex-1 text-gray-400 border-none outline-none text-md focus:outline-none focus:text-gray-400"
      />
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.875 0.75C11.0299 0.75 13.0965 1.60602 14.6202 3.12976C16.144 4.65349 17 6.72012 17 8.875C17 10.8875 16.2625 12.7375 15.05 14.1625L15.3875 14.5H16.375L22.625 20.75L20.75 22.625L14.5 16.375V15.3875L14.1625 15.05C12.6882 16.3085 10.8134 16.9999 8.875 17C6.72012 17 4.65349 16.144 3.12976 14.6202C1.60602 13.0965 0.75 11.0299 0.75 8.875C0.75 6.72012 1.60602 4.65349 3.12976 3.12976C4.65349 1.60602 6.72012 0.75 8.875 0.75ZM8.875 3.25C5.75 3.25 3.25 5.75 3.25 8.875C3.25 12 5.75 14.5 8.875 14.5C12 14.5 14.5 12 14.5 8.875C14.5 5.75 12 3.25 8.875 3.25Z"
          class="fill-border-100"
          :class="{ 'fill-primary-100': keyword.length > 0 }"
        />
      </svg>
    </div>
</template>

<script setup>
defineProps({
    keyword: String
})

defineEmits(
    ["update:keyword"]
)

</script>