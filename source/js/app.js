const app = Vue.createApp({
  data() {
    return {
      messages: [
        {
          id: 1,
          avatar: "https://i.pravatar.cc/40?img=1",
          username: "Тихон Балашко",
          text: "Hi, how are you?",
          time: "24 февраля 05:30",
          timeHtml: '2022-02-24T05:30'
        },
        {
          id: 2,
          avatar: "https://i.pravatar.cc/40?img=2",
          username: "Андрей Соловей",
          text: "I'm good, thanks for asking",
          time: "24 августа 15:30",
          timeHtml: '2022-02-24T05:30'
        },
        {
          id: 3,
          avatar: '',
          username: "Владимир Кузнецов",
          text: "What have you been up to?",
          time: "21 сентября 09:30",
          timeHtml: '2022-02-24T05:30'
        },
        {
          id: 4,
          avatar: "https://i.pravatar.cc/40?img=4",
          username: "Жанна Лу",
          text: "Когда же?",
          time: "15 апреля 22:05",
          timeHtml: '2022-02-24T05:30'
        }
      ],
      visitors: [
        {
          id: 2,
          avatar: "https://i.pravatar.cc/40?img=2",
          username: "Андрей Соловей",

          time: "24 августа 15:30"
        },
        {
          id: 3,
          avatar: '',
          username: "Владимир Кузнецов",

          time: "21 сентября 09:30"
        },
        {
          id: 4,
          avatar: "https://i.pravatar.cc/40?img=4",
          username: "Жанна Лу",

          time: "15 апреля 22:05",

        }
      ],
      newMessageText: '',
      isInput: false,
    }
  },
  methods: {
    sendMessage() {
      const newMessage = {
        id: this.messages.length + 1,
        avatar: "https://i.pravatar.cc/40?img=5",
        username: "Alice",
        text: this.newMessageText,
        time: new Date().toLocaleTimeString([], { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }),
        timeHtml: new Date().toISOString()
      }
      this.messages.push(newMessage)
      this.newMessageText = ''
    },

    inputShow() {
      this.isInput = true;
    },
    cleanInput() {
      this.newMessageText = '';
    }
  }
});


app.mount('#app')
