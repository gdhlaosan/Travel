<template>
	<div class="recommend">
		<div class="title">猜你喜欢</div>
		<ul>
			<router-link 
				tag="li" 
				class="item border-bottom" 
				v-for="item of list" 
				:key="item.id"
				:to="'/detail/' + item.id"
			>
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
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
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

	.title
		line-height 0.4rem
		background-color #eee
		padding 0.2rem
	.item
		overflow hidden
		display flex 
		.item-img
			width 1.7rem
			height 1.7rem 
			padding 0.1rem
		.item-info
			flex 1
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
			.item-button
				margin-top 0.3rem
				background-color #ff9300
				color $whiteTextColor
				padding 0 0.2rem
				border-radius 0.06rem
			
	
</style>