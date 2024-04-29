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
       

       <div>
        <h1>Trending music</h1>
        <audio controls></audio >
       </div>
      </div>
    );
  };


export default page