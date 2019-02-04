import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid" id="header">
          <div className="container">
            <h1 className="">Fruitcake jelly beans cheesecake gingerbread tart sugar plum brownie dragée. Powder muffin gummies muffin marshmallow pastry chupa chups.</h1>
            <p className="lead">Marshmallow candy fruitcake topping donut jelly-o candy canes. Tiramisu tootsie roll sesame snaps chocolate bar powder. Candy soufflé macaroon marshmallow candy canes chupa chups. Powder oat cake topping tootsie roll cheesecake. Cake marzipan sweet roll chupa chups. Cotton candy cake caramels.</p>
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
                <img src={"https://media.mercola.com/assets/images/food-facts/apple.jpg"} alt="apples"/>
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
                <p className="">
                  <a href="http://www.vashonhousehold.org/">Vashon Household</a>
                  <a href="http://vashonseniorcenter.org/">Vashon Senior Center</a>
                  <a href="">Community Meals</a>
                  <a href="http://www.vashonfoodbank.org/01_Home/index.shtml">Vashon Maury Community Food Bank</a>
                  <a href="https://vashondoveproject.org/">The DOVE Project</a>
                  <a href="https://www.vashoncommunitycare.org/">Vashon Community Care</a>
                  <a href="https://ifchvashon.org/">Interfaith Council to Prevent Homelessness</a>
                  {/* not sure they have a site? */}
                  <a href="https://www.coopartnerships.org/new-blog/2018/5/31/comunidad-latina-de-vashon-organizamos">Communities of Opportunity, La Communidad</a>
                  <a href="https://vyfs.org/">Vashon Youth and Family Services</a>

                </p>
            </div>
            <div className="center-xs col-xs-12 col-sm-4 col-md-offset-2 col-md-2">
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/440px-Honeycrisp.jpg"} alt="pears"/>
            </div>
        </div>

        <div className="withPadding row">
            <div className="center-xs col-xs-12 col-sm-4 col-md-offset-2 col-md-2" >
                <img src={""} alt="/"/>
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-md-4" id="third-section">
                <h1 className="">Meet the team!</h1>
                <p className="">
                  Fully run by volunteers, the food access partnership is made of chefs, farmers, philanthropists, and activists.
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

    );
  }
}

export default App;
