import React, { useEffect, useState} from "react";
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Result from "../components/Result";
import { Grid } from "@material-ui/core";

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
    if(results === "conforms") {
        return (
            <h4 style={{padding:"65px"}}>Your building project complies to the Belgian building code on accessibility.</h4>
        )
    } else {
        return(
            <Grid style={{marginLeft:"185px", marginTop:"50px"}}>
                <h4 style={{marginLeft:"15px"}}>There were {results.length} building elements found that do not comply to the Belgian building code on accessibility.</h4>
                <Row sm={1} md={1} lg={1}>
                    {loading &&
                    results.map((result) => (
                        <Col key={result}>
                            <Result result = {result}/>
                        </Col>
                    ))}
                </Row>
            </Grid>
        )
    }
    
}
export default Report

