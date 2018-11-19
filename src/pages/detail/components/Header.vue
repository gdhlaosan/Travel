<template>
	<div class="header">
		<router-link 
			tag="div" 
			class="header-abs"
			to="/"
			v-show="showAbs"
		>
			<i class="iconfont header-abs-back">&#xe624;</i>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
			景点详情
			<router-link to="/">
				<i class="iconfont header-fixed-back">&#xe624;</i>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data () {
		return {
			showAbs: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll () {
			console.log('scroll')
			var top = document.documentElement.scrollTop
			if (top > 60) {
				let opacity = top / 140
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.showAbs = false
			}else {
				this.showAbs = true
			}
		}
	},
	activated () {
		window.addEventListener('scroll', this.handleScroll)
	},
	deactivated () {
		//解绑
		window.removeEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
	.header-abs
		position absolute
		left 0.2rem
		top 0.2rem
		width 0.8rem
		height 0.8rem
		line-height 0.8rem
		text-align center
		border-radius 0.4rem
		background-color rgba(0, 0, 0, .8)
		z-index 2
		.header-abs-back
			font-size 0.4rem
			color #fff
	.header-fixed
		position fixed
		left 0
		top 0
		right 0
		overflow hidden
		height $headerHeight
		line-height $headerHeight
		text-align center
		font-size 0.32rem
		background-color $bgColor
		color $whiteTextColor
		z-index 3
		.header-fixed-back
			position absolute
			top 0
			left 0.2rem
			color $whiteTextColor
</style>