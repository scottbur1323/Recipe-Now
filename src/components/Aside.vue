<template>
  <div>
    <h2>{{ msg }}</h2>
    <ul v-for="ingred in ingredients">
      <li>{{ ingred }}</li>
    </ul>
    <p>-----------------------</p>
    <!-- <p>{{ ingredients }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      modifiedIngredients: "",
      msg: "Shopping List:"
    }
  },
  props: ['ingredients'],
  methods: {
    modifyIngredients() {
      let newIngredients = []
      for (let i=0;i<this.ingredients.length;i++) {
        for (let j=0;j<this.ingredients[i].length;j++) {
            // I'm attempting to re-write the array
            // so I can use a single array with the
            // v-for method
        }
        this.modifiedIngredients = `1. ${this.ingredients}`
      }
    }
  },
  updated() {
    this.modifyIngredients()
  }
}
</script>

<style scoped>

</style>
