<template>
  <div>
    swagger
    <el-button>1231</el-button>
  </div>
</template>

<script>
import { getSwaggerContent } from '@/api'
export default {
  name: 'swagger',
  created() {
    this.init()
  },
  methods: {
    async init () {
      const res = await getSwaggerContent()
      console.log(res)
      debugger
    }
  }
}
</script>

<style>

</style>