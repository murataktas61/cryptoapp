import React from 'react'
import { Routes, Route ,Link} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';

import { Navbar,Exchanges,Homepage,Cryptocurrencies,News,CryptoDetails } from './components';
import './App.css';
 
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>  
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>} exact />
{/*               <Route path='/exchanges' element={<Exchanges/>} exact /> */}
              <Route path='/cryptocurrencies' element={<Cryptocurrencies/>} exact />
              <Route path='/crypto/:coinId' element={<CryptoDetails/>} exact />
              <Route path='/news' element={<News/>} exact />
            </Routes>  
          </div>
        </Layout>
          <div className='footer' >
            <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
              <a href="https://www.aktyazilim.com/" target="_blank">noui0x</a><br/>
              All Rights Reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
              <Link to='/news'>News</Link>
            </Space>
          </div> 
      </div> 
    </div>
  );
}

export default App