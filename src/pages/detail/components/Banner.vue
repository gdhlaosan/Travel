<template>
	<div class="banner">
		<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
		<div class="banner-info">
			<div class="banner-title">北京欢乐谷(AAAA景区)</div>
			<div class="banner-number">
				<i class="iconfont">&#xe796;</i>
				39
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailBanner"
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
