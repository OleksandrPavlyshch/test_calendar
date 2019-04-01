<template>
  <div class="container" id="app">
    <div class="row shadow rounded py-3 my-3">
      <div class="col-12">
        <h1>Calendar</h1>
        <calendar
        startMonday
        @inputCalendar="inputCalendar" />
      </div>
      <div class="col-12 mt=3">
        <h2>calendar set {{calendarResult}}</h2>
      </div>
    </div>

  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  data:  function() {
    return {
      calendarResult: '',
    }
  },
  components: {
    Calendar
  },
  methods: {
    inputCalendar(val) {
      this.calendarResult = val;
      console.log(val);
    },
  }
}
</script>

<style>

</style>
