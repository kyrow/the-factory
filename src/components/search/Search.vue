<script setup>
import { ref } from 'vue';
import api from '@/api/http'
import SearchIcon from '@/assets/SearchIcon.vue'

const searchText = ref()
const emits = defineEmits(['onItems'])

const searchPhoto = async () => {

	try {
		const { data } = await api.get('/search/photos', { params: { query: searchText.value } })
		const items = data.results.slice(0, 9)
		emits('onItems', items)
	}

	catch (e) {
		console.log(e)
	}

}
</script>

<template>
	<div :class="$style.background">
		<div :class="$style.searchSpace">
			<input :class="$style.input" placeholder="Поиск" v-model="searchText" @keyup.enter="searchPhoto" />
			<button :class="$style.button" @click="searchPhoto">
				<SearchIcon />
			</button>
		</div>
	</div>
</template>

<style module>
.background {
	height: 250px;
	background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/headerBg.png');
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 16px solid #C4C4C4;

}

.searchSpace {
	position: relative;
}

.input {

	@media (min-width:320px) {
		width: 80%;
	}


	@media (min-width:720px) {
		width: 500px;
	}

	@media (min-width:1024px) {
		width: 700px;
	}

	height: 70px;
	padding-left: 40px;
	font-size: 24px;
	font-style: normal;
	font-weight: 300;
}

.button {
	height: 100%;
	position: absolute;
	right: 10px;
	background-color: #fff;
	border: none;
	outline: none;

	:hover {
		transform: rotate(-30deg);
		transition: all 0.5s;
	}
}
</style>