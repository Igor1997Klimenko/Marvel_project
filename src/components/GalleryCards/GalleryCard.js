import { useState, useEffect } from "react";
import { cardMarvel } from "../../services/apiKey"; 
import GalleryItemCard from "../GalleryItemCard/GalleryItemCard";
import { BlockCard, BtnLoading, PaginationCard, Result } from "./GalleryCard.styles";
import Button from "../Button/Button";
import PaginationCast from "../PaginationCast/PaginationCast";

const GalleryCard = () => {
  const [card, setCard] = useState([]);
  const [size, setSize] = useState(10);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    cardMarvel().then(data => setCard(data))
  }, [])

  const PerPageChange = (value) => {
    setSize(value);
    const newPerPage = Math.ceil(card.length / value);
    if (current > newPerPage) {
        setCurrent(newPerPage);
    }
  }

  const getData = (current, pageSize) => {
      return card.slice((current - 1) * pageSize, current * pageSize);
  };

  const PaginationChange = (page, pageSize) => {
      setCurrent(page);
      setSize(pageSize)
  }
  
  const loadMoreButton = () => {
    setSize(size + 10)
  }

  return (
    <>
    <Result>Results: {size}</Result>
    <BlockCard>
      {getData(current, size).map(({ id, title, thumbnail }) => (
        <GalleryItemCard 
          key={id}
          id={id} 
          title={title} 
          imgSrc={thumbnail}/>
      ))}
    </BlockCard>
    <PaginationCard>
      <PaginationCast
        PaginationChange={PaginationChange}
        card={card}
        current={current}
        size={size}
        PerPageChange={PerPageChange}
      />
    </PaginationCard>
    <BtnLoading>
      <Button loadMoreButton={loadMoreButton}/>
    </BtnLoading>
    
    </>
  )
}

export default GalleryCard;