import React from 'react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({ region: '', profession: '' });

  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    let searchParams = '';
    console.log(searchCriteria)
    if (searchCriteria.region) {
      searchParams += `region=${searchCriteria.region}&`;
    }
    if (searchCriteria.profession) {
      searchParams += `profession=${searchCriteria.profession}&`;
    }
    try {
      const response = await fetch(`https://intern-app-u7zql.ondigitalocean.app/api/setAll?${searchParams}`);
      const data = await response.json();
      setSearchResults(data.companies);
      // clear searchCriteria
      setSearchCriteria({ region: '', profession: '' });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
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
        setLoading(false);
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
        setLoading(false);
      }
    };

    fetchRegions();
    fetchProfessions();
  }, []);
  return (
    <div>
      <section className=' flex flex-col justify-center items-center p-2'>
        <h1 className=' text-2xl font-bold text-center '>Find an internship</h1>
        <div className=' flex flex-col justify-center items-center p-2 bg-slate-100 w-full rounded-md'>
          <div className=' flex flex-col justify-center items-center p-2 w-full m-2 '>
            <label className=' text-xl font-bold text-center'>Region</label>
            <select
              className=' ease-out duration-300 bg-slate-600 p-2 font-bold text-white w-9/12 rounded-md focus:bg-slate-300'
              value={searchCriteria.region}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, region: e.target.value })}
            >
              <option value=''>All</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
          <div className=' flex flex-col justify-center items-center p-2 w-full m-2 '>
            <label className=' text-xl font-bold text-center'>Profession</label>
            <select className=' ease-out duration-300 bg-slate-600 p-2  font-bold text-white w-9/12 rounded-md focus:bg-slate-300  '
              value={searchCriteria.profession}
              onChange={(e) => setSearchCriteria({ ...searchCriteria, profession: e.target.value })}
            >
              <option value=''>All</option>
              {professions.map((profession) => (
                <option key={profession.id} value={profession.id}>
                  {profession.name}
                </option>
              ))}
            </select>
          </div>
          <button className=' ease-out duration-300 hover:bg-slate-300 active:bg-white bg-slate-600 p-2 font-bold text-white w-1/2 rounded-md' onClick={handleSearch}>Search</button>
        </div>
        </section>

      <section className=' flex flex-col justify-center items-center p-2'>
        <h1 className=' text-2xl font-bold text-center'>Search Results</h1>
        {isLoading && <p>Loading...</p>}
        {searchResults.map((company) => (
          <div className=' flex flex-wrap justify-center items-center p-2 bg-teal-100 rounded-md max-w-4xl m-4'>
          <Card key={company.id} company={company} />
          </div>
        ))}
      </section>
      
    </div>
  )
}

const Card = ({ company }) => {
  return (
    <div className=' flex flex-col justify-start items-center p-2 bg-slate-200 rounded-md max-w-4xl m-4'>
      <h2 className=' text-xl  '> Name : {company.company_name}</h2>
      <p className=' text-lg  '>Description :{company.description}</p>
      <p className=' text-lg  '> Region : {company.region_name}</p>
      <p className=' text-lg '>Profession : {company.profession_name}</p>
      <p><a href ={` https://www.google.com/search?q=${company.company_name}+${company.region_name}+Uganda`}>Google</a></p>
    </div>
  )
}
export default Home