import Mark from 'mark.js';
import { Input } from 'antd';
import style from '../../style.module.css';
import { useState } from 'react';

const MarkInput = () => {
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
    <>
      <Input 
        label="Text"
        value={searchTerm}
        onChange={handleSearch}
        className={style.inputName} 
        type='search' 
        placeholder='Filter by keywords'/>
    </>
  )
}

export default MarkInput