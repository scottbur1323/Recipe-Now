<template>
  <div class="meals">
    <h2>{{ msg }}</h2>
    <button class="eachButton" type="button" name="button" @click="showTheEach($event)">Show Meals</button>
    <!-- <button class="eachButton" type="button" name="button" @click="showTheMyEach($event)">Show My Meals</button> -->
    <app-each @mealWasClicked="mealClicked($event)" class="each" v-show="showEach"></app-each>
    <app-myeach class="each" v-show="showMyEach"></app-myeach>
  </div>
</template>

<script>
import Each from './Each'
import MyEach from './MyEach'

export default {
  name: 'Meals',
  data () {
    return {
      msg: "- Click on meals to add to grocery list -",
      showEach: false,
      showMyEach: false,
      ingredientsAll: []

    }
  },
  components: {
    appEach: Each,
    appMyeach: MyEach
  },
  methods: {
    showTheEach: function(event) {
      this.showEach = !(this.showEach)
      if (this.showEach == true) {
        event.srcElement.style.borderColor = "blue"
      } else event.srcElement.style.borderColor = ""
    },
    showTheMyEach: function(event) {
      this.showMyEach = !(this.showMyEach)
      if (this.showMyEach == true) {
        event.srcElement.style.borderColor = "blue"
      } else event.srcElement.style.borderColor = ""
    },
    mealClicked: function(event) {
      this.ingredientsAll = event.ingredients
      this.$emit('mealWasClicked2', {
        ingredients: this.ingredientsAll
      })
    }
  }
}
</script>

<style scoped>

.eachButton {
  border-width: 5px;
  border-color: "grey";
  transition: border-color 1s;
}
</style>
