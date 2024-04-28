import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
   import { ChevronDown } from "lucide-react";
  import Link from "next/link";
  
  async function GenreDropdown() {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const api_key = '2ec0d66f5bdf1dd12eefa0723f1479cf';
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmQyMTIwOGE5NWUxZTA1ZWIwMWMyNzRmY2YwOTE4MiIsInN1YiI6IjY2MjQwZTRjNjJmMzM1MDE2NGQ3YzQzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wwT0oAAtuBMx3v154WxeJ1E-OlAeA98c23125FJLZJg`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    };
  
    const res = await fetch(url, options)
    const data = await res.json() 
    
    const genre = data;
    
    console.log(genre);
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Genre <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
  
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
  
          {data.genres.map((genre) => (
            <DropdownMenuItem className="cursor-pointer" key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  export default GenreDropdown;
  