<template>
	<view class="content">
		<!-- 用户信息页面 -->
		<view class="theme">
			<view class="theme_cont" style="border-top: 10upx solid #F1F1F1;">
				<view class="put">头像</view>
				<view class="input">{{userInfo.head}}</view>
			</view>
			<view class="theme_cont" style="border-top: 4upx solid #F1F1F1;">
				<view class="put">昵称</view>
				<view class="input">{{userInfo.nickname}}</view>
			</view>
			<view class="theme_cont" style="border-top: 4upx solid #F1F1F1;">
				<view class="put">收货地址管理</view>
				<view class="input">></view>
			</view>
			<view class="theme_cont" style="border-top: 4upx solid #F1F1F1;">
				<view class="put">账号</view>
				<view class="input">{{account}}</view>
			</view>
			<view class="theme_cont" @click="renzheng" style="border-top: 4upx solid #F1F1F1;">
				<view class="put">实名认证</view>
				<view class="input">去认证&nbsp;&nbsp;></view>
			</view>
		</view>
		<view class="surplus">
			<button class="but_style" @click="finish">完成</button>
		</view>
	</view>
</template>

<script>
	import global from "../../global.js"
	export default {
		data() {
			return {
				account:"",
				title: 'Hello',
				userInfo:{}
			}
		},
		onLoad() {
			this.account = global.account
			this.userInfo = global.userInfo
		},
		onShow() {
			console.log("个人信息 show")
			uni.request({
				method:"GET",
				url:global.serverPath+"/yiqiba/User/PersonInfo?account=" + this.account,
				
				success:res => {
					console.log(this.account)
				},
				fail(res) {
					console.log(this.account)
				}
			})
		},
		methods: {
			finish(){
				console.log("finish");
			},
			renzheng(){
				uni.navigateTo({
					url:"../renzheng/renzheng",
					animationDuration:200,
					success(e) {
						uni.showToast({
							title: '跳转成功',
							icon:"none"
						});
					}
				})
			}
		}
		
	}
</script>

<style>
	.theme{
		width: 100%;
		height: 650upx;
		display: flex;
		flex-direction:column;
	}
	.theme_cont{
		flex: 1;
		display: flex;
	}
	.put{
		flex: 1;
		font-size: 35upx;
		color: #808080;
		padding-top: 40upx;
		padding-left: 35upx;
	}
	.input{
		flex:2;
		font-size: 30upx;
		color: #C0C0C0;
		padding-top: 40upx;
		text-align: right;
		padding-right:40upx ;
	}
	.surplus{
		width: 100%;
		height: 600upx;
		background-color: #F1F1F1;
		padding-top: 70upx;
	}
	.but_style{
		width: 660upx;;
		background-color: #007AFF;
		color: #FFFFFF;
	}
</style>
