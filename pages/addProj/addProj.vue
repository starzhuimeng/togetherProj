<template>
	<view class="content">
		<view class="proj-item">
			<text class="proj-item-title">1.请选择创建类型</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<radio-group name="" @change="getCreateType">
				
					<view class="radio-row" v-for="item in createTypeeList">
						<label><radio :value="item.value" /><text>{{item.text}}</text></label>
					</view>
			</radio-group>
		</view>
		<view class="proj-item">
			<text class="proj-item-title">2.请选择项目类型</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<radio-group name="" @change="getProType">
					<view class="radio-row" v-for="item in proTypeeList">
						<label><radio :value="item.value" /><text>{{item.text}}</text></label>
					</view>
			</radio-group>
		</view>
		
		<view class="proj-item">
			<text class="proj-item-title">3.请填写项目基础信息</text>
			<view class="">
				<label for="" style="width: 20%">项目名称</label>
				<input type="text" value="" style="border: 1upx solid #000000;" placeholder="有辨识度的品牌名称有利于项目推广" />
			</view>
			<view class="">
				<label for="" style="width: 20%">项目所在地</label>
				<input type="text" value="" style="border: 1upx solid #000000;" placeholder="有辨识度的品牌名称有利于项目推广" />
			</view>
			<view class="">
				<label for="" style="width: 20%">开业时间</label>
				<picker mode="date" @change="getDate">
					<view><button type="primary">选择日期</button></view>
				</picker>
			</view>
		</view>
		<view class="proj-item">
			<text class="proj-item-title">4.选择项目分类</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<radio-group name="" @change="getProSType">
					<view class="radio-row" v-for="item in proSTypeList">
						<label><radio :value="item.value" /><text>{{item.text}}</text></label>
					</view>
			</radio-group>
		</view>
		<view class="proj-item">
			<text class="proj-item-title">5.是否拥有营业场地</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<radio-group name="" @change="getPlace">
				<label>
					<view class="radio-row">
						<radio :value="true" /><text>是</text>
					</view>
				</label>
				<label for="">
					<view class="radio-row">
						<radio :value="false" /><text>否</text>
					</view>
				</label>
				
			</radio-group>
		</view>
		<view class="proj-item">
			<text class="proj-item-title">6.是否拥有独立运营该项目及财务核算的公司</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<radio-group name="" @change="getComy">
				<label>
					<view class="radio-row">
						<radio :value="true" /><text>是</text>
					</view>
				</label>
				<label for="">
					<view class="radio-row">
						<radio :value="false" /><text>否</text>
					</view>
				</label>
				
			</radio-group>
		</view>
		<view class="proj-item">
			<text class="proj-item-title">7.请简单介绍你的项目</text><image src="../../static/sponsorpicture/star.png" style="width: 30upx;height: 30upx;" v-show="true" mode="widthFix"></image>
			<textarea value="" placeholder="请填写项目介绍" />
		</view>
		<view class="" style="display: flex;flex-direction: row;">
			<button type="default" style="flex: 1;">保存</button>
			<button type="primary" style="flex: 2;">提交审核</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				proType:0,
				proTypeeList:[
					{
						value:1,
						text:"酒店"
					},{
						value:2,
						text:"农业"
					},{
						value:3,
						text:"餐饮"
					},{
						value:4,
						text:"休闲"
					},{
						value:5,
						text:"民宿"
					}
				],
				proSType:0,
				proSTypeList:[
					{
						value:1,
						text:"权益类"
					},{
						value:2,
						text:"广告类"
					}
				],
				createType:0,
				createTypeeList:[
					{
						value:1,
						text:"众筹"
					},{
						value:2,
						text:"公益"
					},{
						value:3,
						text:"创意"
					}
				],
				proPlace:null,
				proComy:null
			}
		},
		methods: {
			getProType(target){
				this.proType = target.detail.value
				console.log(this.proType)
			},
			getDate(e){
				console.log(e.detail.value)
			},
			getCreateType(e){
				this.createType = e.detail.value
				console.log(this.createType)
			},
			getProSType(e){
				this.proSType = e.detail.value
				console.log(this.proSType)
			},
			getPlace(e){
				this.proPlace = e.detail.value
				console.log(this.proPlace)
			},
			getComy(e){
				this.proComy = e.detail.value
				console.log(this.proComy)
			}
		},
		onLoad() {
		},
		components:{
		}
	}
</script>

<style>
	.content{
		padding:20upx 40upx 10upx 40upx;
	}
	.proj-item{
		margin-bottom: 20upx;
	}
	.pro-image{
		padding: 20upx 0upx ;
	}
	.pro-title{
		margin-bottom: 40upx;
	}
	.radio-row{
		padding: 10upx;
	}
</style>
