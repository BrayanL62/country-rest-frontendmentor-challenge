import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/state";
import { useState } from "react";


const SortButton = () => {

    let { continent, setContinent } = useAppContext()
    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={() => setIsActive(!isActive)} className='mx-4 mt-10 tablet:mt-6 bg-white w-[200px] h-12 rounded-md dark:bg-dark-blue-dark-mode drop-shadow-md relative z-10 tablet:mx-20 tablet:top-1 desktop:text-sm desktop:h-14'>
        <button className="flex w-full h-full m-auto">
          <p 
          className="m-auto text-xs dark:text-white">
            Filter by Region
          </p>
          <FontAwesomeIcon icon={faChevronDown} className="w-[10px] h-[10px] m-auto dark:text-white" />
        </button>
        <div className={isActive ? 'absolute text-left flex flex-col bg-white w-[200px] h-[144px] rounded-md dark:bg-dark-blue-dark-mode drop-shadow-md my-1 px-4 py-2 items-start text-[12px] desktop:text-sm desktop:h-40' : 'hidden'}>
          <button 
          className='py-1'
          onClick={(event) => {setContinent(event.currentTarget.textContent)}}
          >
            <p>
              Africa
            </p>
          </button>
          <button 
          className='py-1'
          onClick={((event) => setContinent(`${event.currentTarget.textContent}s`))}
          >
            <p>
              America
            </p>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <p>
              Asia
            </p>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <p>
              Europe
            </p>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <p>
              Oceania
            </p>
          </button>
        </div>
      </div>
    );
}
 
export default SortButton;