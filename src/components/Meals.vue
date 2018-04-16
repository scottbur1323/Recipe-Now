<template>
  <div class="meals">
    <h2>- Click on meals to add to grocery list -</h2>
    <button class="eachButton btn btn-secondary" type="button" name="button" @click="showTheEach">Hide Meals</button>
    <app-each @mealWasClicked="mealClicked($event)" class="each" v-show="showEach"></app-each>
  </div>
</template>

<script>
import Each from './Each'

export default {
  name: 'Meals',
  data () {
    return {
      showEach: true,
      ingredientsAll: []
    }
  },
  components: {
    appEach: Each
  },
  methods: {
    showTheEach: function(event) {
      this.showEach = !(this.showEach)
      if (this.showEach == true) {
      }
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
  margin-bottom: 20px;
}
app-each {
  transition: height 1
}
</style>
