import React from 'react'
import { Link } from 'next-view-transitions'
export default function header() {
  return (
    <header className='flex flex-row items-center justify-between opacity-50'>
     <div>
     </div>
    <nav>
      <ul className='flex flex-row items-center gap-5'>
        <li className='text-gray-300 duration-500 hover:text-gray-500'><Link href="/junior">junior</Link></li>
        <li className='text-gray-300 duration-500 hover:text-gray-500'><Link href="/pleno">pleno</Link></li>
        <li className='text-gray-300 duration-500 hover:text-gray-500'><Link href="/senior">senior</Link></li>
      </ul>
      </nav>  
    </header>
  )
}
