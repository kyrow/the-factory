<script setup>
import Logo from '../../assets/Logo.vue';
import FavoriteWhite from '../../assets/FavoriteWhite.vue'
</script>
<template>
	<header :class="$style.header">
		<div :class="$style.container">

			<router-link to="/">
				<Logo />
			</router-link>

			<router-link to="/favorite">
				<button :class="$style.button">
					<FavoriteWhite />
					<span>Избранное</span>
				</button>
			</router-link>
		</div>
	</header>
</template>

<style module>
.header {
	background-color: #000;
	height: 150px;
}

.container {

	@media (min-width:320px) {
		width: 90%;
	}

	@media (min-width:720px) {
		width: 80%;
	}

	@media (min-width:1024px) {
		width: 1024px;
	}

	height: 100%;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.button {
	cursor: pointer;
	border: none;
	width: 120px;
	background-color: #000;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>