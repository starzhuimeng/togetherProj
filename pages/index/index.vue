<template>
	<view class="content">
		<view class="status_bar">

		</view>
		<view>
			<!-- 分类tab栏 -->
			<suntab :value.sync="index" @change="objectChange" rangeKey="name" :tabList="tabObjectList"></suntab>
		</view>
		<!-- 用于展示项目的滚动视图 -->
		<scroll-view show-scrollbar=false class="swiperItem"  scroll-y="true">
			<view>
				<!-- 使用列表循环遍历项目实例数据，包括项目图片,项目标签，用户头像，项目标题，项目描述，已筹资金，点赞人数，众筹进度 -->
				<view class="example" @click="getExample(item.pid)" v-for="(item,index) of list" :key="index">
					<view class="example-top">
						<image :src="item.img" mode="widthFix" style="width: 100%;"></image>
						<div class="tab-box">{{item.tab}}</div>
						<div class="user-icon">
				 			<image :src="item.icon" style="width: 100%;height: 100%;" mode=""></image>
						</div>
						<div class="title">
							{{item.title}}
						</div>
					</view>
					<view class="example-bottom">
						<div class="example-content">
							{{item.content}}
						</div>
						<div class="example-tabs-group">
							<div style="flex: 1;text-align: center;">已筹{{item.allZijin}}</div>
							<div style="flex: 1;text-align: center;">点赞{{item.person}}</div>
							<div style="flex: 1;text-align: center;">进度{{item.persent}}%</div>
						</div>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import global from "../../global.js"
	import suntab from "../../components/sun-tab/sun-tab.vue"
	import uniCard from '@/components/uni-card/uni-card.vue'
	export default {
		data() {
			return {
				index:0,
				current:"酒店",//用于获取分类tab组件中的item
				tabObjectList: [//顶部分类tab栏的数据
				    {
				        name: '酒店',
				        value: '酒店'
				    },
				    {
				        name: '住宿',
				        value: '住宿'
				    },
					{
					    name: '餐饮',
					    value: '餐饮'
					},
					{
					    name: '农业',
					    value: '农业'
					},
					{
					    name: '开店',
					    value: '开店'
					}
				],
				list:[//项目展示的相关数据
					{
						tab:"新店上新",
						icon:"../../static/touxiang.jpeg",
						img:"../../static/bg_index.jpg",
						title:"他乡遇见你",
						content:"这里是他乡遇见你的项目描述",
						person:110,
						persent:15,
						allZijin:2000
					},
					{
						tab:"新店上新",
						icon:"../../static/touxiang.jpeg",
						img:"../../static/bg_index.jpg",
						title:"他乡遇见你",
						content:"这里是他乡遇见你的项目描述",
						person:110,
						persent:15,
						allZijin:2000
					},
					{
						tab:"新店上新",
						icon:"../../static/touxiang.jpeg",
						img:"../../static/bg_index.jpg",
						title:"他乡遇见你",
						content:"这里是他乡遇见你的项目描述",
						person:110,
						persent:15,
						allZijin:2000
					},
					{
						tab:"新店上新",
						icon:"../../static/touxiang.jpeg",
						img:"../../static/bg_index.jpg",
						title:"他乡遇见你",
						content:"这里是他乡遇见你的项目描述",
						person:110,
						persent:15,
						allZijin:2000
					},
					{
						tab:"新店上新",
						icon:"../../static/touxiang.jpeg",
						img:"../../static/bg_index.jpg",
						title:"他乡遇见你",
						content:"这里是他乡遇见你的项目描述",
						person:110,
						persent:15,
						allZijin:2000
					}
				]
				
			}
		},
		onLoad() {
			uni.request({
				url:global.serverPath+"/yiqiba/setpro",
				method:"GET",
				data:{
					type:"酒店"
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
		onReady(e) {
			
		},
		onShow() {
			console.log(this.$global.getRandom())
			console.log(this.$global.serverPath)
			uni.request({
				url:this.$global.serverPath+"/yiqiba/setpro",
				method:"GET",
				data:{
					type:"精选"
				},
				success(res) {
					console.log(res.data)
					this.list = res.data
					console.log(this.list)
					// this.list = res.data
				},
				fail(res) {
					uni.showToast({
						title: '内容获取失败，请检查网络连接'
					});
				}
				
			})
		},
		methods: {
			arrayChange(e){
			                console.log('数组数据返回格式');
			                console.log(e);
			            },
			objectChange(e){
			    console.log('对象数据返回格式');
			    console.log(e.tab.value);
				this.current = e.tab.value
				console.log("类别："+this.current)
			},
			//分类tab栏状态改变时调用的函数
			
			getExample(pid){
				uni.navigateTo({
					url:"../details/details?"
				})
			}
			
			
		},
		//搜索按钮被点击时执行的函数
		onNavigationBarButtonTap(e){
			console.log("搜索按钮被点击")
			console.log(e)
		},
		//点击搜索框时被调用，仅在搜索框属性设置为disabled时生效
		onNavigationBarSearchInputClicked(e) {
			console.log('事件执行了')
			
		},
		//搜索框内容改变时执行的函数
		onNavigationBarSearchInputChanged(e) {
			console.log(e.text)
		},
		//页面下拉刷新出发的事件
		onPullDownRefresh(e){
			console.log("pullDown")
			uni.request({
				method:"GET",
				url:"",
				success(res) {
					uni.showToast({
						title: "刷新",
						icon:"none"
					});
				},
				fail(res) {
					uni.showToast({
						title: "刷新失败，请检查网络连接",
						icon:"none"
					});
				},
				complete(res) {
					//结束下拉刷新的loading状态
					uni.stopPullDownRefresh()
				}
			})
		},
		/**
		 *  点击导航栏 buttons 时触发
		 */
		onNavigationBarButtonTap() {
			uni.showModal({
				title: '提示',
				content: '用户点击了功能按钮，这里仅做展示。',
				success: res => {
					if (res.confirm) {
						console.log('用户点击了确定');
					}
				}
			});
		},
		components:{
			suntab:suntab,
			uniCard:uniCard
		}
		
		
	}
	 
</script>

<style>
	.example{
		margin: 20upx 40upx;
		box-shadow: 0upx 0upx 20upx #eee;
		display: flex;
		flex-direction: column;
		height: 500upx;
		border-radius: 10upx;
		overflow: hidden;
	}
	.example-top{
		flex: 6;
		position: relative;
		overflow: hidden;
	}
	.example-bottom{
		flex: 2;
		position: relative;
		overflow: hidden;
	}
	.example-content{
		width: 630upx;
		overflow:hidden;
		line-height: 72upx;
		white-space: nowrap;
		text-overflow: ellipsis;
		padding: 0upx 20upx;
	}
	.example-tabs-group{
		width: 500upx;
		position: absolute;
		height: 40upx;
		right: 20upx;
		bottom: 20upx;
		font-size: 24upx;
		line-height: 40upx;
		display: flex;
		align-items: center;
		align-content: center;
		color: #999;
	}
	.tab-box{
		width: 100upx;
		height: 30upx;
		padding: 10upx 20upx;
		background-color: #007AFF;
		font-size: 12upx;
		line-height: 30upx;
		text-align: center;
		position: absolute;
		left: 20upx;
		top: 20upx;
		color: #fff;
	}
	.user-icon{
		width: 100upx;
		height: 100upx;
		border: 1upx solid #fff;
		border-radius: 50%;
		position: absolute;
		bottom: 20upx;
		overflow: hidden;
		left: 20upx;
	}
	.title{
		position: absolute;
		left: 140upx;
		bottom: 20upx;
		width: 520upx;
		color: #fff;
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
		overflow:hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>