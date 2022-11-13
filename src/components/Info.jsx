import React from 'react'
import userImage from '../assets/Rectangle.png'
import email from '../assets/Icon.png'
import linkedIn from '../assets/Vector.png'

export default function () {
  return (
    <div className="hero-section">
      <img src={userImage} />
      <div className="hero-section__info">
        <p className="name">Laura Smith</p>
        <p className="role">Frontend Developer</p>
        <p className="site">laurasmith.website</p>
        <div className="buttons">
          <div>
            <img src={email} />
            <p>Email</p>
          </div>
          <div>
            <img src={linkedIn} />
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </div>
  )
}
