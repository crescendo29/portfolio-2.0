
import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>à propos</h3>  
    
      <motion.img 
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{ opacity: 1, x:0 }}
      viewport={{ once: true }}
      src={urlFor(pageInfo?.profilePic).url()} alt={`${pageInfo?.name}`}
      className='-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className='text-4xl font-semibold'>Ici <span className='underline decoration-[#F7AB0A]'>un peu</span> d'Infos</h4>
        <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto reiciendis possimus corporis molestias facere rem voluptatibus eius et eos non doloremque modi, similique obcaecati nulla nostrum atque recusandae a nesciunt porro sit maiores assumenda! Illum quod libero amet facilis quis at expedita reiciendis? Voluptatum, est voluptatem ipsa velit dolore nesciunt assumenda. Perferendis commodi voluptatum provident quae deleniti eaque fuga et repellendus blanditiis impedit. Adipisci nesciunt necessitatibus velit reiciendis autem maiores quisquam, mollitia ipsum obcaecati recusandae ducimus dolorum minus debitis.</p>
      </div>
    </motion.div>
  )
}

export default About