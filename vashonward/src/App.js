import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid" id="header">
          <div className="container">
            <h1 className="">VIGA's Food Access Partnership connects people who grow food
            with people who need food - everyone wins!</h1>
            <p>Food Access Partnership is committed to making locally grown fruits and vegetables
              more accessible to low-income islanders.
            </p>
          </div>
        </div>

        <div className="withPadding row">
        {/* 
        rules-
          always center the img
          
          on xs-
            both divs take full width

          on sm -
            [ img 4/12 ] [offset 2/12 ] [text 4/12]
        
          on md -
            [offset 2/12 ] [ img 3/12 screen ] [text 4/12]
        
        */}
            <div className="center-xs col-xs-12 col-sm-4 col-md-offset-2 col-md-2" >
                <img src="/images/pears.png" alt="pears"/>
            </div>

            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-md-4" id="first-section">
                <h2 className="">
                  Connecting Vashon Families in need with Community Partners, Supporters, and 
                  Vashon Farms + Farmer Markets
                </h2>
                <p className="">
                  When foodstamp customers shop at the Farmers Market, VIGA matches the first 
                  $10 spent each week with $10 in Market Bucks to purchase fresh fruits and vegetables.
                </p>
                <p className="">
                  VIGA provides a 100% match for the WIC summer fresh fruit and produce checks and the
                  Senior Farmers Market Nutrition Program vouchers. Market Bucks are accepted at VIGA member
                  farm stands as well.
                </p>
            </div>

        </div>

       <div className="withPadding row">
            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-md-4" id="second-section">
                <h2 className="">
                  The Partnership also distributes vouchers for redemption at farmstands and markets on Vashon.
                  Food Access Partnership partners with local non-profit organizations to ensure low resource communities
                  have access to fresh food.
                </h2>
                <p className="">
                  Currently the program partners include:
                </p>
                <p>
                  <a href="http://www.vashonhousehold.org/">Vashon Household</a>
                  <br></br>
                  <a href="http://vashonseniorcenter.org/">Vashon Senior Center</a>
                  <br></br>               
                  Community Meals
                  <br></br>
                  <a href="http://www.vashonfoodbank.org/01_Home/index.shtml">Vashon Maury Community Food Bank</a>
                  <br></br>
                  <a href="https://vashondoveproject.org/">The DOVE Project</a>
                  <br></br>
                  <a href="https://www.vashoncommunitycare.org/">Vashon Community Care</a>
                  <br></br>
                  <a href="https://ifchvashon.org/">Interfaith Council to Prevent Homelessness</a>
                  <br></br>
                  {/* not sure they have a site? */}
                  Communities of Opportunity, La Communidad
                  <br></br>
                  <a href="https://vyfs.org/">Vashon Youth and Family Services</a>

                </p>
            </div>
            <div>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/440px-Honeycrisp.jpg"} alt="apples"/>
            </div>
        </div>
        
        <div id="third-section" className="jumbotron jumbotron-fluid">
        <div className="withPadding row">
            <div className="center-xs col-xs-12 col-sm-4 col-md-offset-2 col-md-2" >
                <img src={""} alt="/"/>
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-md-4" id="third-section">
                <h1 className="">Meet the team!</h1>
                <p className="">
                  Fully run by volunteers, the Food Access Partnership is made of chefs, farmers, philanthropists, and activists.
                </p>
                <h3>About us</h3>
                <p>
                  Working to analyze and redesign the current currency system is a team from the University of Washington iSchool.
                  The team consists of four members: August Carow, Katie Goulding, Cedric Ith, and Anton Zheng. All four of them are 
                  experienced programmers and confident working in Android and iOS development, but are most interested in using 
                  empathy to create thoughtful solutions for under-served communities. 
                  Additionally, they all have previous industry experience bringing in diverse skills - from one member interning 
                  on the design team for Microsoft HoloLens last summer, to another interning as a Program Manager for a Cybersecurity 
                  team. All of them have a passion for food and are excited to delve into this problem space.
                </p>
                <p>If you are a resident in Vashon Island, we want to hear from you! We are seeking feedback about the current currency
                  system for the farmers market and food stands. Please send a message to any of our emails below.
                </p>
                <p id="email">
                  <i>carowa@uw.edu</i> | <i>kdgg@uw.edu</i> | <i>anton96@uw.edu</i> | <i>cedric.ith1@gmail.com</i>
                </p>
            </div>
        </div>

        <div className="container border"></div>

        <div className="container" id="footer">
          <p className="">The Food Access Partnership's work has been made possible via
          grants and donations from The Hendrix Foundation and Granny's Attic, as well 
          from islanders like you. We have received additional donations from the
          Wildwoods Foundation and Les Dames d'Escoffier of Seattle, effective 2016.
          </p>
          <p>
          We encourage you to make a tax deductible contribution with cash or check at
          the Market, through the mail (VIGA, P.O. Box 2894, Vashon, 98070) or online by 
          selecting the 'Donate' button below.
          </p>
          <button type="button" id="button1">Donate</button>
       </div>

       <div className="container border"></div>
       
       <div className="container" id="footer">
          <p>
             Vashon Island Grower's Association &copy; 2019
          </p>

       </div>
      </div>
      </div>

    );
  }
}

export default App;
