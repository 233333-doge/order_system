<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			wx.cloud.init({
			      traceUser : true,
				  env:"cloud1-4ghdx0hr17c11779"
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
	Page{
		background-Color:#eee
		}
	.title{
		margin: 30rpx;
		color:#333;
		font-weight: 600;
	}
</style>
