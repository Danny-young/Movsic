import CarouselBanner from "@/components/CarouselBanner";
import { getUpcomingMovies } from "@/lib/getMovies";



async function CarouselBannerWrapper({ id, keywords }) {
  const movies = await getUpcomingMovies(id, keywords);

  return <CarouselBanner movies={movies} />;
}

export default CarouselBannerWrapper;
