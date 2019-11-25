<template>
	<view class="content">
		<loginform></loginform>
		<view class="btns-wrap" id="btns">
			<view @click="toRegisterPage">注册</view>
			<view>|</view>
			<view @click="toLosePage">忘记密码</view>
		</view>
		
	</view>
</template>

<script>
	import loginForm from "../../components/loginForm.vue"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toRegisterPage(e){
				uni.navigateTo({
					url:"../register/register",
					success(e) {
						console.log("success"+e)
					},
					fail(e) {
						console.log("fail"+e)
					}
					
				})
			},
			toLosePage(e){
				uni.navigateTo({
					url:"../losepass/losepass",
					success(e) {
						console.log("success"+e)
					},
					fail(e) {
						console.log("fail"+e)
					}
					
				})
			}
			
		},
		components:{
			loginform:loginForm,
		}
	}
</script>

<style>
	.content{
		
	}
	.btns-wrap{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-size: 30upx;
		color: #666;
	}
	.btns-wrap view{
		text-align: center;
	}
	.btns-wrap view:nth-child(1){
		flex: 4;
	}
	.btns-wrap view:nth-child(2){
		flex: 2;
	}
	.btns-wrap view:nth-child(3){
		flex: 4;
	}
	#btns{
		position: fixed;
		bottom: 0upx;
		width: 100%;
		padding-bottom: 30upx;
	}
</style>
