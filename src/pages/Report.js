import React, { useEffect, useState} from "react";
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Result from "../components/Result";
import { Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";

const Report = () => {

    useEffect(() => {
        getResults()
    }, [])

    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)

    const getResults = async () => {
        try {
            const res = await axios.get('http://localhost:4800/report')
            setResults(res.data.results)
        }
     catch (err) {
        alert(err.message)
    }
    }
    
    if (results.length === 0) {
        return (
            <h4 style={{marginLeft:"200px", marginTop:"50px"}}>Loading...</h4>
        )
    } else if (results === "conforms") {
        return (
            <h4 style={{marginLeft:"200px", marginTop:"50px"}}>Your building project complies to the checked part of the Belgian building code on accessibility.</h4>
        )
    } else {
        return(
            <Grid style={{marginLeft:"185px", marginTop:"50px"}}>
                <h4 style={{marginLeft:"15px"}}>There were {results.length} building elements found that do not comply to the Belgian building code on accessibility.</h4>
                <Button variant="outline-dark" style={{marginLeft:"15px", marginTop:"10px"}}> Download validation report</Button>
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

