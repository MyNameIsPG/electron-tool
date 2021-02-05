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
  created () {
    this.init()
  },
  methods: {
    async init () {
      const res = await getSwaggerContent('http://172.18.1.108:9528/api/auth/v2/api-docs')
      console.log(res)
    }
  }
}
</script>

<style>

</style>