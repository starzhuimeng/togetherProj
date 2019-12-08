<!-- 模板 -->
<template>
	<view>
		<view class="content">
			<!-- 上部分 -->
			<nav class="upper">
			
			</nav>
			<!-- 下部分 -->
			<nav class="bottom">
				<nav class="lower_top">
					<p>他乡遇见你:把长沙的小吃做成礼物送给你(项目名称)</p>
				</nav>
				<nav class="lower_below">
					<p>已筹&nbsp;￥56,100,00&nbsp;&nbsp;·&nbsp;&nbsp;参股占比&nbsp;3%</p>
				</nav>
			</nav>
		</view>
	</view>
</template>
<!-- 业务逻辑 -->
<script>
	export default {
		data() {
			return {
				
			};
			
		}
	}
</script>
<!-- 样式 -->
<style>
	.content{
		height: 532upx;
		width: 750upx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}
	.upper{
		flex:6;
		background:#808080;
	}
	.bottom{
		flex:4;
		padding:12upx 26upx;
		display: flex;
		flex-direction: column;
	}
	.lower_top{
		font-size: 40upx;
		flex: 2;
		
		font-family: 楷书;
	}
	.lower_below{
		font-size: 35upx;
		flex: 1;
		color: #999;
		padding-top: 25upx;
	}
	
	

</style>
