<template>
  <table class="table is-fullwidth is-striped is-hoverable is-narrow">
    <thead>
      <th>Artist</th>
      <th>Title</th>
      <th>Album</th>
      <th>Duration</th>
    </thead>

    <tbody v-for="(song, index) in songs" v-bind:key="index">
      <tr>
      <td> {{ song.artist }}</td>
      <td> {{ song.title }}</td>
      <td> {{ song.album }}</td>
      <td> {{ song.duration }} </td>

      </tr>

    </tbody>
  </table>
</template>

<script>
import playlistData from "@/assets/spotifyplaylist.json";
export default {
  data() {
    return {
      songs: playlistData,
    };
  },
};
</script>

<style></style>
