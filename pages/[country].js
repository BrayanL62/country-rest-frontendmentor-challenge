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
  if(country.name.nativeName) {

    return native_name = Object.values(country.name.nativeName)[0]
  }
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
          <a className="flex h-8 w-[104px] tablet:w-[136px] bg-white shadow-lg rounded-sm items-center justify-evenly mx-7 my-10 text-sm dark:bg-dark-blue-dark-mode desktop:mt-20">
            <FontAwesomeIcon className="h-[18px]" icon={faArrowLeftLong} />
            <span>Back</span>
          </a>
        </Link>
        <div className="lg:flex desktop:justify-around lg:m-auto desktop:mt-10 desktop:mx-[80px] desktop:m-w-[1440px]">
          <div className="w-[320px] h-[229px] m-auto relative desktop:w-[560px] desktop:h-[401px] desktop:m-0">
            <Image 
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              layout="fill"
              className="rounded-md"
            />
          </div>
          <div className="mx-7 desktop:w-[600px] desktop:h-[323px] desktop:mt-10">
            <p className="mt-10 mb-4 font-extrabold text-[22px] lg:text-3xl desktop:mt-0">{country.name.common}</p>
            <div  className="leading-8 text-sm lg:flex lg:justify-between lg:text-base lg:leading-8">
              <div>
                <p className="font-semibold">Native Name: <span className="font-light">{ country.name.nativeName ? native_name.common : country.name.common }</span>
                </p>
                <p className='font-semibold'>Population: <span className='font-light'>{country.population.toLocaleString("en-US")}</span></p>
                <p className='font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
                <p className='font-semibold'>Sub Region: <span className='font-light'>{country.subregion}</span></p>
                <p className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span></p>
              </div>
              <div className="my-8 lg:my-0">
                <p className='font-semibold'>Top Level Domain: <span className='font-light'>{country.tld}</span></p>
                <p className='font-semibold'>Currencies: <span className="font-light">
                  {currencies_country.map((cur,i,arr) => arr.length - 1 === i ? cur : `${cur}, `)}</span></p>
                  
                <p className='font-semibold'>Languages: <span className='font-light'>
                  {country_languages.map((lang,i,arr) => arr.length - 1 === i ? lang : `${lang}, `)}
                </span></p>
              </div>
            </div>
            <div className="lg:mt-10 desktop:flex desktop:items-baseline">
              <p className="font-semibold ">Border Countries:</p>
              <div className="my-4">
                {
                  country.borders ? (
                    <div className="flex flex-wrap text-center desktop:w-[420px] desktop:mx-4">
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
      </div>
  );
}
 
export default Country;