import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import IntroPage from "./pages/IntroPage";
import SearchCpfPage from "./pages/SearchCnpjPage";
import Header from '../components/pages/Header'
import {  purpleTitle} from "./common/colors/index";


const App = () => {
    return (
        <div style={{width: '100%', height: window.innerHeight, backgroundColor: purpleTitle}}>
            <div className="ui container">
                <Header/>
                <BrowserRouter>
                    <div>
                        <Route path="/" exact component={IntroPage}/>
                        <Route path="/cpfSearch" exact component={SearchCpfPage}/>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
        ;
};

export default App;