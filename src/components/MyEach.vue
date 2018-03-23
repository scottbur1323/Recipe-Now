<template>
  <div>
    <section class="column">
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My BLT</figcaption>
      </figure>
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My Reubens</figcaption>
      </figure>
    </section>

    <section class="column">
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My BLT</figcaption>
      </figure>
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My Reubens</figcaption>
      </figure>
    </section>

    <section class="column">
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My BLT</figcaption>
      </figure>
      <figure class="picntext">
        <img @click="selectItem($event)" class="thumbnail" src="/static/blt.png" alt="">
        <figcaption>My Reubens</figcaption>
      </figure>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Each',
  data () {
    return {
      msg: ""
    }
  },
  methods: {
    selectItem: function(event) {
      if (event.target.className == "thumbnail2") {
        event.target.className = "thumbnail"
      } else (event.target.className = "thumbnail2")
    }
  }
}
</script>

<style scoped>

.column {
  justify-content: center;
  justify-content: space-around;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: row;
}
.picntext {
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  max-width: 100%;
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
  max-height: 100%;
  display: flex;
  width: 20vmin;
  height: 100%;
  opacity: 0.4;
  transition: opacity 1s, background 1s;
  background: #EBEFF7;
}

</style>
