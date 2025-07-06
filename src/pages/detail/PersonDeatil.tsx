import { usePerson } from "@/api/hooks/usePerson"
import { IMAGE_URL } from "@/const"
import {   useParams } from "react-router-dom"
import {FaMapMarkerAlt} from "react-icons/fa";
import { useEffect } from "react";
import MovieView from "@/components/movie-view/MovieView";
import PersonSkeleton from "./PersonSkeleton";
const PersonDeatil = () => {
    const {id} = useParams()
   const {getPerson,getPersonFilms} = usePerson()
  const { data:person,isLoading } = getPerson(id || "");
  // const { data:serial } = getPersonSerials(id || "");
  console.log(person);
  
  const { data:film } = getPersonFilms(id || "",);
  // console.log(serial);
  console.log("Film Cast Data:", film?.cast);
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);
    // const navigate = useNavigate()
    if(isLoading) return <PersonSkeleton/>
  return (
    <>
    
    <div className="container max-w-6xl mx-auto px-6 py-10 text-gray-900 dark:text-white mb-[40px] pb-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3">
          <img
            src={IMAGE_URL + person?.profile_path}
            alt={person?.name}
            className="w-full h-auto object-cover rounded-xl border border-gray-300 dark:border-gray-700"
            loading="lazy"
          />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
              {/* <FaUserAlt className="text-red-600 dark:text-red-400" /> */}
              {person?.name}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
              {person?.known_for_department}
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p className="flex items-center gap-2">
               {person?.birthday}
            </p>

            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> {person?.place_of_birth}
            </p>

            <p className="flex items-center gap-2">
              
             
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Also Known As</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {person?.also_known_as.slice(0,4).map((alias: string, inx: number) => (
                <li key={inx}>{alias}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Biography</h2>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {person?.biography.slice(0,250)}
            </p>
          </div>
        </div>
      </div>
    </div>
    
<div className="mt-10 container mx-auto mb-20 px-6">
  <h2 className="text-2xl font-semibold mb-10">Known for</h2>
  <MovieView
    count={20}
    loading={false}
    data={film?.cast?.slice(0, 8)}
  />
</div>


    </>
  )
}

export default PersonDeatil