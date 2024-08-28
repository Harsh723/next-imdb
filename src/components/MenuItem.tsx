import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

type MenuItemProps = {
    title: string,
    address: string,
    Icon: IconType
}

export default function MenuItem({ title, address, Icon} : MenuItemProps) {
  return (
    <div>
        <Link href={address} className='hover:text-amber-600'>
            <Icon className=' text-2xl sm:hidden'/>
            <p className='uppercase hidden sm:inline text-sm'>{title}</p>
        </Link>
    </div>
  )
}
