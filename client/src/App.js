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
import PostsLocation from "./components/buyer/posts/PostsLocation";
import ViewPostDetails from "./components/buyer/posts/ViewPostDetails";

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
                    <Route path='/location' component={PostsLocation} />
                    <Route path='/viewpostdetails' component={ViewPostDetails} />
                </Switch>
            </Router>
        </>
    );
}

export default App;