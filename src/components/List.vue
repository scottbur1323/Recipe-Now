<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>Click ingredients when you put them in your cart!</h3>
    <section v-for="meal in ingredients">
      <div id="inbetweenMeals" v-for="items in meal" v-if="!(items == null) && !Number.isInteger(items)">
        <ul class="eachIngredient" @click="obtainedItem"> {{ items }}</ul>
      </div>
    </section>
    <section>
      <input type="text" class="addItem" v-on:keyup="makeNewIngredient">
      <button type="button" name="button" @click="addTheIngredient">Add Item</button>
      <button type="button" name="button" @click="deleteLastIngredient">Delete Last Item</button>
    </section>
    <div id="column">
      <section id="column2" v-for="grocers in grocerData">
        <figure class="picntext">
          <img id="img" @click="selectItem($event)" class="thumbnail" :src="grocers.grocerPic" v-on:click="grocers.grocerLink">
          <figcaption>{{ grocers.grocerName }}</figcaption>
        </figure>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: ' - Your Shopping List - ',
      newIngredient: '',
      grocerAPI: 'https://family-meal-planner.herokuapp.com/grocer'
      //grocerAPI: 'http://localhost:3000/grocer',
      grocerData: []
    }
  },
  methods: {
    makeNewIngredient: function() {
      this.newIngredient = event.target.value
    },
    addTheIngredient: function() {
      this.ingredients.push([this.newIngredient])
      event.srcElement.previousElementSibling.value = ""
      this.newIngredient = ""
    },
    deleteLastIngredient: function() {
      this.ingredients.pop()
    },
    obtainedItem: function() {
      if (event.srcElement.style.textDecoration == "") {
        event.srcElement.style.textDecoration = "line-through"
      } else if (event.srcElement.style.textDecoration == "line-through") {
        event.srcElement.style.textDecoration = ""
      }
    },
    getGrocers: function() {
      fetch(this.grocerAPI)
        .then(response => {
          return response.json()
        })
        .then(response => {
          this.grocerData = response.grocers
          console.log(this.grocerData)
        })
    }
  },
  mounted() {
    this.getGrocers()
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

#img {
  width: 129px;
  height: 80px;
}

#column {
  padding-top: 20px;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

</style>
