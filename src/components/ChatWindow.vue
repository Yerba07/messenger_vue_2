<template>
  <div class="chat-window">
    <div class="user-list">
      <ul>
        <li
          v-for="user in users"
          :key="user.id"
          @click="selectChatUser(user)"
          :class="{ active: user.id === activeChatUser?.id }"
        >
          {{ user.name }}
        </li>
      </ul>
    </div>
    <div class="chat-area">
      <div class="messages">
        <div
          v-for="message in messages"
          :key="message.timestamp"
          :class="{ 'my-message': message.from.id === currentUser.id }"
        >
          <strong>{{ message.from.name }}:</strong> {{ message.text }}
        </div>
      </div>
      <div class="message-input">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          placeholder="Введите сообщение"
        />
        <button @click="sendMessage">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatWindow",
  data() {
    return {
      users: [
        { id: 1, name: "Алмат Саматов" },
        { id: 2, name: "Айгул Максатова" },
        { id: 3, name: "Арман Нурланов" },
      ],
      currentUser: JSON.parse(localStorage.getItem("currentUser")),
      activeChatUser: null,
      newMessage: "",
      messages: [],
    };
  },
  methods: {
    selectChatUser(user) {
      this.activeChatUser = user;
      this.loadMessages();
    },
    loadMessages() {
      const chatKey = `chat_${this.currentUser.id}_${this.activeChatUser.id}`;
      this.messages = JSON.parse(localStorage.getItem(chatKey)) || [];
    },
    saveMessages() {
      const chatKey = `chat_${this.currentUser.id}_${this.activeChatUser.id}`;
      localStorage.setItem(chatKey, JSON.stringify(this.messages));
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        const message = {
          from: this.currentUser,
          text: this.newMessage,
          timestamp: Date.now(),
        };
        this.messages.push(message);
        this.saveMessages();
        this.newMessage = "";
      }
    },
  },
  mounted() {
    const savedUser = localStorage.getItem("activeChatUser");
    if (savedUser) {
      this.activeChatUser = JSON.parse(savedUser);
      this.loadMessages();
    } else if (this.users.length > 1) {
      this.selectChatUser(this.users[1]);
    }
    window.addEventListener("storage", this.loadMessages);
  },
  beforeDestroy() {
    window.removeEventListener("storage", this.loadMessages);
  },
};
</script>

<style scoped>
.chat-window {
  display: flex;
  height: 85vh;
}
.user-list {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 20px;
}
.user-list ul {
  list-style: none;
  padding: 0;
}
.user-list li {
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s;
}
.user-list li:hover {
  background-color: #f0f0f0;
}
.user-list li.active {
  background-color: #e0e0e0;
}
.chat-area {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
.messages .my-message {
  text-align: right;
}
.message-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #fff;
}
.message-input input {
  flex: 1;
  padding: 10px;
}
.message-input button {
  padding: 10px 20px;
}
</style>
