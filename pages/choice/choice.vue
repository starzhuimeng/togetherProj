<template>
	<view class="content">
		<card></card>
	</view>
</template>
<!-- 
MVVM
 M:model
 V:view
 VM:MVC中的C
 -->
<script>
	import card from "../../components/choice.vue"
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		},
		components:{
			card:card
		}
	}
</script>

<style>
	
</style>
