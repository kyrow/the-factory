<script setup>
import { useRoute } from 'vue-router';
import api from '@/api/http.js'
import { ref, onMounted } from 'vue';
import Favorite from '@/assets/Favorite.vue'
import Download from '@/assets/Download.vue'
import { useFavorite } from '../../composables/favorite';

const route = useRoute()
const id = route.params.id
const picture = ref()

const getPhoto = async () => {
	const { data } = await api.get('/photos/' + id)
	picture.value = data
}


onMounted(async () => {
	await getPhoto()
})
const favorite = useFavorite()
const addToFavorite = (id) => {
	favorite.addToFavorite(id)
}

</script>

<template>
	<div :class="$style.container" v-if="picture">
		<span :class="$style.background" :style="{ background: ' url(' + picture.urls.regular + ')' }"></span>
		<div :class="$style.infoBlock">

			<div :class="$style.authorInfo">
				<img :class="$style.authorAvatar" :src=picture.user.profile_image.medium alt="profilePicture">
				<div :class="$style.authorInfoContact">
					<span>{{ picture.user.name }}</span>
					<span>@{{ picture.user.instagram_username }}</span>
				</div>
			</div>

			<div :class="$style.buttons">
				<button :class="$style.FavoriteBtn" @click="addToFavorite(picture.id)">
					<Favorite :class="$style.icon" />
				</button>
				<button :class="$style.DownloadBtn">
					<Download />
					<span>Download</span>
				</button>
			</div>
		</div>
		<img :class="$style.picture" :src=picture.urls.full alt="">
	</div>
</template>

<style module lang="scss">
.container {

	@media (min-width:320px) {
		height: 300px;
	}

	@media (min-width:720px) {
		height: 450px;
	}

	@media (min-width:1024px) {
		height: 600px;
	}

	position: relative;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.background {
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-size: cover;
	filter: grayscale(100%);
}

.infoBlock {

	@media (min-width:320px) {
		width: 90%;
	}

	@media (min-width:720px) {
		width: 80%;
	}

	@media (min-width:1024px) {
		width: 1024px;
	}

	z-index: 1;

	height: 55px;
	margin: 50px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;


}

.authorInfo {
	height: 100%;
	display: flex;
}

.authorAvatar {
	width: 55px;
	height: 55px;
	border: 1px solid #fff;
}

.authorInfoContact {
	@media (min-width:320px) {
		font-size: 10px;
	}

	@media (min-width:720px) {
		font-size: 14px;
	}

	@media (min-width:1024px) {
		font-size: 18px;
	}

	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: #F2F2F2;

	padding-left: 10px;

	:first-child {
		@media (min-width:320px) {
			font-size: 14px;
		}

		@media (min-width:720px) {
			font-size: 20px;
		}

		@media (min-width:1024px) {
			font-size: 30px;
		}

	}
}

.picture {


	@media (min-width:320px) {
		width: 90%;
		height: 300px;
	}


	@media (min-width:720px) {
		width: 80%;
		height: 450px;
	}

	@media (min-width:1024px) {
		width: 1024px;
		height: 600px;
	}

	object-fit: cover;
	z-index: 2;
	padding-bottom: 100px;
}

.buttons {
	display: flex;
}


.FavoriteBtn {
	cursor: pointer;
	height: 55px;
	width: 55px;
	border: none;
	color: #000;
	background-color: #fff;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
}

.DownloadBtn {
	cursor: pointer;
	height: 55px;
	padding: 0 15px;
	border: none;
	color: #000;
	background-color: #FFF200;
	border-radius: 8px;
	display: flex;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	align-items: center;
	justify-content: space-around;

	@media (min-width:320px) {
		span {
			display: none;
		}
	}

	@media (min-width:720px) {
		span {
			padding-left: 10px;
			display: block;
		}
	}
}
</style>