<template>
	<div class="recommend">
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommed',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>

@import '~@/assets/styles/mixins.styl'

	.title
		line-height 0.4rem
		background-color #eee
		padding 0.2rem
	.item
		overflow hidden
		.item-img-wrapper
			overflow hidden
			height 0
			padding-bottom 38.01%
			.item-img
				width 100%
		.item-info
			padding 0.1rem
			min-width 0
			.item-title
				line-height 0.54rem
				font-size 0.32rem
				ellipsis()
			.item-desc
				line-height 0.4rem
				color #ccc
				ellipsis()
			
	
</style>