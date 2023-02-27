import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Contact() {
  return (
    <div>
        {/* Some useful stuff here: https://ordinarycoders.com/blog/article/react-bootstrap-forms */}
          <Container>
              <Form>
                  <Form.Group controlId="form.Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="form.Email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="form.Textarea">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <br />
                  <Button variant="primary">Submit</Button>
              </Form>
          </Container>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
  )
}

export default Contact