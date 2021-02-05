<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import swagger from '@/views/swagger/swagger'
export default {
  name: 'home',
  components: {
    swagger
  }
}
</script>

<style>

</style>