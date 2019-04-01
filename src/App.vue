<template>
  <div class="container" id="app">
    <div class="row shadow rounded py-3 my-3">
      <div class="col-12">
        <h1>Calendar</h1>
        <calendar
        startMonday />
      </div>
    </div>

  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'

export default {
  name: 'app',
  components: {
    Calendar
  }
}
</script>

<style>

</style>
