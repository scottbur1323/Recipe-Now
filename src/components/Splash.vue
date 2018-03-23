<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'Main' }">
      <button type="button" name="button">Begin</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Splash',
  data () {
    return {
      msg: "Welcome to Family Meal Planner"
    }
  }
}
</script>

<style scoped>

</style>
