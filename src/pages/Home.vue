<script setup>
import Header from '@/components/header/Header.vue';
import Search from '@/components/search/Search.vue';
import Main from '@/components/main/Main.vue';
import { ref } from 'vue';

const items = ref([])

const getItems = (data) => {
	items.value = data
}
</script>

<template>
	<Header />
	<Search @onItems="getItems" />
	<Main :items="items" />
</template>


