<template>
	<view style="background-color: #ddd;overflow: hidden;">
		<view >
			<view class="title">
				<text class="login" @click="login">
					<text style="color: white;font-size: 48upx;font-weight: 500;" >{{nickname}}</text>
				</text>
				<text @click="login()" class="reuser" style="color: white; font-size: 30upx;position: relative;top: 0upx;">
					<text>切换用户</text>
				</text>
			</view>
			<view class="middle">
				<view class="first" style="color: #999;">
					<navigator url="#" style="flex: 10;">关注</navigator> <text style="flex: 1;">|</text> <navigator style="flex: 10;" url="#" >粉丝</navigator>
				</view>
				<view class="second">
					<image src="../../static/touxiang.jpeg" style="width: 200upx; height: 200upx; overflow: hidden;border-radius: 50%; position: absolute;right: 60upx;top: -100upx;" mode=""></image>
					<text style="line-height: 280upx;position: relative;left: 165upx;font-size: 30upx;" @click="toUserInfo">个人信息</text>
				</view>
			</view>
			<view class="mine-list">
				<view class="list-item" v-for="item in list">
					<navigator class="nav" animation-duration="200" :url="item.path" open-type="navigate">{{item.msg}}</navigator>
					<text class="sanjiao">▲</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import global from "../../global.js"
	export default {
		
		data() {
			return {
				account:"",
				nickname:"",
				userInfo:{
					
				},
				list:[
					{
						msg:"我发布的项目",
						path:"../fabu/fabu"
					},
					{
						msg:"我支持的项目",
						path:"../choice/choice"
					},
					{
						msg:"我关注的项目",
						path:"../guanzhu/guanzhu"
					},
					{
						msg:"我参与的项目",
						path:"../canyu/canyu"
					},
					{
						msg:"项目资金",
						path:"../choice/choice"
					},
					{
						msg:"个人资产",
						path:"../userzichan/userzichan"
					}
					]
			}
		},
		onLoad() {
			this.account = global.account
			
			uni.request({
				url:global.serverPath+"/yiqiba/User/PersonInfo",
				method:"GET",
				data:{
					account:this.account
				},
				success:res => {
					global.userInfo = res.data
					this.nickname = res.data.nickname
				}
			})
			this.userInfo = global.userInfo
		},
		methods: {
			login:event =>{
				uni.navigateTo({
					url:"../login/login",
					success: (e) => {
						console.log(e+"suc")
					}
					
				})
			},
			toUserInfo(){
				uni.navigateTo({
					url:"../userInfo/userInfo",
					animationDuration:200
				})
			}
		}
	}
</script>

<style>
.title{
	width: 750upx;
	height: 320upx;
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
	vertical-align: middle;
	display: flex;
	flex-direction: row;
	align-content: space-between;
}
.nav{
	flex: 9;
}
.sanjiao{
	
	transform: rotate(90deg);
}
</style>
