<template>
  <div class="acc-container" @click="selectAccount">
    <img :src="profilePicture" alt="profile picture" />
    <div class="acc-description">
      <p class="name">{{ name }}</p>
      <p class="visit">
        Последний визит: <span>{{ lastVisit }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessAcc",
  props: {
    name: {
      type: String,
      required: true,
    },
    lastVisit: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
  },
  methods: {
    selectAccount() {
      this.$emit("select", {
        name: this.name,
        lastVisit: this.lastVisit,
        profilePicture: this.profilePicture,
      });
    },
  },
};
</script>

<style scoped>
.acc-container {
  background-color: #5f3dc4;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.acc-container:hover {
  background-color: #7950f2;
}

img {
  height: 4.5rem;
  width: 4rem;
  border-radius: 100%;
  margin-right: 1.2rem;
}

.name {
  font-size: 1.4rem;
  color: #e7f5ff;
  margin-bottom: 0.2rem;
}

.acc-description {
  color: #e7f5ff;
}

span {
  color: #99e9f2;
  font-weight: 700;
  letter-spacing: 0.8px;
}
p {
  letter-spacing: 0.8px;
}
</style>
