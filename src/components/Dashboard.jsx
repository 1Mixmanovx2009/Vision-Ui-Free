import React from 'react'
import '../App.css'

import Header from './Header'
import Cards from './Cards'
import Mollusk from './Mollusk'
import Satisfaction from './Satisfaction'
import AreaChart from './Overview'
import VerticalBarChart from './Active'
import Projects from './Projects'

function Dashboard() {
  return (
    <div>
      <Header />
      <Cards />
      <div className='flex justify-between gap-5 mb-[30px]'>
        <Mollusk/>
        <Satisfaction/>
      </div>
        <AreaChart/>
        <VerticalBarChart/>
        
        <Projects/>
    </div>
  )
}

export default Dashboard