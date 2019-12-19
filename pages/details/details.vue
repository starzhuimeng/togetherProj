<template>
	<view>
		<!-- 项目详情页 -->
		<view class="show-page">
			<!-- 项目展示图 -->
			<image style="width: 100%;" src="../../static/bg_index.jpg" mode="widthFix"></image>
			<!-- 展示用户信息的行，其中包括项目名称，项目类型标签 -->
			<div class="infobox">
				<text>他乡遇见你</text>
				<view class="tabs">
					<view class="tab" v-for="item in tabs" >
						{{item}}
					</view>
				</view>
				<!-- 项目用户信息，包含头像和文本 -->
				<view class="info">
					<image :src="icon" mode="" class="img"></image>
					<text style="margin-left: 20upx;">{{title}}</text>
				</view>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs:["餐饮","热门"],//项目类型标签
				icon:"../../static/touxiang.jpeg",//用户头像路径
				title:"长沙小吃"
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.infobox{
	padding: 20upx;
}
.tabs{
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 10upx;
}
.tab{
	padding: 5upx 15upx;
	font-size: 8upx;
	background-color: #eee;
	color: #ccc;
	border-radius: 30upx;
	margin-right: 20upx;
}
.info{
	margin-top: 20upx;
	display: flex;
	align-items: center;
	color: #999;
}
.img{
	width: 100upx;
	height: 100upx;
	overflow: hidden;
	border-radius: 50%;
	border: 1upx solid #fff;
}
</style>
