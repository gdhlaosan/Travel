<template>
	<div>
		<detail-banner></detail-banner>
		<keep-alive>
			<detail-header></detail-header>
		</keep-alive>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
	name: "Detail",
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list: [{
				title: "成人票",
				children: [{
					title: "成人票-套票",
					children: [{
						title: "成人票-套票-某某专卖店"
					}]
				}, {
					title: "成人票-情侣票"
				}]
			}, {
				title: "学生票"
			}, {
				title: "儿童票"
			}, {
				title: "特惠票"
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height 50rem

</style>
