import React from 'react'

function Body() {
    return (
      <>
        <div className="centered">
      <span className="logo-and-text">
        <img className="logo" src="./images/audienz_ws.png" />
      </span>
      <br/>
      <div className="app-store-img">
        <a class="link" href="https://play.google.com/store/apps/details?id=audienz.app" target="_blank">
          <img className="google-store" src="images/google-play-store.png" alt="Google Play Store Batch" width="150"/>
        </a>
        <a class="link" href="https://testflight.apple.com/join/fEl9zQA3" target="_blank">
          <img className="apple-store" src="images/app-store.png" alt="Apple Store Batch" width="150" />
        </a>
      </div>
      <div class="feedback">
        <a href="https://forms.gle/cvRovDVvvvexNQUd7" class="feedbackLink" target="_blank">
          Got feedback? Please let us know!
        </a>
      </div>
      <div class="social">
        <div class="social_icon">
          <a href="https://www.instagram.com/audienz.app/" target="_blank">
            <img src="images/insta_icon.png"/>
          </a>
        </div>
        <div class="social_icon">
          <a href="https://www.facebook.com/audienz.app.community/" target="_blank">
            <img src="images/facebook_icon.png"/>
          </a>
        </div>
        <div class="social_icon">
          <a href="https://wa.me/4915792337848" target="_blank">
            <img src="images/whatsapp_icon.png"/>
          </a>
        </div>
        <div class="social_icon">
          <a href="https://de.linkedin.com/company/audienz-app?trk=public_profile_topcard_current_company" target="_blank">
            <img src="images/linkedIn_logo.png"/>
          </a>
        </div>
      </div>
      <a class="mailto" href="mailto:hello@audienz.app">hello@audienz.app</a>
      </div>
      

    
    

    </>
    )
}

export default Body
