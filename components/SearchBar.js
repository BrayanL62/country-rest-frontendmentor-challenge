import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../context/state';

const SearchBar = () => {

    
    let { setSearching } = useAppContext()

    const handleSubmit = (event) => {
        setSearching(event.currentTarget.nextSibling.value)
        event.currentTarget.nextSibling.value = ""
    }

    return (
        <form 
        onSubmit={(event) => {
            event.preventDefault()
            setSearching(event.currentTarget[0].value)
        }} 
        className='flex w-[343px] tablet:w-[480px] h-12 mx-auto tablet:mx-20 my-6 bg-white drop-shadow-md dark:bg-dark-blue-dark-mode'>
            
            <FontAwesomeIcon onClick={handleSubmit} icon={faMagnifyingGlass} className='w-4 h-4 mx-4 my-auto text-dark-grey-light-mode dark:text-white'/>
            
            <input type="search" placeholder={"Search for a country..."} className='m-auto w-full px-4 focus:outline-none dark:bg-dark-blue-dark-mode dark:placeholder:text-white'/>
        </form>
    );
}
 
export default SearchBar;