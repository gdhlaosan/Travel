<template>
	<div>
		<detail-banner
			:sightName="sightName"
			:bannerImg="bannerImg"
			:gallaryImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
	name: "Detail",
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			sightName: '',
			bannerImg: '',
			gallaryImgs: [],
			list: []
		}
	},
	mounted () {
		this.getDetailInfo()
		
	},
	methods: {
		getDetailInfo () {
			axios.get('/api/detail', {
				params: {
					id: this.$route.params.id
				}
			})
			.then(this.handleGetInfoSucc)
		},
		handleGetInfoSucc (res) {
			const oJson = res.data
			if(oJson.ret && oJson.data) {
				this.sightName = oJson.data.sightName
				this.bannerImg = oJson.data.bannerImg
				this.gallaryImgs = oJson.data.gallaryImgs
				this.list = oJson.data.categoryList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height 50rem

</style>
