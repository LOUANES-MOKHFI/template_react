import React from 'react'
import Breadcump from '../../Components/Breadcump'

import TeacherContainer from '../../Components/Teacher/TeacherContainer'
import AboutContainer from '../../Components/About/AboutContainer'
const About = () => {
  return (
    <div>
        <Breadcump title="About Us" />
        <AboutContainer />
        <TeacherContainer />
    </div>
  )
}

export default About
