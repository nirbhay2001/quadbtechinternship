import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import webFont from "webfontloader";
import Home from "./Home/Home";
import ShowsDetails from "./ShowsDetails/ShowsDetails";
import TicketBooking from "./TicketBooking/TicketBooking";
import Footer from "./component/Footer/Footer";



function App() {
  
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });  
  }, []);

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:showId" element={<ShowsDetails />} />
        <Route path="/ticketbokking" element={<TicketBooking/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

