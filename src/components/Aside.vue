<template>
  <div id="shopping-list">
    <h2>{{ msg }}</h2>
    <section v-for="meal in ingredients" v-show="showListItems">
      <div id="inbetweenMeals" v-for="items in meal" v-if="!Number.isInteger(items)">
        <ul id="inbetweenIngredients">{{ items }}</ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data () {
    return {
      msg: "- Shopping List -",
      showListItems: true
    }
  },
  props: ['ingredients'],
}
</script>

<style scoped>

#shopping-list {
  justify-content: center;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

#inbetweenMeals {
  padding-right: 55px;
}

#inbetweenIngredients {
  margin-bottom: 0px;
}

h2 {
  margin-bottom: -3px;
}


</style>
