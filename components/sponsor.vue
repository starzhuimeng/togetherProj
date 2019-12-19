<template>
	<view>
		<scroll-view class="content" scroll-y="flase">
			<!-- 第一项 -->
			<view class="page_one">
				<view class="one_content_first">
					<span class="one_title_type">1.请选择项目类型<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
					<span class="one_minute_type">明确项目类型有助于快速找到你的项目</span></view>
				<view class="one_content" @click="type('jiudian')" name="">
					<view class="img"><image src="../../static/sponsorpicture/基础1.png"></image></view>
					<view class="minute"><span class="one_title_type">酒店</span><br>
					<span class="one_minute_type">经济/终端/高端连锁酒店.度假酒店.城市长租公寓</span></view></view>
				<view class="one_content" @click="type('nongye')" name="">
					<view class="img"><image src="../../static/sponsorpicture/基础2.png"></image></view>
					<view class="minute"><span class="one_title_type">农业</span><br>
					<span class="one_minute_type">农产品.种植基地.养殖基地.果蔬生鲜门店.新型农场.休闲产品.农产品加工等</span></view></view>
				<view class="one_content" @click="type('canyin')" name="">
					<view class="img"><image src="../../static/sponsorpicture/基础3.png"></image></view>
					<view class="minute"><span class="one_title_type">餐饮</span><br>
					<span class="one_minute_type">酒吧.果蔬饮品.咖啡馆.各大菜系.茶馆.面包甜点.小吃简餐等</span></view>
				</view>
				<view class="one_content" @click="type('xiuxian')" name="">
					<view class="img"><image src="../../static/sponsorpicture/基础4.png"></image></view>
					<view class="minute"><span class="one_title_type">休闲</span><br>
					<span class="one_minute_type">美业(美甲美瞳/美容/美发/SPA/健身/大健康).亲子娱乐.培训.宠物空间.美学家装.新零售(花店/书店/综合空间).文创等</span></view>
				</view>
				<view class="one_content" @click="type('minsu')" name="">
					<view class="img"><image src="../../static/sponsorpicture/基础5.png"></image></view>
					<view class="minute"><span class="one_title_type">民宿</span><br>
					<span class="one_minute_type">精品酒店.文创小镇.乡村民宿.青旅.城市民宿.海外民宿等</span></view>
				</view>
			</view>
			<view>
				<!-- 第二项 -->
			<view class="page_two">
					<view class="two_centent">
					<span class="two_title_type">2.请填写项目基础信息<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
					<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/discount.png"></image>品牌名称(或项目名称)：</span><br>
					<input type="text" id="projmess" v-model="username" @input="username_output" placeholder="有辨识度的品牌名称有利于项目推广" /></view>
					<view class="two_centent">
						<view class="two_centent_">
						<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/icon_GPS.png"></image>项目所在地</span><br>
						<input type="text" id="place" v-model="location" @input="location_output" placeholder="项目地理位置是用户支持的重要因素之一" /></view>
					</view>
					<view class="two_centent">
						<view class="two_centent_">
						<span class="two_minute_type"><image class="two_img" src="../../static/sponsorpicture/icon_GPS.png"></image>开业时间(或举办活动时间)</span><br>
						<input type="text" id="time" v-model="begintime" @input="begintime_output" placeholder="如果未开始请选择预计开始时间" /></view>
					</view>
			</view>				
			</view>
			<!-- 第三项 -->
			<view>
				<span class="thr_title_type">3.选择项目分类<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<span class="thr_minute_type">明确的项目分类有助于运营同学快速审核你的项目</span><br>
				<radio-group @change="itemtype" :id="index" v-model="item_type">
				<view class="radio_minute_type" >
					<label><radio class="radio" value="权益类"/>权益类(股份/分红权转让)</label></view>
				 <view class="radio_minute_type" >
					<label><radio class="radio" value="广告类" />广告类(售卖产品/加盟代理)</label></view>
					</radio-group>
			</view>
			<!-- 第四项 -->
			<view>
				<span class="thr_title_type">4.是否拥有营业场地<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<radio-group  @change="itemtype" :id="index" v-model="side_data" > 
					<view class="radio_minute_type">
						<label><radio class="radio" value="true"/>是</label>
					</view>
					<view class="radio_minute_type">
						<label><radio class="radio" value="false" />否</label>
					</view>
				</radio-group>
			</view>
			<!-- 第五项 -->
			<view class="five_title">
				<span class="thr_title_type">5.是否有独立运行该项目及财务核算的公司<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<radio-group  @change="itemtype" :id="index" v-model="finance_data">
					<view class="radio_minute_type">
						<label><radio class="radio" value="true"/>是</label>
					</view>
					<view class="radio_minute_type">
						<label><radio class="radio" value="false"/>否</label>
					</view>
				</radio-group>
			</view>
			<!-- 第六项 -->
			<view class="five_title">
				<span class="thr_title_type">6.请上传项目图片(场景图片.设计图片等)<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<image src="../../static/sponsorpicture/添加图片.png" class="sex_img"></image>
			</view>
			<!-- 第七项 -->
			<view class="five_title">
				<span class="thr_title_type">7.请介绍项目核心团队<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<view class="seven_frame">
					<view class="seven_mess">
					<view class="seven_name">				
						<input class="seven_input" type="text" placeholder="姓名" v-model="name" @input="name_output" />
					</view>
					<span class="line"></span>
					<view class="seven_role">
						<input class="seven_input" type="text" placeholder="团队角色" v-model="role" @input="role_output"/>	
					</view>
					</view>
					<view class="seven_back">
						<textarea class="seven_back" placeholder="请填写团队成员背景" maxlength="60" v-model="back" @input="back_output"></textarea>
					</view>
				</view>
				<!-- 第七项的添加成员按钮 -->
				<image class="seven_img" src="../../static/sponsorpicture/添加.jpg"></image>
				<!-- <view class="seven_but">
					<span class="one_minute_type">添加成员</span>
				</view> -->
			</view>
				<!-- 第八项 -->
			<view>
				<span class="thr_title_type">8.请简单介绍你的项目<image src="../../static/sponsorpicture/星.png" class="content_xing"></image></span><br>
				<view class="eight">
					<span class="eight_minu">
						项目介绍是我们进行评判的重要标准<br>
						你可以介绍项目的区位优势，总投资金额，营业或种植面积，近一年收入及利润，销售渠道构成中的电商占比，
						客单价等(连锁店铺可以用老店数据)，也可以从现有资源及流量，商业模式，创新点，过往项目情况/数据等
						多方面介绍。
					</span>
				</view>
				<view class="eight_frame">
					<textarea class="seven_back" placeholder="请填写项目介绍"></textarea>
				</view>
			</view>
				<!-- 第九项 -->
			<view class="nine">
				<checkbox-group>
					<label>
						<checkbox class="radio" checked="true"/>
					</label>
						<span class="nine_minu">我方承诺以上各项内容属实(勾选后才可保存或提交审核)</span>
				</checkbox-group>
				<view class="nine_but">
					
					<button class="nine_but_save"><image src="../../static/sponsorpicture/save.png" />保存</button>
					<!-- <view class="nine_but_save"><image src="../static/save.png"></image><span>保存</span></view> -->
					<button class="nine_but_sub" @click="send">提交审核</button>
					<!-- <view class="nine_but_sub"><span class="nine_type">提交审核</span></view> -->
				</view>
			</view>
		</scroll-view> 
	</view>
</template>

<script>
	
	export default {
		 
		// created: () => {
		// 	var eles = document.getElementsByClassName('one_content');
		// 	console.log(eles)
		// 	for(var i = 0;i < 5; i++){
		// 		// console.log("test")
		// 		console.log(eles[i])
		// 	}
		// },
		data() {
			return {
				proType:"", //选择的项目类型
				username:"",   //品牌名称
				location:"",  //项目所在地
				begintime:"",  // 项目的预计开业时间
				item_type:"", // 项目分类
				finance_data:"",// 是否拥有场地
				side_data:"",// 是否有独立该项目及财务核算
				name:"", //团队成员名称
				role:"", //团队中的职位
				back:"", //其背景
			}
		},
		methods: {
			//点击提交按钮  触发事件 get方式请求数据
			send(){
				console.log("send")
				uni.request({
					method:"GET",
					url:"",
					data:{
						uproType:this.proType,
					}
				})
			},
			//单选按钮
			itemtype(e){
				let index = e.currentTarget.id;
				let value = e.target.value;
				console.log(value,index)
			},
			
			username_output(){
				console.log(this.username)
			},
			location_output(){
				console.log(this.location)
			},
			begintime_output(){
				console.log(this.begintime)
			},
			name_output(){
			console.log(this.name)
			},
			role_output(){
				console.log(this.role)
			},
			back_output(){
				console.log(this.back)
			},
			
			type(name){
				switch(name){
					case 'jiudian':
					this.proType = name;
					console.log(this.proType)
					break;
					case 'nongye':
					this.proType = name;
					console.log(this.proType)
					break;
					case 'canyin':
					this.proType = name;
					console.log(this.proType)
					break;
					case 'xiuxian':
					this.proType = name;
					console.log(this.proType)
					break;
					case 'minsu':
					this.proType = name;
					console.log(this.proType)
					break;
				}
			}
			
		}
	}
</script>

<style>
	/* 全局 */
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
	margin-left: 6upx;
	font-size: 40upx;
	color: #000;
}
/* 第一项详细 */
.one_minute_type{
	margin-left: 6upx;
	font-size: 30upx;
	color: #999;
}
/* 第二项 */
.page_two{
	display: flex;
	flex-direction: column;
	width: 360px;
	height: 360px;
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
	transform: scale(0.5,0.5);
}
image{
	width: 100upx;
	height: 100upx;
	margin-left: 20upx;
	margin-top: 20upx;
	/* align-items: center; */
}
input{
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
/* .seven_but{
	width: 260px;
	height: 35px;
	margin-left: 10upx;
	margin-left: 30px;
	margin-right: 30px;
	margin-top: 10px;
	border: 1px solid #999;
} */
.seven_but span{
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
.nine_but{
	height: 100upx;
	display: flex;
}
.nine_but_save{
	flex: 1;
}
.nine_but_save image{
	vertical-align: middle;
	width: 60upx;
	height: 60upx;
	margin-bottom: 23upx;
}
.nine_but_sub{
	flex: 3;
	background: #007AFF;
}
</style>
