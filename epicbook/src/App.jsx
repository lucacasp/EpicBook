import { Button, Container } from 'react-bootstrap';
import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import all from './books/all.json';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import { useState } from 'react';
import UserComponent from './components/UserComponent';
import { ThemeContext, AuthContext } from './modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';

function App() {
  let [type, setType] = useState('fantasy');
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  let [theme, setTheme] = useState('light');
  let [authUser, setAuthUser] = useState('Pasquale La Ricotta');

  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <AuthContext.Provider value={[authUser]}>
        <BrowserRouter>

        <MyNav search={search} handleSearch={handleSearch} /> 
        <Container className="my-3">
           <Welcome />
           <Routes>
              <Route index element={<AllTheBooks books={all} searchQuery={search} />} />
              <Route path='/details/:asin' element={<BookDetail />} />
              <Route path='*' element={<NotFound />} />
           </Routes>
          {/*
          <Button variant="dark" className='m-1' onClick={() => setType('history')}>History</Button>
          <Button variant="dark" className='m-1' onClick={() => setType('fantasy')}>Fantasy</Button>
          <Button variant="dark" className='m-1' onClick={() => setType('horror')}>Horror</Button>
          {type === 'fantasy' && <AllTheBooks books={fantasy} searchQuery={search} />}
          {type === 'history' && <AllTheBooks books={history} searchQuery={search} /> }
          {type === 'horror' && <AllTheBooks books={horror} searchQuery={search} /> } */}

          {/* <UserComponent /> */}
        </Container>
        <MyFooter />

        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}

export default App;