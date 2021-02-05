<template>
  <div>
    mysal
    <ul v-for="(item, index) in list" :key="index">
      <li>{{ item.type }} {{ getType(item.type) }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mysql',
  data () {
    return {
      list: [{ type: '1' }, { type: '2' }, { type: '3' }, { type: '4' }]
    }
  },
  methods: {
    getType (type) {
      console.log(type)
      if (type === '1') {
        return '111111111'
      } else if (type === '2') {
        return '22222222222'
      } else {
        return '333333'
      }
    }
  }
}
</script>
