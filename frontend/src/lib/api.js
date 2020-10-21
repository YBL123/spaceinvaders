//* Axios is a very convenient JavaScript library to perform HTTP requests in Node.js
import axios from 'axios'

const baseUrl = 'api'

export const getShip = () => {
  try {
    return axios.get(`${baseUrl}/ship`)
  } catch (error) {
    console.log(error)
  }
}

// export const getSingleRover = roverId => {
//   try {
//     return axios.get(`${baseUrl}/rovers/${roverId}`)
//   } catch (error) {
//     console.log(error)
//   }
// }

export const createShip = formData => {
  try {
    return axios.post(`${baseUrl}/ship`, formData)
  } catch (error) {
    console.log(error)
  }
}

// export const removeRover = roverId => {
//   try {
//     return axios.delete(`${baseUrl}/rovers/${roverId}`)
//   } catch (error) {
//     console.log('delete', error)
//   }
// }

// export const moveRover = (formData) => {
//   try {
//     return axios.post(`${baseUrl}/rovers/movement`, formData)
//   } catch (error) {
//     console.log('move', error)
//   }
// }