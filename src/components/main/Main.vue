<script setup>
import { onMounted, ref } from 'vue';
import ImageCard from './imageCard/imageCard.vue';
import api from '@/api/http.js'

const props = defineProps({
	items: Array
})

const defaultPictures = ref([])

const displayItems = async () => {
	const { data } = await api.get('/photos', { params: { per_page: 9 } })
	defaultPictures.value = data
}

onMounted(async () => {
	await displayItems()
})



</script>

<template>
	<div :class="$style.container" v-if="props.items.length == 0">

		<ImageCard :item="item" v-for="item of defaultPictures" :key="item.id"
			@click="$router.push(`/photopage/${item.id}`)" />
	</div>
	<div :class="$style.container" v-else>
		<ImageCard :item="item" v-for="item of items" :key="item.id" @click="$router.push(`/photopage/${item.id}`)" />
	</div>
</template>




<style module>
.container {
	@media (min-width:320px) {
		width: 90%;
	}

	@media (min-width:720px) {
		width: 90%;
	}

	@media (min-width:1024px) {
		width: 1024px;
	}

	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
</style>