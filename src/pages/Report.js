import React, {useEffect, useState} from "react";
import axios from 'axios'
import ResultTimeline from "../functions/resulttimeline";

//https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b
export default function Report() {
  const [results, getResults] = useState('')

  useEffect (() => {
    getAllResults()
  }, [])

  const getAllResults = () => {
    axios.get('http://localhost:4800/report')
    .then((response) => {
      const allResults = response.data.results.allResults
      getResults(allResults)
    })
    .catch(error => console.error(`Error: ${error}`))
  }
  return (<ResultTimeline results={results}/>)
}

