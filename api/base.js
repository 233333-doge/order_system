import { request } from "../request/ruquest.js"
// 获取SessionId
export function getSessionId(code){
		return request({
			url:"/user/getSessionId",
			method:"GET",
			data:{
				code,
			}
		})
}
// 登录
export function wxLogin(data){
		return request({
			url:"/user/authLogin",
			method:"POST",
			data:{
				...data
			}
		})
}
// 获取用户学号姓名
export function getStudentInfo(data){
		return request({
			url:"/user/getstudent",
			method:"GET",
			data
		})
}
// 教师获取自己所创建的课程
export function getBuildList(id){
		return request({
			url:"/sc/teacourselist",
			method:"GET",
			data:{
				id
			}
		})
}
// 教师创建课程
export function addCourse(data){
		return request({
			url:"/course/addcourse",
			method:"POST",
			data
		})
}
//设置自己的学号以及姓名
export function setNameNum(data){
		return request({
			url:"/user/setmessagebyid",
			method:"POST",
			data
		})
}
// 学生获取自己加入的课程
export function getJoinList(id){
		return request({
			url:"/sc/courselist",
			method:"GET",
			data:{
				id
			}
		})
}
// 教师发起签到
export function Order(data){
		return request({
			url:"/record/addregistration",
			method:"POST",
			data
		})
}
// 教师结束签到
export function OrderEnd(data){
		return request({
			url:"/record/endregistration",
			method:"POST",
			data
		})
}
// 教师查询最近一次课程的签到列表
export function getOrderedList(data){
		return request({
			url:"/record/courseregistrationlist",
			method:"GET",
			data
		})
}
// 学生签到
export function Sign(data){
		return request({
			url:"/record/studentregistration",
			method:"POST",
			data
		})
}
// 设置学生请假
export function setLeave(data){
		return request({
			url:"/record/setleave",
			method:"POST",
			data
		})
}
// 学生查询单个课程签到的所有情况
export function getOrderDetail(data){
		return request({
			url:"/record/scourseregistrationlist",
			method:"GET",
			data
		})
}


