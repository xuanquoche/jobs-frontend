import axios, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: ' http://localhost:1337',
    })
  }
}

const http = new Http().instance

export default http
