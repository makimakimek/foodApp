import React, { useState } from 'react';
import './App.css'

function App() {
  const [selectedOption, setSelectedOption] = useState('customer');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className = "page">
        <div className = "header">
          <div className = "leftButtons">
            <button className = "appNameButton">DishDash</button>
          </div>

          <div className = "middleButtons">
            <button className = "companyButton">Company</button>
            <button className = "faqButton">FAQs</button>
            <button className = "blogButton">Blog</button>
            <button className = "contactButton">Contact</button>
          </div>

          <div className = "rightButtons">
            <button className = "customersButton">Customers</button>
          </div>
        </div>

        <div className = "landingPageSloganAndButtons">
          <div className = "landingPageSlogan">
            Have you eaten?
          </div>
          
          <div className = "appStoreButtons">
            <button className = "googlePlayButton">Download on Google Play</button>
            <button className = "appStoreButton">Download on App Store</button>
          </div>
        </div>

        <div className = "threeToggle">
          <div class="switch">
            <input id="switch-y" name="tripple" type="radio" value="customer" className = "switch-input" checked = {selectedOption === 'customer'} onChange = {handleOptionChange}/>
            <label for="switch-y" className = "switch-label switch-label-y">Customer</label>
            
            <input id="switch-i" name="tripple" type="radio" value="vendor" className = "switch-input" checked = {selectedOption === 'vendor'} onChange = {handleOptionChange}/>
            <label for="switch-i" className = "switch-label switch-label-i">Vendors</label>
        
            <input id="switch-n" name="tripple" type="radio" value="rider" className = "switch-input" checked = {selectedOption === 'rider'} onChange = {handleOptionChange}/>
            <label for="switch-n" className = "switch-label switch-label-n">Riders</label>
        
            <div class="switch-selector"></div>
          </div>
        </div>

        <div className = "toggleText">
          {selectedOption === 'customer' && 
          (<div className = "wholeThing">
            <div className = "title">Try the App</div>
            <div className = "paragraph">Have meals delivered to you within minutes from a wide variety of restaurants ranging from African to Continental cuisines to satisfy your cravings.</div>
            </div>
            )
          }

          {selectedOption === 'vendor' && 
          (<div className = "wholeThing">
            <div className = "title">All in One</div>
            <div className = "paragraph">Unlock new levels of growth with seamless menu and orders management, multiple branches and team, easy payouts withdrawal and a lot more.</div>
            </div>
            )
          }

          {selectedOption === 'rider' &&
          (<div className = "wholeThing">
            <div className = "title">Become a Champ</div>
            <div className = "paragraph">Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.</div>
            </div>
            )
          }
        </div>

        <div className = "phoneAppPhoto">

        </div>

        <div className = "networkContainer">
          <div className = "networkTitle">
            Join our growing network:
          </div>

          <div className = "networkSections">
            <div className = "networkSection">
              <div className = "networkIcon">

              </div>

              <div className = "networkTitle2">
                Start selling
              </div>

              <div className = "networkParagraph">
                Are you a restaurant owner looking to grow your business? Reach new customers when you join our network.
              </div>

              <div className = "networkSeeMore">
                SEE MORE
              </div>

              <div className = "networkImage">
                
              </div>
            </div>

            <div className = "networkSection">
              <div className = "networkIcon">

              </div>

              <div className = "networkTitle2">
                Deliver happiness
              </div>

              <div className = "networkParagraph">
                Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.
              </div>

              <div className = "networkSeeMore">
                SEE MORE
              </div>

              <div className = "networkImage">
  
              </div>
            </div>

            <div className = "networkSection">
              <div className = "networkIcon">

              </div>

              <div className = "networkTitle2">
                Behind the scenes
              </div>

              <div className = "networkParagraph">
                If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.
              </div>

              <div className = "networkSeeMore">
                SEE MORE
              </div>

              <div className = "networkImage">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App