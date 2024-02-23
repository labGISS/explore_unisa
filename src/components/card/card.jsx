import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({ title, imageUrl, text, btnText, linkTo}) {
    const buttonStyle = {
        color: '#ffffff',
        backgroundColor: '#2a5934',
        borderColor: '#2a5934',
        width: '100%',
        marginBottom: '10px'
    };

    return (
        <Card style={{ width: '18rem', border: '1px solid #dee2e6', borderRadius: '0.25rem', height:'425px'}}>
            <Card.Img variant="top" src={imageUrl} style={{ height: '190px' }}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="outline-primary" as="a" href={linkTo} className="mt-auto" style={buttonStyle}>{btnText}</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;
