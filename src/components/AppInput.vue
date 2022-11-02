<template>
  <div class="form-control">
    <input 
      :type="inputType" 
      :class="modelValue ? 'value' : 'empty'"
      :value="modelValue"
      @input="changeModelValue"
    >
    <label>
      {{ labelValue }}
    </label>
    
    <div class="input-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: "",
    }
  },
  emits: ['update:modelValue'],
  props: {
    labelValue: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: false,
      default: "text",
      validator(value) {
        const inputType = ['button', 'checkbox', 'file', 'hidden', 'image', 'password', 'radio', 'reset', 'submit', 'text']
        return inputType.includes(value)
      }
    },
    modelValue: String,
  },
  methods: {
    changeModelValue(event) {
      this.$emit("update:modelValue", event.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
  .form-control
    position: relative

    input
      background-color: transparent
      color: rgba(15, 61, 62, 0.7)
      border: none
      border-bottom: 2px solid rgba(15, 61, 62, 0.7)
      padding: 0 0.5rem 0.5rem 0
      width: 100%

      &:focus
        // border-color: white

    label
      position: absolute
      top: 0
      bottom: 0.5rem
      left: 0
      right: 0
      pointer-events: none
      color: rgba(15, 61, 62, 0.7)
      transform: translate(0)
      transition: transform 0.15s ease-out, font-size 0.15s ease-out, color 0.15s ease-out

    input:focus + label,
    input.value + label
      font-size: 0.75rem
      // color: white
      transform: translate(0, -60%)

    .input-inner
      display: flex
      justify-content: flex-end
      margin-top: 1rem
</style>