import Head from 'next/head';

import Navbar from '../components/Navbar';
import { useAppContext } from '../context/state';
import SearchBar from '../components/SearchBar';
import SortButton from '../components/SortButton';
import { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

export const getStaticProps = async () => {

  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()

  return {
    props: {
      countries
    },
  }
}

const DynamicCountries = dynamic(() => import('../components/Countries'), {
  suspense: true,
})


export default function Home({ countries }) {
  
  const { darkMode } = useAppContext()
  const { continent, setContinent } = useAppContext()
  const { searching, setSearching } = useAppContext()
  const [sortList, setSortList] = useState(countries)  
  
  useEffect(() => {
    if(continent != null && searching == "") {

      let continentList = countries.filter(country => country.region == continent)
      setSortList(continentList)
      setContinent(null)


    }  else if(searching != "") {

      axios.get(`https://restcountries.com/v3.1/name/${searching}`)
      .then(res => setSortList(res.data))
      .catch((error) => setSortList([]))
      setSearching("")

    }



  }, [continent, searching])

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Head>
        <title>Where in the World ?</title>
        <meta name="description" content="FrontEndMentor Challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className='tablet:flex tablet:justify-between tablet:mt-8'>
        <SearchBar />
        <SortButton />
      </div>
      <Suspense fallback={`Loading...`}>
        <DynamicCountries countries={sortList} />
      </Suspense>
    </div>
  )
}
