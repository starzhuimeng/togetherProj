<template>
	<view>
		<view class="content">
			<view class="tab">
				<view class="tab-item">
					<cover-image src="../../static/tab-icons/home.png" style="width: 100%;height: 65upx;"></cover-image>
					<text>首页</text>
				</view>
				<view class="tab-item">
					<cover-image src="../../static/tab-icons/play-circle-fill.png" style="width: 100%;height: 65upx;"></cover-image>
					<text>动态</text>
				</view>
				<view class="tab-item">
					<view class="addBtn">+</view>
				</view>
				<view class="tab-item">
					<cover-image src="../../static/tab-icons/xiaoxi.png" style="width: 100%;height: 65upx;"></cover-image>
					<text>消息</text>
				</view>
				<view class="tab-item">
					<cover-image src="../../static/tab-icons/mine.png" style="width: 100%;height: 65upx;"></cover-image>
					<text>我的</text>
				</view>
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
		width: 750upx;
		/* background-color: ; */
	}
	.tab{
		width: 100%;
		height: 120upx;
		display: flex;
		flex-direction: row;
		align-content: space-around;
		box-shadow:0upx -3upx 5upx 3upx #ddd;
	}
	.tab-item{
		flex: 1;
		/* border-top: 2upx solid #ccc; */
		/* background-color: #049ff1; */
		text-align: center;
		box-sizing: border-box;
		vertical-align: middle;
		/* flex-direction: column;
		align-content: center; */
		padding: 10upx 40upx;
		font-size: 18upx;
		color: #8a8a8a;
	}
	.addBtn{
		font-size: 72upx;
		color: white;
		background-color: #049ff1;
		position: absolute;
		width: 100upx;
		height: 100upx;
		text-align: center;
		line-height: 90upx;
		bottom: 150upx;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
	}
	
	
</style>
