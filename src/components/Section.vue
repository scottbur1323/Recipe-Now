<template>
  <div class="">
    <button class="addButton" type="button" name="button" @click="addAMealButton()">Add Meal</button>
    <form v-if="addMealButton" class="submit pure-form-aligned">
      <p>Enter the name of your meal:</p>
      <input class="formInput" type="text" name="mealName" v-on:keyup="addMealName">
      <p>Enter the source url of your meal picture:</p>
      <input class="formInput" type="text" name="mealPic" v-on:keyup="addMealPic">
      <p>Enter a link with the instructions for your meal.</p>
      <input class="formInput" type="text" name="instructionsLink" v-on:keyup="addInstructionsLink">
      <p>Anything you want to add?</p>
      <input class="formInput" type="text" name="funIdeas" v-on:keyup="addFunIdeas">
      <p>Enter the ingredients of your meal, separated by commas.</p>
      <input class="formInput" type="text" name="Ingredients" v-on:keyup="addIngredients"><p>{{ ingredients }}</p>
      <p></p>
      <button type="button" name="button" v-on:click="addMealToDB">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      addMealButton: false,
      updateMealsList: false,
      mealData: [],
      ingredients: [],
      newMeal: {
          mealName: '',
          mealPic: '',
          instructionsLink: '',
          funIdeas: '',
          i1: '',
          i2: '',
          i3: '',
          i4: '',
          i5: '',
          i6: '',
          i7: '',
          i8: '',
          i9: '',
          i10: '',
          i11: '',
          i12: '',
          i13: '',
          i14: '',
          i15: '',
      }
    }
  },
  methods: {
      addAMealButton: function() {
        this.addMealButton = !this.addMealButton
      },
      addMealName: function() {
        this.newMeal.mealName = event.target.value
      },
      addMealPic: function() {
        this.newMeal.mealPic = event.target.value
      },
      addInstructionsLink: function() {
        this.newMeal.instructionsLink = event.target.value
      },
      addFunIdeas: function() {
        this.newMeal.funIdeas = event.target.value
      },
      addIngredients: function() {
        this.ingredients = event.target.value.split(', ')
      },
      addMealToDB: function() {
        alert('Submitted!')
        if (this.ingredients[0] !== '') {this.newMeal.i1 = this.ingredients[0]}
        if (this.ingredients[1] !== '') {this.newMeal.i2 = this.ingredients[1]}
        if (this.ingredients[2] !== '') {this.newMeal.i3 = this.ingredients[2]}
        if (this.ingredients[3] !== '') {this.newMeal.i4 = this.ingredients[3]}
        if (this.ingredients[4] !== '') {this.newMeal.i5 = this.ingredients[4]}
        if (this.ingredients[5] !== '') {this.newMeal.i6 = this.ingredients[5]}
        if (this.ingredients[6] !== '') {this.newMeal.i7 = this.ingredients[6]}
        if (this.ingredients[7] !== '') {this.newMeal.i8 = this.ingredients[7]}
        if (this.ingredients[8] !== '') {this.newMeal.i9 = this.ingredients[8]}
        if (this.ingredients[9] !== '') {this.newMeal.i10 = this.ingredients[9]}
        if (this.ingredients[10] !== '') {this.newMeal.i11 = this.ingredients[10]}
        if (this.ingredients[11] !== '') {this.newMeal.i12 = this.ingredients[11]}
        if (this.ingredients[12] !== '') {this.newMeal.i13 = this.ingredients[12]}
        if (this.ingredients[13] !== '') {this.newMeal.i14 = this.ingredients[13]}
        if (this.ingredients[14] !== '') {this.newMeal.i15 = this.ingredients[14]}
        fetch('https://family-meal-planner.herokuapp.com/meal/',
        //fetch('http://localhost:3000/meal',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.newMeal)
        })
        .then(function(res){
          console.log(res)
        }).catch(function(res){
          console.log(res)
        })
        this.newMeal = { mealName: '', mealPic: '', instructionsLink: '', funIdeas: '', i1: '', i2: '', i3: '', i4: '', i5: '', i6: '', i7: '', i8: '', i9: '', i10: '', i11: '', i12: '', i13: '', i14: '', i15: ''}
        this.ingredients = []
        location.reload()
      }
  }
}
</script>

<style>

.addButton {
  /* align-self: center;
  border-width: 5px;
  border-color: "blue";
  transition: border-color 1s;
  width: 85px; */
  margin-top: 20px;
}

.formInput {
  min-width: 240px;
}

</style>
