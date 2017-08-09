import React from 'react'
import Loader from '../assets/img/loading.gif'

const Spinner = (msg = null) =>
  <div>
    <img src={Loader} alt="Loading..." /> {msg}
  </div>

export default Spinner
