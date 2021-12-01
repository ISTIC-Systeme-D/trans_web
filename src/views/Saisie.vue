<template>
  <div class="saisie">
    <SaisieComp msg="Saisissez votre nouvelle entrée"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SaisieComp from '@/components/SaisieComp.vue'

export default {
  name: 'Saisie',
  components: {
    SaisieComp
  }
}
</script>