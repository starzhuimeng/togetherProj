<template>
	<view>
		<!-- 我参与的项目页面 -->
		<view class="content">
			
			<!-- 通过列表渲染加载组件，请求时附带用户唯一标识，需要的数据有项目展示的image，项目标题title，项目详情页url -->
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
				//用于列表渲染的数据模板 
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
			/**
			 * 用户点击项目列表中的某项时，跳转到对应详情页details，参数url是对			  * 应的url地址
			 * */
			toProPage(url){
				//保留当前页面跳转
				uni.navigateTo({
					url:url+"?account="+this.$global.account,
					success() {
						//如果跳转成功则给出提示‘跳转成功’(测试用)
						uni.showToast({
							title: '跳转成功',
							icon:"none"
						});
					},
					fail() {
						//如果跳转失败则给出提示‘跳转失败’(测试用)
						uni.showToast({
							title:"跳转失败",
							icon:"none"
						})
					},
					//设置切换动画时长为300ms
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
