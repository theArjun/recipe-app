import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Recipe.css";

const Recipe = (props) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const imgStyle = {
    width: "18rem",
  };

  return (
    <div>
      <div class="card" style={imgStyle}>
        <img class="card-img-top" src={props.image} alt={props.title} />
        <div class="card-body">
          <h5 class="card-title font-weight-bold">{props.title}</h5>
          <p class="card-text">
            <Button variant="primary" onClick={handleShow}>
              See Ingredients
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.title} Ingredients :</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                
                {
                  <ul className="list-group list-group-flush">
                    {props.ingredients.map((item) => (
                      <li className="list-group-item">{item.text}</li>
                    ))}
                  </ul>
                }
              </Modal.Body>
            </Modal>
          </p>
        </div>
        <div className="card-footer text-muted font-italic">
          Calories : {props.calories.toFixed(3)}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
