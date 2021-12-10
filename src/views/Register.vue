<template>
  <div class="register">
    <RegisterComp msg="Créer un compte"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterComp from '@/components/RegisterComp.vue'

export default {
  name: 'Login',
  components: {
    RegisterComp
  }
}
</script>
