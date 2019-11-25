<template>
	<view class="content">
		<view class="status_bar">
		          <!-- 这里是状态栏 -->
		</view>
		<view class="fixed">
			<search></search>
			<!-- <swiper>
				<swiper-item v-for=""></swiper-item>
			</swiper> -->
			<tab :value.sync="current"  :tabList="tabObjectList" rangeKey="name"></tab>
		</view>
		<swiper class="swiperItem" :indicator-dots="false" :autoplay="false" disable-programmatic-animation="true" v-bind:current="current" @change="change" :duration="500" >
			<swiper-item  v-for="(item,index) in tabObjectList">
				
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import search from "../../components/mehaotian-search/mehaotian-search.vue"
	import suntab from "../../components/sun-tab/sun-tab.vue"
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
			}
		},
		onLoad() {

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
			}
		},
		
		components:{
			search:search,
			tab:suntab
		}
		
		
	}
</script>

<style>
	
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
	}
	.swiperItem{
			height: 1000upx;
			overflow: scroll;
	}
	.fixed{
		position: relative;
		top: 0;
	}
	
</style>
