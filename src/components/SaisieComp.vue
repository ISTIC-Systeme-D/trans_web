<template>
    <div class="vue-template">
        <h2>{{ msg }}</h2>
        <form>
            <div class="form-group">
                <label>Artiste</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Pays de l'artiste</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Lien Spotify</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Lien Deezer</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Date</label>
                <input type="date" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Heure</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

             <div class="form-group">
                <label>Salle de concert</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Lieu</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="btn-form">
            <button type="submit" class="btn btn-dark btn-lg btn-block">Valider</button>
            </div>
        </form>
    </div>
</template>

<script>

export default {
  name: 'SaisieComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$primary: crimson;

h2 {
  margin: 20px 0 20px;
  color: black;
}
label {
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