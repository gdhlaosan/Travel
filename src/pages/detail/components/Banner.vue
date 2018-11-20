<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg">
			<div class="banner-info">
				<div class="banner-title">{{sightName}}</div>
				<div class="banner-number">
					<i class="iconfont">&#xe796;</i>
					{{gallaryImgs.length}}
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="gallaryImgs"
				v-show="isShowGallary"
				@close="gallaryChangeClose"
			></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
	name: "DetailBanner",
	props: {
		sightName:  String,
		bannerImg:  String,
		gallaryImgs: Array
	},
	components: {
		CommonGallary,
		FadeAnimation
	},
	data () {
		return {
			isShowGallary: false,
		}
	},
	methods: {
		handleBannerClick () {
			this.isShowGallary = true
		},
		gallaryChangeClose () {
			this.isShowGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position relative
		overflow hidden
		height 0
		padding-bottom 55%
		background-color #eee
		.banner-img
			width 100%
		.banner-info
			display flex
			position absolute
			color #fff
			left 0
			right 0
			bottom 0
			line-height 0.6rem
			padding 0 0.2rem
			background-image linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,.8))
			.banner-title
				flex 1
				font-size 0.32rem
			.banner-number
				display flex
				height 0.4rem
				line-height 0.4rem
				margin-top 0.1rem
				padding 0 0.2rem
				background-color rgba(0,0,0,.5)
				border-radius 1.0rem
				font-size 0.24rem
				
			
				
</style>
