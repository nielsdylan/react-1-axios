import React from 'react'
import axios from 'axios';

const ListMotorcycles = () => {
  const URL = "http://127.0.0.1:8000/api/motos";
  axios.get(URL);

  return (
    <div>ListMotorcycles</div>
  )
}

export default ListMotorcycles;