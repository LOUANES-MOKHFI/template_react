import React from 'react'
import { Col, Row, Form } from 'react-bootstrap'

const Register = () => {
    const handleSubmit=(e)=>{
        e.preventdefault();
    }
    
    
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
      <Row className='w-100 mx-0'>
        <Col className='mx-auto' lg={4}>
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
                <img src="../../images/logo.svg" alt="logo" />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
            <Form className='pt-3' onSubmit={handleSubmit}>
            
                <Form.Group className='form-group'>
                    <Form.Control className="form-control-lg" type="text" placeholder="First/Last Name" />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Control className="form-control-lg" type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Select className="form-control form-control-lg" id="exampleFormControlSelect2" >
                        <option>Country</option>
                        <option>United States of America</option>
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>Germany</option>
                        <option>Argentina</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Control className="form-control-lg" type="password" placeholder="Password" />
                </Form.Group>
                
                <div className="mb-4">
                    <Form.Check className=""
                        type="checkbox"
                        label="I agree to all Terms & Conditions"
                    />
                </div>
                <div className="mt-3">
                    <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="/">SIGN UP</a>
                </div>
                <div className="text-center mt-4 font-weight-light">
                    Already have an account? <a href="/login" className="text-primary">Login</a>
                </div>
            </Form>
        </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Register
