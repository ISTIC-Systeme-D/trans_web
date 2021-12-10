<template>
  <div class="liste">
    <ListeComp msg="Liste des entrées"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListeComp from '@/components/ListeComp.vue'

export default {
  name: 'Liste',
  components: {
    ListeComp
  }
}
</script>