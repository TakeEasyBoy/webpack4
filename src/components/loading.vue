<template>
	<div class="loading-Mask isFullScreen" ref="loadingMask"  :class="{'isshow':loadingState}">
		<div class='loading' ref="loading"></div>
	</div>
</template>

<script>
	export default {
	  // loadingState用于表示是否处于加载状态
	  props: {
	    loadingState: {
	      type: Boolean,
	      default: false,
	      required: true
	    }
	  },
	  data() {
	    return {
	      interval: null,
	      counts: 0
	    }
	  },
	  methods: {
	    // 动画开始
	    animate() {
	      this.interval = setInterval(this.loading, 40)
	    },
	    // 加载动画
	    loading() {
	      const animation = document.querySelector('.loading')
	      this.counts += -200
	      if (this.counts <= -5401) {
	        this.counts = 0
	      }
	      animation.style.backgroundPositionY = this.counts + 'px'
	    },
	    // 关闭蒙层加载
	    closeMask() {
	      const animation = document.querySelector('.loading')
	      const isshow = document.querySelector('.loading-Mask')
	      clearInterval(this.interval)
	      this.interval = null
	      animation.style.backgroundPositionY = '0px'
	      isshow.classList.remove('isshow')
	    }
	  },
	  watch: {
	    loadingState: function(val) {
	      this.animate()
	    }
	  },
	  mounted() {
	    if (this.$props.loadingState) {
	      this.animate()
	    }
	  },
	  beforeDestroy() {
	    clearInterval(this.interval)
	    this.interval = null
	  }
	}
</script>

<style lang='scss' scoped>
	// @import 'src/style/mixin';
	.loading-Mask{
		display: none;
		width: 100%;
		height: 100%;
		z-index: 10000;
		background-color: rgba(255,255,255,0.9);
		margin: 0;
		top: 0;
		left: 0;
		.loading{
			width: 200px;
			height: 200px;
			background-image: url('/static/image/loading.png');
			background-repeat: no-repeat;
			background-position-y: 0;

			position: absolute;
			margin:0;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
	.isFullScreen{
		position: fixed;
	}
	.isshow{
		display: block
	}
</style>
