const axios = require('axios')

/**
 * 根据swaager地址获取json数据
 * @param url
 */
export const getSwaggerContent = url => axios.get(url)
