<template>
  <div class="weather-container">
    <div class="days-container">
      <div
        v-for="forecast in Forecast"
        :key="forecast.dt"
        @click="changeDay(forecast.dt)"
        class="day"
        :class="{ active: active == forecast.dt }"
      >
        <div class="date-info">
          <h1>
            {{ convertTimestamp(forecast.dt).week_day }}
          </h1>
          <p class="date">{{ dateNoYear(forecast.dt) }}</p>
        </div>
        <img
          :src="`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
        />
        <div class="temp-min-max">
          <p>Max: {{ KelvinToCelcius(forecast.temp.max) }} °C</p>
          <p>Min: {{ KelvinToCelcius(forecast.temp.min) }} °C</p>
        </div>
      </div>
    </div>
    <div
      v-for="forecast in getActiveForecast(Forecast)"
      :key="forecast.dt"
      class="additional-info"
    >
      <AdditionDay :forecast="forecast" />
    </div>
  </div>
</template>

<script>
//props[forecast]
import AdditionDay from "./AdditionDay";
import { mapGetters } from "vuex";
import { convertTimestamp, KelvinToCelcius } from "../functions/formating";

export default {
  name: "Days",
  props: ["date"],
  components: {
    AdditionDay,
  },
  data() {
    return {
      active: "",
    };
  },
  computed: {
    ...mapGetters(["Forecast", "DefDay"]),
  },
  methods: {
    convertTimestamp,
    KelvinToCelcius,
    changeDay(date) {
      this.active = date;
    },
    dateNoYear(date) {
      return `${convertTimestamp(date).date} ${convertTimestamp(date).month}`;
    },
    getActiveForecast(Forecast) {
      return Forecast.filter((f) => f.dt === this.active);
    },
  },
  watch: {
    DefDay() {
      this.changeDay(this.DefDay);
    },
  },
};
</script>

<style lang="scss">
.weather-container {
  position: relative;
  .days-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .day {
      transition: 0.5s;
      width: 200px;
      padding: 10px;
      border-right: solid 1px grey;
      .date {
        font-size: 20px;
        color: grey;
      }
      .temp-min-max {
        text-align: left;
        margin-top: 20px;
        font-weight: 500;
        color: rgb(95, 93, 93);
      }
    }
    .day:last-child {
      border: none;
    }
    .day.active {
      border: none;
      box-shadow: 0 -8px 5px 5px rgba($color: #918b8b, $alpha: 0.5);
    }
  }
  .additional-info {
    position: relative;
    left: 50%;
    max-height: 340px;
    box-shadow: 0 5px 5px 5px rgba($color: #918b8b, $alpha: 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1600px;
    padding: 50px 0;
    transform: translateX(-50%);
  }

  @media (max-width: 1210px) {
    .day {
      text-align: left;
      h1 {
        font-family: monospace;
        width: 3ch;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 1010px) {
  .weather-container {
    display: flex;
    flex-direction: row;
    .days-container {
      display: flex;
      flex-direction: column;
      .day {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-right: none;
        border-bottom: solid 1px grey;
        img {
          display: none;
        }

        .temp-min-max {
          margin: 0 15px;
        }
      }
      @media (max-width: 720px) {
        .day {
          text-align: center;
          width: unset;
          .temp-min-max {
            display: none;
            margin: 0;
          }
        }
      }
      .day.active {
        box-shadow: -8px 0 5px 5px rgba($color: #918b8b, $alpha: 0.5);
      }
    }
    .additional-info {
      position: unset;
      box-shadow: 8px 0 5px 5px rgba($color: #918b8b, $alpha: 0.5);
      flex-direction: column;
      max-height: none;
      padding: 40px 50px;
      transform: none;
    }
    @media (max-width: 580px) {
      .additional-info {
        padding: 0;
      }
    }
  }
}
</style>
