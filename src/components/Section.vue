<template>
  <div>
    <button class="addButton" type="button" name="button" @click="addAMealButton()">Add Meal</button>
    <form v-if="addMealButton" class="submit">
      <p>Enter the name of your meal:</p>
      <input type="text" name="mealName">
      <p>Enter the source url of your meal picture:</p>
      <input type="text" name="mealPic">
      <p>Enter a link with the instructions for your meal.</p><p>{{ newMeal.instructionsLink }}</p>
      <input type="text" name="instructionsLink" v-on:keyup="updateNewMeal">
      <p>Anything you want to add?</p>
      <input type="text" name="funIdeas">
      <p>Enter the ingredients of your meal, separated by commas.</p>
      <input type="text" name="Ingredients" value="">
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
      updateNewMeal: function() {
        this.newMeal.instructionsLink = event.target.value
      },
      addMealToDB: function() {
        alert('Submitted!')
        // fetch('https://family-meal-planner.herokuapp.com/',
        // // fetch('http://localhost:3000/meal',
        // {
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   method: 'POST',
        //   body: JSON.stringify(this.newMeal)
        // })
        // .then(function(res){
        //   console.log(res)
        // }).catch(function(res){
        //   console.log(res)
        // })
      },
      getPremadeMeals: function() {
        fetch('mealAPI')
          .then(response => {
            return response.json()
          })
          .then(response => {
            this.mealData = response.meals
            console.log(this.mealData)
          })
      }
  }
}
</script>

<style scoped>

.addButton {
  align-self: center;
  border-width: 5px;
  border-color: "blue";
  transition: border-color 1s;
  width: 85px;
  margin-top: 20px;
}

</style>
