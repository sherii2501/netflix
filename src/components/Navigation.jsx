import React, { useEffect, useState } from 'react'
import './Navigation.css'
function Navigation() {
    const [show,setShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }else{
                setShow(false)
            }
        }
    )})
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src='https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png' alt='netflix logo' />
    </div>
  )
}

export default Navigation