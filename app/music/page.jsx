import Image from 'next/image';
import React from 'react'
import music from '@/assets/Images/music.jpg'

function page() {

  
    const togglePlay = () => {
      // Handle play/pause functionality using audioRef.current
    };
  
    return (
      <div>
          <header>Music Player</header>
          <Image src={music} alt="" width={1920} height={100} />
       {/*  <h3>{title} - {artist}</h3> */}
       

       <div className='mb-10'>
        <h1 className='my-10 text-3xl'>Trending music</h1>
        <div className='flex space-x-10'>
        <div>
          <h1>Diana Hamilton - Adom Grace</h1>
        <audio controls autoplay>
        <source src="/Diana-Hamilton-Adom-Grace.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
        <div>
          <h1>Nacee_-_Aseda</h1>
        <audio controls autoplay>
        <source src="/Nacee_-_Aseda.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
        <div>
          <h1>Diana-Hamilton ft Mercy-Chinwo</h1>
        <audio controls autoplay>
        <source src="/Diana-Hamilton-The-Doing-Of-The-Lord-Ft-Mercy-Chinwo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
      </div>
       </div>
      </div>
    );
  };


export default page