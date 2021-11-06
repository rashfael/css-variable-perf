<script setup>
import { ref, computed, onMounted } from 'vue'
import { registerHandler } from '../requestAnimationFrameMuxxer.js'

const size = ref()

const style = computed(() => {
	return {
		'--_size': size.value
	}
})

const el = ref()

const readStyles = () => {
	size.value = getComputedStyle(el.value).getPropertyValue('--size')
}

onMounted(() => {
	registerHandler(readStyles)
})
</script>
<template>
<div ref="el" class="dynamic" :style="style">
</div>
</template>
<style>
.dynamic {
	background-color: red;
	width: var(--_size);
	height: var(--_size);
}
</style>
