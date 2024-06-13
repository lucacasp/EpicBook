import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMjYyMjBiM2IyNTAwMTUxYjU0M2EiLCJpYXQiOjE3MTgyODM1MjksImV4cCI6MTcxOTQ5MzEyOX0.2cOacT4ifriKaL4zFVuEPyAL4tIsUvOb-mi6MSfBjbc'

export default axios.create({ // creo un pre-oggetto che passo in tutte le chiamate dove imposto il baseurl e il token
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${token}`}
  });