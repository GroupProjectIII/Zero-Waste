import React from 'react';
import './App.css'
import BuyerHome from './components/buyer/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BuyerServices from './components/buyer/posts/Services';
import BuyerOfferForm from './components/buyer/posts/OfferForm';
import BuyerAOffers from './components/buyer/posts/AOffers';
import BuyerPOffers from './components/buyer/posts/POffers';
import BuyerEditPendingOffers from './components/buyer/posts/EditPendingOffers';
import BuyerCompanyPosts from "./components/buyer/company_posts/CompanyPosts";
import BuyerCompanyOfferForm from "./components/buyer/company_posts/CompanyOfferForm";
import BuyerCompanyAOffers from "./components/buyer/company_posts/CompanyAOffers";
import BuyerCompanyPOffers from "./components/buyer/company_posts/CompanyPOffers";
import BuyerEditCompanyPendingOffers from "./components/buyer/company_posts/EditCompanyPendingOffers";
import BuyerViewCompanyDetails from "./components/buyer/company_posts/ViewCompanyDetails";
import BuyerCompanyNotify from "./components/buyer/company_posts/CompanyNotify";
import BuyerPostsLocation from "./components/buyer/posts/PostsLocation";
import BuyerViewPostDetails from "./components/buyer/posts/ViewPostDetails";
import Home from "./components/home/Home";
import LoginScreen from "./components/home/screens/LoginScreen";
import RegisterScreen from "./components/home/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/home/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/home/screens/ResetPasswordScreen";
import Admin from "./components/home/screens/Admin";



function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/buyer/home' exact component={BuyerHome} />
                    <Route path='/buyer/posts' component={BuyerServices} />
                    <Route path='/buyer/offerforms' component={BuyerOfferForm} />
                    <Route path='/buyer/acceptedoffers' component={BuyerAOffers} />
                    <Route path='/buyer/pendingoffers' component={BuyerPOffers} />
                    <Route path='/buyer/editpendingoffers' component={BuyerEditPendingOffers} />
                    <Route path='/buyer/companyposts' component={BuyerCompanyPosts} />
                    <Route path='/buyer/companyofferforms' component={BuyerCompanyOfferForm} />
                    <Route path='/buyer/companyacceptedoffers' component={BuyerCompanyAOffers} />
                    <Route path='/buyer/companypendingoffers' component={BuyerCompanyPOffers} />
                    <Route path='/buyer/editcompanypendingoffers' component={BuyerEditCompanyPendingOffers} />
                    <Route path='/buyer/viewcompanydetails' component={BuyerViewCompanyDetails} />
                    <Route path='/buyer/notifyaboutwaste' component={BuyerCompanyNotify} />
                    <Route path='/buyer/location' component={BuyerPostsLocation} />
                    <Route path='/buyer/viewpostdetails' component={BuyerViewPostDetails} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/admin" component={Admin} />                   
                    <Route path="/forgotpassword" component={ForgotPasswordScreen}/>
                    <Route path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>


                </Switch>
            </Router>
        </>
    );
}

export default App;