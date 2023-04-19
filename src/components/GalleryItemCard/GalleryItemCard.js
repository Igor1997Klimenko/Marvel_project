import { BlockCard, Item, TitleFilms } from "./GalleryItemCard.styles";
import { Link } from "react-router-dom";
import { DoubleRightOutlined } from "@ant-design/icons";
import style from '../../style.module.css';
import { Image } from "antd";

const GalleryItemCard = ({ id, title, imgSrc:{path, extension}}) => {
  
  return (
    <Item>
      <Image 
        widht={240} 
        height={300}
        src={`${path}.${extension}`} 
        alt={title}
      />
      <BlockCard>
        <div className="search-node">
          <TitleFilms>{title}</TitleFilms>
        </div>
        <Link className={style.linkRoute} to={`/comics/${id}`}>Load more <DoubleRightOutlined/></Link>
      </BlockCard>
    </Item>
  )
}

export default GalleryItemCard