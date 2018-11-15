<template>
	<ul class="list">
		<li class="item" 
			v-for="(item, key) of cities" :key="key">{{key}}</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object
	}
}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.list
		position absolute
		display flex
		flex-direction column
		justify-content center
		top 1.58rem
		right 0
		bottom 0
		width 0.44rem
		color $bgColor
		.item
			line-height 0.44rem
			text-align center
</style>