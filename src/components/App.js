import { Route, Routes } from "react-router-dom";
import Container from "./Container/Container";
import { GlobalStyle } from "./Header/Header.styles";
import { Skeleton } from 'antd';
import { lazy, Suspense } from "react";

const HomePages = lazy(() => import('./Header/Header'));
const ComicDetailsPages = lazy(() => import('../pages/ComicDetails/ComicDetails'));

function App() {

  return (
    <Suspense true fallback={<Skeleton
      avatar
      paragraph={{
        rows: 4,
      }}/>}>
      <Container>
        <GlobalStyle/>
        <Routes>  
          <Route path='/' element={<HomePages/>}/>
          <Route path='/comics/:id' element={<ComicDetailsPages/>}/>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default App;
