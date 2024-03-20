import React, { useState } from 'react';
import './App.css'

function App() {

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
            <input id="switch-y" name="tripple" type="radio" value="Y" class="switch-input" checked/>
            <label for="switch-y" class="switch-label switch-label-y">Customer</label>
        
            <input id="switch-i" name="tripple" type="radio" value="I" class="switch-input" />
            <label for="switch-i" class="switch-label switch-label-i">Vendors</label>
        
            <input id="switch-n" name="tripple" type="radio" value="N" class="switch-input" />
            <label for="switch-n" class="switch-label switch-label-n">Riders</label>
        
            <span class="switch-selector"></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App