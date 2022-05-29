import React from 'react'
import { Card } from 'react-bootstrap'

const Result = ({ result }) => {
    return (
        <>
        <Card border="white" className='my-3 p-3 rounded h-90' style={{ width: '80rem' }}>
            <Card.Header>{`A ${result.severity} was found in the ${result.sourceShape} shape`}</Card.Header>
        <Card.Body>
                {`The building element with either name or property "${result.focusNode}"`} <br></br>
                {`and id ${result.id} does not comply.`}
                <br></br> <br></br>
                {`${result.message}`}
        </Card.Body>
        </Card>
        </>
    )
}

export default Result