import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/state";
import { useState } from "react";


const SortButton = () => {

    let { setContinent } = useAppContext()
    const [isActive, setIsActive] = useState(false)

    return (
        <div onClick={() => setIsActive(!isActive)} className='mx-4 mt-10 tablet:mt-4 bg-white w-[200px] h-12 rounded-md dark:bg-dark-blue-dark-mode drop-shadow-md relative z-10 tablet:mx-20 desktop:text-sm desktop:h-14 desktop:mx-30'>
        <button className="flex w-full h-full m-auto">
          <span 
          className="m-auto text-xs dark:text-white">
            Filter by Region
          </span>
          <FontAwesomeIcon icon={faChevronDown} className="w-[10px] h-[10px] m-auto dark:text-white" />
        </button>
        <div className={isActive ? 'absolute text-left flex flex-col bg-white w-[200px] h-[144px] rounded-md dark:bg-dark-blue-dark-mode drop-shadow-md my-1 px-4 py-2 items-start text-[12px] desktop:text-sm desktop:h-40' : 'hidden'}>
          <button 
          className='py-1'
          onClick={(event) => {setContinent(event.currentTarget.textContent)}}
          >
            <span>
              Africa
            </span>
          </button>
          <button 
          className='py-1'
          onClick={((event) => setContinent(`${event.currentTarget.textContent}s`))}
          >
            <span>
              America
            </span>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <span>
              Asia
            </span>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <span>
              Europe
            </span>
          </button>
          <button 
          className='py-1'
          onClick={(event) => setContinent(event.currentTarget.textContent)}
          >
            <span>
              Oceania
            </span>
          </button>
        </div>
      </div>
    );
}
 
export default SortButton;