<template>
  <div>
    <h1>{{ msg }}</h1>
    <section v-for="meal in ingredients">
      <div id="inbetweenMeals" v-for="items in meal" v-if="!(items == null) && !Number.isInteger(items)">
        <ul class="eachIngredient" @click="obtainedItem"> {{ items }}</ul>
      </div>
    </section>
    <section>
      <input type="text" class="addItem" v-on:keyup="makeNewIngredient">
      <button type="button" name="button" @click="addTheIngredient">Add Item</button>
    </section>
    <p>{{ newIngredient }}</p>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: " - Your Shopping List - ",
      newIngredient: ""
    }
  },
  methods: {
    makeNewIngredient: function() {
      this.newIngredient = event.target.value
    },
    addTheIngredient: function() {
      this.ingredients.push([this.newIngredient])
    },
    obtainedItem: function() {
      if (event.srcElement.style.textDecoration == "") {
        event.srcElement.style.textDecoration = "line-through"
      } else if (event.srcElement.style.textDecoration == "line-through") {
        event.srcElement.style.textDecoration = ""
      }
    }
  },
  props: ['ingredients']
}
</script>

<style scoped>

.eachIngredient {
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding-right: 40px;
  border-width: 1px;
  border-style: ridge;
}

</style>
