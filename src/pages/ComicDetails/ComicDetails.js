import { useState, useEffect } from "react";
import { comicsId } from "../../services/apiKey";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Image, ContentBlock, BoxContent, BtnBack, Rght } from "./ComicDetails.style";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ComicDetails = () => {
  const [comic, setComic] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
;
  useEffect(() => {
    comicsId(id).then(comic => setComic(comic))
  }, [id])

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
}

  return (
    <div>
    {comic && 
      (
      <div>
      <BoxContent>
        <Image src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt=''/>
          <ContentBlock>
            <h1>{comic.title || 'is not name'}</h1>
            <h4>{comic.description || 'is not description'}</h4>
          </ContentBlock>
        </BoxContent>
        <BtnBack type='button' onClick={onGoBack}><Rght><ArrowLeftOutlined/></Rght>Back to homepage</BtnBack>
      </div>)
    }
    </div>
  )
}

export default ComicDetails