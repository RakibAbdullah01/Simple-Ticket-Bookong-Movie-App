import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const BuyNowModal = ({ handleClose, movie }) => {
  const [customer, setCustomer] = useState(
    JSON.parse(localStorage.getItem('customer')) ||
    {
    name: "",
    email: "",
    phone: "",
  });

  const onInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const { name, email, phone } = customer;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    localStorage.setItem('customer',JSON.stringify(customer))
  };
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          placeholder="movie"
          rows={2}
          name="Movie"
          defaultValue={movie}
          value={movie}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Your Phone Numer</Form.Label>
        <Form.Control
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <br />

      <Button variant="success" type="submit" block>
        Buy Now
      </Button>
    </Form>
  );
};

export default BuyNowModal;
