<template>
  <button
    class="button text-styling"
    @click="$emit('click', $event)"
    @mouseenter="$event.target.classList.add(buttonClass)"
    @animationend="$event.target.classList.remove(buttonClass)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonHover: {
      type: String,
      default: 'blue',
    },
    text: {
      type: String,
      required: false,
    },
  },
  computed: {
    buttonClass() {
      return this.buttonHover === 'blue' ? 'button-hover-blue' : 'button-hover-white';
    },
  },

};
</script>
