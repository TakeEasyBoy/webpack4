<template>
	<div class="web-footer margin">
		<p>深圳联合金控风险资产管理有限公司 </p>
		<p>Union Financial Management Co., Ltd.</p>
	</div>
</template>
<script>

export default {
  data() {
    return {
      activeIndex: 'index'
    }
  },
  created() {}
}

</script>
<style lang='scss'>
	@import 'src/style/mixin';
	.web-footer{
		width: 100%;
		padding-top: 10px;
		height: 90px;
		text-align:center;
		p{
			@include sc(12px,#999);
			line-height: 24px;
		}
	}
</style>
