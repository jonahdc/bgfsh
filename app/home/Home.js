import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class Home extends React.Component {
  render(){
    return (
    <main class="content-area">
      <div class="container">
            <div class="frame home">
              <div class="container">
                <div class="preface">
                  <h1 class="preface__title"><span class="brand-name">bgfsh</span></h1>
                </div>

                <div class="home-container">
                  <div class="primary-section">
                  <h3>Hi, there</h3>
                  <p>Welcome to bgfsh, my tiny space on the web dedicated to anything front-end development and UI design.</p>
                  </div>
                  <div class="secondary-section">
                    <div class="sub-section">
                  <h3><Link to="/sandbox">Sandbox</Link></h3>
                  <p>The simple tracker feature implemented on Sandbox is created using <a href="https://github.com/reactjs/react-redux" target="_blank">React-Redux</a>, <a href="http://redux-form.com/5.2.5/#/?_k=2iom37" target="_blank">Redux-Form</a>, <a href="http://momentjs.com/" target="_blank">MomentJS</a>. I will be incorporating more of the fundamental features of a tracker including filters. </p>
</div>
                  <div class="sub-section">
                  <h3>FAQ</h3>
                    <p>How to pronounce bgfsh? bigfish. It's simply <em>bigfish</em> without i's. :)</p>
                  </div>



                  </div>
                  <div class="inner-footer">
                    <p>I'm Jonah and this is my bgfsh. Check out my <a href="http://www.github.com/jonahdc">Github</a> and <a href="http://be.net/jonahdc">Behance</a></p>
                  </div>
              </div>
              </div>
            </div>
            </div>
          </main>
    );
  }
}
