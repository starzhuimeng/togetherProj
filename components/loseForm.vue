<template>
	<view>
		<view class="content">
			<view class="form-item">
				<label>手机号:</label>
				<input id="phone" type="text" v-model="phone" value="" placeholder="请输入您的手机号" />
				<view @click="putPhoneCode" id="" class="vcodebtn">
					{{phoneCodeVal}}
				</view>
			</view>
			<view class="form-item">
				<label>新密码:</label>
				<input id="pass" type="text" v-model="pass" value="" placeholder="请输入您的密码" />
			</view>
			<view class="form-item">
				<label>验证码:</label>
				<input  type="text" v-model="phonecode" value="" placeholder="请输入获取的验证码" />
				
			</view>
		</view>
		<view class="btn">
			<button @click="complate" type="primary">完成</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:"",//手机号inputValue
				pass:"",//密码inputValue
				phonecode:"",//手机验证码inputValue
				phoneCodeVal:"获取验证码"
			};
		},
		methods:{
			login(){//用户点击登录调用login方法
			//1.发送post请求，参数为以上input中的value
				uni.request({
					method:"POST",
					url:"",
					data:{
						phone:this.phone,
						pass:this.pass,
						phonecode:this.phonecode
					},
					success(val) {
						console.log(val)
					},
					fail(e) {
						console.log(e)
					}
				})
			},
			putPhoneCode(){
				uni.request({
					method:"GET",
					url:this.$global.serverPath+"/yiqiba/PhoneVerify",
					data:{
						account:this.uname
					},
					success: (req) => {
						console.log(req.data)
						var second = 60
						var timer = setInterval(()=>{
							if(second > 0){
								second -= 1
								this.phoneCodeVal = second + "s"
								console.log(second)
							}else{
								this.phoneCodeVal = "重新发送"
								clearInterval(timer)
							}
							
							
						},1000)
					},
					fail: (req) => {
						console.log(req)
						uni.showToast({
							title: '发送失败，请重新发送',
							icon:'none',
							success: (e) => {
								this.phoneCodeVal = "重新发送"
							}
						});
					}
				})
			},
			complate(){
				console.log('complate')
			}
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 15px;
	}
	.form-item{
		display: flex;
		align-items: center; 	
		padding: 30upx 10upx;
		flex-direction: row;
		justify-content: space-between;
	}
	.form-item label{
		text-align: center;
		width: 150upx;
		font-size: 30upx;
		color: #666;
	}
	.form-item input{
		color: #666;
		border-bottom: 1px solid #ccc;
		flex: 8;
		padding: 5upx 20upx;
		
		font-size: 30upx;
	}
	.vcodebtn{
		flex: 4;
		border: 1upx solid #666;
		font-size: 24upx;
		color: #666;
		padding: 10upx 0upx;
		text-align: center;
	}
	.btn{
		margin: 40upx;
	}
</style>
