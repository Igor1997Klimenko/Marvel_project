import { BlockSearch, InputBlock } from './Header.styles';
import MarkInput from '../MarkInput/MarkInput';
import AppBar from '../AppBar/AppBar';


const Header = ({ searchTerm, handleSearch}) => {
  return (
    <BlockSearch>   
      <div>
        <AppBar/>
      </div>   
      <InputBlock>  
      <MarkInput 
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      </InputBlock>
    </BlockSearch>
  )
}

export default Header