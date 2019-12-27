<template>
	<view>
		<view class="">
			<view class="content">
				
				<!-- 昵称输入框 -->
				<view class="form-item">
					<label>昵&nbsp;&nbsp;&nbsp;&nbsp;称:</label>
					<input type="text" v-model="uname" maxlength="16" value="" placeholder="请输入您的称呼" />
				</view>
				<!-- 手机号输入框 -->
				<view class="form-item">
					<label>手机号:</label>
					<input id="pass" type="number" v-model="phone" maxlength="11" value="" placeholder="请输入您的手机号" />
					<view @click="putPhoneCode" id="" class="vcodebtn">
						{{phoneCodeVal}}
					</view>
				</view>
				<view class="form-item">
				<!-- 手机验证码输入框 -->
					<label>验证码:</label>
					<input class="phone" type="number" maxlength="6" v-model="phonecode" value="" placeholder="请输入获取的验证码" />
				</view>
				<!-- 密码输入框 -->
				<view class="form-item">
					<label>密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>
					<input class="phone" type="text" v-model="pass" value="" placeholder="请输入您的密码" />
				</view>
				<!-- 图片验证码输入框 -->
				<view class="form-item">
					<label>验证码:</label>
					<input  type="text" v-model="vcode" value="" placeholder="请输入图上的验证码" />
					<view @click="changeVcode" class="vcode">
						<image v-bind:src="vcodeUrl" style="width: 100%;height: 100%;"></image>
					</view>
				</view>
			</view>
			<!-- 提交按钮 -->
			<view class="btn">
				<button @click="complate" type="primary">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname:"",//昵称
				phone:"",//手机号
				pass:"",//密码
				vcode:"",//验证码
				phonecode:"",//手机验证码
				vcodeUrl:this.$global.serverPath+"/yiqiba/getVerify?id="+this.id,
				phoneCodeVal:"获取验证码",//获取验证码按钮文本
				isVcode:false,//图片验证码是否正确
				isUserRepeat:false,//用户名是否重复
				isPhoneCode:false//手机验证码是否正确
			}
		},
		methods: {
			//发送验证码
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
				/**
				 * 1.用户点击注册，验证文本框内容是否为空，为空则给出提示
				 * 2.验证图片是否正确
				 * 3.验证手机验证码是否正确
				 * 4.查询用户名是否已被注册
				 * */
				 var isNull;
				 if(this.uname == ""){
					 isNull = 1
				 }else if(this.phone == ""){
					 isNull = 2
				 }else if(this.phonecode == ""){
					 isNull = 3
				 }else if(this.pass == ""){
					 isNull = 4
				 }else if(this.vcode == ""){
					 isNull = 5
				 }
				 switch(isNull){
				 	case 1:
						uni.showToast({
							icon:'none',
							title: '昵称不能为空'
						});
				 		break;
					case 2:
						uni.showToast({
							icon:'none',
							title: '手机号不能为空'
						});
						break;
					case 3:
						uni.showToast({
							icon:'none',
							title: '手机验证码不能为空'
						});
						break;
					case 4:
						uni.showToast({
							icon:'none',
							title: '密码不能为空'
						});
						break;
					case 5:
						uni.showToast({
							icon:'none',
							title: '图片验证码不能为空'
						});
						break;
				 }
				 
				 
				 //发送图片验证，验证图片是否正确
				uni.request({
					method:"GET",
					url:this.$global.serverPath + "/yiqiba/checkVerify",
					data:{
						inputStr:this.vcode
					},
					success: (res) => {
						this.isVcode = res.data
						// if(res.data){
						// 	uni.showToast({
						// 		title: '验证码正确'
						// 	});
						// }else{
						// 	uni.showToast({
						// 		title: '验证码错误'
						// 	});
						// }
					},
					fail: (res) => {
						uni.showToast({
							title: '图片验证码验证失败，请检查网络连接',
							icon:'none'
						});
					}
				})
				
				//验证手机验证码是否正确
				
				
				//验证用户是否被注册
				uni.request({
					method:"GET",
					url:this.$global.serverPath + "/yiqiba/VerifyPhoneNumber",
					data:{
						account:this.phone
					},
					success: (res) => {
						this.isUserRepeat = res.data
						if(res.data){
							uni.showToast({
								title: '用户已被注册'
							});
						}
					}
				})
				
				uni.request({
					method:"GET",
					url:this.$global.serverPath + "/yiqiba/reg",
					data:{
						nickname:this.uname,
						account:this.phone,
						upass:this.pass
					},
					success: (req) => {
						if(req.data){
							uni.showToast({
								title: '恭喜您！注册成功',
								icon:"none",
								complete() {
									uni.navigateTo({
										url:"../login/login"
									})
								}
							});
							
						}else{
							uni.showToast({
								title:"注册失败，请联系系统管理员",
								icon:"none"
							})
						}
					},
					fail: (req) => {
						console.log(req)
					}
				})
				
			},
			changeVcode(){
				var id = this.id+1;
				this.vcodeUrl += id;
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
