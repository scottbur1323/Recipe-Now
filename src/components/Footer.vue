<template>
  <div class="hello">
    <p>{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      author: "Chance Scott-Burke Copyright 2018",
    }
  }
}
</script>

<style scoped>

p {
  font-size: 12px;
  text-align: left;
  display: flex;
  flex-flow: column;
  margin-top: 15px;
  margin-bottom: -4px;

}

</style>
