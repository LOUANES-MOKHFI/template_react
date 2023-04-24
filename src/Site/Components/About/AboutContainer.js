import React from 'react'
import about1 from "../../assets/img/about-1.jpg"
import about2 from "../../assets/img/about-2.jpg"
import { Link } from 'react-router-dom'

const AboutContainer = () => {
  return (
    <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5">
                    <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src={about1}
                    alt=""
                    />
                </div>
                <div className="col-lg-7">
                    <p className="section-title pr-5">
                    <span className="pr-2">Learn About Us</span>
                    </p>
                    <h1 className="mb-4">Best School For Your Kids</h1>
                    <p>
                    Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                    dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                    Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                    dolor
                    </p>
                    <div className="row pt-2 pb-4">
                    <div className="col-6 col-md-4">
                        <img className="img-fluid rounded" src={about2} alt="" />
                    </div>
                    <div className="col-6 col-md-8">
                        <ul className="list-inline m-0">
                        <li className="py-2 border-top border-bottom">
                            <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                            dolor amet diam
                        </li>
                        <li className="py-2 border-bottom">
                            <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                            dolor amet ipsum
                        </li>
                        <li className="py-2 border-bottom">
                            <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                            elitripsum vero.
                        </li>
                        </ul>
                    </div>
                    </div>
                    <Link href="" className="btn btn-primary mt-2 py-2 px-4">Learn More</Link>
                </div>
                </div>
            </div>
        </div>
  )
}

export default AboutContainer
