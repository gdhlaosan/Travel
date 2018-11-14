<template>
	<div id="homeHeader">
		<div class="header-left">
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="header-input">
			<i class="iconfont">&#xe632;</i>
			输入城市/游玩/主题
		</div>
		<router-link to="/city">
			<div class="header-right">
				{{city}}
				<i class="iconfont icon-arrow">&#xe6aa;</i>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'homeHeader',
	props: {
		city: String
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'

#homeHeader
	height 0.86rem
	line-height 0.86rem
	display flex
	background $bgColor
	color $whiteTextColor
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
		background $whiteBgColor
		border-radius 0.1rem
		color #ccc
	.header-right
		width 1.24rem
		float right
		text-align center
		color $whiteTextColor
		.icon-arrow
			margin-left -0.08rem
</style>
