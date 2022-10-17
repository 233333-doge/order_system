<template>
	<view class="MyBuild">
		<view class="title">
			我创建的
		</view>
		<view class="content" >
			<view class="itemCourse" v-for="(item,i) in CourseList" :key="i" >
				<view class="contentTop">
					<image src="/static/study.png" mode="scaleToFill" style="height: 70rpx;width: 70rpx;"></image>
					<view style="display: inline;" class="course">{{item.name}}</view>
					<!-- <view class="class" style="display: inline;">
						|&nbsp;{{item.name}}
					</view> -->
					<view class="" style="display:block">
						<button @click="expend(item)" class="expend" plain="true">
							<image src="/static/expend.png" mode="scaleToFill"></image>
						</button>
						
					</view>
					
				</view>
				<view class="contentBottom">
					<view class="creatTime">
						创建时间：{{item.createTime}}
					</view>
					<button v-if="!item.type" type="primary" size="mini" @click="order(item)">开始点名</button>
					<button v-else type="default" size="mini" @click="orderEnd(item)">结束点名</button>
				</view>
			</view>
		</view>
		<button @click="addCourse" class="addCourse" plain="true" type="primary">
			<image src="/static/add_active1.png" mode="scaleToFill"></image>
		</button>
		<uni-popup ref="popup" type="dialog" class="popup">
			<uni-popup-dialog mode="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="submitCourse" title="添加新课程">
				<uni-row class="demo-uni-row">
					<uni-col :span="24">
						<view >课程名称</view>
						<input placeholder="请输入课程名称" v-model="form.name"/>
					</uni-col>
					<uni-col :span="24" >
						<uni-section title="请选择表格文件(只能选择一个)" type="line">
							<view class="example-body">
								<uni-file-picker  ref="filepicker" file-mediatype="all" :auto-upload="true" @select="selectFile"></uni-file-picker>
							</view>
						</uni-section>
					</uni-col>
					<!-- <uni-col> -->
						<!-- 1文本选择器 -->
						<!-- <input type="file" id="file1" ref="file"> -->
						<!-- 2上传文件按钮 -->
						<!-- <button id="btnUpload" @click="add">选择上传</button> -->
					<!-- </uni-col> -->
				</uni-row>						
			</uni-popup-dialog>
		</uni-popup>
		<u-action-sheet :actions="list" @select="selectClick" :title="title" :show="show" :closeOnClickOverlay="true" :closeOnClickAction="true" @close="show=false"></u-action-sheet>
		<u-popup :show="popupShow" mode="top"  :closeOnClickOverlay="true" @close="popupClose" @open="popupOpen" >
		        <view>
					<scroll-view 
						:scroll-into-view="toView" 
						scroll-y="true" 
						style="max-height: 900rpx;" 
						scroll-with-animation="true" 
					>
						
						<view class="studentItem" v-for="(item,i) in orderedList" :key="i">
							<view class="itemLeft">
								<view class="name" style="margin-bottom: 10rpx;">学生姓名：{{item.studentName}}</view>
								<view class="" style="display: inline;font-size: 26rpx;color: #ccc;">
									签到状态：
								</view>
								<view :class="item.type==0 ? 'no':'yes'" style="display: inline;">
									{{item.type==0 ? '未签到':'已签到'}}
								</view>
							</view>
							<view class="itemRight">
								<button v-if="!item.type"    type="primary" size="mini" @click="setLeave(item)">设置请假</button>
								<button v-else   type="default" size="mini" disabled="true">已请假</button>
							</view>
						</view>
						<view class="" v-if="!orderedList.length&&!loading" style="margin-top: 50rpx;">
							<u-alert title="暂时还没有上课记录哦" type = "warning" :description = "description" center></u-alert>
						</view>
						<view class="" v-show="loading" style="margin-top: 50rpx;">
							<u-alert title="加载中......" type = "success" :description = "description" center></u-alert>
						</view>
					</scroll-view>
   
		        </view>
		</u-popup>
	</view>
</template>

<script>
	
		import {getBuildList,addCourse,Order,OrderEnd,getOrderedList,setLeave,getStudentInfo} from "../../api/base.js"
		import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
		import config from "../../request/config.js"
		export default {
			data() {
				return {
					loading:false,
					userName:'',
					userNumber:'',
					orderedList:[],
					popupShow:false,
					show:false,
					coursename:"",
					form:{
						path:"",
						name:"",
						teacherId:"",
					},
					class:"",
					CourseList:[
						{
							coursename:"软件工程A",
							class:"计算机三班",
							creattime:"2022-10-04-21:34"
						},
						{
							coursename:"高等数学",
							class:"计算机三班",
							creattime:"2022-10-04-21:34"
						},
						{
							coursename:"大学英语",
							class:"计算机三班",
							creattime:"2022-10-04-21:34"
						}
					],
					list:[
						{
							name:'查询最近一次签到列表',
							id:0
						}
					]
				}
			},
			computed:{
				...mapState(['status']),
			},
			methods: {
				addCourse(){
					this.$nextTick(()=>{
						this.$refs.popup.open()
					})
				},
				close() {
							this.$refs.popup.close()
						},
				
				async getBuildList(){
					let id = uni.getStorageSync('id')
					await getBuildList(id).then(res=>{
						this.CourseList=res.data.reverse()
					})
				},
				selectFile(e){
					console.log(e)
					this.form.path=e.tempFilePaths[0]
					console.log(this.form.path)

				},
				async submitCourse(){
					this.form.teacherId=uni.getStorageSync("id")
					uni.uploadFile({
						url: `${config}/course/addcourse`,
						filePath: this.form.path,
						name: 'file',
						formData: {
							'teacherId':this.form.teacherId,
							'name':this.form.name
						},
						
						success: (uploadFileRes) => {
							uni.showModal({
								title: '提示',
								content: '添加课程成功',
							});
							this.getBuildList()
							this.$refs.filepicker.clearFiles(0)
							this.form.name=""
							this.$refs.popup.close()
						}
					});
					
				},
				async order(item){
					await Order({courseId:item.id}).then(res=>{
						console.log(res)
						this.getBuildList()
					})
				},
				async orderEnd(item){
					await OrderEnd({courseId:item.id}).then(res=>{
						console.log(res)
						this.getBuildList()
					})
				},
				expend(item){
					Object.assign(this.list[0],item)
					this.list[0].name="展示最近一次签到列表"
					this.show=true
				},
				async getOrderedList(data){
					await getOrderedList(data).then(res=>{
						console.log(this.orderedList,"this.orderedList")
						this.orderedList=res.data
					})
					this.loading=false
				},
				async selectClick(index){
					console.log(index)
					index.courseId=index.id
					this.getOrderedList(index)
					console.log("asdasd")
					this.popupOpen()
				},
				popupOpen(){
					this.loading=true;
					this.orderedList=[]	
					console.log(this.orderedList,"asd")
					this.popupShow=true;
				},
				popupClose(){
					this.popupShow=false;
				},
				async setLeave(item){
					console.log(item,"aaa")
					await setLeave(item).then(res=>{
						if(res.code===200){
							this.getOrderedList(res.data)
							uni.showModal({
								title: '提示',
								content: '设置成功',
							});
						}else{
							uni.showModal({
								title: '提示',
								content: '设置失败',
							});
						}
					})
				},
				async getStudentInfo(){
						await getStudentInfo({id:uni.getStorageSync('id')}).then(res=>{
							 this.userNmuber=res.data.number;
							 this.userName=res.data.name;
						})
				},
				
			},
			mounted() {
				this.getBuildList()
				this.getStudentInfo()
			},
			
	}
	
</script>
<style  lang="less" scoped>

.itemCourse{
	margin: 30rpx;
	height: 150rpx;
	width: 630rpx;
	background-color: #fff;
	border-radius: 30rpx;
	padding: 30rpx;
	
}
.contentTop{
	display: flex;
	align-items: center;
	position: relative;
	.course{
		font-size: 40rpx;
		margin:  0 20rpx;
	}
		
	.class{
		font-size: 30rpx;
		font-weight: 300;
	}
	.expend{
		border: 0 !important;
		position: absolute;
		right:-20rpx;
		top:-15rpx;
			image{
				width: 60rpx;
				height: 60rpx;
				float: right;
			}
	}
}
.contentBottom{
	display: flex;
	align-items: flex-end;
	margin: 30rpx 0 0 0;
	font-size: 24rpx;
	color:#cccccc;
	button{
		margin-right: 0rpx;
	}
}
.addCourse{
	border: 0 !important;
		image{
			width: 100rpx;
			height: 100rpx;
			position: fixed;
			bottom:100rpx;
			right: 40rpx;
		}
	}
.popup{
	uni-popup-dialog{
		view{
			margin: 0 0 20rpx 20rpx;
		};
		input{
			margin-bottom: 50rpx;
			border:2rpx solid #ccc;
			padding: 20rpx;
			border-radius: 15rpx;
			background-color: rgba(246,246,246,1.0);
		}
	}
}
.example-body {
		padding: 20rpx;
		padding-top: 0;
	}

.studentItem{
	padding: 15rpx 25rpx;
	display: flex;
	justify-content:space-between;
	align-items: center;
	border-bottom:1px solid #ccc ;
	.itemLeft{
		.yes{
			color:green
		}
		.no{
			color:red
		}
	}
}

</style>