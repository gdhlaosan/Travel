<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hotCities" :key="item.id">
						<div class="button" @click="handleClick(item.name)">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area"
				v-for="(item, key) of cities" 
				:key="key"
				:ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<ul class="item-list"
					v-for="innerItem of item"
					:key="innerItem.id">
					<li class="item border-bottom" @click="handleClick(innerItem.name)">{{innerItem.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
	name: 'CityList',
	props: {
		hotCities: Array,
		cities: Object,
		letter: String
	},
	computed: {
		...mapState({
			currentCity: "city"
		})
	},
	mounted () {
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	watch: {
		letter () {
			var elment = this.$refs[this.letter][0]
			this.scroll.scrollToElement(elment)
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