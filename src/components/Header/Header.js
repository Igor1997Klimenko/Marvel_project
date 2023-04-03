import marvel from '../../images/marvel.png';
import GalleryCard from '../GalleryCards/GalleryCard';
import { BlockSearch, HeaderBg, Hero } from './Header.styles';
import Mark from 'mark.js';
import { useState } from 'react';
import MarkInput from '../MarkInput/MarkInput';

const Header = () => {
  const [searchTerm, setSearchterm] = useState('');
  
  const markInstance = new Mark(".search-node");

  const handleSearch = e => {
    setSearchterm(e.target.value);
    markInstance.unmark({
      done: () => {
        markInstance.mark(e.target.value);
      }
    });
  };

  return (
    <div>
      <Hero>
        <BlockSearch>
          <HeaderBg src={marvel} alt='marvel hero'/>
          <MarkInput 
            searchTerm={searchTerm}
            handleSearch={handleSearch}
          />
        </BlockSearch>
      </Hero>
      <GalleryCard/>
    </div>
  )
}

export default Header;