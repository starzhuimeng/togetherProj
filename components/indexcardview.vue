<template>
	<view>
		<view class="content">
			<view class="bg">
				<view class="user">
					
				</view>
			</view>
			<view class="line">
				
			</view>
			<view class="info">
				
			</view>
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
		width: 690upx;
		height: 360upx;
		margin: 0 auto;
		background-color: #0077AA;
		margin-bottom: 30upx;
		display: flex;
		flex-direction: column;
		border-radius: 10upx;
		overflow: hidden;
	}
	.bg{
		display: flex;
		flex: 7;
		background: #4CD964;
		flex-direction: column;
		align-content: flex-end ;
		position: relative;
	}
	.user{
		position: absolute;
		bottom: 0upx;
		background: #0077AA;
		height: 20%;
		width: 100%;
	}
	.line{
		height: 10upx;
		background: #333333;
	}
	.info{
		flex: 2;
		background: #f40;
	}
</style>
