<template>
  <main>
    <section class="main-section">
      <div class="main-section__wrapper">
        <div class="main-section__top">
          <h3 class="main-section__text">Пройдите точный и быстрый</h3>
          <h1 class="main-section__title">Тест на определение IQ</h1>
        </div>
        <div class="main-section__button">
          <action-button class="main-section__btn">Далее</action-button>
          <h3 class="main-section__text">
            <span class="main-section__text_accent">
              И получите рекомендации по развитию своего интеллекта</span
            >
            и улучшению финансового благосостояния и личной жизни
          </h3>
        </div>
      </div>
    </section>
    <section class="prof-iq-section">
      <div class="prof-iq-section__wrapper">
        <h3 class="prof-iq-section__title">
          Профессиональный IQ-тест позволяет не только определить коэффициент
          вашего интеллекта, но и выработать список рекомендаций для повышения
          этого показателя.
        </h3>
      </div>
    </section>
    <section class="you-get-section">
      <div class="you-get-section__wrapper">
        <h2 class="you-get-section__title">
          Также по результатам теста <strong>вы получите</strong> подробные
          <strong>советы</strong> по определению наиболее перспективной
          <strong>для вашего типа интеллекта сферы деятельности</strong>,
          которая принесет вам скорейший финансовый результат.
        </h2>
        <div class="you-get-section__image">
          <img src="@/assets/325-01.png" alt="brain" />
        </div>
        <action-button class="you-get-section__btn">Пройти тест</action-button>
      </div>
    </section>
    <section class="time-section">
      <div class="time-section__wrapper">
        <h3 class="time-section__title">
          Прохождение теста займет у вас не более <strong>12 минут</strong>, а
          его результаты вы сможете <strong>использовать</strong> всю жизнь.
        </h3>
        <div class="time-section__card">
          <p class="time-section__text">
            Профессиональная интерпретация и детально
            <strong>проработанные рекомендации</strong> позволят вам качественно
            <strong>изменить все аспекты своей жизни</strong>: от финансового до
            любовного.
          </p>
        </div>
        <action-button class="time-section__btn" :inherit="true">
          пройти тест
        </action-button>
      </div>
    </section>
  </main>
  <footer class="footer">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5"
        cy="5"
        r="4.4"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="0.8"
      />
    </svg>

    2019
  </footer>
</template>

<script>
export default {
  methods: {
    openTest() {
      
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/helpers/vars.scss";
.main-section {
  height: 650px;
  background: url("@/assets/rain_bk2.png");
}
.main-section__wrapper {
  min-height: 100%;
  padding: 15px;
  max-width: 500px;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url("@/assets/rain_bk.png") no-repeat center;
}
.main-section__text {
  margin-top: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  line-height: 19px;
  margin-bottom: 20px;
}
.main-section__text_accent {
  color: $accent-color;
}
.main-section__title {
  text-align: center;
  font-size: 2.5rem;
  color: $accent-color;
}
.main-section__button {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-section__btn {
  margin: 0 auto;
  margin-bottom: 20px;
}
.prof-iq-section {
  height: 500px;
  background-image: url("@/assets/image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.prof-iq-section__wrapper {
  height: 100%;
  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
}
.prof-iq-section__title {
  position: relative;
  max-width: 500px;
  letter-spacing: 0.05em;
  text-align: center;
  line-height: 23px;
  &::before {
    content: '"';
    font-size: 2.5rem;
    position: absolute;
    top: -10px;
    left: -5px;
  }
  &::after {
    content: '"';
    font-size: 2.5rem;
    position: absolute;
    bottom: -20px;
    right: -5px;
  }
}
.you-get-section {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.you-get-section__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 40px 15px;
  margin: 0 auto;
  strong {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700;
  }
}
.you-get-section__title {
  color: #272727;
  line-height: 24px;
  letter-spacing: 0.05em;
}
.you-get-section__image {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.you-get-section__btn {
  display: block;
  margin: 0 auto;
}
.time-section {
  background: url("@/assets/rain_bk2.png");
}
.time-section__wrapper {
  overflow: visible;
  position: relative;
  max-width: 600px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px;
  &:before {
    content: url("@/assets/lightning_PNG9.png");
    position: absolute;
    top: 0;
    right: 0;
  }
  &:after {
    content: url("@/assets/lightning_PNG9.png");
    position: absolute;
    bottom: -30px;
    transform: rotate(180deg);
    left: 0;
  }
}
.time-section__title {
  line-height: 20px;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  strong {
    color: $accent-color;
    font-weight: 500;
  }
}
.time-section__card {
  z-index: 2;
  background-color: $oppacity-background;
  border-radius: 20px;
  padding: 30px 15px;
  line-height: 23px;
  letter-spacing: 0.05em;
  strong {
    font-weight: 500;
  }
}
.time-section__text {
  color: #181818;
}
.time-section__btn {
  margin-top: 20px;
}
.footer {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background: url("@/assets/rain_bk2.png");
}
</style>
