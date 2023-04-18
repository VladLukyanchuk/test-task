<template>
  <header class="header">
    <div class="header__container">
      <button
        @click="this.$emit('open-nav')"
        class="burger-button"
        type="button"
        role="button"
        aria-label="open/close navigation"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 46px;
}
.header__container {
  display: flex;
  align-items: center;
  padding: 15px;
  height: 100%;
}

.burger-button {
  all: unset;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  display: block;
  outline: none;
  width: 24px;
  height: 16px;

  span {
    background-color: white;
    display: block;
    width: 100%;
    height: 2px;
  }
  span:nth-child(2) {
    margin: 4px 0;
  }
}
</style>