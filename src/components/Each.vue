<template>
  <div id="column">
    <section id="column2" v-for="meals in mealData">
      <figure class="picntext">
        <img id="img" @click="selectItem($event)" class="thumbnail" :src="meals.mealPic" alt="">
        <figcaption id="caption">{{ meals.mealName }}</figcaption>
      </figure>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Each',
  data () {
    return {
      mealAPI: 'https://family-meal-planner.herokuapp.com/meal',
      mealData: [],
      ingredients: []
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
        })
    },
    selectItem: function(event) {
      if (event.target.className == "thumbnail2") {
        event.target.className = "thumbnail"
        for (let i=0;i<this.mealData.length;i++) {
          if (this.mealData[i].mealPic.slice(-7) == event.target.src.slice(-7)) {
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
          if (this.mealData[i].mealPic.slice(-7) == event.target.src.slice(-7)) {
              ingredients2.push(this.mealData[i].id)
              ingredients2.push(this.mealData[i].i1) // ingredient 1 is notNullable in the database
              if (this.mealData[i].i2 !== "") {ingredients2.push(this.mealData[i].i2)}
              if (this.mealData[i].i3 !== "") {ingredients2.push(this.mealData[i].i3)}
              if (this.mealData[i].i4 !== "") {ingredients2.push(this.mealData[i].i4)}
              if (this.mealData[i].i5 !== "") {ingredients2.push(this.mealData[i].i5)}
              if (this.mealData[i].i6 !== "") {ingredients2.push(this.mealData[i].i6)}
              if (this.mealData[i].i7 !== "") {ingredients2.push(this.mealData[i].i7)}
              if (this.mealData[i].i8 !== "") {ingredients2.push(this.mealData[i].i8)}
              if (this.mealData[i].i9 !== "") {ingredients2.push(this.mealData[i].i9)}
              if (this.mealData[i].i10 !== "") {ingredients2.push(this.mealData[i].i10)}
              if (this.mealData[i].i11 !== "") {ingredients2.push(this.mealData[i].i11)}
              if (this.mealData[i].i12 !== "") {ingredients2.push(this.mealData[i].i12)}
              if (this.mealData[i].i13 !== "") {ingredients2.push(this.mealData[i].i13)}
              if (this.mealData[i].i14 !== "") {ingredients2.push(this.mealData[i].i14)}
              if (this.mealData[i].i15 !== "") {ingredients2.push(this.mealData[i].i15)}
              let allIngredients = ingredients2
              this.ingredients.push(allIngredients)
          }
        }
        this.$emit('mealWasClicked', {
          ingredients: this.ingredients
        })
      }
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
  /* float:right; */
  /* height: 250px; */
  /* width:250px; */
  padding:3px;
}
.picntext {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  max-width: 100%;
  padding: 2px;
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
  height:224px;
  overflow:auto;
}


</style>
