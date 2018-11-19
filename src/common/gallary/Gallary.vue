<template>
	<div class="gallary" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <!-- slides -->
			    <swiper-slide
			    	v-for="(item, index) in imgs" 
			    	:key="index"
			    >
			    	<img class="gallary-img" :src="item">
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		imgs: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observer: true,
				observeParents: true
			}
		}
	},
	methods: {
 		handleGallaryClick () {
 			this.$emit('close')
 		}
	}
}
</script>

<style lang="stylus" scoped>
	.gallary >>> .swiper-container
		overflow inherit
	.gallary
		position fixed
		display flex
		flex-direction column
		justify-content center
		left 0
		right 0
		top 0
		bottom 0
		background-color #000
		z-index 5
		.wrapper
			width 100%
			height 0
			padding-bottom 66.4%
			.gallary-img
				width 100%
			.swiper-pagination
				color: #fff
				bottom -1rem
			
</style>