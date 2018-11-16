<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市或拼音" />
		</div>
		<div class="search-content" v-show="keyword" ref="content">
			<ul>
				<li class="item border-bottom" 
					v-for="item in list" 
					:key="item"
					@click="handleClick(item)">{{item}}</li>
				<li class="item border-bottom" v-show="isListShow">没有找到匹配项</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex' 
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
	mounted () {
		this.scroll = new BScroll(this.$refs.content)
	},
	computed: {
		isListShow () {
			return !this.list.length
		}
	},
	watch: {
		keyword () {
			//函数节流
			if(this.timer) {
				clearTimeout(this.timer)
			}
			this.timer = setTimeout(() => {
				let list = []
				for(let i in this.cities) {
					if(this.keyword) {
						this.cities[i].forEach((item, index) => {
							if(item.spell.indexOf(this.keyword) > -1 || item.name.indexOf(this.keyword) > -1) {
								list.push(item.name)
							}
						})
					}
				}
				this.list = list
			},100)
		}
	},
	methods: {
		handleClick (city) {
			// this.$store.commit('changCity', city)
			this.changCity(city)
			//编程式导航
			this.$router.push('/')
		},
		...mapMutations(['changCity'])
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
		overflow hidden
		z-index 1
		left 0
		top 1.58rem
		right 0
		bottom 0
		background-color #eee
		.item
			line-height 0.62rem
			padding-left 0.2rem
			color #666
			background-color #fff
			
</style>