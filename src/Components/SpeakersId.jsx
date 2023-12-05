import React from 'react'
import { useParams } from 'react-router-dom'

const SpeakersId = () => {

    const {id} = useParams()

  return (
    <div>Speakers {id}</div>
  )
}

export default SpeakersId