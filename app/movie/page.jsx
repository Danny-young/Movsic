import Image from "next/image";
import MovieCarrousel from "@/components/MovieCarrousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";
import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  
 
    return (
      
        <main className=" z-[-50]">
     
<CarouselBannerWrapper />
     


<div className="flex-col space-y-2 xl:-mt-48">
<MovieCarrousel movies={upcomingMovies} title="Upcoming" />         
<MovieCarrousel movies={topRatedMovies} title="Top Rated" />  
<MovieCarrousel movies={popularMovies} title="Popular" /> 
</div>

<section className="scrollbar-hide">
  <div className="font-bold text-xl px-10">Movie Trailers</div>
<div className="flex space-x-5 mt-5 px-10 scrollbar-hide">
<div>
<iframe
      src="https://www.youtube.com/embed/MjQG-a7d41Q?si=NEB-S1vnp41B5Gsk" 
      allowfullscreen
      width="400" 
      height="315" 
      />
<div>Mufasa: The Lion King </div>
</div>
<div>
<iframe
      src="https://www.youtube.com/embed/OQ-idnOWzz4?si=6KsDa8m3iujWJT9j" 
      allowfullscreen
      width="400" 
      height="315" 
      />
<div>Deadpool & Wolverine </div>
</div>
<div>
<iframe
      src="https://www.youtube.com/embed/O_pCN2xPjSc?si=fkd1A2oKoCcQw3K9" 
      allowfullscreen
      width="400" 
      height="315" 
      />
<div>EXTRACTION 3</div>
</div>

</div>
</section>  
                  


   

      <div className="flex flex-col-reverse space-y-2 mt-5">
     {/*  <Video  className="rounded-lg h-150 w-150" src={video1} />
      <Video  className="rounded-lg" src={video2} />
         */}
      </div>
               
  
       
          
         </main>
    
    );
  };


