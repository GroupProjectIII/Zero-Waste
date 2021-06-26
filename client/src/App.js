import React from 'react';
import Navbar from './components/buyer/home/Navbar';
import Footer from './components/buyer/home/Footer'
import './App.css';
import Home from './components/buyer/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/buyer/posts/Services';
import Products from './components/buyer/pages/Products';
import SignUp from './components/buyer/pages/SignUp';
import OfferForm from './components/buyer/posts/OfferForm';
import AcceptedOffers from './components/buyer/posts/AcceptedOffers'
import PendingOffers from './components/buyer/posts/PendingOffers'

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/posts' component={Services} />
                    <Route path='/products' component={Products} />
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/offerforms' component={OfferForm} />
                    <Route path='/acceptedoffers' component={AcceptedOffers} />
                    <Route path='/pendingoffers' component={PendingOffers} />
                </Switch>
                <Footer/>
            </Router>
        </>
    );
}

export default App;