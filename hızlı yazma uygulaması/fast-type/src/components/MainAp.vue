<template>
  <div class="container">
    <h1 class="text">Hızlı Yazı Yazma Uygulaması</h1>
    <div v-if="time === 0">
      <div class="card-body">
        <h1>Zamanın bitti</h1>
        <p>Doğru sayısı: {{ trueCount }}  Yanlış sayısı: {{ falseCount }}</p>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body">
        <span
          v-for="(kelime, key) in kelimeler"
          :key="key"
          class="me-2"
          v-bind:class="key === 0 ? writingControl : null"
        >{{ kelime }}</span>
      </div>
      <hr />
    </div>
    <div class="input-group">
      <input
        v-model="kelime"
        @keydown="basla"
        type="text"
        class="form-control"
        placeholder="kelimeleri yazınız"
        aria-label="Recipient's username with two button addons"
      />
      <button class="btn btn-outline-secondary" type="button">
        {{ time }}
      </button>
      <button @click="degisitr" class="btn btn-outline-secondary" type="button">
        Yenile
      </button>
      <button @click="resetGame" class="btn btn-outline-secondary" type="button">
        Yeniden Başlat
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kelimeler: ["emre", "almamış", "mehmet", "başkonsolos"],
      time: 60,
      timer: null,
      kelime: null,
      isTrue: true,
      trueCount: 0,
      falseCount: 0,
      isFinish: false,
    };
  },
  methods: {
    basla() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          clearInterval(this.timer);
          this.isFinish = true; // Zaman dolduğunda oyunu bitir
        }
      }, 1000);
    },

    async degisitr() {
      const response = await this.$appAxios.get("/alfabe");
      this.kelimeler = response.data.sort(() => 0.5 - Math.random()).slice(0, 15).map((item) => item.value);
    },

    resetGame() {
      // Oyun durumunu sıfırlama işlemleri
      this.kelimeler = ["emre", "almamış", "mehmet", "başkonsolos"]; // Başlangıç kelimeleri
      this.time = 3;
      this.trueCount = 0;
      this.falseCount = 0; 
      this.kelime = ""; 
      this.isFinish = false; 
      if (this.timer) {
        clearInterval(this.timer); // Eğer timer varsa durdur
      }
    }
  },

  watch: {
    kelime(newKelime) {
      if (this.time === 0 || this.isFinish) {
        this.kelime = "";
        return;
      }

      const word = this.kelimeler[0].slice(0, newKelime.length);
      let userWord = newKelime.replace(" ", "");

      this.isTrue = word === userWord;

      if (newKelime.indexOf(" ") !== -1) {
        if (this.isTrue) {
          this.trueCount++;
          this.kelimeler.splice(0, 1);
          this.kelime = "";
        } else {
          this.falseCount++;
          this.kelime = "";
          this.kelimeler.splice(0, 1);
        }
      }
    },
  },
  computed: {
    writingControl() {
      return this.isTrue ? "writing-word" : "writing-word bg-danger";
    },
  },
};
</script>
