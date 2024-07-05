<template>
  <nav>
    <div class="nav-container">
      <img
        src="../../public/img/Telegram_Logo.svg.webp"
        alt="messenger logo"
        @click="goToHome"
      />
      <div class="nav-menu">
        <a href="#">Регистрация</a>
        <a href="#">Войти</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    goToHome() {
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push({ name: "LoginPage" });
      }
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0;
  width: 90%;
  margin: 0 auto;
}

.nav-menu {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  font-size: 1.6rem;
  color: #364fc7;
}

a:hover {
  color: #5c7cfa;
}

img {
  height: 3.5rem;
  cursor: pointer;
}
</style>
