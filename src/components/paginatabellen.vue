<template>
    <tbody>
    <template v-for="(song, index) in gepagineerdeItems">
    <tr v-bind:key="index">
      <td>{{ song.artist }}</td>
      <td>{{ song.title }}</td>
      <td>{{ song.album }}</td>
      <td>{{ song.genre }}</td>
    </tr>
    </template>
  </tbody>

</template>

<script>
export default {
  //gebruik props voor paginatie
  props: {
    items: {
      type: Array,
      required: true
    },
    //per pagina max 50 songs
    per_pagina: {
      type: Number,
      required: false,
      default: 50
    }
  },
//pagina 1 aangeven
  data () {
    return {
      page: 1
    }
  },
  computed: {
    totaalPaginas () {
      //afgerond items array lengte delen door pagina
      return Math.ceil(this.items.length / this.per_pagina)
    },
    //slice aantal zichtbaar per pagina
    gepagineerdeItems () {
      return this.items.slice(0, this.page * this.per_pagina)
    }
  },
  //hook
  created () {
    window.addEventListener('scroll', e => {
      //aan het einde, ga terug 0
      if (this.page >= this.totalPages) return //0
      // items toevoegen bij einde pagina
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        this.page++ //increment
      }
    })
  },
  watch: {
    items () {
      this.page = 1
    }
  }
 }


</script>

<style>
</style>
