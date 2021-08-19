<template>
  <table class="table is-fullwidth is-striped is-hoverable is-narrow">
    <!--bulma classes styles-->
    <thead>
      <th style="width: 30%">
        <a @click="sorting('artist')"
          >Artist
          <i
            class="fas fa-chevron-up"
            v-if="sortBy == 'artist' && sortDirection == 'ascending'"
          ></i>
          <i
            class="fas fa-chevron-down"
            v-if="sortBy == 'artist' && sortDirection == 'descending'"
          />
        </a>
      </th>
      <th style="width: 30%">
        <a @click="sorting('title')"
          >Title
         <i
            class="fas fa-chevron-up"
            v-if="sortBy == 'artist' && sortDirection == 'ascending'"
          ></i>
          <i
            class="fas fa-chevron-down"
            v-if="sortBy == 'artist' && sortDirection == 'descending'"
          />
        </a>
      </th>
      <th style="width: 20%">
        <a @click="sorting('album')"
          >Album
            <i
            class="fas fa-chevron-up"
            v-if="sortBy == 'artist' && sortDirection == 'ascending'"
          ></i>
          <i
            class="fas fa-chevron-down"
            v-if="sortBy == 'artist' && sortDirection == 'descending'"
          />
        </a>
      </th>
      <th style="width: 20%">
        <a @click="sorting('duration')"
          >Duration
          <i
            class="fas fa-chevron-up"
            v-if="sortBy == 'artist' && sortDirection == 'ascending'"
          ></i>
          <i
            class="fas fa-chevron-down"
            v-if="sortBy == 'artist' && sortDirection == 'descending'"
          />
        </a>
      </th>
    </thead>

    <tbody v-for="(song, index) in songsSorteren" v-bind:key="index">
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
//import playlist json
import playlistData from "@/assets/spotifyplaylist.json";
export default {
  data() {
    return {
      //array
      songs: playlistData,
      //sorteren
      sortBy: "",
      //oplopend sorteren
      sortDirection: "ascending",
    };
  },
  computed: {
    //sorteren
    songsSorteren() {
      if (this.sortBy === "") {
        return this.songs;
      }

      //modifier: als aflopend return positief anders negatief
      let sortModifier = this.sortDirection === "ascending" ? 1 : -1;
      // verkleinen array en sorteer resultaat
      return this.songs.slice().sort((a, b) => {
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        //js sort by name functie
        let colA = a[this.sortBy].toUpperCase(); //verwaarloos uppercase
        let colB = b[this.sortBy].toUpperCase(); //verwaarloos uppercase

        if (colA < colB) {
          return -1 * sortModifier;
        }
        if (colA > colB) {
          return 1 * sortModifier;
        }

        return 0;
      });
    },
  },
  methods: {
    //sorteer functie, als al 'oplopend', sorteer aflopend, anders weer oplopend
    sorting(column) {
      if (this.sortBy === column && this.sortDirection === "ascending") {
        this.sortDirection = "descending";
      } else {
        this.sortDirection = "ascending";
      }
      this.sortBy = column;
    },
  },
};
</script>

<style></style>
