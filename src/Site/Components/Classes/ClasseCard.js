import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ClasseCard = ({img,title,description,minAge,maxAge}) => {
  return (
    <Col lg={4} className=' mb-5'>
        <div class="card border-0 bg-light shadow-sm pb-2">
            <img class="card-img-top mb-2" src={img} alt="" />
            <div class="card-body text-center">
            <h4 class="card-title">{title}</h4>
            <p class="card-text">
                {description}
            </p>
            </div>
            <div class="card-footer bg-transparent py-4 px-5">
            <div class="row border-bottom">
                <div class="col-6 py-1 text-right border-right">
                <strong>Age of Kids</strong>
                </div>
                <div class="col-6 py-1">{minAge} - {maxAge} Years</div>
            </div>
            <div class="row border-bottom">
                <div class="col-6 py-1 text-right border-right">
                <strong>Total Seats</strong>
                </div>
                <div class="col-6 py-1">40 Seats</div>
            </div>
            <div class="row border-bottom">
                <div class="col-6 py-1 text-right border-right">
                <strong>Class Time</strong>
                </div>
                <div class="col-6 py-1">08:00 - 10:00</div>
            </div>
            <div class="row">
                <div class="col-6 py-1 text-right border-right">
                <strong>Tution Fee</strong>
                </div>
                <div class="col-6 py-1">$290 / Month</div>
            </div>
            </div>
            <Link href="" class="btn btn-primary px-4 mx-auto mb-4">Join Now</Link>
        </div>
    </Col>

  )
}

export default ClasseCard
