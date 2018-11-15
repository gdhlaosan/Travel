<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list 
			:hotCities="hotCities" 
			:cities="cities"
			:letter="letter">
			</city-list>
		<city-alphabet 
			:cities="cities"
			@change="getHandleLetter">
		</city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ''
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city')
				.then(this.getHandleCityInfoSucc)
		},
		getHandleCityInfoSucc (res) {
			var oJson = res.data;
			if(oJson.ret &&  oJson.data) {
				this.cities = oJson.data.cities
				this.hotCities = oJson.data.hotCities
			}
		},
		getHandleLetter (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
	
</style>