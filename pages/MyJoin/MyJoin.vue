<template>
	<view class="MyBuild">
<!-- 		<u-tabs :list="tabList" @click="slectTab"></u-tabs> -->
		<view class="title">
			我加入的
		</view>
		<view class="content">
			<view class="itemCourse" v-for="(item,i) in CourseList" :key="i">
				<view class="itemCourseLeft" @click="showDetail(item)">
					<view class="contentTop">
						<image src="/static/study2.png" mode="scaleToFill" style="height: 42rpx;width: 50rpx;"></image>
						<view style="display: inline;" class="course">{{item.name}}</view>
						
						<view class="" style="margin-right:15rpx;">
							| 
						</view>
						<view :class="item.type ? 'yes':'no'">
							{{item.type==0 ? '未开始':'点名中'}}
						</view>
					</view>
					<view class="contentBottom">
						<view class="creatTime">
							上课次数：{{item.time}}
						</view>
					</view>
				</view>
				
				<view class="itemCourseRight">
						<button v-if="!item.type" type="default" disabled size="mini"> 未开课</button>
						<button v-else type="primary" size="mini" @click="sign(item)">签到</button>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {wxLogin,getSessionId,getJoinList,Sign,getStudentInfo} from "../../api/base.js"
	
		export default {
			data() {
				return {
					userName:'',
					userNumber:'',
					tabIndex:0,
					coursename:"",
					class:"",
					CourseList:[
					],
					tabList:[{
						name:'全部',
					},
					{
						name:'点名中',
					}
						
					]
				}
			},
			methods: {
				// test(a){
				// 	console.log(a)
				// },
				// wxLogin(code){
				// 	return request({
				// 		url:"/user/getSessionId",
				// 		methods:"GET",
				// 		data:{
				// 			code,
				// 		}
				// 	})
				// }
				// async getAuthorize(){
				// 	await uni.authorize({
				// 	    scope: 'scope.userInfo',
				// 	    success() {
				// 	        console.log("用户授权信息")
				// 	    }
				// 	})
				// },
				async getId(res){
					await getSessionId(res.code).then(res=>{
						// console.log(res)
						if(res.code===200){
							uni.setStorage({
								key: 'sessionId',
								data: res.data.sessionId,
								success: function () {
									console.log('success');
								}
							});
						}else{
							wx.showModal({
							     title: '提示',
							     content: '登录失败（获取sessionId失败）',
							   })
						}
						
					})
					
				},
				async Login(){
					if(uni.getStorageSync('id'))return
					let that =this;
					wx.login({
					  success (res) {
						  console.log(res,"Aaaaa")
						that.getId(res)
					    if (res.code&&!uni.getStorageSync('id')) {
							 wx.showModal({
							      title: '温馨提示',
							      content: '亲，授权微信登录后才能正常使用小程序功能',
							      success(res) {				
									  uni.getUserInfo({
										desc: '使用前请先授权',
										lang: 'zh_CN',
										success:(res)=>{
											console.log(res,"sssss")
											wxLogin({
												iv:res.iv,
												encryptedData:res.encryptedData,
												sessionId:uni.getStorageSync('sessionId'),
											}).then(res=>{
												if(res.code==200){
												
													uni.setStorageSync("id",res.data.id)
													// else
													// this.Login()
												}
												else{
												wx.showModal({
													 title: '提示',
													 content: '登录失败（获取id失败）',
												})
											}
											})
										},
										fail:(res)=>{
											console.log(res,"ssss")
										}
										
									  })
						
									  
		
								  }
								  })
							
					    } else {
					      console.log('登录失败！' + res.errMsg)
					    }
					  }
					})
				},
				async getJoinList(){
					let id = uni.getStorageSync('id');
					await getJoinList(id).then(res=>{
						this.CourseList=res.data
						this.CourseList.sort((obj1, obj2)=>{
							return obj2.type-obj1.type
						})
					})
				},
				async sign(item){
					if(!this.userNumber){
						await this.getStudentInfo()
					}
					await Sign({courseId:item.id,studentNumber:this.userNumber,time:item.time}).then(res=>{
						if(res.code===200){ 
							wx.showModal({
							     title: '提示',
							     content: '签到成功',
							   })
						}else if(res.code===404)
						{
							wx.showModal({
							     title: '提示',
							     content: "您已签到，不可重复签到",
							   })
						}else{
							wx.showModal({
							     title: '提示',
							     content: '请先在个人信息中绑定姓名学号',
							   })
						}
					})
					this.getJoinList()
				},
				slectTab(item){
					console.log(item)
					this.tabIndex=item.index
				},
				async getStudentInfo(){
						await getStudentInfo({id:uni.getStorageSync('id')}).then(res=>{
							 this.userNumber=res.data.number;
							 this.userName=res.data.name;
						})
				},
				init(){
					let time = setInterval(()=>{
						if(uni.getStorageSync('id')){
							// this.getAuthorize()
							this.getJoinList()
							// this.getStudentInfo()
							clearInterval(time)
						}else{
							console.log("dasd")
						}
					},250)
				},
				async showDetail(item){
					if(!this.userNumber){
						await this.getStudentInfo();
					};
					uni.navigateTo({
						url:`OrderDetail?courseId=${item.id}&number=${this.userNumber}&name=${item.name}&time=${item.time}`,
						fail:(res)=>{
							console.log(res)
						},
						success:(res)=>{
							console.log(res,"success")
						}
					})
				}
			},
			onReady(){
				this.Login()
	
				// uni.getLocation({
				// 	type: 'wgs84',
				// 	success: function (res) {
				// 		console.log('当前位置的经度：' + res.longitude);
				// 		console.log('当前位置的纬度：' + res.latitude);
				// 	},
				// 	fail:()=>{
						
				// 	}
				// });
				
				// wx.authorize({scope: 'scope.userLocationBackground'})
				// this.$api.request({
				// 				url: '/user/authLogin',
				// 				method: 'POST',
				// 				data:{
									
				// 				}
				// 			}).then(res => {
				// 				console.log("------res------",res)
				// 			})
			},
			onTabItemTap(){
				if(uni.getStorageSync("id"))
				this.getJoinList()
			},
			onLoad(){
				this.init()
			}
	}
	
</script>
<style  lang="less" scoped>

.itemCourse{
	display: flex;
	align-items: center;
	justify-content:space-between;
	margin: 30rpx;
	background-color: #fff;
	border-radius: 30rpx;
	padding:30rpx;
	.itemCourseLeft{
		vertical-align: middle;
	}
	
}
.contentTop{
	display: flex;
	align-items: center;
		
	.course{
		max-width: 250rpx;
		font-size: 40rpx;
		margin:  0 20rpx;
	}
		
	.class{
		font-size: 30rpx;
		font-weight: 300;
	}
}
.contentBottom{
	margin: 30rpx 0 0 0;
	font-size: 24rpx;
	color:#8a8a8a;
}
.itemCourseRight{
			image{
				vertical-align: middle;
				width: 50rpx;
				height: 50rpx;
			}
}

.yes{
	color:green;
}
.no{
	color:#ccc;
}

</style>