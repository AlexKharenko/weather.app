<template>
  <table>
    <th></th>
    <th>Night</th>
    <th>Morning</th>
    <th>Day</th>
    <th>Evening</th>
    <tr>
      <td></td>
      <td><img src="../assets/icons/night.svg" alt="" /></td>
      <td><img src="../assets/icons/ocean.svg" alt="" /></td>
      <td><img src="../assets/icons/sun.svg" alt="" /></td>
      <td><img src="../assets/icons/sunset.svg" alt="" /></td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td>{{ KelvinToCelcius(forecast.temp.night) }} °C</td>
      <td>{{ KelvinToCelcius(forecast.temp.morn) }} °C</td>
      <td>{{ KelvinToCelcius(forecast.temp.day) }} °C</td>
      <td>{{ KelvinToCelcius(forecast.temp.eve) }} °C</td>
    </tr>
    <tr>
      <td>Feels like</td>
      <td>
        <span>{{ KelvinToCelcius(forecast.feels_like.night) }} °C</span>
      </td>
      <td>
        <span>{{ KelvinToCelcius(forecast.feels_like.morn) }} °C</span>
      </td>
      <td>
        <span>{{ KelvinToCelcius(forecast.feels_like.day) }} °C</span>
      </td>
      <td>
        <span>{{ KelvinToCelcius(forecast.feels_like.eve) }} °C</span>
      </td>
    </tr>
  </table>
</template>

<script>
import { KelvinToCelcius } from "../functions/formating";

export default {
  name: "Table",
  props: ["forecast"],
  methods: {
    KelvinToCelcius,
  },
};
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  border: solid 1px gray;
  th {
    padding: 0 8px;
    border: solid 1px gray;
  }
  th:first-child {
    border: none;
  }
  tr {
    border: solid 1px gray;
    td {
      width: 81px;
      text-align: center;
      border-left: solid 1px gray;
      img {
        padding-top: 3px;
        width: 40px;
        height: 40px;
      }
    }
    td:first-child {
      padding: 0 5px;
      text-align: left;
    }
  }
  tr:nth-child(2n) {
    border: none;
  }
}
</style>
