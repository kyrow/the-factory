<script setup>
import { onMounted, ref } from 'vue'
import { useFavorite } from '@/composables/favorite.js'
import Header from '@/components/header/Header.vue'
const favorite = useFavorite()
const items = ref([])

onMounted(async () => {
	items.value = await favorite.getItemsFromFavorites()
})


</script>


<template>
	<div>
		<Header />
		<div :class="$style.container">
			<span :class="$style.title">Favorites</span>
			<div :class="$style.itemList">
				<div v-for="item in items" :class="$style.itemContainer">
					<img :class="$style.itemPicture" :src="item.urls.small" alt="">
					<div :class="$style.itemDescription">
						<span>Author: {{ item.user.name }}</span>
						<span>Description: {{ item.description }}</span>
						<span>Total downloads: {{ item.downloads }}</span>
						<span>Total likes: {{ item.likes }}</span>
					</div>
				</div>
			</div>
		</div>



	</div>
</template>

<style module>
.container {
	padding-top: 50px;
	margin: auto;

	@media (min-width:320px) {
		width: 90%;
	}

	@media (min-width:720px) {
		width: 80%;
	}

	@media (min-width:1024px) {
		width: 1024px;
	}
}

.title {
	font-size: 50px;
}

.itemList {
	display: flex;
	flex-direction: column;

	margin-top: 50px;
}

.itemContainer {
	display: flex;

	padding-bottom: 20px;

	@media (min-width:320px) {
		width: 90%;

	}

	@media (min-width:320px) {
		width: 90%;

	}
}

.itemPicture {

	@media (min-width:320px) {
		width: 150px;
		height: 150px;

	}

	@media (min-width:720px) {
		width: 250px;
		height: 250px;

	}

	@media (min-width:10240px) {
		width: 300px;
		height: 300px;

	}
}

.itemDescription {

	display: flex;
	flex-direction: column;

	@media (min-width:320px) {
		padding-left: 10px;
		font-size: 14px;
	}

	@media (min-width:720px) {
		padding-left: 20px;
		font-size: 24px;

	}
}
</style>



