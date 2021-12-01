<template>
    <div class="vue-template">
        <h2>{{ msg }}</h2>
        <div id="array-rendering">
          <h3 v-for="item in items" :key="item.id">
            {{ item.nomA }}  {{ item.paysA }}
          </h3>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ListeComp',
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { nomA: 'Foo', paysA: 'France'  }, 
        { nomA: 'Bar', paysA: 'Allemagne' }]
    }
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
#array-rendering{
  color:red;
}

</style>