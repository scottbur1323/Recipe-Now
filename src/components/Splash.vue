<template>
  <div class="hello">
    <h1>RECIPE NOW!</h1>
    <router-link :to="{ name: 'Main' }">
      <button type="button" name="button" class="animated infinite bounceInDown">Begin</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Splash'
}
</script>
