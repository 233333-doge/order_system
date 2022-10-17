<template>
	<view class="center">
		<view class="imformation">
			<u-alert title="个人信息一个月只能修改一次喔,请谨慎修改!" type = "warning" :description = "description"></u-alert>
			<uni-row>
				<uni-col :span="24">
					<view class="item">
						<view class="_title">学号：</view>
						<input class="numinput"  placeholder="请输入学号" type="number" v-model="info.number"/>
					</view>
				</uni-col>
				<uni-col :span="24">
					<view class="item">
						<view class="_title">姓名：</view>
						<input class="numinput" placeholder="请输入姓名" v-model="info.name"/>
					</view>
				</uni-col>
			</uni-row>
		</view>
		<view class="avtion">
			<button type="primary" @click="saceInformation">保存</button>
		</view>
	</view>
	
</template>
	
<script>
	import {setNameNum,getStudentInfo} from "../../api/base.js"
	export default{
		data(){
			return{	
				info:{
					name:"",
					number:""
				}
			}
		},
		methods:{
			 async saceInformation(){
				 Object.assign(this.info,{id:uni.getStorageSync("id")});
				 console.log(this.info)
				 await setNameNum(this.info).then(res=>{
					 if(res.code===200){
						 wx.showModal({
						      title: '提示',
						      content: '保存成功',
						    })
					 }else{
						 wx.showModal({
						      title: '提示',
						      content: '一个月只能修改一次喔！',
						    })
					 }
				 })
			},
			async getStudentInfo(){	
					await getStudentInfo({id:uni.getStorageSync('id'),}).then(res=>{
						 this.info.number=res.data.number;
						 this.info.name=res.data.name;
						 console.log(this.info)
					})
			}
		},
		onLoad(){
			this.getStudentInfo()
		}
	}
</script>

<style lang="less" scoped>
.center{
	margin:20px;
	.imformation{
		margin-bottom: 40px;
	}
}
.item{
	margin-bottom: 20px;
}
._title{
			margin: 30rpx 0;
			color:#333;
			font-weight: 600;
		}
.numinput{
	padding: 15px;
	background-color: #fff;
}
</style>