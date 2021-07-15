import React from 'react';
import Home from './components/buyer/home/Home';
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
import ViewProfile from './components/buyer/bsc/ViewProfile';
import RateAndComment from './components/buyer/bsc/RateAndComment';
import ViewNotifications from './components/buyer/bsc/ViewNotifications';
import AddComplaints from './components/buyer/bsc/AddComplaints';
import ViewStats from './components/buyer/bsc/ViewStats';




function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/posts' component={Services} />
                    <Route path='/offerforms' component={OfferForm} />
                    <Route path='/acceptedoffers' component={AOffers} />
                    <Route path='/pendingoffers' component={POffers} />
                    <Route path='/editpendingoffers' component={EditPendingOffers} />
                    <Route path='/companyposts' component={CompanyPosts} />
                    <Route path='/companyofferforms' component={CompanyOfferForm} />
                    <Route path='/companyacceptedoffers' component={CompanyAOffers} />
                    <Route path='/companypendingoffers' component={CompanyPOffers} />
                    <Route path='/editcompanypendingoffers' component={EditCompanyPendingOffers} />
                    <Route path='/viewcompanydetails' component={ViewCompanyDetails} />
                    <Route path='/notifyaboutwaste' component={CompanyNotify} />
                    <Route path='/vprofile' component={ViewProfile} />
                    <Route path='/rcomment' component={RateAndComment} />
                    <Route path='/vnotifications' component={ViewNotifications} />
                    <Route path='/addcomplaints' component={AddComplaints} />
                    <Route path='/viewstats' component={ViewStats} />
                    
                    

                </Switch>
            </Router>
        </>
    );
}

export default App;