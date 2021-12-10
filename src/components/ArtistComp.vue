<template>
  <div v-if="currentArtist" class="edit-form float-right" id="test">
    <h4>Artiste</h4>
    <form>
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentArtist.fields.artistes"
        />
      </div>

      <div class="form-group">
        <label for="pays">Pays</label>
        <input
          type="text"
          class="form-control"
          id="pays"
          v-model="currentArtist.fields.origine_pays1"
        />
      </div>

      <div class="form-group">
        <label for="salle">Salle</label>
        <input
          type="text"
          class="form-control"
          id="salle"
          v-model="currentArtist.fields.premiere_salle"
        />
      </div>


      <div class="form-group">
        <label for="date">Date</label>
        <input
          type="text"
          class="form-control"
          id="date"
          v-model="currentArtist.fields.premiere_date"
        />
      </div>

      <div class="form-group">
        {{ message }}

      </div>
    </form>

    <button type="submit" class="btn btn-success" @click="updateArtist">
      Update
    </button>
    <button class="btn btn-danger" @click="deleteArtist">
      Delete
    </button>
  </div>
</template>

<script>
import ArtistDataService from '../services/ArtistService';
export default {
  name: "artist",
  props: ["artist"],
  data() {
    return {
      currentArtist: null,
      message: "",
    };
  },
  watch: {
    artist: function(artist) {
      this.currentArtist = { ...artist };
      this.message = "";
    },
  },
  methods: {
    /* updatePublished(status) {
      ArtistDataService.update(this.currentArtist.key, {
        published: status,
      })
        .then(() => {
          //this.currentArtist.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    }, */
    updateArtist() {
      const data = {

        /* name: this.currentArtist.name,
        country: this.currentArtist.country,
        premiere_date: this.currentArtist.premiere_date,
        premiere_salle: this.currentArtist.premiere_salle,
        geometry: this.currentArtist.geometry,
        datasetid: this.currentArtist.datasetid,
        recordid: this.currentArtist.recordid,
        record_timestamp: this.currentArtist.record_timestamp, */
        /* databasetid: this.currentArtist.databasetid,
        fields: {
            "spotify": "spotify:album:18Zy53OB9BCG0GtoGkQXv0",
            "1ere_date_timestamp": 1101942000,
            "cou_official_lang_code": "EN",
            "cou_onu_code": "578",
            "artistes": this.currentArtist.fields,
            "cou_iso2_code": "NO",
            "geo_point_2d": [
                68.7958281693,
                15.4107026868
            ],
            "cou_iso3_code": "NOR",
            "1ere_salle": "Parc des Expositions - Hall 5",
            "cou_is_receiving_quest": "Y",
            "edition": "26èmes Rencontres Trans Musicales",
            "cou_text_sp": "Noruega",
            "1ere_date": "01-déc-04",
            "cou_is_ilomember": "Y",
            "annee": "2004",
            "deezer": "2999681",
            "cou_text_en": "Norway",
            "origine_pays1": "Norvège"
            }, */
        /* geometry: {
          "type": this.currentArtist.geometry,
          "coordinates": [
            15.4107026868,
            68.7958281693
          ]
        },

        record_timestamp: this.currentArtist.record_timestamp,
        recordid: this.currentArtist.recordid, */

        datasetid: this.currentArtist.datasetid,
            fields: {
              spotify: this.currentArtist.fields.spotify,
              premiere_date_timestamp: this.currentArtist.fields.premiere_date_timestamp,
              cou_official_lang_code: this.currentArtist.fields.cou_official_lang_code,
              cou_onu_code: this.currentArtist.fields.cou_onu_code,
              artistes: this.currentArtist.fields.artistes,
              cou_iso2_code: this.currentArtist.fields.cou_iso2_code,
              geo_point_2d: this.currentArtist.fields.geo_point_2d,
              cou_iso3_code: this.currentArtist.fields.cou_iso3_code,
              "1ere_salle": this.currentArtist.fields.premiere_salle,
              cou_is_receiving_quest: this.currentArtist.fields.cou_is_receiving_quest,
              edition: this.currentArtist.fields.edition,
              cou_text_sp: this.currentArtist.fields.cou_text_sp,
              "1ere_date": this.currentArtist.fields.premiere_date,
              cou_is_ilomember: this.currentArtist.fields.cou_is_ilomember,
              annee: this.currentArtist.fields.annee,
              deezer: this.currentArtist.fields.deezer,
              cou_text_en: this.currentArtist.fields.cou_text_en,
              origine_pays1: this.currentArtist.fields.origine_pays1,
            }, 
              geometry: {
                type: this.currentArtist.geometry.type,
                coordinates: this.currentArtist.geometry.coordinates
                /* {
                  "0":item.child("/fields/geometry/coordinates/0").val(),
                  "1":item.child("/fields/geometry/coordinates/1").val()
                } */
                
            
              },

              record_timestamp: this.currentArtist.record_timestamp,
              recordid: this.currentArtist.recordid
            
      };
      ArtistDataService.update(this.currentArtist.key, data)
        .then(() => {
          this.message = "The artist was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteArtist() {
      ArtistDataService.delete(this.currentArtist.key)
        .then(() => {
          this.$emit("refreshList");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.currentArtist = { ...this.artist }
  },
};
</script>

<style scoped lang="scss">
$primary: crimson;


h2{
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
.edit-form{
    margin-left: 25%;
}
.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}
.btn{
    margin-top:10px;
    margin-right:5px;
}
#test{
  position:fixed;
  margin-left:30px;
  width:20%;
  margin-right:10%;
}

</style>