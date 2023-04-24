import React from 'react'
import {  Row } from 'react-bootstrap'
import TeacherCard from './TeacherCard'
import img1 from "../../assets/img/team-1.jpg"
import img2 from "../../assets/img/team-2.jpg"
import img3 from "../../assets/img/team-3.jpg"
import img4 from "../../assets/img/team-4.jpg"
const TeacherContainer = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="text-center pb-2">
          <p className="section-title px-5">
            <span className="px-2">Our Teachers</span>
          </p>
          <h1 className="mb-4">Meet Our Teachers</h1>
        </div>
        <Row>
            <TeacherCard img={img1} name="Teacher 1" fonction="fonction 1"/>
            <TeacherCard img={img2} name="Teacher 2" fonction="fonction 2"/>
            <TeacherCard img={img3} name="Teacher 3" fonction="fonction 3"/>
            <TeacherCard img={img4} name="Teacher 4" fonction="fonction 4"/>
        </Row>

      </div>
    </div>
  )
}

export default TeacherContainer
