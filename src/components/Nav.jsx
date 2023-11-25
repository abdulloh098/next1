import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
  <nav>
  <Link href={`/`}>Home</Link>
   <Link href={`/api-get`}>Api</Link>
   <Link href={`/video`}>Video</Link>
  </nav>
    </div>
  )
}

export default Nav