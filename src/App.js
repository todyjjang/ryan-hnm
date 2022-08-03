import './App.css';
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import PrivateRoute from './route/PrivateRoute';

//1. 전체페이지, 로그인, 상품상세페이지
//1-1. Navigation bar
//2. 전체 상품페이지에서는 전체상품 볼수있다.
//3. 로그인버튼을 누르면 로그인페이지가 나온다
//4.상품디테일을 눌렀으나, 로그인이 안되있을경우 로그인페이지가 나온다
//5. 로그인이 되어있을 경우 상품디테일 페이지를 볼수있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃된다.
//7. 로그아웃되면 상품디테일페이지 못보고 로그인페이지로간다.
//8. 상품을 검색 가능하다

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect (()=>{
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/Login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/Product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;