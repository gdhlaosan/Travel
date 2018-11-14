<template>
	<div class="search">
		<input class="search-input" type="text" placeholder="输入城市或拼音" />
	</div>
</template>

<script>
export default {
	name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.search
		height 0.72rem
		padding 0 0.1rem
		background-color $bgColor
		.search-input
			width 100%
			box-sizing border-box
			height 0.62rem
			line-height 0.62rem
			padding 0 0.1rem
			text-align center
			border-radius 0.06rem
			
</style>