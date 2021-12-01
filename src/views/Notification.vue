<template>
  <div class="notification">
    <NotificationComp msg="Entrez votre message à notifier aux utilisateurs mobile"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NotificationComp from '@/components/NotificationComp.vue'

export default {
  name: 'Notification',
  components: {
    NotificationComp
  }
}
</script>