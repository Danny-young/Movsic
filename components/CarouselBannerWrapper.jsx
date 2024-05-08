import CarouselBanner from "@/components/CarouselBanner";
import { getUpcomingMovies } from "@/lib/getMovies";



async function CarouselBannerWrapper({ id, keywords }) {
  const movies = await getUpcomingMovies(id, keywords);

  console.log(`I am the movies`,movies);
  return <CarouselBanner movies={movies} />

  
}

export default CarouselBannerWrapper;
