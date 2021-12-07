import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Jobs from '../../data/jobs.json';
import Auth from '../../utils/auth';
import { removeCat } from '../../utils/API';
import Sprites from '../sprites/Sprites'

const styles = {
    tavernCard: {
        margin: '5px',
        paddingBottom: '10px'
    },
    tavernClass: {
        position: 'absolute',
        fontSize: '1.2em',
    },
    partyClass: {
        position: 'absolute',
        marginTop: '40px'
    },
    catName: {
        fontSize: '1.5em',
    },
}

function CatCard(props) {

    const [action, setAction] = useState('idle')

    //useState for the naming of the cat
    const [catFormData, setCatFormData] = useState({ catName: '' })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCatFormData({ ...catFormData, [name]: value })
    }

    //when user chooses a name, call the recruitCat method which was defined in Tavern component
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const cat = props.cat;
        cat.name = catFormData.catName;
        console.log(cat);
        props.recruitCat(cat);
    }

    //useState for the modal
    const [namingModal, setNamingModal] = useState(false);

    const namingModalClose = () => setNamingModal(false);
    const namingModalOpen = () => setNamingModal(true);

    // function to remove cat from party
    const handleremoveCat = async (catId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await removeCat(catId, token)
            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            const updatedUser = await response.json();
        } catch (err) {
            console.error(err);
        }


    };

    return (
        <>
            <div className="custom-card" style={styles.tavernCard}>
                {!props.isTavern ? (<p style={styles.catName}>{props.cat.name}</p>) : (<></>)}
                    {!props.isTavern ? 
                        (<p style={styles.partyClass}>{props.cat.class}</p>) 
                        : (<p style={styles.tavernClass}>{props.cat.class}</p>)}
                <Sprites job={props.cat.class} action={action} setAction={setAction} />
                <div className="hp-bar"><div></div></div>
                <p>HP: {props.cat.currentHP ? props.cat.currentHP : props.cat.maxHP}/{props.cat.maxHP}</p>
                <p>Lvl: {!props.isTavern ? props.cat.level : 1}</p>
                {props.isTavern ? (<></>) : (<p>Exp: {props.cat.experience}/20</p>)}
                <p>{Jobs[props.cat.class].statName}: {props.cat.power}</p>
                {props.isTavern ? (
                    <Button
                        className={"custom-button"}
                        onClick={namingModalOpen}
                        disabled={props.recruitLockout}>Recruit this cat</Button>
                )
                    : (
                        <Button
                            variant="danger"
                            onClick={() => handleremoveCat(props.cat._id)}
                            disabled={props.isLastCat}>Remove</Button>
                    )}
            </div>
            <Modal show={namingModal} onHide={namingModalClose}>
                <Modal.Body>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Name your cat!
                            </Form.Label>
                            <Form.Control
                                type="text"
                                name='catName'
                                onChange={handleInputChange}
                                value={catFormData.catName}
                                required
                            />
                        </Form.Group>
                        <Button
                            disabled={!catFormData.catName}
                            variant="primary"
                            type="submit"
                            onClick={namingModalClose}>
                            Add to my Party!
                        </Button>
                        <Button variant="secondary" onClick={namingModalClose}>
                            Close
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CatCard;