<template>
	<view>
		<view class="content">
			<view class="form-item">
				<label>手机号:</label>
				<input id="phone" type="text" v-model="phone" value="" placeholder="请输入您的手机号" />
				<view @click="putVcode" id="vcodebtn" class="">
					获取验证码
				</view>
			</view>
			<view class="form-item">
				<label>新密码:</label>
				<input id="pass" type="text" v-model="pass" value="" placeholder="请输入您的密码" />
			</view>
			<view class="form-item">
				<label>验证码:</label>
				<input  type="text" v-model="vcode" value="" placeholder="请输入图上的验证码" />
				
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
				vcode:""//验证码inputValue
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
						vcode:this.vcode
					},
					success(val) {
						console.log(val)
					},
					fail(e) {
						console.log(e)
					}
				})
			},
			putVcode(){
				console.log("putVcode")
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
	.content .form-item{
		display: flex;
		align-items: center; 	
		padding: 30upx 10upx;
		flex-direction: row;
		justify-content: space-between;
	}
	.content .form-item label{
		text-align: center;
		width: 150upx;
		font-size: 30upx;
		color: #666;
	}
	.content .form-item input{
		color: #666;
		border-bottom: 1px solid #ccc;
		flex: 8;
		padding: 5upx 20upx;
		
		font-size: 30upx;
	}
	#vcodebtn{
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
