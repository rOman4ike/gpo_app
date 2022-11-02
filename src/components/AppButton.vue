<template>
  <button class="btn" :class="classValue" @click="clickBtn">
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  methods: {
    clickBtn() {
      this.$emit("action")
    }
  },
  props: {
    classValue: {
      type: String,
      required: false,
      default: "btnlink",
      validator(value) {
        return ["btnlink", "submit", "unselected"].includes(value)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .btn
    font-size: 1.25rem
    border-radius: 25px
    padding: 0.625rem 2rem
    // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
    border: 1px solid #0F3D3E
    text-transform: uppercase
    cursor: pointer
    // transition: 0.3s all
    color: #0F3D3E

    display: flex
    flex-direction: row
    align-items: center

    &.btnlink
      background-color: transparent
      // border: 1px solid #FFFFFF

      &:hover
        // color: #0F3D3E
        // box-shadow: 0 0 20px rgba(255, 255, 255, 0.5)

    &.submit
      background: #0F3D3E
      color: white
      border: none

      &:hover
        // box-shadow: 0 0 20px #44414A
        // color: #0F3D3E

    &.unselected
      border: none
      // color: #0F3D3E

      &:hover
        // box-shadow: none
        // color: white
        // transition: color .3s
        // text-decoration: underline
</style>