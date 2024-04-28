
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main >
     <div className="flex flex-col lg:flex-row items-center bg-[#1E1919]">
      <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
      <h1 className="text-5xl font-bold">
      Welcome to Movsic. <br />
      <br />
      Providing everything to you about entertainment needs. All in one place.
             </h1>
      </div>     
     </div>
      
      <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit">
        Try it for free!
        <ArrowRight className="ml-10" />
      </Link>

      <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
        <video autoPlay loop muted className="rounded-lg">
          <source src="/homepage.mp4" type="video/mp4" />
        </video>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This video is made for informational and educational purposoes only. It is
        not intended for commercial use, and do not own any of the content. Copyright  Disclaimer under the section 107 of the copyright
        1976, allowance is made for `&rdquo;`fair use`&rdquo;` of this video for commercial purposes
      </p>
    </main>
  );
}
