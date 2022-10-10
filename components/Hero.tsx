import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count ] = useTypewriter({
    words: [`${pageInfo?.name}`, "guy_who_loves_coffee.tsx", "<ButLoveToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src={urlFor(pageInfo?.heroImage).url()} alt={`${pageInfo?.name}`} />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[12px]'>{pageInfo?.role}</h2>
         <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">à propos</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">expérience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projets</button>
          </Link>  
        </div>
      </div>
    </div>
  )
}