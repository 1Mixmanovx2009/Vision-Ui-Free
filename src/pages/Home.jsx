import React from 'react'
import Dashboard from '../components/Dashboard'
import '../App.css'
import SiteBar from '../components/SiteBar'

function Home() {
    return (
        <div className='flex gap-6 bg-home-img  p-[px]overflov-none '>
            <div className='w-[19%]'>
                <SiteBar/>
            </div>
            <div className='w-[79%] custom-scrollbar'>
                <Dashboard/>
            </div>
        </div>
    )
}

export default Home