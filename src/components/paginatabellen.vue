<template>
  <tbody
    v-bind:key="index"
  >
  <template v-for="(song, index) in paginatieItems>
    <tr>
      <!--oproep json playlist-->
      <td>{{ song.artist }}</td>
      <td>{{ song.title }}</td>
      <td>{{ song.album }}</td>
      <td>{{ song.duration }}</td>
    </tr>
    </tbody>
    </table>

</template>

<script>
export default {
  //gebruik props voor paginatie
  props: {
    items: {
      type: Array,
      required: true
    },
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
      return Math.ceil(this.items.length / this.per_page)
    }
  },
  //hook
  created () {
    window.addEventListener('scroll', e => {
      //aan het einde, ga terug 0
      if (this.page >= this.totalPages) return //0
      // pagina toevoegen bij einde pagina
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100) {
        this.page++ //increment
      }
    })
  },
  watch: {
    items: () {
      this.page = 1
    }
  }
};
</script>

<style>
</style>
