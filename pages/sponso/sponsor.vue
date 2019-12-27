<template>
	<view class="content">
		<scroll-view class="content" scroll-y="flase">
			
			<!-- 选择项目类型 -->
			<view class="page_one">
				<view class="one_content_first">
					<span class="one_title_type">1.请选择项目类型<image v-show="" src="../../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
					<span class="one_minute_type">明确项目类型有助于快速找到你的项目</span></view>
				<view class="one_content" @click="type(1)" name="">
					<view class="img"><image class="image" src="../../static/sponsorpicture/jichu1.png"></image></view>
					<view class="minute"><span class="one_title_type">酒店</span><br>
					<span class="one_minute_type">经济/终端/高端连锁酒店.度假酒店.城市长租公寓</span></view></view>
				<view class="one_content" @click="type(2)" name="">
					<view class="img"><image class="image" src="../../static/sponsorpicture/jichu2.png"></image></view>
					<view class="minute"><span class="one_title_type">农业</span><br>
					<span class="one_minute_type">农产品.种植基地.养殖基地.果蔬生鲜门店.新型农场.休闲产品.农产品加工等</span></view>
				</view>
				<view class="one_content" @click="type(3)" name="">
					<view class="img">
						<image class="image" src="../../static/sponsorpicture/jichu3.png"></image>
					</view>
					<view class="minute">
						<span class="one_title_type">餐饮</span><br>
						<span class="one_minute_type">酒吧.果蔬饮品.咖啡馆.各大菜系.茶馆.面包甜点.小吃简餐等</span>
					</view>
				</view>
				<view class="one_content" @click="type(4)" name="">
					<view class="img"><image class="image" src="../../static/sponsorpicture/jichu4.png"></image></view>
					<view class="minute"><span class="one_title_type">休闲</span><br>
					<span class="one_minute_type">美业(美甲美瞳/美容/美发/SPA/健身/大健康).亲子娱乐.培训.宠物空间.美学家装.新零售(花店/书店/综合空间).文创等</span></view>
				</view>
				<view class="one_content" @click="type(5)" name="">
					<view class="img"><image class="image" src="../../static/sponsorpicture/jichu5.png"></image></view>
					<view class="minute"><span class="one_title_type">民宿</span><br>
					<span class="one_minute_type">精品酒店.文创小镇.乡村民宿.青旅.城市民宿.海外民宿等</span></view>
				</view>
			</view>
			
			
			<!-- 项目基础信息，包括项目名称，项目所在地，预计开业时间 -->
			<view class="page_two">
					<view class="two_centent">
					<span class="two_title_type">2.请填写项目基础信息<image src="../../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
					<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/discount.png"></image>品牌名称(或项目名称)：</span><br>
					<input type="text" id="projmess" v-model="proName" class="input" placeholder="有辨识度的品牌名称有利于项目推广" /></view>
					<view class="two_centent">
						<view class="two_centent_">
						<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/icon_GPS.png"></image>项目所在地</span><br>
						<input type="text" id="place" class="input" v-model="proAddress" placeholder="项目地理位置是用户支持的重要因素之一" /></view>
					</view>
					<view class="two_centent">
						<view class="two_centent_">
						<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/icon_GPS.png"></image>项目预计融资</span><br>
						<input type="number" id="place" class="input" v-model="finance" placeholder="预计融资决定项目大小" /></view>
					</view>
					<view class="two_centent">
						<view class="two_centent_">
						<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/icon_GPS.png"></image>开业时间(或举办活动时间)</span><br>
						<picker mode="date" @change="timeChange" start="">
							<button type="primary">选择项目开始时间</button>
						</picker>
					</view>
			</view>				
			</view>
			
			<!-- 选择项目种类 -->
			<view>
				<span class="thr_title_type">3.选择项目分类<image src="../../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
				<span class="thr_minute_type">明确的项目分类有助于运营同学快速审核你的项目</span><br>
				<radio-group @change="classChange"  v-model="proClass">
				<view class="radio_minute_type" >
					<label><radio class="radio" value="权益类"/>权益类(股份/分红权转让)</label></view>
				 <view class="radio_minute_type" >
					<label><radio class="radio" value="广告类" />广告类(售卖产品/加盟代理)</label></view>
				</radio-group>
			</view>
			
			<!-- 选择是否拥有营业场地，独立运行的公司 -->
			<view>
				<span class="thr_title_type">4.是否拥有营业场地<image src="../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
				<radio-group  @change="pleaceChange" v-model="havePlace" > 
					<view class="radio_minute_type">
						<label><radio class="radio" value="true"/>是</label>
					</view>
					<view class="radio_minute_type">
						<label><radio class="radio" value="false" />否</label>
					</view>
				</radio-group>
			</view>
			<view class="five_title">
				<span class="thr_title_type">5.是否有独立运行该项目及财务核算的公司<image src="../../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
				<radio-group  @change="compChange" v-model="haveComp">
					<view class="radio_minute_type">
						<label><radio class="radio" value="true"/>是</label>
					</view>
					<view class="radio_minute_type">
						<label><radio class="radio" value="false"/>否</label>
					</view>
				</radio-group>
			</view>
			
			
			
			<!-- 项目描述 -->
			<view>
				<span class="thr_title_type">6.请简单介绍你的项目<image src="../../static/sponsorpicture/star.png" class="content_xing"></image></span><br>
				<view class="eight">
					<span class="eight_minu">
						项目介绍是我们进行评判的重要标准<br>
						你可以介绍项目的区位优势，总投资金额，营业或种植面积，近一年收入及利润，销售渠道构成中的电商占比，
						客单价等(连锁店铺可以用老店数据)，也可以从现有资源及流量，商业模式，创新点，过往项目情况/数据等
						多方面介绍。
					</span>
				</view>
				<view class="eight_frame">
					<textarea class="seven_back" v-model="message" placeholder="请填写项目介绍"></textarea>
				</view>
			</view>
				<!-- 协议 -->
			<view class="nine">
				<checkbox-group>
					<label>
						<checkbox class="radio" @click="!isChecked" :checked="isChecked"/>
					</label>
						<span class="nine_minu">我方承诺以上各项内容属实(勾选后才可保存或提交审核)</span>
				</checkbox-group>
				<view class="nine_btn" style="display: flex;flex-direction: row;height: 120upx;">
					
					<view class="btn_save" @click="saveToStorage" style="flex: 2;height: 100%;display: flex;flex-direction: row;padding: 20upx;box-sizing: border-box;align-items: center;align-content: center;">
						<image style="width: 30%;height: 100%; text-align: center;flex: 1;" src="../../static/sponsorpicture/save.png" mode="aspectFit"></image>
						<text style="text-align: left;flex: 1;">保存</text>
					</view>
					<view class="btn_commit" style="flex: 4;height: 100%;display: flex;flex-direction: row;padding: 20upx;box-sizing: border-box;align-items: center;align-content: center;">
						<text style="width: 100%;text-align: center;" @click="projCommit()">提交项目</text>
					</view>
				</view>
			</view>
		</scroll-view> 
	</view>
</template>

<script>
	import global from "../../global.js"
	export default {
		data() {
			return {
				choiceType:0,
				proType:0, //选择的项目类型
				proName:"",   //品牌名称
				proAddress:"",  //项目所在地
				proSTime:"",  // 项目的预计开业时间
				proClass:"", // 项目分类
				havePlace:"",// 是否拥有场地
				haveComp:"",// 是否有独立该项目及财务核算
				// member:[{//项目成员
						
				// 	}],
				finance:0,
				message:"",//项目描述
				// imgPathObj:[],//项目图片
				index:0,//
				// name:"",//成员姓名
				// role:"",//成员职位
				// back:"",//成员背景
				isChecked:false,//协议
				one:false,
				two:false,
				three:false,
				four:false,
				five:false,
				six:false
			}
		},
		methods: {
			//点击提交按钮  触发事件 get方式请求数据
			send(){
				console.log("send")
				uni.request({
					method:"POST",
					url:this.$global.serverPath+"/yiqiba/pro",
					data:{
						pid:this.$global.getPid(),
						uproType:this.proType
					}
				})
			},
			timeChange(e){
				this.proSTime = e.detail.value;
			},
			//单选按钮
			classChange(e){
				this.proClass = e.detail.value
			},
			pleaceChange(e){
				this.havePlace = e.detail.value
			},
			compChange(e){
				this.haveComp = e.detail.value
			},
			//项目类型选择
			type(name){
				this.proType = name
			},
			//添加图片调用的函数
			// upload(){
			// 	// plus.gallery.pick(function(GalleryMultiplePickSuccessCallback){
					
			// 	// },function(e){
			// 	// 	// console.log(e)
			// 	// },{
			// 	// 	filter:"image",
			// 	// 	filename:"tupiann",
			// 	// 	animation:true,
			// 	// 	maximum:8,
			// 	// 	onmaxed() {
			// 	// 		uni.showToast({
			// 	// 			title:"最多可以选择六张图片",
			// 	// 			icon:"none"
			// 	// 		})
			// 	// 	},
			// 	// 	system:true
					
			// 	// })
			// 	uni.chooseImage({
			// 		count:8,
			// 		sizeType:"original",
			// 		sourceType:"album",
			// 		success:function(res){
			// 			this.imgPathObj = res.tempFilePaths
			// 			console.log(this.imgPathObj)
			// 		}.bind(this)
					
			// 	})
			// },
			//添加团队成员调用的函数
			// addUser(){
			// 	var temp = {
			// 		"name":this.name,
			// 		"role":this.role,
			// 		"back":this.back
			// 	}
			// 	this.member.push(temp)
			// 	console.log(this.member)
			// },
			//用户点击保存调用的函数
			saveToStorage(){
				console.log("保存")
				//将数据加载进缓存，当页面加载时，如果缓存中有对应数据，则自动填入数据模板
				uni.setStorage({
					key:global.account,
					data:{
						choiceType:this.choiceType,
						proType:this.proType, //选择的项目类型
						proName:this.proName,   //品牌名称
						proAddress:this.proAddress,  //项目所在地
						proSTime:this.proSTime,  // 项目的预计开业时间
						proClass:this.proClass, // 项目分类
						havePlace:this.havePlace,// 是否拥有场地
						haveComp:this.haveComp,// 是否有独立该项目及财务核算
						// member:this.member,
						message:this.message,
						// imgPathObj:this.imgPathObj,
						index:this.index,
						// name:this.name,
						// role:this.role,
						// back:this.back,
						isChecked:this.isChecked
					},
					success() {
						uni.showToast({
							title: '保存成功',
							icon:"none"
						});
					},
					fail() {
						uni.showToast({
							title: '保存失败',
							icon:'none'
						});
					}
					
				})
			},
			//用户点击提交执行的函数
			projCommit(){
				console.log("提交项目")
				if(this.proType== ""){
					uni.showToast({
						title: '请先选择项目类型',
						icon:'none'
					});
				}
				else if(this.proName == ""){
					uni.showToast({
						title: '项目名不能为空',
						icon:'none'
					});
				}else if(this.proAddress== ""){
					uni.showToast({
						title: '请先选择项目所在地',
						icon:'none'
					});
				}else if(this.proSTime== ""){
					uni.showToast({
						title: '请先选择项目开始时间',
						icon:'none'
					});
				}else if(this.proClass== ""){
					uni.showToast({
						title: '请先选择项目分类',
						icon:'none'
					});
				}else if(this.havePlace== ""){
					uni.showToast({
						title: '请先选择是否拥有营业场地',
						icon:'none'
					});
				}else if(this.haveComp== ""){
					uni.showToast({
						title: '请先选择是否拥有独立公司',
						icon:'none'
					});
				}else if(this.message== ""){
					uni.showToast({
						title: '请填写项目介绍',
						icon:'none'
					});
				}else if(this.isChecked){
					uni.showToast({
						title: '请同意协议',
						icon:'none'
					});
				}else{
					uni.request({
						method:"GET",
						url:global.serverPath + "/yiqiba/pro",
						data:{
							pid:global.getPid(),
							type:this.choiceType,
							cid:this.proType,
							plocation:this.proAddress,
							pdate:this.proSTime,
							pint:this.message,
							pname:this.proName,
							finance:this.finance,
							site:this.havePlace,
							company:this.haveComp,
							pcca:this.proClass,
							stid:2
							
						},
						success(res) {
							uni.showToast({
								title: '发布成功',
								icon:"none"
							});
							if(res.data){
								uni.redirectTo({
									url:"../fabu/fabu",
									success() {
										
									}
								})
							}
						},
						fail(e) {
							console.log(e)
						}
						
					})
				}
			}
			
			
		},
		onLoad(option) {
			console.log(option.proType)
			this.choiceType = option.proType
			//当页面加载时，将缓存中的数据加载进数据模板
			
			// uni.showModal({
			// 	title:"发起项目",
			// 	content:"是否显示上次未提交的数据？",
			// 	showCancel:true,
			// 	success(con,can) {
			// 		if(can){
			// 			uni.getStorage({
			// 				key:"account",
			// 				success:function(res){
			// 					console.log(res)
			// 					this.choiceType = res.data.choiceType
			// 					this.proType = res.data.proType//选择的项目类型
			// 					this.proName = res.data.proName  //品牌名称
			// 					this.proAddress = res.data.proAddress //项目所在地
			// 					this.proSTime = res.data.proSTime // 项目的预计开业时间
			// 					this.proClass = res.data.proClass// 项目分类
			// 					this.havePlace = res.data.havePlace// 是否拥有场地
			// 					this.haveComp = res.data.haveComp// 是否有独立该项目及财务核算
			// 					this.member = res.data.member
			// 					this.message = res.data.message
			// 					this.imgPathObj = res.data.imgPathObj
			// 					this.index = res.data.index
			// 					this.name = res.data.name
			// 					this.role = res.data.role
			// 					this.back = res.data.back
			// 					this.isChecked = res.data.isChecked
			// 				}.bind(this),
			// 				fail:function(){
			// 				},
			// 				complete:function(){
			// 					console.log("缓存加载完成")
			// 				}
			// 			})
			// 		}else{
			// 			uni.removeStorage({
			// 				key:global.account
			// 			})
			// 		}
			// 	}
			// })
		},
		components:{
		}
	}
</script>

<style>
.content{
	padding: 0;
	margin: 20upx;
}
.content_xing{
	width: 15upx;
	height: 15upx;
	margin-bottom: 15upx;
	margin-left: 5upx;
}
	/*第一项  */
.page_one{
	display: flex;
	flex-direction: column;
	width: 360px;
	height: 640px;
}
.one_content_first{
	margin-left: 30upx;
	margin-top: 20upx;
	margin-bottom: 20upx;
}
.one_content{
	flex: 1;
	display: flex;
}
.img{
	flex: 1;
}
.minute{
	width: 150upx;
	/* margin-top: 30upx; */
	margin-left: 30upx;
	margin-right: 50upx;
	flex: 5;
}
/* 第一项标题 */
.one_title_type{
	/* margin-left: 6upx; */
	font-size: 40upx;
	color: #000;
}
/* 第一项详细 */
.one_minute_type{
	/* margin-left: 6upx; */
	font-size: 30upx;
	text-align: left;
	color: #999;
}
/* 第二项 */
.page_two{
	display: flex;
	flex-direction: column;
}
.two_centent{
	flex: 1;
}
.two_title_type{
	margin-left: 36upx;
	font-size: 40upx;
	color: #000;
}
.two_minute_type{
	margin-left: 56upx;
	font-size: 30upx;
	color: #999;
	
}
.two_centent_{
	margin: 20upx 10upx 20upx 10upx;
}
.thr_minute_type{
	margin-left: 36upx;
	font-size: 30upx;
	color: #999;
}
.thr_title_type{
	margin-left: 36upx;
	font-size: 40upx;
	color: #000;
}
.radio_minute_type{
	width: 650upx;
	height: 50upx;
	border: 4upx solid #999;
	margin-left: 36upx;
	font-size: 30upx;
	color: #999;
	margin: 10upx;
}
.five_title{
	width: 670upx;
}
/* 第七项 */
.seven_frame{
	width: 660upx;
	height: 310upx;
	border: 1px solid #999999;
	margin-left: 10upx;
	margin-top: 20upx;
}
.radio{
	transform: scale(0.8,0.8);
}
.image{
	width: 100upx;
	height: 100upx;
	margin-left: 20upx;
	margin-top: 20upx;
	/* align-items: center; */
}
.input{
    border-bottom: 1px solid #999;
	margin-left: 10upx;
	margin-right: 40upx;
	margin-top: 35upx;
	padding: 30upx;
}
.seven_input{
	/* text-align: left; */
	margin: 0 auto;
	padding: 18upx;
	/* width: 200upx; */
}
.seven_input_back{
	width: 300px;
	height: 10upx;
	border-bottom: 1px solid #fff;
	padding: 0;
	margin: 0 auto;
}
.seven_mess{
	display: flex;
}
.seven_name{
	flex: 1;
	/* text-align: left; */
	padding-left: 18upx;
}
.seven_role{
	margin-right: 20upx;
	flex: 2;
	/* text-align: right; */
}
.line{
	border-right:1px solid gray;
	margin:10upx;
}
.seven_back{
	height: 130px;
	width: 610upx;
	margin: 15upx;
}
/* .seven_btn{
	width: 260px;
	height: 35px;
	margin-left: 10upx;
	margin-left: 30px;
	margin-right: 30px;
	margin-top: 10px;
	border: 1px solid #999;
} */
.seven_btn span{
	margin-left: 210px;
}
.two_img{
	width: 38upx;
	height: 38upx;
}
.sex_img{
	width: 210upx;
	height: 190upx;
}
.seven_img{
	margin-left: 10upx;
	margin-left: 70upx;
	margin-right: 70upx;
	margin-top: 30upx;
	width: 570upx;
	height: 80upx;
}
.eight{
	width: 635upx;
	padding-left: 40upx;
}
.eight_minu{
	font-size: 30upx;
	color: #999;
}
.eight_frame{
	width: 660upx;
	height: 370upx;
	border: 1px solid #999999;
	margin-left: 10upx;
	margin-top: 20upx;
}
.nine{
	margin-top: 30upx;
}
.nine_minu{
	margin-left: 0;
	font-size: 25upx;
	color: #999;
}
.nine_btn{
	height: 100upx;
	display: flex;
}
.nine_btn_save{
	flex: 1;
}
.nine_btn_save image{
	vertical-align: middle;
	width: 60upx;
	height: 60upx;
	margin-bottom: 23upx;
}
.nine_btn_sub{
	flex: 3;
	background: #007AFF;
}
.btn_save{
}
.btn_commit{
	background-color: #007AFF;
	color: white;
}
</style>
