<template>
	<div id="homeHeader">
		<div class="header-left">
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="header-input">
			<i class="iconfont">&#xe632;</i>
			输入城市/游玩/主题
		</div>
		<div class="header-right">
			城市
			<i class="iconfont icon-arrow">&#xe6aa;</i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'homeHeader',
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

#homeHeader
	height 0.86rem
	line-height 0.86rem
	display flex
	background $bgColor
	color #fff
	.header-left
		width 0.64rem
		float left
		text-align center
	.header-input
		flex 1
		height 0.64rem
		line-height 0.64rem
		margin-top 0.12rem
		padding 0 0.1rem
		background #fff
		border-radius 0.1rem
		color #ccc
	.header-right
		width 1.24rem
		float right
		text-align center
		.icon-arrow
			margin-left -0.08rem
</style>
