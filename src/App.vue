<template>
  <Header @open-nav="navigation = true"></Header>
  <Transition name="slide">
    <navigation @close="navigation = false" v-if="navigation" />
  </Transition>
  <router-view />
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Navigation from "@/components/NavigationComponent.vue";

export default {
  data() {
    return {
      navigation: false,
    };
  },
  components: { Header, Navigation },
  methods: {},
};
</script>

<style lang="scss">

.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
