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
			
			putPhoneCode(){
				uni.request({
					method:"GET",
					url:this.$global.serverPath+"/yiqiba/PhoneVerify",
					data:{
						account:this.uname
					},
					success: (res) => {
						this.phonecode = res.data
						var second = 60
						var timer = setInterval(()=>{
							if(second > 0){
								second -= 1
								this.phoneCodeVal = second + "s"
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
				/**
				 * 1.用户点击注册，验证文本框内容是否为空，为空则给出提示
				 * 2.验证图片是否正确
				 * 3.验证手机验证码是否正确
				 * 4.查询用户名是否已被注册
				 * */
				 var isNull;
				 if(this.phone == ""){
					 isNull = 1
				 }else if(this.pass == ""){
					 isNull = 2
				 }else if(this.phonecode == ""){
					 isNull = 3
				 }
				 switch(isNull){
				 	case 1:
						uni.showToast({
							icon:'none',
							title: '手机号不能为空'
						});
				 		break;
					case 2:
						uni.showToast({
							icon:'none',
							title: '密码不能为空'
						});
						break;
					case 3:
						uni.showToast({
							icon:'none',
							title: '验证码不能为空'
						});
						break;
					
				 }
				 
				 console.log(this.$global.serverPath)
				 //更新用户密码
				 uni.request({
				 	method:"GET",
					url:this.$global.serverPath + "/yiqiba/Updataupass",
					data:{
						account: this.phone,
						upass: this.pass
					},
					success: (res) => {
						if(res.data){
							uni.showToast({
								title: '密码修改成功',
								icon:"none"
							});
							uni.navigateTo({
								url: '../pages/login/login',
								success: res => {
									console.log(login)
								},
								fail: () => {},
								complete: () => {}
							});
						}else{
							console.log(res)
						}
					},
					fail: (res) => {
						console.log("发送失败"+res.data)
					}
				 })
				
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
