import React from 'react';
import './App.css'
import BuyerHome from './components/buyer/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/buyer/posts/Services';
import OfferForm from './components/buyer/posts/OfferForm';
import AOffers from './components/buyer/posts/AOffers';
import POffers from './components/buyer/posts/POffers';
import EditPendingOffers from './components/buyer/posts/EditPendingOffers';
import CompanyPosts from "./components/buyer/company_posts/CompanyPosts";
import CompanyOfferForm from "./components/buyer/company_posts/CompanyOfferForm";
import CompanyAOffers from "./components/buyer/company_posts/CompanyAOffers";
import CompanyPOffers from "./components/buyer/company_posts/CompanyPOffers";
import EditCompanyPendingOffers from "./components/buyer/company_posts/EditCompanyPendingOffers";
import ViewCompanyDetails from "./components/buyer/company_posts/ViewCompanyDetails";
import CompanyNotify from "./components/buyer/company_posts/CompanyNotify";
import PostsLocation from "./components/buyer/posts/PostsLocation";
import ViewPostDetails from "./components/buyer/posts/ViewPostDetails";
import Home from "./components/home/Home";
import LoginScreen from "./components/home/screens/LoginScreen";
import RegisterScreen from "./components/home/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/home/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/home/screens/ResetPasswordScreen";
import Admin from "./components/home/screens/Admin";
import Seller from "./components/home/screens/Seller";
import Company from "./components/home/screens/Company";

import Home from './components/seller/Home/Home';
import AddPostDirect from './components/seller/Post/AddPostDirect';
import AddPostPublic from './components/seller/Post/AddPostPublic';
import MyPost from './components/seller/viewpost/Services';
import Profile from './components/seller/Profile/Profile';
import BuyersHome from './components/seller/Buyers/SearchBuyerPage';
import ViewPost from './components/seller/viewpost/ViewPosts';
import ViewBuyer from './components/seller/Buyers/ViewBuyer';


function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/buyer/home' exact component={BuyerHome} />
                    <Route path='/buyer/posts' component={Services} />
                    <Route path='/buyer/offerforms' component={OfferForm} />
                    <Route path='/buyer/acceptedoffers' component={AOffers} />
                    <Route path='/buyer/pendingoffers' component={POffers} />
                    <Route path='/buyer/editpendingoffers' component={EditPendingOffers} />
                    <Route path='/buyer/companyposts' component={CompanyPosts} />
                    <Route path='/buyer/companyofferforms' component={CompanyOfferForm} />
                    <Route path='/buyer/companyacceptedoffers' component={CompanyAOffers} />
                    <Route path='/buyer/companypendingoffers' component={CompanyPOffers} />
                    <Route path='/buyer/editcompanypendingoffers' component={EditCompanyPendingOffers} />
                    <Route path='/buyer/viewcompanydetails' component={ViewCompanyDetails} />
                    <Route path='/buyer/notifyaboutwaste' component={CompanyNotify} />
                    <Route path='/buyer/location' component={PostsLocation} />
                    <Route path='/buyer/viewpostdetails' component={ViewPostDetails} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/company" component={Company} />
                    <Route path="/seller" component={Seller} />
                    <Route path="/forgotpassword" component={ForgotPasswordScreen}/>
                    <Route path="/passwordreset/:resetToken" component={ResetPasswordScreen}
                    />

                    
                    <Route path='/publicpost' exact component={AddPostPublic} />
                    <Route path='/directpost' exact component={AddPostDirect} />
                    <Route path='/myposts' exact component={MyPost} />
                    <Route path='/viewposts' exact component={ViewPost} />
                    <Route path='/findbuyers' exact component={BuyersHome} />
                    <Route path='/buyer' exact component={ViewBuyer} />
                    <Route path='/profile' exact component={Profile} />
                    <Route path='/seller' exact component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;