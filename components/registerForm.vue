<template>
	<view>
		<view class="content">
			<view class="form-item">
				<label>昵&nbsp;&nbsp;&nbsp;&nbsp;称:</label>
				<input id="phone" type="text" v-model="uname" maxlength="16" value="" placeholder="请输入您的称呼" />
				
			</view>
			<view class="form-item">
				<label>手机号:</label>
				<input id="pass" type="number" v-model="phone" maxlength="11" value="" placeholder="请输入您的手机号" />
				<view @click.once="putPhoneCode" id="" class="vcodebtn">
					{{phoneCodeVal}}
				</view>
			</view>
			<view class="form-item">
				<label>验证码:</label>
				<input class="phone" type="number" maxlength="6" v-model="pnonecode" value="" placeholder="请输入获取的验证码" />
				
			</view>
			<view class="form-item">
				<label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
				<input class="phone" type="text" v-model="pass" value="" placeholder="请输入您的密码" />
				
			</view>
			<view class="form-item">
				<label>验证码:</label>
				<input  type="text" v-model="vcode" value="" placeholder="请输入图上的验证码" />
				<view @click="changeVcode" class="vcode">
					<image v-bind:src="vcodeUrl" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
		</view>
		<view class="btn">
			<button @click="complate" type="primary">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname:"",
				phone:"",//手机号inputValue
				pass:"",//密码inputValue
				vcode:"",//验证码inputValue
				phonecode:"",//手机验证码
				vcodeUrl:this.$global.serverPath+"/yiqiba/getVerify?id="+this.id,
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
						vcode:this.vcode,
						
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
							success: (e) => {
								this.phoneCodeVal = "重新发送"
							}
						});
					}
				})
			},
			complate(){
				uni.request({
					method:"GET",
					url:this.$global.serverPath + "/yiqiba/reg",
					data:{
						usersData:{
							
						}
					},
					success: (req) => {
						console.log(req)
					},
					fail: (req) => {
						console.log(req)
					}
				})
			},
			changeVcode(){
				var id = this.id+1;
				this.vcodeUrl += id;
			},
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
	.vcode{
		width: 100upx;
		height: 50upx;
	}
	
	.btn{
		margin: 40upx;
	}
</style>
