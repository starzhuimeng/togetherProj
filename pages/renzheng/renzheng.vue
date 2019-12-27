<template>
	<view>
		<view class="content">
			<view class="theme">
				<view class="occup"></view>
				<view class="theme_cont"  style="border-bottom:1px solid #F1F1F1">
					<view class="put"><span class="typeface">真实姓名</span>
					</view>
					<view class="input">
						<input class="desc_typeface" @input="inputname" type="text" placeholder="你本人的姓名" />
					</view>
					<!-- <hr /> -->
				</view>
				<view class="theme_cont" style="border-bottom:1px solid #F1F1F1">
					<view class="put"><span class="typeface">身份证号</span>
					</view>
					<view class="input">
						<input class="desc_typeface" @input="inputidcard" type="idcard" placeholder="请填写二代身份证号" />
					</view>
				</view>
				<view class="theme_cont" style="border-bottom:1px solid #F1F1F1">
					<view class="put"><span class="typeface">银行卡号</span></view>
					<view class="input">
						<input class="desc_typeface" @input="inputbankcard" type="number" placeholder="请填写存管支持的银行储蓄卡" />
					</view>
				</view>
				<view class="theme_cont" style="border-bottom:1px solid #F1F1F1">
					<view class="put"><span class="typeface">预留手机</span></view>
					<view class="input">
						<input class="desc_typeface" @input="inputphone" type="number" placeholder="办卡时填写的手机号" />
					</view>
				</view>
				<view class="theme_cont">
					<view class="put"><span class="typeface">常用邮箱</span></view>
					<view class="input">
						<input class="desc_typeface" @input="inputemail" type="text" placeholder="填写你常用的电子邮箱地址" />
					</view>
				</view>
			</view>
			
			<view class="surplus">
				<button class="but_style" @click="submit">提交</button>
				<view class="surplus_typeface">
					<text style="text-align: center;" class="deal_typeface">此卡将作为你充值提现唯一用卡，继续点击表示你同意《支付协议》及《第三方支付协议》</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"", //姓名
				IDcard:"", //身份证号
				BankCard:"" ,//银行卡号
				phone:"",//手机号
				email:"", //邮箱
			}
		},
		onLoad() {

		},
		methods: {
			
			submit(){
				console.log("submit")
				uni.request({
					method:"GET",
					url:"",
					data:{
						
					}
				})
			},
			inputname:function(event){
				this.name = event.target.value
				console.log(this.name)
			},
			inputbankcard:function(event){
				this.BankCard = event.target.value
				console.log(this.BankCard)
			},
			inputidcard:function(event){
				this.IDcard = event.target.value
				console.log(this.IDcard)
			},
			inputphone:function(event){
				this.phone = event.target.value
				console.log(this.phone)
			},
			inputemail:function(event){
				this.email = event.target.value
				console.log(this.email)
			},
			

		}
	}
</script>

<style>
	.theme{
		width: 100%;
		height: 650upx;
		display: flex;
		flex-direction:column;
	}
	.occup{
		width: 100%;
		height: 10upx;
	}
	.theme_cont{
		flex: 1;
		/* text-align: center; */
		display: flex;
		margin-top: 10upx;
	}
	.put{
		flex: 1;
		padding-top: 35upx;
		padding-left: 30upx;
	}
	.input{
		flex: 3;
		padding-top: 40upx;
	}
	.typeface{
		font-size: 35upx;
		color: #555555;
	}
	.desc_typeface{
		font-size: 30upx;
		color: #999;
	}
	.surplus{
		width: 100%;
		height: 600upx;
		background-color: #F1F1F1;
		padding-top: 70upx;
	}
	.but_style{
		width: 660upx;
		background: #007AFF;
		color: #FFFFFF;
		margin-bottom: 30upx;
		/* margin-top: 50upx; */
	}
	.deal_typeface{
		font-size:25upx;
		color: #555555;
		/* margin-left: 70upx; */
	}
	.surplus_typeface{
		width: 640upx;
		text-align: center;
		padding-left: 50upx;
		
	}
	.surplus span a{
		text-decoration:none;
	}	

</style>
