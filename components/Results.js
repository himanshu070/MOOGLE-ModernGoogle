import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'

import ResultContext from '../context/ResultContext'

const Results = () => {
  const {results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();
  if(isLoading) return <Loading/>;

  return (
    <div>

    </div>
  )
}

export default Results