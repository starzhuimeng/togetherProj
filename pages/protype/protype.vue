<template>
	<view>
		<view>
			<view class="content">
				<view class="content-item" @click="getType(1)">
					<image src="../../static/static-projtype/zhongchou.png"  mode="aspectFill"></image>
					<text class="title">众筹</text>
					<text class="massage">我有望成行的商业项目</text>
				</view>
				<view class="content-item" @click="getType(2)">
					<image src="../../static/static-projtype/gongyi.png"  mode="aspectFill"></image>
					<text class="title">公益</text>
					<text class="massage">日照养老院更新换代</text>
				</view>
				<view class="content-item" @click="getType(3)">
					<image src="../../static/static-projtype/chuangyi.png"  mode="aspectFill"></image>
					<text class="title">创意</text>
					<text class="massage">你的新奇想法塑造成型</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import plate from "../../components/projtype.vue"
	export default {
		data() {
			return {
				proType:""	
				
			}
		},
		onLoad() {

		},
		methods: {
			getType(type){
				this.proType = type
				uni.navigateTo({
					url:"../sponso/sponsor?proType="+this.proType
				})
			}
		},
		components:{
			plate:plate
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		align-content: space-around;
	}
	.content-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50upx 0upx;
	}
</style>
