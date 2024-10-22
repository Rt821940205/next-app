"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  {name: "performance", href: '/performance'},
  {name: "reliability", href: '/reliability'},
  {name: "scale", href: '/scale'},
]

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="w-full absolute">
      <div className=" flex justify-between container mx-auto items-center text-white p-8">
        <Link className="text-3xl font-bold" href={'/'}>Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((item, index) => (
              <Link className={pathName === item.href ? "text-purple-500" : ""} key={index} href={item.href}>{item.name}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
