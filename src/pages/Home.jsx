import React from 'react'
import {useEffect, useState} from 'react'
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import './Home.css'

import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './LoginPage';

function Home() {
  const { isAuthenticated } = useAuth0();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      x: "0"
    },
    out: {
      opacity: 0,

    } ,

    exit: {
      opacity: 0,
      x: "100vw",
      transition: { ease: "easeInOut" }
    }
  };

  const pageTransition = {
    // type: "tween",
    type: "spring",
    ease: "anticipate",
    duration: 0.5,
    delay: 0.5,

  };



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
      const response = await fetch(`http://localhost:3000/setAll?${searchParams}`);
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
        const response = await fetch('http://localhost:3000/regions');
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
        const response = await fetch('http://localhost:3000/professions');
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
    <div className="App">   
    {
      isAuthenticated &&
      <div>
        <Link to="/Addinfo">
          <button>Dashboard</button>
        </Link>
      </div> 
    }  
      <main>
      <div className="search-box">
              {/* <input
            type="text"
            placeholder="Enter a region"
            value={searchCriteria.region}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                region: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Enter a profession"
            value={searchCriteria.profession}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                profession: e.target.value,
              })
            }
          /> */}

          <select
            value={searchCriteria.region}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                region: e.target.value,
              })
            }>
            <option value="">Select a region</option>
            {regions.map((region, index) => (
              <option key={region.region_id} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>

          <select 

            value={searchCriteria.profession}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                profession: e.target.value,
              })
            }
          >
            <option value="">Select a profession</option>
            {professions.map((profession, index) => (
              <option key={profession.profession_id} value={profession.name}>
                {profession.name}
              </option>
            ))}
          </select>
          <button onClick={handleSearch}>Search</button>
      </div>
        <div className="search-results">
          { isLoading ? <p>Loading...</p> // Conditionally render loading spinner 
          :  searchResults ? 
          <motion.div
          className="cards"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
            {searchResults.map((result, index) => {
              // return <Card key={index} result={result} />
              return <Card key={index} result={result} />
            } )}
            </motion.div>
            : <p>No results</p>
          }
        </div>

      </main>

    

    </div>
  )
}

const Card = ({result}) => {
  return (
    <div className="card">
      <p>Name :  {result.company_name}</p>
      <p>Region: {result.region_name}</p>
      <p>Professions: {result.profession_name}</p>
      <p><a href ={` https://www.google.com/search?q=${result.company_name}+${result.region_name}+Uganda`}>Google</a></p>
     </div>
  )
}

export default Home
