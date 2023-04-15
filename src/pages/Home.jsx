import React from 'react'
import { useState, useEffect } from 'react'
import FAQ from '../components/FAQ'
import { AiOutlineCloseCircle ,AiOutlineArrowUp} from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { motion } from 'framer-motion'
const Home = () => {
  // ++++++++++++++++++++++++++++++++ //
  // make the search results scroll to the top of the page
  const searchResultsRef = useRef(null);

  useEffect(() => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchResults]);
  // ++++++++++++++++++++++++++++++++ //

  const [searchCriteria, setSearchCriteria] = useState({ region_id: '', profession_id: '' });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    let searchParams = '';
    
    if (searchCriteria.region_id) {
      searchParams += `region_id=${searchCriteria.region_id}&`;
    }
    if (searchCriteria.profession_id) {
      searchParams += `profession_id=${searchCriteria.profession_id}`;
    }
    try {
      const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/setAll?${searchParams}`);
      const data = await response.json();
      console.log( searchParams)
      setSearchResults(data.companies);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(false);
      // setSearchCriteria({ region_id: '', profession_id: '' });
    }
  };
  
  const [regions, setRegions] = useState([]);
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/regions');
        const data = await response.json();
        setRegions(data.regions);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchProfessions = async () => {
      try {
        const response = await fetch('https://intern-app-u7zql.ondigitalocean.app/api/professions');
        const data = await response.json();
        setProfessions(data.professions);
        console.log(data.professions)
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRegions();
    fetchProfessions();
  }, []);
  return (
    <div>
    <section className='flex flex-col justify-center items-center px-4 py-2'><br/><br/><br/>
    <h4 className='font-extralight text-center text-slate-100'>OVER 1000+ ACTIVE LISTINGS</h4>
      <h1 className='font-medium text-center text-slate-100 text-2xl'>Find nearby internship places</h1><br/>
      <div className='flex flex-col justify-center items-center bg-gray-100 bg-opacity-25 p-3 rounded-md w-full lg:w-1/2'>
        <div className='flex flex-col justify-center items-center my-2 w-full md:w-1/2'>
          <label className='text-xl font-medium text-slate-200 text-center'>Region</label>
          <select
            className='px-4 py-2 font-lignt  w-full rounded-md'
            value={searchCriteria.region_id}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, region_id: e.target.value })
            }
          >
            <option value=''>All</option>
            {regions.map((region) => (
              <option key={region.region_id} value={region.region_id}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col justify-center items-center my-2 w-full md:w-1/2 lg:h-1/2'>
          <label className='text-xl font-medium text-center text-slate-200 '>Profession</label>
          <select
            className='px-4 py-2 font-light  w-full rounded-md'
            value={searchCriteria.profession_id}
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, profession_id: e.target.value })
            }
          >
            <option value=''>All</option>
            {professions.map((profession) => (
              <option key={profession.profession_id} value={profession.profession_id}>
                {profession.name}
              </option>
            ))}
          </select>
        </div>

        {/* search tags and filters */}
      <div className='flex flex-col gap-3 justify-center items-center my-2  p-2 rounded-lg'>
        <div className='flex flex-wrap gap-2 justify-center items-center rounded-lg'>
          {searchCriteria.region_id ? (
            <div className='flex gap-2 justify-center items-center bg-slate-100 p-1 rounded-lg'>
              <span className=' font-medium text-slate-500'>
                {regions.filter(region => region.region_id === parseInt(searchCriteria.region_id))[0]?.name}        
              </span>
              <AiOutlineCloseCircle
                className='text-xl font-medium text-black'
                onClick={() => { 
                  setSearchCriteria({ ...searchCriteria, region_id: '' })}}
              />
            </div>
          ) : <p className='text-slate-500 bg-slate-100 rounded-lg p-0.5 text-sm'>All Regions</p>}
          {searchCriteria.profession_id ?(
            <div className='flex gap-2 justify-center items-center bg-slate-100 p-1 rounded-lg'> 
              <span className='font-medium text-sm text-slate-500'>
                {professions.filter(profession => profession.profession_id === parseInt(searchCriteria.profession_id))[0]?.name}
              </span>
              <AiOutlineCloseCircle
                className='text-lg font-medium text-black '
                onClick={() => setSearchCriteria({ ...searchCriteria, profession_id: '' })}
              />
            </div>
          ) : <p className='text-slate-500 bg-slate-100 rounded-lg p-0.5 text-sm'>All Professions</p>}
        </div>
        {searchCriteria.region_id || searchCriteria.profession_id ? (
          <button
          className='hover:bg-gray-300 font-medium text-white bg-gray-900 rounded-md p-1'
            onClick={() => setSearchCriteria({ region_id: '', profession_id: '' })}
          >
            Clear All
          </button>
        ) : null}

</div>
        
        <button
          className=' active:bg-gray-300 active:text-black px-4 py-2 font-medium text-white bg-gray-900 w-1/2 rounded-md my-2'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </section>

    <section ref={searchResultsRef} className="flex flex-col justify-center items-center p-2 ">
  
  {isLoading && <p className=' text-slate-100'>Loading...</p>}
 { searchResults ?
 <>
 <h1 className="text-2xl font-medium text-center text-slate-200  ">Search Results</h1>
  <div className="flex flex-wrap justify-center items-center p-2 bg-gray-100 rounded-xl w-full lg:w-1/2 bg-opacity-20 ">
    {searchResults.map((company) => (
      <Card key={company.id} company={company} />
    ))}
  </div>
 </> : <p className="text-2xl font-medium text-center text-slate-200  ">No results found</p>
  }
</section>


<button
  className='fixed bottom-4 right-4 p-2 rounded-full bg-gray-700 text-white text-3xl bg-opacity-60 hover:bg-opacity-100'
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <AiOutlineArrowUp />
</button>


    </div>
  );
};


const Card = ({ company }) => {
  return (
    <div className="flex flex-col p-4 bg-gray-200 rounded-xl w-full  lg:w-1/3 m-2 h-1/5 text-xs">
      <h2 ><span className='font-medium'>Name </span>: {company.company_name}</h2>
      {/* <p className="text-lg"><span className=' font-medium '>Description</span>: {company.description}</p> */}
      <p ><span className=' font-medium '>Region</span>: {company.region_name}</p>
      <p ><span className=' font-medium '>Profession</span>: {company.profession_name}</p>
      <p><a href={`https://www.google.com/search?q=${company.company_name}+${company.region_name}+Uganda`} className="text-blue-500 hover:text-blue-700">Google</a></p>
    </div>
  )
}


export default Home;