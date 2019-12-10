<template>
	<view>
		<view class="content">
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
		
		<view class="btns">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				phone:"",//手机号inputValue
				pass:"",//密码inputValue
				vcode:"",//验证码inputValue
				vcodeUrl:this.$global.serverPath+"/yiqiba/getVerify?id="+this.id
			};
		},
		methods:{
			login(){//用户点击登录调用login方法
			//1.发送post请求，参数为以上input中的value
				uni.request({
					method:"GET",
					url:this.$global.serverPath+"/yiqiba/login",
					dataType:"json",
					data:{
						account:this.phone,
						upass:this.pass,
					},
					success(val) {
						uni.showToast({
							icon:"none",
							title:"success",
							duration:1500
						})
					},
					fail(e) {
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
		computed:{
			
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		padding: 50upx;
	}
	.form-item{
		display: flex;
		align-items: center; 	
		padding: 30upx 10upx;
		flex-direction: row;
		justify-content: space-between;
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
</style>
