import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Registration from './components/registration';
import OtpPage from './components/otpPage';
import ScanId from './components/scanID';
import IdVerfication from './components/IdVerification';
import PersonalDetails from './components/personalDetails';
import EmploymentDetails from './components/employMentDetails';
import AccountServices from './components/accountServices';
import AddressDetails from './components/addressDetails';
import RegulatoryDetails from './components/regulatoryDetails';
import Summary from './components/summary';
import SuccessAccount from './components/successAccount';
import RecommendedPrograms from './components/recommendedPrograms';
import HeaderResumeApp from './components/headerResumeApp';
import Login from './components/login';



function App() {
  return (
    <Router>
      <div className="App">

        {/*
    A <Switch> looks through all its children <Route>
    elements and renders the first one whose path
    matches the current URL. Use a <Switch> any time
    you have multiple routes, but you want only one
    of them to render at a time
  */}
        <Switch>
          <Route path="/login">
            <Header></Header>
            <Login />
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Main />
          </Route>
          <Route path="/OtpPage">
            <Header></Header>
            <OtpPage />
          </Route>
          <Route path="/registration">
            <Header></Header>
            <Registration />
          </Route>
          <Route path="/scanId">
            <HeaderResumeApp />
            <ScanId />
          </Route>
          <Route path="/liveCheck">
            <HeaderResumeApp />
            <IdVerfication />
          </Route>
          <Route path="/personalDetails">
            <HeaderResumeApp />
            <PersonalDetails />
          </Route>
          <Route path="/employmentDetails">
            <HeaderResumeApp />
            <EmploymentDetails />
          </Route>
          <Route path="/accountServices">
            <HeaderResumeApp />
            <AccountServices />
          </Route>
          <Route path="/addressDetails">
            <HeaderResumeApp />
            <AddressDetails />
          </Route>

          <Route path="/regulatoryDetails">
            <HeaderResumeApp />
            <RegulatoryDetails />
          </Route>
          <Route path="/recPrograms">
            <HeaderResumeApp />
            <RecommendedPrograms />
          </Route>

          <Route path="/summary">
            <HeaderResumeApp />
            <Summary />
          </Route>
          <Route path="/successAccount">
            <HeaderResumeApp />
            <SuccessAccount />
          </Route>









        </Switch>

      </div>
    </Router>
  );
}

export default App;
