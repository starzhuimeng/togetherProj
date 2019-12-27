<template>
	<view class="" style="width: 750upx;background: url('../../static/login_bg.png') center bottom;height: 100vh; background-size: 100vw 100vh;">
		
		<!-- 登录页头部开始 -->
		<text class="title">一起吧</text>
		<!-- 登录页头部结束 -->
		
		<!-- 登录页主体开始 -->
		<view class="fixed">
			<view class="form-item">
					<label class="label">用户名:</label>
					<input class="input" maxlength="11" type="number" v-model="phone" value="" placeholder="请输入您的手机号" />
			</view>
			<view class="form-item">
				<label class="label">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
				<input class="input" type="text" maxlength="16" password="true" v-model="pass" value="" placeholder="请输入您的密码" />
			</view>
			<view class="form-item">
				<label class="label">验证码:</label>
				<input class="input" maxlength="4" type="text" v-model="vcode" value="" placeholder="请输入图上的验证码" />
				<view @click="changeVcode" class="vcode">
					<image v-bind:src="vcodeUrl" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
			
			<view class="btn">
				<button @click="login()" type="primary">登录</button>
			</view>
		</view>
		<!-- 登录页主体结束 -->
		
		<!-- 登录页底部开始 -->
		<view class="btns-wrap" id="btns">
			<view @click="toRegisterPage">注册</view>
			<view>|</view>
			<view @click="toLosePage">忘记密码</view>
		</view>
		<!-- 登录页底部结束 -->
	</view>
</template>

<script>
	import global from "../../global.js"
	export default {
		data() {
			return {
				id:0,//验证码id，用户点击验证码时id+1，数据改变时重新渲染
				phone:"",//手机号inputValue
				pass:"",//密码inputValue
				vcode:"",//验证码inputValue
				vcodeUrl:this.$global.serverPath+"/yiqiba/getVerify?id="+this.id,//验证码请求路径，服务器地址+接口+id
				isVcode:false
			}
		},
		onLoad(option) {
			//console.log(this.$global.account)//测试访问global中的account
		},
		methods: {
			//跳转至注册页
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
			//跳转至忘记密码页
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
			},
			//
			login(){//用户点击登录调用login方法
				// 检查验证码是否正确
				uni.request({
					url:this.$global.serverPath+"/yiqiba/checkVerify",
					method:"GET",
					data:{
						inputStr:this.vcode
					},
					success:res => {
						// console.log(res)
						
						if(!res.data){
							uni.showToast({
								title: '验证码错误',
								icon:"none",
								complete() {
									return false
								}
							});
						}
						this.isVcode = res.data
						
					}
				})
				uni.request({
					method:"GET",
					url:this.$global.serverPath+"/yiqiba/login",
					dataType:"json",
					data:{
						account:this.phone,
						upass:this.pass,
					},
					success:res => {
						if(res.data){
							if(this.isVcode){
								uni.showToast({
									icon:"none",
									title:"登录成功",
									duration:1500,
									complete:res => {
										console.log("进入主页")
										// console.log(this.phone)
										global.account = this.phone
										// console.log(global.account)
										uni.switchTab({
											url:"../index/index"
										})
										
									}
									
								})
							}
						}else{
							uni.showToast({
								title: '用户名或密码错'
							});
							return false
						}
						// this.$global.account = this.account
						
					},
					fail(res) {
						uni.showToast({
							icon:"none",
							title:"faild",
							duration:1500
						})
					}
				})
				
			},
			changeVcode(){
				var id = this.id+1;
				this.vcodeUrl += id;
			},
			complate(){
				
			}
			
		},
		components:{
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		padding: 50upx;
	}
	.title{
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translateX(-50%);
		color: white;
		font-size: 100upx;
	}
	.fixed{
		width: 750upx;
		position: absolute;
		top: 60%;
		transform: translateY(-50%);
	}
	.form-item{
		display: flex;
		align-items: center; 	
		padding: 30upx 10upx;
		flex-direction: row;
		justify-content: space-between;
		align-content: center;
	}
	.label{
		text-align: center;
		width: 150upx;
		font-size: 30upx;
		color: #666;
	}
	.input{
		color: #666;
		border-bottom: 1px solid #ccc;
		flex: 8;
		padding: 5upx 20upx;
		
		font-size: 30upx;
	}
	.vcode{
		width: 160upx;
		height: 80upx;
	}
	.loginbtn{
		width: 100%;
	}
	.btn{
		margin: 40upx;
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
