<template>
    <div class="submit-form">
    <div v-if="!submitted">
            <div class="form-group">
                <label>Artiste</label>
                <input type="text" class="form-control form-control-lg" 
                id="artistes"
                required
                v-model="artist.artistes"
                name="artistes"
                />
            </div>

            <div class="form-group">
                <label>Pays de l'artiste</label>
                <input type="text" class="form-control form-control-lg" 
                id="origine_pays1"
                required
                v-model="artist.origine_pays1"
                name="origine_pays1"/>
            </div>

            <div class="form-group">
                <label>Lien Spotify</label>
                <input type="text" class="form-control form-control-lg" 
                id="spotify"
                required
                v-model="artist.spotify"
                name="spotify"/>
            </div>

            <div class="form-group">
                <label>Lien Deezer</label>
                <input type="text" class="form-control form-control-lg" 
                id="deezer"
                required
                v-model="artist.deezer"
                name="deezer"/>
            </div>

            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control form-control-lg"
                id="premiere_date"
                required
                v-model="artist.premiere_date"
                name="premiere_date"/>
            </div>

            <!-- <div class="form-group">
                <label>Heure</label>
                <input type="text" class="form-control form-control-lg" />
            </div> -->

             <div class="form-group">
                <label>Salle de concert</label>
                <input type="text" class="form-control form-control-lg"
                id="premiere_salle"
                required
                v-model="artist.premiere_salle"
                name="premiere_salle"/>
            </div>

           <!--  <div class="form-group">
                <label>Lieu</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
 -->
           <button @click="saveArtist" class="btn btn-dark">Valider</button>
    </div>

    <div v-else>
      <h4>L'entrée à bien été ajouté</h4>
      <button class="btn btn-dark" @click="newArtist">Ajouter une nouvelle entrée</button>
    </div>
    </div>
</template>

<script>
import ArtistDataService from "../services/ArtistService";
export default {
  name: "add-artist",
  data() {
    return {
      artist: {
        recordid: "",
        record_timestamp: "",
        published: false
      },
      submitted: false
    };
  },
  methods: {

      //generate random for recordid 
    saveArtist() {
      var data = {
        datasetid: "datamix-europe-transmusicales",
        fields: {
            "spotify": this.artist.spotify,
            "1ere_date_timestamp": 1101942000,
            "cou_official_lang_code": "EN",
            "cou_onu_code": "578",
            "artistes": this.artist.artistes,
            "cou_iso2_code": "NO",
            "geo_point_2d": {
                "0":68.7958281693,
                "1":15.4107026868
            },
            "cou_iso3_code": "NOR",
            "1ere_salle": this.artist.premiere_salle,
            "cou_is_receiving_quest": "Y",
            "edition": "26èmes Rencontres Trans Musicales",
            "cou_text_sp": "Noruega",
            "1ere_date": this.artist.premiere_date,
            "cou_is_ilomember": "Y",
            "annee": "2021",
            "deezer": this.artist.deezer,
            "cou_text_en": "Norway",
            "origine_pays1": this.artist.origine_pays1
            },
            geometry: {
          "type": "Point",
          "coordinates": {
            "0":15.4107026868,
            "1":68.7958281693
          }
        },
        recordid: "test",
        record_timestamp: "test"
      };
      ArtistDataService.create(data)
        .then(() => {
          console.log("Created new item successfully!");
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    //reset tout a 0 pour ajouter un new 
    newArtist() {
      this.submitted = false;
      this.artist = {
        datasetid: "",
        fields: "",
        recordid: "",
        record_timestamp: "",
        published: false
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: crimson;

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
.form-control{
    width: 50%;
    margin-left: 25%;
    margin-bottom: 20px;
}
.vertical-center .form-control:focus {
  border-color: #2554FF;
  box-shadow: none;
}
.btn-form{
  padding-bottom: 50px;
}
</style>