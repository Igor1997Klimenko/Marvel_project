import { Route, Routes } from "react-router-dom";
import Container from "./Container/Container";
import { GlobalStyle } from "./Home/Home.styles";
import { Skeleton } from 'antd';
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import('./Home/Home'));
const GalleryCardPages = lazy(() => import('./GalleryCards/GalleryCard'));
const ComicDetailsPages = lazy(() => import('../pages/ComicDetails/ComicDetails'));
const SignupFormPage = lazy(() => import('../pages/SignupForm/SignupForm'));
const SigninFormPage = lazy(() => import('../pages/SigninForm/SigninForm'));

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
              <Route element={<HomePage/>} >
                <Route index element={<GalleryCardPages/>}/>
              </Route>
              <Route path='/comics/:id' element={<ComicDetailsPages/>}/>
              <Route path='register' element={<SignupFormPage/>}/>
              <Route path='login' element={<SigninFormPage/>}/>
            </Routes>
        </Container>
    </Suspense>
  );
}

export default App;
