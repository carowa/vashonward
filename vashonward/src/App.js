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
            <div className="center-xs col-xs-12 col-sm-4 col-md-offset-2 col-md-2">
                <img src={"https://media.mercola.com/assets/images/food-facts/apple.jpg"} alt="apples"/>
            </div>

            <div className="col-xs-12 col-sm-4 col-sm-offset-2 col-md-4">
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

        <div className="mid-section" id="second-section">
          <div className="container">
            <h1 className="">The Partnership also distributes vouchers for redemption at farmstands and markets on Vashon.</h1>
            <p className="">Currently, the program partners include...</p>
          </div>
        </div>

        <div className="mid-section" id="third-section">
          <div className="container">
            <h1 className="">Meet the team!</h1>
            <p className="">Fully run by volunteers, the food access partnership is made of chefs, farmers, and activists.</p>
          </div>
        </div>

        <div className="container border"></div>

        <div className="container" id="footer">
          <p className="">Like, comment and subscribe!</p>
        </div>

      </div>

    );
  }
}

export default App;
