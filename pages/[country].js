import Navbar from "../components/Navbar";
import { useAppContext } from "../context/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";


export const getStaticPaths = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json();
  const paths = countries.map(country => {
    return {
      params: { 
        country: country.name.common,
      }
    }
  })

  return {
      paths,
      fallback: false
  }
}

export const getStaticProps = async (context) => {
    const name = context.params.country
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
    const data = await res.json()
    const allCountries = await fetch('https://restcountries.com/v3.1/all')
    const countries = await allCountries.json()

    return {
        props: {
            country: data,
            countries
        }
    }

}

const Country = (props) => {
  
  const country = props.country[0]
  const countries = props.countries
  const { darkMode } = useAppContext()
  {/* //* On viens prendre les valeurs situées dans l'objet nativeName et on les stock dans un tableau */}
  const native_name = Object.values(country.name.nativeName)[0]
  {/* //* On initialise un tableau afin de stocker les devises d'un pays. */}
  let currencies_country = []

  {/* //* On stock chaque devise dans un tableau pour pouvoir retourner du JSX un peu plus bas. */}
  for(let currency in country.currencies) {
    currencies_country.push(currency)
  }

  {/* //* On initialise un tableau afin de stocker les langues utilisées dans le pays en question. */}
  let country_languages = []

  {/* //* On stock chaque langue dans un tableau pour pouvoir retourner du JSX un peu plus bas. */}
  for(let language in country.languages) {
    country_languages.push(country.languages[language]);
  }

  const getBorderCountryName = (countries, border) => {
    const matchingCountry = countries.find(country => {
      return country.cca3 === border;
    })
    return matchingCountry.name.common;
  }

  return ( 
      <div className={darkMode ? 'dark text-white h-[985px]' : 'light h-[985px]'}>
        <Navbar />
        <Link href="/">
          <a className="flex h-8 w-[104px] bg-white shadow-lg rounded-sm items-center justify-evenly mx-7 my-10 text-sm dark:bg-dark-blue-dark-mode">
            <FontAwesomeIcon className="h-[18px]" icon={faArrowLeftLong} />
            <span>Back</span>
          </a>
        </Link>
        <div className="w-[320px] h-[229px] m-auto relative">
          <Image 
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
            layout="fill"
            className="rounded-md"
          />
        </div>
        <div className="mx-7">
          <p className="mt-10 mb-4 font-extrabold text-[22px]">{country.name.common}</p>
          <div  className="leading-8 text-sm">
            <div>
              <p className="font-semibold">Native Name: <span className="font-light">{native_name.common}</span>
              </p>
              <p className='font-semibold'>Population: <span className='font-light'>{country.population.toLocaleString("en-US")}</span></p>
              <p className='font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
              <p className='font-semibold'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
              <p className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span></p>
            </div>
            <div className="my-8">
              <p className='font-semibold'>Top Level Domain: <span className='font-light'>{country.tld}</span></p>
              <p className='font-semibold'>Currencies: <span className="font-light">
                {currencies_country.map((cur,i,arr) => arr.length - 1 === i ? cur : `${cur}, `)}</span></p>
                
              <p className='font-semibold'>Languages: <span className='font-light'>
                {country_languages.map((lang,i,arr) => arr.length - 1 === i ? lang : `${lang}, `)}
              </span></p>
            </div>
          </div>
          <div>
            <p className="font-semibold ">Border Countries:</p>
            <div className="my-4">
              {
                country.borders ? (
                  <div className="flex flex-wrap text-center">
                    {country.borders.map((border) => {
                      const borderName = getBorderCountryName(countries, border);
                      return(<li className="list-none align-middle w-[96px] h-7 text-xs mx-1 my-2 py-[6px] drop-shadow-md bg-white dark:bg-dark-blue-dark-mode" key={border}><Link href={`${borderName}`}><a>{borderName}</a></Link></li>)
                  })}
                  </div>
                ) : (
                  <p>No border countries</p>
                )
              }
              
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default Country;