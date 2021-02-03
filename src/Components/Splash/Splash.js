import React from 'react';
import './Splash.css';

class Splash extends React.Component {
    render() {
        return (
            <body class="welcome">
            <span id="splash-overlay" class="splash"></span>
            <span id="welcome" class="z-depth-4"></span>
           
            <header class="navbar-fixed"> 
              <nav class="row deep-purple darken-3">
                <div class="col s12">
                  <ul class="right">
                    <li class="right">
                      <a href="" target="_blank" class="fa fa-facebook-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
                    </li>
                    <li class="right">
                      <a href="" target="_blank" class="fa fa-github-square fa-2x waves-effect waves-light"><span class="icon-text"></span></a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
          
            <main class="valign-wrapper">
              <span class="container grey-text text-lighten-1 ">
        
          
              </span>
            </main>
          
            <div class="fixed-action-btn">
              <a href="#message" class="modal-trigger btn btn-large btn-floating amber waves-effect waves-light">
                <i class="large material-icons">message</i>
              </a>
            </div>
            <footer class="page-footer deep-purple darken-3">
              <div class="footer-copyright deep-purple darken-4">
                <div class="container">
                </div>
              </div>
            </footer>
          </body>
        )
    }
}
export default Splash