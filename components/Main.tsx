import NextVideo from 'next-video'
import React from 'react'
import video from '@/videos/VIDEO1.mp4'


const Main = () => {
  return (
   <>
    <div className=' pb-0 mb-0 w-full h-full flex justify-center items-center'>
      <NextVideo className='  m-0 p-0' src={video} accentColor='#020617' />
    </div>
   </>
  )
}

export default Main
