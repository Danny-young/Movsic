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

  /* const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf`);
  const data = await res.json();
  

  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const results = data.results;
  console.log(results); */

  return (
    <main className="">
     
<CarouselBannerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
                  
 <MovieCarrousel movies={upcomingMovies} title="Upcoming" />         
<MovieCarrousel movies={topRatedMovies} title="Top Rated" />  
<MovieCarrousel movies={popularMovies} title="Popular" /> 
      </div>
    </main>
  );
}
