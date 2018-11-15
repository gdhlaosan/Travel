<template>
	<ul class="list">
		<li class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@click="handleClick"
			@touchstart="handleStart"
			@touchmove="handleMove"
			@touchend="handleEnd"
			>
			{{item}}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'CityAlphabet',
	props: {
		cities: Object,
	},
	data () {
		return {
			startStatus: false,
			startY: 0
		}
	},
	updated () {
		this.startY = this.$refs['A'][0].offsetTop
	},
	computed: {
		letters () {
			const letters = [];
			for(let i in this.cities) {
				letters.push(i)
			}
			return letters
		}
	},
	methods: {
		handleClick (e) {
			this.$emit('change', e.target.innerText)
		},
		handleStart () {
			this.startStatus = true
		},
		handleMove (e) {
			if(this.startStatus) {
				//函数节流
				if(this.timer) {
					clearTimeout(this.timer)
				}
				this.timer = setTimeout(() => {
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - this.startY) / 22)
					if(index >= 0 && index < this.letters.length) {
						this.$emit('change', this.letters[index])
					}
				},16)
			}
		},
		handleEnd () {
			this.startStatus = false
		}
 	}
}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.list
		position absolute
		display flex
		flex-direction column
		justify-content center
		top 1.58rem
		right 0
		bottom 0
		width 0.44rem
		color $bgColor
		.item
			line-height 0.44rem
			text-align center
</style>