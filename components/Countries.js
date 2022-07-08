import Image from "next/image"
import Link from "next/link"

const Countries = ({countries}) => {

    const countriesJSX = countries.map((country) => {
        return <Link href={`/${country.name.common}`} key={country.name.common}>
        <a className="w-[264px] h-[326px] rounded-md mx-auto my-10 flex flex-col justify-between bg-white drop-shadow-lg dark:bg-dark-blue-dark-mode desktop:m-[35px]">
          <Image 
              src={country.flags.png}
              width={264}
              height={160}
              alt={`${country.name.common} flag`}
          />
          <p className="my-2 mx-6 font-extrabold text-lg dark:text-white">{country.name.common}</p>
          <div className='mx-6 mb-10 dark:text-white'>
              <p className='font-semibold'>Population: <span className='font-light'>{country.population.toLocaleString("en-US")}</span></p>
              <p className='font-semibold'>Region: <span className='font-light'>{country.region}</span></p>
              <p className='font-semibold'>Capital: <span className='font-light'>{country.capital}</span></p>
          </div>
        </a>
      </Link>
      })
    
    return (
        <main className="tablet:flex tablet:w-screen tablet:flex-wrap desktop:mx-[50px] desktop:my-7">
            {countriesJSX}
        </main>
    );
}
 
export default Countries;