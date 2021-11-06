<script setup>
import { ref, computed } from 'vue'
import Static from './components/static.vue'
import Dynamic from './components/dynamic.vue'

const size = ref(20)

const style = computed(() => {
	return {
		'--size': size.value + 'px'
	}
})

const tick = () => {
	size.value++
	if (size.value > 500) size.value = 20
	requestAnimationFrame(tick)
}
requestAnimationFrame(tick)
</script>

<template>
<div class="container" :style="style">
	<Dynamic v-for="x of Array(250)"/>
</div>

</template>
<style>
.container {
	display: flex;
	flex-wrap: wrap;
}
</style>
