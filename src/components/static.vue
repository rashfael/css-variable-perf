<script setup>
import { ref } from 'vue'

defineProps({
	msg: String
})

const count = ref(0)
</script>
<template>
<div class="static">

</div>
</template>
<style>
.static {
	background-color: red;
	width: var(--size);
	height: var(--size);
}
</style>
