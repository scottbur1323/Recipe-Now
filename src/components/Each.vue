<template>
  <div>
    <div id="column" v-show="showTheMeals">
      <section id="column2" v-for="meals in mealData">
        <figure class="picntext" v-cloak>
          <img id="img" @click="selectItem($event)" class="thumbnail" :src="meals.mealPic" alt="">
          <figcaption id="caption">{{ meals.mealName }}</figcaption>
        </figure>
      </section>
    </div>
    <div id="column" v-show="showTheDeletes">
      <section id="column2" v-for="meals in mealData">
        <input type="checkbox" class="checkbox" @click="checkForDelete($event)">
        <figure class="picntext">
          <img id="img" class="thumbnail" :src="meals.mealPic" alt="">
          <figcaption id="caption">{{ meals.mealName }}</figcaption>
        </figure>
      </section>
    </div>
    <div id="column" v-show="showTheUpdates">
      <section id="column2" v-for="meals in mealData">
        <input type="checkbox" class="checkbox" @click="checkForUpdate($event)">
        <figure class="picntext">
          <img id="img" class="thumbnail" :src="meals.mealPic" alt="">
          <figcaption id="caption">{{ meals.mealName }}</figcaption>
        </figure>
      </section>
    </div>
    <p></p>
    <button v-show="showTheDeletes" type="button" name="goBack" v-on:click="showMeals">GO BACK</button>
    <button v-show="showTheUpdates" type="button" name="goBack" v-on:click="showMeals">GO BACK</button>
    <button v-show="showTheMeals" type="button" name="deleteButton" v-on:click="showDeletes">Delete Meal</button>
    <button v-show="showTheMeals" type="button" name="updateButton" v-on:click="showUpdates">Update Meal</button>
    <form v-if="showUpdateForm" class="submit">
      <p>Enter the name of your meal:</p>
      <input class="formInput" type="text" name="mealName" v-on:keyup="populateMealName" :value="objectToUpdate.mealName">
      <p>Enter the source url of your meal picture:</p>
      <input class="formInput" type="text" name="mealPic" v-on:keyup="populateMealPic" :value="objectToUpdate.mealPic">
      <p>Enter a link with the instructions for your meal:</p>
      <input class="formInput" type="text" name="instructionsLink" v-on:keyup="populateInstructionsLink" :value="objectToUpdate.instructionsLink">
      <p>Anything you want to add?</p>
      <input class="formInput" type="text" name="funIdeas" v-on:keyup="populateFunIdeas" :value="objectToUpdate.funIdeas">
      <p>Enter the ingredients of your meal, separated by commas:</p>
      <input class="formInput" type="text" name="Ingredients" v-on:keyup="populateIngredients" :value="ingredientsToUpdate"><p>{{ ingredientsToUpdate }}</p>
      <p></p>
      <button type="button" name="button" v-on:click="actualUpdate">Update Meal</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Each',
  data () {
    return {
      //mealAPI: 'https://family-meal-planner.herokuapp.com/meal',
      mealAPI: 'http://localhost:3000/meal',
      mealData: [],
      ingredients: [],
      showTheMeals: true,
      showTheDeletes: false,
      showTheUpdates: false,
      showUpdateForm: false,
      idToDelete: 100,
      idToUpdate: 100,
      ingredientsToUpdate: [],
      objectToUpdate: {},
      finalObjectToUpdate: {}
    }
  },
  methods: {
    getPremadeMeals: function() {
      fetch(this.mealAPI)
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.mealData = response.meals
          console.log(this.mealData)
        })
    },
    selectItem: function(event) {
      if (event.target.className == "thumbnail2") {
        event.target.className = "thumbnail"
        for (let i=0;i<this.mealData.length;i++) {
          if (this.mealData[i].mealPic.slice(-10) == event.target.src.slice(-10)) {
              for (let j=0;j<this.ingredients.length;j++) {
                  if (this.ingredients[j][0] == this.mealData[i].id) {
                      this.ingredients.splice(j, 1)
                  }
              }
          }
        }
      } else {
        event.target.className = "thumbnail2"
        for (let i=0;i<this.mealData.length;i++) {
          let ingredients2 = []
          if (this.mealData[i].mealPic.slice(-10) == event.target.src.slice(-10)) {
              ingredients2.push(this.mealData[i].id)
              ingredients2.push(this.mealData[i].i1)
              if (this.mealData[i].i2 !== '') {ingredients2.push(this.mealData[i].i2)}
              if (this.mealData[i].i3 !== '') {ingredients2.push(this.mealData[i].i3)}
              if (this.mealData[i].i4 !== '') {ingredients2.push(this.mealData[i].i4)}
              if (this.mealData[i].i5 !== '') {ingredients2.push(this.mealData[i].i5)}
              if (this.mealData[i].i6 !== '') {ingredients2.push(this.mealData[i].i6)}
              if (this.mealData[i].i7 !== '') {ingredients2.push(this.mealData[i].i7)}
              if (this.mealData[i].i8 !== '') {ingredients2.push(this.mealData[i].i8)}
              if (this.mealData[i].i9 !== '') {ingredients2.push(this.mealData[i].i9)}
              if (this.mealData[i].i10 !== '') {ingredients2.push(this.mealData[i].i10)}
              if (this.mealData[i].i11 !== '') {ingredients2.push(this.mealData[i].i11)}
              if (this.mealData[i].i12 !== '') {ingredients2.push(this.mealData[i].i12)}
              if (this.mealData[i].i13 !== '') {ingredients2.push(this.mealData[i].i13)}
              if (this.mealData[i].i14 !== '') {ingredients2.push(this.mealData[i].i14)}
              if (this.mealData[i].i15 !== '') {ingredients2.push(this.mealData[i].i15)}
              let allIngredients = ingredients2
              this.ingredients.push(allIngredients)
          }
        }
        this.$emit('mealWasClicked', {
          ingredients: this.ingredients
        })
      }
    },
    checkForDelete: function(event) {
      for (let j=0;j<this.mealData.length;j++) {
        if (event.path[1].childNodes[2].childNodes[0].currentSrc.slice(-10) == this.mealData[j].mealPic.slice(-10)) {
          this.idToDelete = this.mealData[j].id
          this.actualDelete()
        }
      }
    },
    checkForUpdate: function() {
      this.ingredientsToUpdate = []
      this.objectToUpdate = {
        id: '',
        mealName: '',
        mealPic: '',
        instructionsLink: '',
        funIdeas: ''
      }
      for (let j=0;j<this.mealData.length;j++) {
        if (event.path[1].childNodes[2].childNodes[0].currentSrc.slice(-10) == this.mealData[j].mealPic.slice(-10)) {
          this.objectToUpdate = this.mealData[j]
          this.idToUpdate = this.mealData[j].id
          this.showUpdateForm = true
          event.target.checked = false
          if (this.objectToUpdate.i1 != '' && this.objectToUpdate.i1 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i1)}
          if (this.objectToUpdate.i2 != '' && this.objectToUpdate.i2 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i2)}
          if (this.objectToUpdate.i3 != '' && this.objectToUpdate.i3 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i3)}
          if (this.objectToUpdate.i4 != '' && this.objectToUpdate.i4 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i4)}
          if (this.objectToUpdate.i5 != '' && this.objectToUpdate.i5 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i5)}
          if (this.objectToUpdate.i6 != '' && this.objectToUpdate.i6 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i6)}
          if (this.objectToUpdate.i7 != '' && this.objectToUpdate.i7 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i7)}
          if (this.objectToUpdate.i8 != '' && this.objectToUpdate.i8 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i8)}
          if (this.objectToUpdate.i9 != '' && this.objectToUpdate.i9 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i9)}
          if (this.objectToUpdate.i10 != '' && this.objectToUpdate.i10 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i10)}
          if (this.objectToUpdate.i11 != '' && this.objectToUpdate.i11 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i11)}
          if (this.objectToUpdate.i12 != '' && this.objectToUpdate.i12 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i12)}
          if (this.objectToUpdate.i13 != '' && this.objectToUpdate.i13 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i13)}
          if (this.objectToUpdate.i14 != '' && this.objectToUpdate.i14 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i14)}
          if (this.objectToUpdate.i15 != '' && this.objectToUpdate.i15 != null) {this.ingredientsToUpdate.push(this.objectToUpdate.i15)}
        }
      }
    },
    actualDelete: function() {
      alert('Deleting...')
      if (confirm('Are you sure you want to delete this thing from the database?')) {
        fetch(`http://localhost:3000/meal/${this.idToDelete}`,
        //fetch(`https://family-meal-planner.herokuapp.com/meal/${this.idToDelete}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'DELETE',
          body: JSON.stringify(this.newMeal)
        })
        .then(function(res){
          console.log(res)
        }).catch(function(res){
          console.log(res)
        })
        this.showMeals()
        this.getPremadeMeals()
        location.reload()
      } else {
          alert("Meal Was NOT Deleted!")
          this.getPremadeMeals()
          this.showMeals()
          location.reload()
      }
    },
    actualUpdate: function() {
        this.finalObjectToUpdate.mealName = this.objectToUpdate.mealName
        this.finalObjectToUpdate.mealPic = this.objectToUpdate.mealPic
        this.finalObjectToUpdate.instructionsLink = this.objectToUpdate.instructionsLink
        this.finalObjectToUpdate.funIdeas = this.objectToUpdate.funIdeas
        if (this.ingredientsToUpdate[0] != '' && this.ingredientsToUpdate[0] != null) {this.finalObjectToUpdate.i1 = this.ingredientsToUpdate[0]}
        if (this.ingredientsToUpdate[1] != '' && this.ingredientsToUpdate[1] != null) {this.finalObjectToUpdate.i2 = this.ingredientsToUpdate[1]}
        if (this.ingredientsToUpdate[2] != '' && this.ingredientsToUpdate[2] != null) {this.finalObjectToUpdate.i3 = this.ingredientsToUpdate[2]}
        if (this.ingredientsToUpdate[3] != '' && this.ingredientsToUpdate[3] != null) {this.finalObjectToUpdate.i4 = this.ingredientsToUpdate[3]}
        if (this.ingredientsToUpdate[4] != '' && this.ingredientsToUpdate[4] != null) {this.finalObjectToUpdate.i5 = this.ingredientsToUpdate[4]}
        if (this.ingredientsToUpdate[5] != '' && this.ingredientsToUpdate[5] != null) {this.finalObjectToUpdate.i6 = this.ingredientsToUpdate[5]}
        if (this.ingredientsToUpdate[6] != '' && this.ingredientsToUpdate[6] != null) {this.finalObjectToUpdate.i7 = this.ingredientsToUpdate[6]}
        if (this.ingredientsToUpdate[7] != '' && this.ingredientsToUpdate[7] != null) {this.finalObjectToUpdate.i8 = this.ingredientsToUpdate[7]}
        if (this.ingredientsToUpdate[8] != '' && this.ingredientsToUpdate[8] != null) {this.finalObjectToUpdate.i9 = this.ingredientsToUpdate[8]}
        if (this.ingredientsToUpdate[9] != '' && this.ingredientsToUpdate[9] != null) {this.finalObjectToUpdate.i10 = this.ingredientsToUpdate[9]}
        if (this.ingredientsToUpdate[10] != '' && this.ingredientsToUpdate[10] != null) {this.finalObjectToUpdate.i11 = this.ingredientsToUpdate[10]}
        if (this.ingredientsToUpdate[11] != '' && this.ingredientsToUpdate[11] != null) {this.finalObjectToUpdate.i12 = this.ingredientsToUpdate[11]}
        if (this.ingredientsToUpdate[12] != '' && this.ingredientsToUpdate[12] != null) {this.finalObjectToUpdate.i13 = this.ingredientsToUpdate[12]}
        if (this.ingredientsToUpdate[13] != '' && this.ingredientsToUpdate[13] != null) {this.finalObjectToUpdate.i14 = this.ingredientsToUpdate[13]}
        if (this.ingredientsToUpdate[14] != '' && this.ingredientsToUpdate[14] != null) {this.finalObjectToUpdate.i15 = this.ingredientsToUpdate[14]}
        alert('Updating...')
        if (confirm('Are you sure you want to update this meal in the database?')) {
          fetch(`http://localhost:3000/meal/${this.objectToUpdate.id}`,
          //fetch(`https://family-meal-planner.herokuapp.com/meal/${this.objectToUpdate.id}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(this.finalObjectToUpdate)
          })
          .then(function(res){
            console.log(res)
          }).catch(function(res){
            console.log(res)
          })
          this.showMeals()
          this.getPremadeMeals()
          location.reload()
        } else {
            alert("Meal Was NOT Updated!")
            this.getPremadeMeals()
            this.showMeals()
            location.reload()
        }
    },
    showDeletes: function() {
        this.showTheDeletes = true
        this.showTheMeals = false
        this.showTheUpdates = false
    },
    showUpdates: function() {
        this.showTheUpdates = true
        this.showTheMeals = false
        this.showTheDeletes = false
    },
    showMeals: function() {
        this.showTheDeletes = false
        this.showTheMeals = true
        this.showTheUpdates = false
        this.showUpdateForm = false
        this.objectToUpdate = {
          id: '',
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
          i15: ''
        }
    },
    populateMealName() {
      this.objectToUpdate.mealName = event.target.value
    },
    populateMealPic() {
      this.objectToUpdate.mealPic = event.target.value
    },
    populateInstructionsLink() {
      this.objectToUpdate.instructionsLink = event.target.value
    },
    populateFunIdeas() {
      this.objectToUpdate.funIdeas = event.target.value
    },
    populateIngredients() {
      this.ingredientsToUpdate = event.target.value.split(',')
    }
  },
  mounted() {
    this.getPremadeMeals()
  }
}
</script>

<style scoped>

#column {
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transition: height 2s;
}
.picntext {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  max-width: 100%;
  padding: 2px;
  padding-top: 0px;
  background-color: #F3F3F3;
}

.thumbnail:hover {
  opacity: 0.7;
  transition: opacity 0.5s;
}
.thumbnail {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  width: 20vmin;
  height: 100%;
  opacity: 1;
  transition: opacity 1s, background 1s;
}
.thumbnail2 {
  max-width: 100%;
  max-height: 400px;
  display: flex;
  width: 20vmin;
  height: 100%;
  opacity: 0.4;
  transition: opacity 1s, background 1s;
  background: #EBEFF7;
}

#img {
  width: 129px;
  height: 80px;
}

figcaption {
  width: 129px;
  min-height: 44px;
}

#column2 {
  height:160px;
  display: flex;
  flex-direction: row;
}

.checkbox {
  margin-top: 75px;
  margin-right: -25px;
}

.formInput {
  min-width: 240px;
}

[v-cloak] {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
