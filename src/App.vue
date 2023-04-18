<template>
  <Header @open-nav="openNavigation"></Header>
  <navigation v-if="navigation"/>
  <div>app</div>
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Navigation from "@/components/NavigationComponent.vue";

export default {
  data() {
    return {
      navigation: true,
    }
  },
  components: { Header, Navigation },
  methods: {
    openNavigation() {
      console.log("openNavigation");
    }
  }
};
</script>
