<template>
	<view>
		
		<view class="content">
			<nav class="module">
				<image src="../../static/static-projtype/众筹.png"></image>
				<br>
				<text class="crowd">众筹</text><br>
				<text class="anno">我有望成行的商业项目</text>
			</nav>
			<nav class="module">
				<image src="../../static/static-projtype/公益.png" ></image><br>
				<text class="crowd" style="color:#DC7004;">公益</text><br>
				<text class="anno">日照养老院更新换代</text>
				</nav>
			<nav class="module">
				<image src="../../static/static-projtype/创意.png" ></image><br>
				<text class="crowd" style="color:#00CE47;">创意</text><br>
				<text class="anno">你的新奇想法塑造成型</text>
				</nav>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.content{
		width: 740upx;
		height: 1240upx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		}
		.module{
			display: block;
			flex: 1;
			text-align: center;
			box-sizing: border-box;
			padding-top: 80upx;
		}
		/* .module_center{
			text-align: center;
			flex: 1;
		}
		.module_below{
			flex: 1;
			text-align: center;
		} */
		.crowd{
			font-size: 40upx;
			color: #E96900;
		}
		.anno{
			font-size: 25upx;
			color: #999;
		}
		image{
			width:150upx;
			height: 150upx;
		}
</style>
