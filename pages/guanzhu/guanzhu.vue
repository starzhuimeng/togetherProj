<template>
	<view>
		<!-- 我关注的项目页面 -->
		<view class="content">
			<view class="proj-item" v-for="(item,index) of proInfo" @click="toProPage(proInfo[index].url)">
				<image class="pro-image" :src="proInfo[index].imagePath" mode=""></image>
				<text class="pro-title">{{proInfo[index].title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proInfo:[
					{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					},{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					},{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					},{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					},{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					},{
						imagePath:"../../static/logo.png",
						title:"测试用的项目名",
						url:"#"
					}
				]
			}
		},
		methods: {
			toProPage(url){
				uni.navigateTo({
					url:url+"?account="+this.$global.account,
					success() {
						uni.showToast({
							title: '跳转成功',
							icon:"none"
						});
					},
					fail() {
						uni.showToast({
							title:"跳转失败",
							icon:"none"
						})
					},
					animationDuration:300,
					
					
				})
			}
		},
		//页面加载的生命周期函数，此函数在页面渲染之前执行
		onLoad() {
			uni.request({
				method:"GET",//请求方式
				url:"",//请求地址
				data:{
					//发送到服务器的数据
				},
				success(res) {
					//请求成功后的回调函数，res==response
					
					//调用原生消息提醒，title:提示消息，icon:提示附带的图标，默认success
					uni.showToast({
						title:"请求成功",
						icon:"none"
					})
					
					//将得到的数据放到数据模板proInfo中，利用vue的双向数据绑定完成数据更新
					this.proInfo = res.data;
				},
				fail(res) {
					//请求失败后的回调函数，res响应服务器错误信息
					
					uni.showToast({
						title:"请求失败",
						icon:"none"
					})
				}
				
			})
		}
	}
</script>

<style>
.content{
	/* margin: 40upx 0upx; */
	padding:0upx 40upx;
	padding-bottom: 40upx;
}
.proj-item{
	display: flex;
	margin-top: 40upx;
	flex-direction: row;
	padding-bottom: 40upx;
	border-bottom:1upx solid #000000;
	align-items: center;
}
.pro-image{
	height: 150upx;
	background-color: #000000;
	flex: 1;
}
.pro-title{
	flex: 2;
	padding-left: 40upx;
	font-size: 60upx;
	color: #000000;
}
</style>
