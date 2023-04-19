<template>
  <aside class="aside">
    <button class="close-btn" @click.prevent="this.$emit('close')">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
          fill="#FFC700"
        />
      </svg>
    </button>

    <div class="nav-wrapper">
      <nav class="nav">
        <ul>
          <li
            class="nav-item"
            :class="{ 'nav-item_active': currentPath === item.name }"
            v-for="item in links"
            :key="item.title"
          >
            <router-link :to="item.link"> {{ item.title }} </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Главная",
          link: "/",
          name: "main",
        },
        {
          title: "Информация о тесте",
          link: "/",
          name: "-",
        },
        {
          title: "Пройти тест",
          link: "/",
          name: "test",
        },
      ],
    };
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/helpers/vars.scss";

.aside {
  height: 100vh;
  position: fixed;
  padding: 15px;
  top: 0;
  left: 0;
  width: 320px;
  z-index: 10;
  background: $background-color;
}
.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
}
.nav-wrapper {
}
.nav {
  margin-top: 100px;
}
.nav-item {
  margin-bottom: 27px;
  text-transform: uppercase;
  font-weight: 300;
}
.nav-item_active {
  a {
    color: $accent-color !important;
  }
}
</style>