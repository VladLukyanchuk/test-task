import { createStore } from "vuex";

export default createStore({
  state: {
    testQuestions: [
      {
        name: "male",
        answerType: "list",
        title: "Ваш пол:",
        answers: ["Мужчина", "Женщина"],
      },
      {
        name: "age",
        answerType: "list",
        title: "Укажите ваш возраст: ",
        answers: ["До 18", "От 18 до 28", "От 29 до 35", "От 36"],
      },
      {
        name: "excess",
        answerType: "list",
        title: "Выберите лишнее: ",
        answers: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
      },
      {
        name: "numbers row",
        answerType: "list",
        title: "Продолжите числовой ряд: 18  20  24  32  ",
        answers: ["62", "48", "74", "57", "60", "77"],
      },
      {
        name: "color",
        answerType: "color",
        title: "Выберите цвет, который сейчас наиболее Вам приятен:",
      },
      {
        name: "againColor",
        answerType: "color",
        title:
          "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
      },
      {
        name: "select city",
        answerType: "list",
        title: "Какой из городов лишний? ",
        answers: [
          "Вашингтон",
          "Лондон",
          "Париж",
          "Нью-Йорк",
          "Москва",
          "Оттава",
        ],
      },
      {
        name: "figure",
        answerType: "image",
        imageURL: require("@/assets/img/first-img.png"),
        title: "Какой из городов лишний? ",
        answers: ["1", "2", "3", "4"],
      },
      {
        name: "important",
        answerType: "list",
        title: "Вам привычнее и важнее:",
        answers: [
          "Наслаждаться каждой минутой проведенного времени",
          "Быть устремленными мыслями в будущее",
          "Учитывать в ежедневной практике прошлый опыт",
        ],
      },
      {
        name: "describe image",
        answerType: "list",
        title: "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению: ",
        imageURL:  require("@/assets/img/second.png"),
        answers: [
          "Оно остроконечное",
          "Оно устойчиво",
          "оно-находится в состоянии равновесия",
        ],
      },
      {
        name: "suit number",
        answerType: "image",
        imageURL: require("@/assets/img/third.png"),
        title: "Какой из городов лишний? ",
        answers: ["34", "36", "53", "44","66", "42"],
      },
    ],
    form: {},
  },
  getters: {},
  mutations: {
    setAnswer(state, item) {
      state.form[item.name] = item.answer;
    },
  },
  actions: {},
  modules: {},
});
