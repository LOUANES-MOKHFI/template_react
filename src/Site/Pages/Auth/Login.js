import React from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row, Form } from 'react-bootstrap'
const Login = () => {
  return (
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
      <Row className='w-100 mx-0'>
        <Col className='mx-auto' lg={4}>
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src="../../images/logo.svg" alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                    <Form.Group className='form-group'>
                        <Form.Control className="form-control-lg" type="email" placeholder="Username" />
                    </Form.Group>
                    <Form.Group className='form-group'>
                        <Form.Control className="form-control-lg" type="password" placeholder="Password" />
                    </Form.Group>
                
                <div className="mt-3">
                  <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="/">SIGN IN</a>
                </div>
                <div className="my-2 d-flex justify-content-between align-items-center">
                    <Form.Check className=""
                        type="checkbox"
                        label="Keep me signed in"
                    />
                  <NavLink to="#" className="auth-link text-black">Forgot password?</NavLink>
                </div>
                
                <div className="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="/register" className="text-primary">Create</a>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Login
