<template>
	<div class="wrapper">
		<!-- 加入v-if 是为了防止数据进来后默认显示最后一张图片（因为数据加载进来的时候list为[]） -->
		<swiper :options="swiperOption" v-if="showSwiper">
		    <!-- slides -->
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl">
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'homeSwiper',
	props: {
		list: Array
	},
	data () {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
				autoplay: 3000
			}
		}
	},
	computed: {
		showSwiper () {
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active //样式穿透
	background #fff
	
.wrapper
	overflow hidden
	width 100%
	height 0
	padding-bottom 31.25%
	background-color #eee
	.swiper-img
		width 100%
</style>
