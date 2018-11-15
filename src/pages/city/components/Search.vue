<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音" />
		</div>
		<!-- <div class="search-content">
			<ul>
				<li></li>
			</ul>
		</div> -->
	</div>
</template>

<script>
export default {
	name: 'CitySearch',
	props: {
		cities: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	watch: {
		keyword () {
			//函数节流
			if(this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				// for(let i in this.cities) {
				// 	var 
				// }
			})
		}
	}
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
	.search-content
		position absolute
		z-index 1
		left 0
		top 1.58rem
		right 0
		bottom 0
		background-color #eee
			
</style>