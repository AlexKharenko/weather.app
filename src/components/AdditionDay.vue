<template>
  <div class="sun-info">
    <img src="../assets/icons/sunrise.svg" alt="" />
    <div class="sun-info-text">
      <p>Sunrise: {{ getTime(forecast.sunrise) }}</p>
      <p>Sunset: {{ getTime(forecast.sunset) }}</p>
    </div>
  </div>
  <div class="weather_info">
    <Table :forecast="forecast" />
    <div>
      <p>Humidity</p>
      <p>{{ forecast.humidity }} %</p>
    </div>
    <div>
      <p>Pressure</p>
      <p>{{ forecast.pressure }} hPa</p>
    </div>
    <div>
      <p>Wind speed</p>
      <p>{{ forecast.wind_speed }} meter/sec</p>
    </div>
    <div>
      <p>Wind direction</p>
      <p>{{ degToCompass(forecast.wind_deg) }}</p>
    </div>
  </div>
</template>

<script>
import { convertTimestamp, degToCompass } from "../functions/formating";
import Table from "./Table";

export default {
  name: "AdditionDay",
  props: ["forecast"],
  components: {
    Table,
  },
  methods: {
    convertTimestamp,
    degToCompass,
    getTime(timestamp) {
      return (
        convertTimestamp(timestamp).hours +
        ":" +
        convertTimestamp(timestamp).minutes
      );
    },
  },
};
</script>

<style lang="scss">
.sun-info {
  position: relative;
  display: flex;
  flex-direction: row;
  img {
    width: 100px;
    height: 100px;
  }
  .sun-info-text {
    margin-left: 20px;
    line-height: 49px;
    font-weight: 500;
  }
  @media (max-width: 580px) {
    img {
      width: 50px;
      height: 50px;
    }
    .sun-info-text {
      line-height: 30px;
    }
  }
}

.weather_info {
  position: relative;
  line-height: 1.6em;
  padding: 5px 10px;
  font-weight: 500;
  div {
    border: solid 1px gray;
    border-top: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;
    padding: 0 5px;
    p:first-child {
      border-right: solid 1px gray;
    }
  }
}
</style>
