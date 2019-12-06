<template>
	<view>
		<view class="content">
			<view class="form-item">
				<label>用户名:</label>
				<input id="phone" type="text" v-model="phone" value="" placeholder="请输入您的手机号" />
			</view>
			<view class="form-item">
				<label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
				<input id="pass" type="text" v-model="pass" value="" placeholder="请输入您的密码" />
			</view>
			<view class="form-item">
				<label>验证码:</label>
				<input  type="text" v-model="vcode" value="" placeholder="请输入图上的验证码" />
				<view @click="changeVcode" id="vcode" class="">
					<image v-bind:src="vcodeUrl" style="width: 100%;height: 100%;"></image>
				</view>
			</view>
			
			<view class="btn">
				<button @click="complate" type="primary">登录</button>
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
				vcodeUrl:"http://localhost:8080/yiqiba/getVerify?id="+this.id
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
			changeVcode(){
				var id = this.id+1;
				this.vcodeUrl += id;
			},
			complate(){
				if(this.phone == "root" && this.pass == "root" && this.vcode == "0000"){
					console.log("欢迎您管理员");
					uni.navigateTo({
						url:'../../pages/index/index'
					})
				}else{
					console.log("用户名或密码错")
				}
			}
		}
	}
</script>

<style>
	.content{
		display: flex;
		flex-direction: column;
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
	#vcode{
		width: 100upx;
		height: 50upx;
	}
	#loginbtn{
		width: 100%;
	}
	.btn{
		margin: 40upx;
	}
</style>
