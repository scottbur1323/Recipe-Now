<template>
  <div>
    <h1>{{ msg }}</h1>
    <body class="body">
      <app-meals @mealWasClicked2="mealClicked2($event)" class="meals"></app-meals>
      <app-aside :ingredients="ingredients" class="aside"></app-aside>
      <app-section></app-section>
    </body>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Meals from './Meals'
import Aside from './Aside'
import Footer from './Footer'
import Section from './Section'

export default {
  name: 'Main',
  data () {
    return {
      msg: "Welcome to Family Meal Planner",
      ingredients: []

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
    appSection: Section
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
.aside {
  width: 100%;
  border-style: ridge;
}

</style>
