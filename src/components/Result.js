import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Result = ({ result }) => {
    return (
        <>
        <Card className='my-3 p-3 rounded h-90'>
        <Card.Body>
                {`The building element with id ${result.batid} does not comply. `}
                {`${result.message}`}
        </Card.Body>
        </Card>
        </>
    )
}

export default Result