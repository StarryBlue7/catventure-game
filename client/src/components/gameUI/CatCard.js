import React, { useState} from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import Jobs from '../../data/jobs.json'

// replace these with the proper imports
const warriorImage = '';
const rangerImage = '';
const mageImage = '';

function CatCard(props) {

    // I also need the removeCat function

    const [catFormData, setCatFormData] = useState({catName: ''})

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCatFormData({...catFormData, [name]: value})
    }

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        const cat = props.cat;
        cat.name = catFormData.catName;
        console.log(cat);
        props.recruitCat(cat);
    }

    const [namingModal, setNamingModal] = useState(false);

    const namingModalClose = () => setNamingModal(false);
    const namingModalOpen = () => setNamingModal(true);

    function getClassImg(gameClass){
        if(gameClass === 1){
            return warriorImage;
        } else if(gameClass === 2){
            return rangerImage;
        } else {
            return mageImage;
        }
    }

    return (
        <>
            <div className="cat-card">
                {!props.isTavern ? (<p>{props.cat.name}</p>) : (<></>)}
                <img src={getClassImg(props.cat.class)} alt="animated cat" />
                <div className="hp-bar"><div></div></div>
                <p>{props.cat.class}</p>
                <p>HP: {props.cat.maxHP}/{props.cat.maxHP}</p>
                <p>Lvl: {!props.isTavern ? props.cat.level : 1}</p>
                <p>{Jobs[props.cat.class].statName}: {props.cat.power}</p>
                {props.isTavern ? (
                    <Button onClick={namingModalOpen}>Recruit this cat</Button>
                ) 
                : (
                    <Button>Remove</Button>
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