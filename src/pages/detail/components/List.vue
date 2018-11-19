<template>
	<div class="list">
		<div 
			class="list-item"
			v-for="(item, index) in list"
			:key="index"
		>
			<div class="item-title border-bottom">
				<span class="list-item-icon"></span>
				{{item.title}}
			</div>
			<div v-if="item.children" class="children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DetailList",
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	.item-title
		line-height 0.8rem
		padding 0 0.2rem
		font-size 0.32rem
		.list-item-icon
			display inline-block
			position relative
			width 0.36rem
			height 0.36rem
			left 0.06rem
			top 0.08rem
			background-color red
			background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
			margin-right .1rem
			background-size .4rem 3rem
	.children
		padding-left 0.2rem
</style>
