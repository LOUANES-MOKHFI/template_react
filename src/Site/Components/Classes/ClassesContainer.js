import React from 'react'
import { Row } from 'react-bootstrap'
import ClasseCard from './ClasseCard'
import img1 from '../../assets/img/class-1.jpg'
import img2 from '../../assets/img/class-2.jpg'
import img3 from '../../assets/img/class-3.jpg'
const ClassesContainer = () => {
  const description = "Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo";
  return (
  <div className="container-fluid pt-5">
    <div className="container">
      <div className="text-center pb-2">
        <p className="section-title px-5">
          <span className="px-2">Popular Classes</span>
        </p>
        <h1 className="mb-4">Classes for Your Kids</h1>
      </div>
      <Row>
        <ClasseCard img={img1} title="Classe 1" description={description} minAge="3" maxAge="6" />
        <ClasseCard img={img2} title="Classe 2" description={description} minAge="3" maxAge="6" />
        <ClasseCard img={img3} title="Classe 3" description={description} minAge="3" maxAge="6" />
      </Row>
    </div>
  </div>
  )
}

export default ClassesContainer
