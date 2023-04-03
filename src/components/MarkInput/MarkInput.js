import { Input } from 'antd';
import style from '../../style.module.css';

const MarkInput = ({searchTerm, handleSearch}) => {
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