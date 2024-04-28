import MoviesCarrousel from "@/components/MovieCarrousel";
import { getDiscoverMovies } from "@/lib/getMovies";

async function GenrePage({id,genre}) {
    
  //console.log(id);
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>

      
      
        <MoviesCarrousel title={`Genre`} movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;
