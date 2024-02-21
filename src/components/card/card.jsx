import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, imageUrl, text, btnText}) {
    return (
        <Card style={{ width: '18rem', border: '1px solid #dee2e6', borderRadius: '0.25rem'}}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '190px' }}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="primary">{btnText}</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;