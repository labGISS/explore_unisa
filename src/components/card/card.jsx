import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function BasicExample({ title, imageUrl, text, btnText, linkTo}) {
    return (
        <Card style={{ width: '18rem', border: '1px solid #dee2e6', borderRadius: '0.25rem', height:'425px'}}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '190px' }}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link to={linkTo}>{btnText}</Link>

            </Card.Body>
        </Card>
    );
}

export default BasicExample;