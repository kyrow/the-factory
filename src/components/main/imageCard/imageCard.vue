<script setup>

const props = defineProps({
	item: Object
})
</script>

<template>
	<div :class="$style.container">
		<img :class="$style.image" :src="item.urls.small" alt="3">
	</div>
</template>

<style module>
.container {

	@media (min-width:320px) {

		width: 100%;
		height: 280px;
	}

	@media (min-width:720px) {

		width: 48%;
		height: 300px;
	}

	@media (min-width:1024px) {

		width: 320px;
		height: 270px;
	}

	margin-top: 17px;
	cursor: pointer;

	:hover {
		transform: translateY(-8px);
		transition: all 0.3s;
	}
}

.image {
	border-radius: 8px;
	width: 100%;
	height: 100%;
	object-fit: cover;

}
</style>