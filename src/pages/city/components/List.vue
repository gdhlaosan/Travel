<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
					<div class="button-wrapper">
						<div class="button">北京</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<ul class="item-list">
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
				</ul>
				<div class="title border-topbottom">B</div>
				<ul class="item-list">
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
				</ul>
				<div class="title border-topbottom">C</div>
				<ul class="item-list">
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
					<li class="item border-bottom">阿拉尔</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
	name: 'CityList',
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper)
	}
}
</script>

<style lang="stylus" scoped>
	.border-topbottom
		&:before
			border-color #ccc
		&:after
			border-color #ccc
	.border-bottom
		&:before
			border-color #ccc
			
	.list
		overflow hidden
		position absolute
		top 1.58rem
		left 0
		right 0
		bottom 0
		.title
			height 0.54rem
			line-height 0.54rem
			background-color #eee
			padding-left 0.2rem
			color #666
			font-size 0.26rem
		.button-list
			overflow hidden
			padding 0.1rem 0.6rem 0.1rem 0.1rem
			.button-wrapper
				float left
				width 33.33%
				.button
					border: 0.02rem solid #ccc
					margin 0.1rem
					padding 0.1rem 0
					text-align center
					border-radius 0.06rem
		.item-list
			.item
				padding-left 0.2rem
				line-height 0.58rem
</style>