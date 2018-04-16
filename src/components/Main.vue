<template>
  <div>
    <h1 id="nameTitle">Recipe Now!</h1>
    <body class="body">
      <app-meals @mealWasClicked2="mealClicked2($event)" class="meals" v-show="showGenerated"></app-meals>
      <app-aside :ingredients="ingredients" class="aside" v-show="showGenerated"></app-aside>
      <button type="button" class="generateButton" v-on:click="showGenerated = !showGenerated" v-show="showGenerated">Generate Final List</button>
      <button type="button" class="generateButton" v-on:click="showGenerated = !showGenerated" v-show="!showGenerated">Go Back</button>
      <app-list :ingredients="ingredients" class="list" v-show="!showGenerated"></app-list>
      <app-section v-show="showGenerated"></app-section>
    </body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Meals from './Meals'
import Aside from './Aside'
import Footer from './Footer'
import Section from './Section'
import List from './List'

export default {
  name: 'Main',
  data () {
    return {
      ingredients: [],
      showGenerated: true
    }
  },
  methods: {
    mealClicked2: function(event) {
      this.ingredients = event.ingredients
    }
  },
  components: {
    appAside: Aside,
    appMeals: Meals,
    appFooter: Footer,
    appSection: Section,
    appList: List
  }
}
</script>

<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: nowrap;
}
.meals {
  width: 100%;
  max-height: 35%;
  border-style: ridge;
}
.aside,.section {
  width: 100%;
  border-style: ridge;
}
.generateButton {
  align-self: center;
  margin-top: 20px;
}
</style>
