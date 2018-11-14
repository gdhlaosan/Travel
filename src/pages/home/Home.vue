<template>
	<div id="home">
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
	name: 'home',
	components: {
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data () {
		return {
			city: '',
			swiperList: [],
			iconList: [],
			recommendList: [],
			weekendList: []
		}
	},
	mounted () {
		this.getHomeInfo()
	},
	methods: {
		getHomeInfo () {
			axios.get('/home/api').
				then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc (res) {
			const oJson = res.data;
			if(oJson.ret && oJson.data) {
				this.city = oJson.data.city
				this.swiperList = oJson.data.swiperList
				this.iconList = oJson.data.iconList
				this.recommendList = oJson.data.recommendList
				this.weekendList = oJson.data.weekendList
			}
		} 
	}
}
</script>

<style lang="stylus" scoped>
</style>
