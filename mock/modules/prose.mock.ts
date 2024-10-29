import { defineMock } from 'vite-plugin-mock-dev-server'
import proses from '../data'
import { builder } from '../util'

export default defineMock({
  url: '/api/prose',
  delay: 100,
  body: () => {
    const rand = Math.floor(Math.random() * proses.value.length)
    const prose = proses.value[rand]
    return builder(prose)
  },
})
