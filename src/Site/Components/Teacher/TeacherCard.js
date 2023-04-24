import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TeacherCard = ({img,name,fonction}) => {
  return (
    <Col md={6} lg={3} className='text-center team mb-5'>
        <div className="position-relative overflow-hidden mb-4" style={{borderRadius: '100%'}}
        >
        <img className="img-fluid w-100" src={img} alt="" />
        <div
            className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
        >
            <Link className="btn btn-outline-light text-center mr-2 px-0" style={{width:'38px', height:'38px'}} to="#"><i className="fab fa-twitter"></i></Link>
            <Link className="btn btn-outline-light text-center mr-2 px-0" style={{width:'38px', height:'38px'}} to="#" ><i className="fab fa-facebook-f"></i></Link>
            <Link className="btn btn-outline-light text-center px-0" style={{width:'38px', height:'38px'}} to="#" ><i className="fab fa-linkedin-in"></i></Link>
        </div>
        </div>
        <h4>{name}</h4>
        <i>{fonction}</i>
    </Col>
  )
}

export default TeacherCard
