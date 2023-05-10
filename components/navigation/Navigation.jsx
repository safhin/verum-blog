import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className="navigation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul id="menu" className="menu">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navigation