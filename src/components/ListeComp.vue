<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Liste des artistes</h4>
      <table class="table table-bordered float-left">
        <thead>
          <tr>
            <th scope="col-md-5">Nom</th>
            <th scope="col-md-5">Pays</th>
            <th scope="col-md-5">Date</th>
            <th scope="col-md-5">Salle</th>
          </tr>
        </thead>
         <tbody>

            <tr class="table-item"
          :class="{ active: index == currentIndex }"
          v-for="(artist, index) in artists"
          :key="index"
          @click="setActiveArtist(artist, index)">
              <th scope="row">{{artist.fields.artistes}}</th>
              <td>{{artist.fields.origine_pays1}}</td>
              <td>{{artist.fields.premiere_date}}</td>
              <td>{{artist.fields.premiere_salle}}</td>
            </tr>
        
        </tbody>
      </table>
      <!-- <ul class="table-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(artist, index) in artists"
          :key="index"
          @click="setActiveArtist(artist, index)"
        >
          {{ artist.name }}
        </li>
        <li
        class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(artist, index) in artists"
          :key="index">
          {{artist.record_timestamp}}
        </li>
      </ul> -->

      <button class="btn btn-danger" @click="removeAllArtists">
        Supprimer tout les artistes
      </button>
    </div>
    <!-- update part -->
    <div class="col-md-6">
      <div v-if="currentArtist">
        <artist-details
          :artist="currentArtist"
          @refreshList="refreshList"
        />
      </div>
      <div v-else>
        <br />
        <h4 class="messageAjour">Cliquer sur un artiste pour le mettre à jour</h4>
      </div>
    </div>
  </div>
</template>

<script>
import ArtistDataService from "../services/ArtistService";
import ArtistDetails from "./ArtistComp";
export default {
  name: "artists-list",
  components: { ArtistDetails },
  data() {
    return {
      artists: [],
      currentArtist: null,
      currentIndex: -1
    };
  },
  methods: {
    onDataChange(items) {
      let _artists = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        
            _artists.push({
            /* key: key,
            name: item.child("/fields/artistes").val(),
            country: item.child("/fields/origine_pays1").val(),
            premiere_date: item.child("/fields/1ere_date").val(),
            premiere_salle: item.child("/fields/1ere_salle").val(),
            date: item.child("/fields/1ere_date").val(),
            geometry: data.geometry,
            datasetid: data.datasetid,
            recordid: data.recordid,
            record_timestamp: data.record_timestamp,
            }); */
            key: key,
            datasetid: data.datasetid,
            fields: {
              spotify: item.child("/fields/spotify").val(),
              premiere_date_timestamp: item.child("/fields/1ere_date_timestamp").val(),
              cou_official_lang_code: item.child("/fields/cou_official_lang_code").val(),
              cou_onu_code: item.child("/fields/cou_onu_code").val(),
              artistes: item.child("/fields/artistes").val(),
              cou_iso2_code: item.child("/fields/cou_iso2_code").val(),
              geo_point_2d: {
                "0":item.child("/fields/geo_point_2d/0").val(),
                "1":item.child("/fields/geo_point_2d/1").val()
              },
              cou_iso3_code: item.child("/fields/cou_iso3_code").val(),
              premiere_salle: item.child("/fields/1ere_salle").val(),
              cou_is_receiving_quest: item.child("/fields/cou_is_receiving_quest").val(),
              edition: item.child("/fields/edition").val(),
              cou_text_sp: item.child("/fields/cou_text_sp").val(),
              premiere_date: item.child("/fields/1ere_date").val(),
              cou_is_ilomember: item.child("/fields/cou_is_ilomember").val(),
              annee: item.child("/fields/annee").val(),
              deezer: item.child("/fields/deezer").val(),
              cou_text_en: item.child("/fields/cou_text_en").val(),
              origine_pays1: item.child("/fields/origine_pays1").val()
            }, 
              geometry: {
                type: item.child("/fields/geometry/type").val(),
                coordinates: {
                  "0":item.child("/fields/geometry/coordinates/0").val(),
                  "1":item.child("/fields/geometry/coordinates/1").val()
                }
            
              },

              record_timestamp: data.record_timestamp,
              recordid: data.recordid
            
          });
      });
      this.artists = _artists;
    },
    refreshList() {
      this.currentArtist = null;
      this.currentIndex = -1;
    },
    setActiveArtist(artist, index) {
      this.currentArtist = artist;
      this.currentIndex = index;
      console.log(this.currentArtist);
    },
    removeAllArtists() {
      ArtistDataService.deleteAll()
        .then(() => {
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() { 
    //pour la version final mettre dernière edition des trans 42 ? 
    ArtistDataService.getAll().orderByChild("/fields/edition").equalTo("26èmes Rencontres Trans Musicales").on("value", this.onDataChange);
  },
  beforeUnmount() {
    ArtistDataService.getAll().off("value", this.onDataChange);
  }
};
</script>

<style scoped lang="scss">

$primary: crimson;

.table {
  background-color:white;
  min-width: 30%;
}
.list {
  text-align: left;
  max-width: 90%;
  margin: auto;
}

.btn-danger{
  margin-bottom: 10px;
}

h2 {
  margin: 20px 0 20px;
  color: black;
}
label, h4 {
  color: black;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $primary;
}

</style>