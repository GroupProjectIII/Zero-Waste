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


import SellerHome from './components/seller/Home/Home';
import SellerAddPostDirect from './components/seller/Post/AddPostDirect';
import SellerAddPostPublic from './components/seller/Post/AddPostPublic';
import SellerMyPost from './components/seller/viewpost/Services';
import SellerProfile from './components/seller/Profile/Profile';
import SellerBuyersHome from './components/seller/Buyers/SearchBuyerPage';
import SellerViewPost from './components/seller/viewpost/ViewPosts';
import SellerViewBuyer from './components/seller/Buyers/ViewBuyer';


import CompanyHome from './components/company/pages/Home';
import CompanyProfile from './components/company/pages/Profile';
import CompanyDashboard from './components/company/pages/Dashboard';
import CompanyHelpdesk from './components/company/pages/Helpdesk';
import CompanyPost from './components/company/pages/CompanyPost';
import CompanyOffersForPosts from './components/company/pages/OffersForPosts';
import CompanyEditProfile from './components/company/pages/EditProfile';
import CompanyDirectPosts from './components/company/pages/DirectPosts';
import CompanyNotification from './components/company/pages/Notification';
import CompanyOngoingP from './components/company/pages/OngoingP';
import CompanyPreviousP from './components/company/pages/PreviousP';
import CompanyAcceptedP from './components/company/pages/AcceptedP';
import CompanyBuyersInfo from './components/company/pages/BuyersInfo';
import CompanyBuyersContact from './components/company/pages/BuyersContact';


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
                    <Route path="/forgotpassword" component={ForgotPasswordScreen}/>
                    <Route path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>

                    
                    <Route path='/seller/publicpost' exact component={SellerAddPostPublic} />
                    <Route path='/seller/directpost' exact component={SellerAddPostDirect} />
                    <Route path='/seller/myposts' exact component={SellerMyPost} />
                    <Route path='/seller/viewposts' exact component={SellerViewPost} />
                    <Route path='/seller/findbuyers' exact component={SellerBuyersHome} />
                    <Route path='/seller/buyer' exact component={SellerViewBuyer} />
                    <Route path='/seller/profile' exact component={SellerProfile} />
                    <Route path='/seller' exact component={SellerHome} />
					
					
					<Route path='/company' exact component={CompanyHome} />
                    <Route path='/company/profile' component={CompanyProfile} />                 
                    <Route path='/company/dashboard' component={CompanyDashboard} />
                    <Route path='/company/helpdesk' component={CompanyHelpdesk} />
                    <Route path='/company/companypost' component={CompanyPost} />
                    <Route path='/company/offersforposts' component={CompanyOffersForPosts} />
                    <Route path='/company/editprofile' component={CompanyEditProfile} />    
                    <Route path='/company/DirectPosts' component={CompanyDirectPosts} />  
                    <Route path='/company/notification' component={CompanyNotification} /> 
                    <Route path='/company/ongoingp' component={CompanyOngoingP} />
                    <Route path='/company/previousp' component={CompanyPreviousP} />
                    <Route path='/company/acceptedp' component={CompanyAcceptedP} />
                    <Route path='/company/buyersinfo' component={CompanyBuyersInfo} />
                    <Route path='/company/buyerscontact' component={CompanyBuyersContact} />
                </Switch>
            </Router>
        </>
    );
}

export default App;