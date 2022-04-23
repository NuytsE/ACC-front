import React, {Fragment, useEffect, useState} from "react";
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Result from "../components/Result";

const Report = () => {

    useEffect(() => {
        getResults()
    }, [])


    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    const getResults = async () => {
        try {
            const res = await axios.get('http://localhost:4800/report')
            setResults(res.data.results)
            setLoading(true)
        }
     catch (err) {
        alert(err.message)
    }
    }
    return(
        <Fragment>
            <div>There were {results.length} building elements found that do not comply to the Belgian building code on accessibility.</div>
            <Row sm={1} md={1} lg={1}>
                {loading &&
                results.map((result) => (
                    <Col key={result}>
                        <Result result = {result}/>
                    </Col>
                ))}
            </Row>
        </Fragment>
    )
}
export default Report

