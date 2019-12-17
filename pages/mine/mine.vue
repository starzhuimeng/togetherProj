<template>
	<view style="background-color: #ddd;overflow: hidden;">
		<view >
			<view class="title">
				<text class="login">
					<navigator style="color: white;font-size: 48upx;font-weight: 500;" url="../login/login">登录 · 注册</navigator>
				</text>
				<text class="reuser" style="color: white; font-size: 30upx;position: relative;top: -30upx;">
					<navigator url="../login/login">切换用户</navigator>
				</text>
			</view>
			<view class="middle">
				<view class="first" style="color: #999;">
					<navigator url="#" style="flex: 10;">关注</navigator> <text style="flex: 1;">|</text> <navigator style="flex: 10;" url="#" >粉丝</navigator>
				</view>
				<view class="second">
					<image src="../../static/touxiang.jpeg" style="width: 200upx; height: 200upx; overflow: hidden;border-radius: 50%; position: absolute;right: 60upx;top: -100upx;" mode=""></image>
					<text style="line-height: 280upx;position: relative;left: 165upx;font-size: 30upx;">个人信息</text>
				</view>
			</view>
			<view class="mine-list">
				<view class="list-item" v-for="item in list">
					{{item}}
					<text class="sanjiao">▲</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					"我发布的项目",
					"我支持的项目",
					"我关注的项目",
					"我参与的项目",
					"项目资金",
					"个人资产"
					]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.title{
	width: 750upx;
	height: 260upx;
	background-color: #007AFF;
	display: flex;
	align-items: center;
	align-content: space-between;
}
.login{
	flex: 5;
	text-align: center;
}
.reuser{
	flex: 4;
	text-align: center;
}
.middle{
	height: 200upx;
	display: flex;
	flex-direction: row;
	align-content: space-between;
	align-items: center;
	background-color: white;
}
.first{
	flex: 3;
	display: flex;
	flex-direction: row;
	text-align: center;
}
.second{
	flex: 3;
	position: relative;
	height: 100%;
}
.mine-list{
	margin-top: 15upx;
	height: 700upx;
	padding: 30upx;
	background-color: white;
}
.list-item{
	padding: 20upx;
}
.sanjiao{
	float: right;
	transform: rotate(90deg);
}
</style>
