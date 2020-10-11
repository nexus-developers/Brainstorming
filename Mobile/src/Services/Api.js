import Axios from 'axios'

const Api = Axios.create({
  baseURL: 'https://brainstorming-nexus.herokuapp.com'
})

export default Api