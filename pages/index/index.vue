<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="fixed">
			<search radius="30upx" @tap="clicked" border="1upx solid #999"></search>
			<!-- <swiper>
				<swiper-item v-for=""></swiper-item>
			</swiper> -->
			<suntab :value.sync="current"  :tabList="tabObjectList" rangeKey="name"></suntab>
		</view>
		<scroll-view style="height: 1200upx;" show-scrollbar=false class="swiperItem" scroll-y="true">
			<view>
				<indexcardview v-for="(item,index) in list">{{item}}</indexcardview>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import search from "../../components/mehaotian-search/mehaotian-search.vue"
	import suntab from "../../components/sun-tab/sun-tab.vue"
	import indexcardview from "../../components/indexcardview.vue"
	export default {
		data() {
			return {
				current:0,
				tabObjectList: [ //对象数组赋值
				    {
				        name: '精选',
				        value: 1
				    },
				    {
				        name: '住宿',
				        value: 1
				    },
					{
					    name: '餐饮',
					    value: 1
					},
					{
					    name: '农业',
					    value: 1
					},
					{
					    name: '开店',
					    value: 1
					}
				],
				list:[1,2,3,4]
								
			}
		},
		onLoad() {
			// console.log(Vue.config.path)
			console.log(this.$global.serverPath)
		},
		methods: {
			arrayChange(e){
			                console.log('数组数据返回格式');
			                console.log(e);
			            },
			objectChange(e){
			    console.log('对象数据返回格式');
			    console.log(e);
			},
			change(e){
				this.current = e.detail.current;
				console.log("current:"+this.current)
			},
			focus(e){
				console.log(e)
			},
			clicked(){
				console.log(1)
				console.log(this.$refs)
			}	
		},
		
		components:{
			search:search,
			suntab:suntab,
			indexcardview:indexcardview,
		}
		
		
	}
	 
</script>

<style>
	.content{
		height: 1330upx!important;
	}
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	}
	.swiperItem{
			/* overflow: scroll; */
			max-height: 1330upx;
	}
	.fixed{
		position: relative;
		top: 0;
	}
	
</style>
