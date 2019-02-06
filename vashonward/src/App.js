import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let imgUrl = require('./images/hero_img.png')

    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid  withPadding row" id="header" style={{
          backgroundImage: 'url(' + imgUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="hcontain center-xs col-xs-12 col-sm-5 col-sm-offset-1 col-md-offset-2 col-md-4">
            <h1>Food Access Partnership</h1>
            <p className="lead">We are working to engage clients of the partner organizations of the Food
            Access Partnership in Vashon Island so that ethnic minorities and low income families have access
            to fresh foods while supporting local farmers.</p>
          </div>
        </div>

        <div className="withPadding row" style={{
          marginBottom: '3rem',
        }} >
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
          <div className="center-xs col-xs-12 col-sm-5 col-sm-offset-1 col-md-offset-2 col-md-3" >
            <img src={require('./images/pears.png')} alt="pears" style={{
              width: '100%',
              marginTop: '0.83rem',
            }} />
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5" id="first-section">
            <h2 style={{
              marginBottom: '3rem',
              paddingTop: '0.5rem',
            }}>
              How we are connecting families with Vashon farms and farmer markets
            </h2>
            <div className="withPadding row" style={{
              paddingLeft: '10px',
            }}>
              <div className="num">1</div>
              <div className="col-xs" style={{
                paddingLeft: '1rem',
                marginBottom: '1rem',
              }}>
                F.A.P. is using a paper based currency system to make local fresh food
                more accessible to low resource families in Vashon. This system perpetuates
                stigma for the end users and adds burden on the farmers to count and collect
                the paper currency.
              </div>
            </div>
            <div className="withPadding row" style={{
              paddingLeft: '10px',
            }}>
              <div className="num">2</div>
              <div className="col-xs" style={{
                paddingLeft: '1rem',
              }}>
                We are building a QR code payment system for users to redeem their coupons at
                farm stands and markets.
              </div>
            </div>
          </div>
        </div>

        <div className="withPadding row" style={{
          marginBottom: '3rem',
        }} >
          <div className="col-xs-12 col-sm-5 col-md-5 col-sm-offset-1 col-md-offset-2" id="second-section">
            <h2 className="">
              About the Food Access Partnership
            </h2>
            <p>
              The F.A.P. is an organization under the Vashon Island Grower's Association (VIGA). They distribute
              vouchers for redemption at farmstands and markets on the island. Food Access Partnership partners with
              local non-profit organizations to ensure low resource community members have access to fresh and
              local food.
            </p>
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
          <div className="center-xs col-xs-12 col-sm-5 col-md-3" >
            <img src={require('./images/blueberries.png')} alt="blueberries" style={{
              width: '100%',
              marginTop: '0.83rem',
            }} />
          </div>

        </div>

        <div id="third-section" style={{
          padding: '3rem 0rem 1rem 0rem',
        }}>
          <div className="withPadding row">
            <div className="center-xs col-xs-12 col-sm-5 col-sm-offset-1 col-md-offset-2 col-md-3" >
              <img src={require('./images/volunteers.png')} alt="volunteers" style={{
                width: '100%',
                marginTop: '1rem',
              }} />
            </div>
            <div className="col-xs-12 col-sm-5 col-md-5" id="third-section" style={{
              marginBottom: '3rem',
            }}>
              <h1 className="">Meet the team!</h1>
              <p>
                Working to analyze and redesign the current currency system is a team from
                the <b>University of Washington iSchool</b>. The team consists of four members
                : <b>August Carow</b>, <b>Katie Goulding</b>, <b>Cedric Ith</b>, and <b>Anton Zheng</b>. All four of us are experienced
                 programmers and confident working in Android and iOS development, but are most
                 interested in using empathy to create thoughtful solutions for under-served communities.
                 Additionally, we all have previous industry experience bringing in diverse skills -
                 from one member interning on the design team for Microsoft HoloLens last summer, to
                 another interning as a Program Manager for a Cybersecurity team. All of us have a
                 passion for food and are excited to delve into this problem space.
                </p>

              <h3>Contact us</h3>
              <p>If you are a resident in Vashon Island, we want to hear from you! We are seeking feedback about the current currency
                system for the farmers market and food stands. We would love to hear from all Islanders, but have
                specific interest in those who are farmers or are connected with the partner organizations
                listed above. Please send a message to any of our emails below.
                </p>
              <p id="email">
                <i>carowa@uw.edu</i> | <i>kdgg@uw.edu</i> | <i>anton96@uw.edu</i> | <i>cedric.ith1@gmail.com</i>
              </p>
            </div>
          </div>

          <div className="container border" style={{
            marginBottom: '3rem',
          }}></div>

          <div className="container" id="footer">
            <p className="">The Food Access Partnership's work has been made possible via
            grants and donations from The Hendrix Foundation and Granny's Attic, as well
            from gernerous islanders. F.A.P, has received additional donations from the
            Wildwoods Foundation and Les Dames d'Escoffier of Seattle, effective 2016.
          </p>
            <p>
              We encourage you to make a tax deductible contribution with cash or check at
              the Vashon Market, through the mail (VIGA, P.O. Box 2894, Vashon, 98070) or online by
              selecting the 'Donate' button below.
          </p>
            <button type="button" id="button1" style={{
              marginBottom: '3rem',
            }}>Donate</button>
          </div>

          <div className="container border" style={{
            marginBottom: '2rem',
          }}></div>

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
