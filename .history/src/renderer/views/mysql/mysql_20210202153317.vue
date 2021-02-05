<template>
  <div>
    mysal
    <ul v-for="(item, index) in list" :key="index">
      <li>{{item.type}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mysql',
  data () {
    return {
      list: [
        { type: '1' },
        { type: '2' },
        { type: '3' },
        { type: '4' }
      ]
    }
  }
}
</script>
