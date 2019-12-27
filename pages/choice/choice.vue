<template>
	<view class="content">
		<view class="content" v-for="item in list">
			<!-- 上部分 -->
			<nav class="upper">
				<image :src="item.image" mode="widthFix" style="width: 750upx;"></image>
			</nav>
			<!-- 下部分 -->
			<nav class="bottom">
				<nav class="lower_top">
					<p>{{item.proName}}</p>
				</nav>
				<nav class="lower_below">
					<text>已筹￥{{item.zijin}}</text><text>参股占比{{item.gufen}}%</text>
				</nav>
			</nav>
		</view>
	</view>
</template>
<!-- 
MVVM
 M:model
 V:view
 VM:MVC中的C
 -->
<script>
	import global from "../../global.js"
	export default {
		data() {
			return {
				account:"",
				list:[
					{
						image:"../../static/bg_index.jpg",
						proName:"他乡遇见你",
						zijin:20000,
						gufen:3
					},
					{
						image:"../../static/bg_index.jpg",
						proName:"他乡遇见你",
						zijin:20000,
						gufen:3
					},
					{
						image:"../../static/bg_index.jpg",
						proName:"他乡遇见你",
						zijin:20000,
						gufen:3
					}
				]
			}
		},
		onLoad() {
			this.account = global.account
			uni.request({
				url:global.serverPath+"/yiqiba/User/ConcernedProject/brief",
				data:{
					account:this.account
				},
				success:res => {
					console.log(res)
					this.list = res.data
				},
				fail:res => {
					console.log(res)
				}
				
			})
		},
		methods: {

		},
		components:{
		}
	}
</script>

<style>
	.content{
		width: 750upx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		margin-bottom: 40upx;
	}
	.upper{
		flex:6;
	}
	.bottom{
		flex:4;
		padding:12upx 26upx;
		display: flex;
		flex-direction: column;
	}
	.lower_top{
		font-size: 40upx;
		flex: 2;
		
		font-family: 楷书;
	}
	.lower_below{
		font-size: 35upx;
		flex: 1;
		color: #999;
		padding-top: 25upx;
	}
</style>
