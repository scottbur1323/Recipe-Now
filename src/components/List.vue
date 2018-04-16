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
    <div id="column" v-show="showTheGrocers">
      <section id="column2" v-for="grocers in grocerData">
        <figure class="picntext">
          <a :href="grocers.grocerLink"><img id="img" :src="grocers.grocerPic"></a>
          <a :href="grocers.grocerLink">{{ grocers.grocerName }}</a>
        </figure>
      </section>
    </div>
    <div id="column" v-show="showTheUpdateGrocers">
      <section id="column2" v-for="grocers in grocerData">
        <figure class="picntext">
          <img id="img" :src="grocers.grocerPic" @click="clickUpdateGrocer">
          <p  @click="clickUpdateGrocer">{{ grocers.grocerName }}</p>
        </figure>
      </section>
    </div>
    <div id="column" v-show="showTheDeleteGrocers">
      <section id="column2" v-for="grocers in grocerData">
        <figure class="picntext">
          <img id="img" :src="grocers.grocerPic" @click="clickDeleteGrocer">
          <p @click="clickDeleteGrocer">{{ grocers.grocerName }}</p>
        </figure>
      </section>
    </div>
    <section>
      <h2 v-show="showTheDeleteGrocers" style="color: red;"> - Click the grocer to Delete - </h2>
      <h2 v-show="showTheUpdateGrocers" style="color: red;"> - Click the grocer to Update - </h2>
      <button v-show="showTheGrocers" type="button" name="button" @click="addGrocer">Add Grocer</button>
      <button v-show="showTheGrocers" type="button" name="button" @click="deleteGrocer">Delete Grocer</button>
      <button v-show="showTheGrocers" type="button" name="button" @click="updateGrocer">Update Grocer</button>
      <button v-show="showTheUpdateGrocers" type="button" name="goBack" @click="showEachGrocer">GO BACK</button>
      <button v-show="showTheDeleteGrocers" type="button" name="goBack" @click="showEachGrocer">GO BACK</button>
    </section>
    <form v-show="showTheAddGrocer" class="submit">
      <p>Enter the name of the grocer:</p>
      <input class="formInput" type="text" name="grocerName" v-on:keyup="populateGrocerName" :value="grocerObjectToAdd.grocerName">
      <p>Enter the source url of the grocer picture:</p>
      <input class="formInput" type="text" name="grocerPic" v-on:keyup="populateGrocerPic" :value="grocerObjectToAdd.grocerPic">
      <p>Enter a link with the website for the grocer:</p>
      <input class="formInput" type="text" name="grocerLink" v-on:keyup="populateGrocerLink" :value="grocerObjectToAdd.grocerLink">
      <p>Anything you want to add?</p>
      <input class="formInput" type="text" name="funIdeas" v-on:keyup="populateOther" :value="grocerObjectToAdd.other">
      <p></p>
      <button type="button" name="button" v-on:click="realAddGrocer">Add Grocer</button>
    </form>
    <form v-show="showTheUpdateForm" class="submit">
      <img src="" alt="">
      <p>Enter the name of the grocer:</p>
      <input class="formInput" type="text" name="grocerName" v-on:keyup="populateGrocerName" :value="grocerObjectToAdd.grocerName">
      <p>Enter the source url of the grocer picture:</p>
      <input class="formInput" type="text" name="grocerPic" v-on:keyup="populateGrocerPic" :value="grocerObjectToAdd.grocerPic">
      <p>Enter a link with the website for the grocer:</p>
      <input class="formInput" type="text" name="grocerLink" v-on:keyup="populateGrocerLink" :value="grocerObjectToAdd.grocerLink">
      <p>Anything you want to add?</p>
      <input class="formInput" type="text" name="funIdeas" v-on:keyup="populateOther" :value="grocerObjectToAdd.other">
      <p></p>
      <button type="button" name="button" v-on:click="realUpdateGrocer">Update Grocer</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: ' - Your Shopping List - ',
      newIngredient: '',
      grocerAPI: 'https://family-meal-planner.herokuapp.com/grocer/',
      //grocerAPI: 'http://localhost:3000/grocer',
      grocerData: [],
      showTheGrocers: true,
      showTheUpdateGrocers: false,
      showTheDeleteGrocers: false,
      showTheAddGrocer: false,
      showTheUpdateGrocer: false,
      showTheUpdateForm: false,
      grocerObjectToAdd: {
        grocerName: '',
        grocerPic: '',
        grocerLink: '',
        grocerZip: '80202',
        other: ''
      },
      isItReady: true,
      grocerNameDelete: '',
      grocerNameUpdate: '',
      grocerIDDelete: '',
      grocerIDUpdate: ''
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
        })
    },
    addGrocer: function() {
      this.showTheAddGrocer = !this.showTheAddGrocer
      this.showTheUpdateForm = false
    },
    deleteGrocer: function() {
      this.showTheGrocers = false
      this.showTheUpdateGrocers = false
      this.showTheDeleteGrocers = true
    },
    updateGrocer: function() {
      this.showTheGrocers = false
      this.showTheUpdateGrocers = true
      this.showTheDeleteGrocers = false
      this.showTheAddGrocer = false
    },
    showEachGrocer: function() {
      this.showTheGrocers = true
      this.showTheUpdateGrocers = false
      this.showTheUpdateForm = false
      this.showTheDeleteGrocers = false
      this.grocerObjectToAdd = { grocerName: '', grocerPic: '', grocerLink: '', other: '' }
    },
    clickDeleteGrocer: function() {
      this.isItReady = false
      for (let i=0;i<this.grocerData.length;i++) {
        if (this.grocerData[i].grocerPic == event.target.src) {
          this.grocerIDDelete = this.grocerData[i].id
          this.grocerNameDelete = this.grocerData[i].grocerName
          this.isItReady = true
        }
      }
      if (this.isItReady) {
        if (confirm(`Are you sure you want to delete ${this.grocerNameDelete}?`)) {
          fetch(`https://family-meal-planner.herokuapp.com/grocer/${this.grocerIDDelete}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'DELETE',
          })
          .then(function(res){
            console.log(res)
          }).catch(function(res){
            console.log(res)
          })
          this.showEachGrocer()
          this.getGrocers()
          location.reload()
        }
      }
    },
    clickUpdateGrocer: function() {
      for (let i=0;i<this.grocerData.length;i++) {
        if (this.grocerData[i].grocerPic == event.target.src) {
          this.showTheUpdateForm = true
          this.grocerIDUpdate = this.grocerData[i].id
          this.grocerNameUpdate = this.grocerData[i].grocerName
          this.grocerObjectToAdd.grocerName = this.grocerData[i].grocerName
          this.grocerObjectToAdd.grocerPic = this.grocerData[i].grocerPic
          this.grocerObjectToAdd.grocerLink = this.grocerData[i].grocerLink
          this.grocerObjectToAdd.other = this.grocerData[i].other
        }
      }
      window.scrollBy(0, 200)
    },
    populateGrocerName: function() {
      this.grocerObjectToAdd.grocerName = event.target.value
    },
    populateGrocerPic: function() {
      this.grocerObjectToAdd.grocerPic = event.target.value
    },
    populateGrocerLink: function() {
      this.grocerObjectToAdd.grocerLink = event.target.value
    },
    populateOther: function() {
      this.grocerObjectToAdd.other = event.target.value
    },
    realAddGrocer: function() {
      this.isItReady = true
      if (this.grocerObjectToAdd.grocerName.length < 4 || this.grocerObjectToAdd.grocerName.length > 25) {
        this.isItReady = false
        alert('Name cannot have less than 4 characters or more than 25 characters')
      }
      if (this.grocerObjectToAdd.grocerPic.length < 12 ) {
        this.isItReady = false
        alert('Picture url cannot have less than 12 characters')
      }
      if (this.grocerObjectToAdd.grocerLink.length < 12 ) {
        this.isItReady = false
        alert('Link cannot have less than 12 characters')
      }
      if (this.grocerObjectToAdd.other.length > 50) {
        this.isItReady = false
        alert('Name cannot have more than 50 characters')
      }
      if (this.isItReady) {
        alert('Added!')
        fetch('https://family-meal-planner.herokuapp.com/grocer/',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(this.grocerObjectToAdd)
        })
        .then(function(res){
          console.log(res)
        }).catch(function(res){
          console.log(res)
        })
        this.showEachGrocer()
        this.grocerObjectToAdd = { grocerName: '', grocerPic: '', grocerLink: '', other: '' }
        this.getGrocers()
        location.reload()
      }
    },
    realUpdateGrocer: function() {
      this.isItReady = true
      if (this.grocerObjectToAdd.grocerName.length < 4 || this.grocerObjectToAdd.grocerName.length > 25) {
        this.isItReady = false
        alert('Name cannot have less than 4 characters or more than 25 characters')
      }
      if (this.grocerObjectToAdd.grocerPic.length < 12 ) {
        this.isItReady = false
        alert('Picture url cannot have less than 12 characters')
      }
      if (this.grocerObjectToAdd.grocerLink.length < 12 ) {
        this.isItReady = false
        alert('Link cannot have less than 12 characters')
      }
      if (this.grocerObjectToAdd.other.length > 50) {
        this.isItReady = false
        alert('Additional info cannot have more than 50 characters')
      }
      if (this.isItReady) {
        alert('Updating...')
        if (confirm('Are you sure you want to update this grocer?')) {
          fetch(`https://family-meal-planner.herokuapp.com/grocer/${this.grocerIDUpdate}`,
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(this.grocerObjectToAdd)
          })
          .then(function(res){
            console.log(res)
          }).catch(function(res){
            console.log(res)
          })
          this.showEachGrocer()
          this.getGrocers()
          location.reload()
        }
      }
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
.picntext {
  display: flex;
  flex-direction: column;
}

</style>
