<template>
	<div class="recommend">
		<div class="title">猜你喜欢</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" alt="">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommed',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
				title: '北京欢乐谷',
				desc: '世界五大宫之首，穿越与您近在咫尺'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
				title: '北京欢乐谷',
				desc: '世界五大宫之首，穿越与您近在咫尺'
			},{
				id: '0003',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
				title: '北京欢乐谷',
				desc: '世界五大宫之首，穿越与您近在咫尺'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/c2/c2d6eb9c771a3df3a3.img.jpg_200x200_3585386c.jpg',
				title: '北京欢乐谷',
				desc: '世界五大宫之首，穿越与您近在咫尺'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>

@import '~@/assets/styles/mixins.styl'

	.title
		line-height 0.4rem
		background-color #eee
		padding 0.2rem
	.item
		overflow hidden
		display flex 
		.item-img
			width 1.7rem
			height 1.7rem 
			padding 0.1rem
		.item-info
			flex 1
			padding 0.1rem
			min-width 0
			.item-title
				line-height 0.54rem
				font-size 0.32rem
				ellipsis()
			.item-desc
				line-height 0.4rem
				color #ccc
				ellipsis()
			.item-button
				margin-top 0.3rem
				background-color #ff9300
				color #fff
				padding 0 0.2rem
				border-radius 0.06rem
			
	
</style>