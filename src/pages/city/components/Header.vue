<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<i class="iconfont city-back">&#xe624;</i>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'City'
}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header
		position relative
		overflow hidden
		height $headerHeight
		line-height $headerHeight
		text-align center
		font-size 0.32rem
		background-color $bgColor
		color $whiteTextColor
		.city-back
			position absolute
			top 0
			left 0.2rem
			color $whiteTextColor
			
		
</style>