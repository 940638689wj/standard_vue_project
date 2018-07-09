<template lang="html">
  <a href="javascript:;"
    class="grid-list"
    :style="{ width: 100 / $parent.cols + '%' }">
    <div class="grid-icon" :style="{ background: hasNumSlot ? '#f8f8f8' : 'none'}">
      <slot name="icon" v-if="hasIconSlot"></slot>
      <slot name="num" v-if="hasNumSlot" class="num"></slot>
    </div>
    <p class="grid-label" v-if="hasLabelSlot">
      <slot name="label"></slot>
    </p>
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      index: 0,
      hasIconSlot: false,
      hasLabelSlot: false,
      hasNumSlot: false
    }
  },
  mounted () {
    this.$slots.icon && (this.hasIconSlot = true)
    this.$slots.label && (this.hasLabelSlot = true)
    this.$slots.num && (this.hasNumSlot = true)
  }
}
</script>

<style lang="less" scoped>
  .grid-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 7rem;

    > .grid-icon {
      position: relative;
      background: #f8f8f8;
      border-radius: 0.16rem;
      line-height: 3.52rem;
      height: 3.52rem;
      width: 3.52rem;
      margin-bottom: 0.64rem;
      display: flex;
      justify-content: center;

      .num {
        font-size: 20px;
        font-weight: bold;
        color: #333;
      }
    }
    > .grid-label {
      font-size: 12px;
    }
  }

</style>
