import React from 'react'
import Slide from '../../Components/Home/Slide'
import AboutContainer from '../../Components/About/AboutContainer'
import ClassesContainer from '../../Components/Classes/ClassesContainer'
import TeacherContainer from '../../Components/Teacher/TeacherContainer'

const Home = () => {
  return (
    <div>
      <Slide />
      <AboutContainer />
      <ClassesContainer />
      <TeacherContainer />
    </div>
  )
}

export default Home
