<template>
  <div class="login">
    <LoginComp msg="Connectez-vous"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComp from '@/components/LoginComp.vue'

export default {
  name: 'Login',
  components: {
    LoginComp
  }
}
</script>
