import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

const NavigatorInstructions = ({ instructions: initialInstructions }) => {
    const [instructions, setInstructions] = useState(initialInstructions);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // Apri la dialog ogni volta che le istruzioni cambiano
    }, [initialInstructions]); // Utilizziamo initialInstructions invece di instructions come dipendenza

    const handleClose = () => setShow(false);

    return (
        <Modal show={show} onHide={handleClose} style={{marginTop:'150px'}}>
            <Modal.Header closeButton>
                <Modal.Title>Istruzioni del navigatore</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {Array.isArray(instructions) && instructions.length > 0 ? (
                    <ol>
                        {instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                ) : (
                    <p>Nessuna istruzione disponibile.</p>
                )}
            </Modal.Body>
        </Modal>
    );
};

export default NavigatorInstructions;
