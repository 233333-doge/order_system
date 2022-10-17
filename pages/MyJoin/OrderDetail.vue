<template>
	<view class="OrderDetail">
		<view class="title">
			{{option.name}}
		</view>
		<view class="Content">
			<view class="ContentItem" v-for="(item,i) in orderDetailList" :key="i">
				<view class="itemTop">
					<view class="creatTime">
						点名时间：{{item.createTime}}
					</view>
				</view>
				<view class="itemBottom">
					<view class="time">
						第{{item.time}}次上课
					</view>
					<view :class="item.type===0?'no':'yes'">
						<view class="font">
							{{item.type===0?'旷课':'已签到'}}
						</view>
						
					</view>
				</view>
			</view>
		</view>
		<view class="" v-if="option.time==='0'" style="margin-top: 50rpx;">
			<u-alert title="暂时还没有上课记录哦" type = "warning" :description = "description" center></u-alert>
		</view>
	</view>
</template>

<script>
	import {getOrderDetail} from "../../api/base.js"
	export default{
		data(){
			return {
				option:{},
				orderDetailList:[]
			}
		},
		onLoad(option){
			console.log(option)
			this.option=option;
			this.getOrderDetail()
		},
		methods:{
			async getOrderDetail(){
				await getOrderDetail(this.option).then(res=>{
					this.orderDetailList=res.data
				})
			}
		}
		
	}
</script>

<style lang="less" scoped>
.ContentItem{
	margin: 30rpx;
	height: 120rpx;
	width: 630rpx;
	background-color: #fff;
	border-radius: 30rpx;
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.creatTime {
		height: 60rpx;
		
	}
	.itemBottom{
		display: flex;
		align-items:flex-end;
		font-size: 26rpx;
		.time{
			color: #ccc;
			margin-right: 30rpx;
		}
		.font{
			color: #fff;
		}
		.yes{
			width: 100rpx;
			height: 40rpx;
			background-color: #1aad19;
			border-radius: 20rpx;
			text-align: center;
			line-height: 40rpx;
		}
		.no{
			width: 100rpx;
			height: 40rpx;
			background-color: #ff4b4b;
			border-radius: 20rpx;
			text-align: center;
			line-height: 40rpx;
		}
	}
}
</style>