<template>
  <section class="login-banner">
    <div class="login-container">
      <h3>Выберите аккаунт для входа</h3>
      <MessAcc
        name="Алмат Саматов"
        lastVisit="01.07.2024"
        profilePicture="/img/profile/profile-picture1.jpg"
        @select="selectUser"
      />
      <MessAcc
        name="Айгул Максатова"
        lastVisit="04.07.2024"
        profilePicture="/img/profile/profile-picture2.jpg"
        @select="selectUser"
      />
    </div>
    <img src="/img/messenger-header.jpg" alt="banner of messenger" />
  </section>
</template>

<script>
import MessAcc from "../components/MessAcc.vue";
export default {
  name: "HeaderLogin",
  components: {
    MessAcc,
  },
  methods: {
    selectUser(user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      this.$router.push({ name: "ChatPage" });
    },
  },
};
</script>

<style scoped>
.login-banner {
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  width: 50%;
  background-color: #dee2e6;
  text-align: start;
  gap: 15px;
}

.harmonic-text h3 {
  font-size: 24px;
}

img {
  height: 500px;
  width: 50%;
}
</style>
