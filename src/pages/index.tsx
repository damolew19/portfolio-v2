import React, {useEffect} from "react";

import '../styles/portfolio.css';
import { Portfolio } from '../components/portfolio'
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"
import BlogLayout from '../components/blog-layout'


// markup
const IndexPage = () => {

useEffect( () => {
  Portfolio();
},[])


// ----------- Mobile navigation code ----------
function openMobileNav() {
  const element = document.querySelector('.mobile-screen__button')
  element.classList.toggle('mobile-screen__opened')
  // element.setAttribute('aria-expanded', element.classList.contains('mobile-screen__opened')); 
  toggleSideBar()
}

//-------- hamburger icon user interaction ----------

function toggleSideBar() {
  if (document.querySelector('.mobile-screen__button').classList.contains('mobile-screen__opened')) {
    document.querySelector('.mobile-screen__side-bar').style.transform = 'translateX(0)';
  } else {
    document.querySelector('.mobile-screen__side-bar').style.transform = 'translateX(100%)';
  }
}
  

  return (
    <React.Fragment>

      <header>
		<div className='large-screen-nav'>
			<div className='large-screen-nav__orientation-left second-fade'>
				<nav className='large-screen-nav__nav'>
					<ul className='large-screen-nav__list'>
						<li className='large-screen-nav__list-item'><a className='large-screen-nav__link' data-ref='home-screen' href='#home-screen'>H<br />O<br />M<br />E</a></li>
						<li className='large-screen-nav__list-item'><a className='large-screen-nav__link'  data-ref='work-screen' href='#work-screen'>W<br />O<br />R<br />K</a></li>
						<li className='large-screen-nav__list-item'><a className='large-screen-nav__link' data-ref='about-screen' href='#about-screen'>A<br />B<br />O<br />U<br />T</a></li>
						<li className='large-screen-nav__list-item'><a className='large-screen-nav__link' data-ref='contact-screen' href='#contact-screen'>C<br />O<br />N<br />T<br />A<br />C<br />T</a></li>
					</ul>
				</nav>
			</div>

			<div className='large-screen-nav__orientation-top-right second-fade'>
				<div className='large-screen-nav__resume-wrapper'>
					<a className='large-screen-nav__resume-link' href='resume.pdf' target='_blank'>Resume</a>
				</div>
			</div>

			<div className='large-screen-nav__orientation-bottom-right second-fade'>
				<div className='large-screen-nav__email-wrapper'>
					<a className='large-screen-nav__email-link' href='mailto:d.lewinski95@gmail.com'>d.lewinski95@gmail.com</a>
				</div>
			</div>
		</div>


		<div className='mobile-screen'>
			<button className='mobile-screen__button' onClick={openMobileNav} aria-label="Main Menu">
		      <svg className='mobile-screen__svg' width="60" height="60" viewBox="0 0 100 100">
		        <path className="mobile-screen__line mobile-screen__line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
		        <path className="mobile-screen__line mobile-screen__line2" d="M 20,50 H 80" />
		        <path className="mobile-screen__line mobile-screen__line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
		      </svg>
		    </button>
			<aside className='mobile-screen__side-bar'>
				<nav className='mobile-screen__nav'>
					<ul className='mobile-screen__list'>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link' href='#home-screen'><span className='secondary-color'>01. </span>HOME</a>
						</li>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link'  href='#work-screen'><span className='secondary-color'>02. </span>WORK</a>
						</li>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link' href='#about-screen'><span className='secondary-color'>03. </span>ABOUT</a>
						</li>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link' href='#contact-screen'><span className='secondary-color'>04. </span>CONTACT</a>
						</li>
						<li className='mobile-screen__list-item mobile-screen__list-item--resume '>
							<a className='mobile-screen__link secondary-color' href='resume.pdf' target='_blank'>RESUME</a>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
		<div className='mobile-dark-shadow'>
		</div>
	</header>
      
          
        <main>
          <section id='home-screen' className='home-page section'>
            <h1 className='home-page__title home-page--main-title first-fade'>Hi, I am Damien.<br /><span className='home-page--sub-heading secondary-color'>I like to build things for the web.</span></h1>
            <p className='home-page__content first-fade'>I am self-taught developer based in Melbourne, who specializes in developing and designing website.</p>
            <div className='home-page__link-wrapper first-fade'>
              <a className='home-page__link' href='#work-screen'>My Projects</a>
            </div>
          </section>


          <section id='work-screen' className='work section'>
            <div className='work__title-container'>
              <h2 className='work__title section-heading'>Some Things I've Built</h2>
            </div>
            <div className='work__card work__lpf shadow first-fade'>
              <div className='work__image-container'>
                <a href='https://leespictureframing.com.au' target='_blank' >
                  <div className='work__overlay'></div>
                  <StaticImage className='work__image'src='../images/portfolio/lpf-desktop.jpg' alt="Lee's Picture Framing Website"/>
                </a>
              </div>
              <div className='work__body'>
                <div className='work__header'>
                  <div>
                    <a className='work__icon-container' href='https://github.com/damolew19/lpf' target='_blank'>
                      <svg className='work__icon' width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" d="M22.4776 0.254117C10.4843 0.254117 0.760254 9.97812 0.760254 21.9741C0.760254 31.5701 6.98292 39.7101 15.6136 42.5834C16.7003 42.7821 17.0963 42.1114 17.0963 41.5354C17.0963 41.0208 17.0776 39.6541 17.0669 37.8421C11.0256 39.1541 9.75092 34.9301 9.75092 34.9301C8.76292 32.4208 7.33892 31.7528 7.33892 31.7528C5.36692 30.4061 7.48825 30.4328 7.48825 30.4328C9.66825 30.5861 10.8149 32.6714 10.8149 32.6714C12.7523 35.9901 15.8989 35.0314 17.1363 34.4754C17.3336 33.0728 17.8936 32.1154 18.5149 31.5728C13.6923 31.0248 8.62159 29.1608 8.62159 20.8381C8.62159 18.4674 9.46825 16.5288 10.8576 15.0101C10.6336 14.4608 9.88825 12.2528 11.0696 9.26212C11.0696 9.26212 12.8936 8.67812 17.0429 11.4888C18.7749 11.0061 20.6336 10.7661 22.4803 10.7581C24.3243 10.7661 26.1829 11.0061 27.9176 11.4888C32.0643 8.67812 33.8843 9.26212 33.8843 9.26212C35.0696 12.2528 34.3243 14.4608 34.1003 15.0101C35.4923 16.5288 36.3336 18.4674 36.3336 20.8381C36.3336 29.1821 31.2549 31.0181 26.4163 31.5554C27.1963 32.2261 27.8909 33.5514 27.8909 35.5781C27.8909 38.4808 27.8643 40.8234 27.8643 41.5354C27.8643 42.1168 28.2549 42.7928 29.3576 42.5808C37.9816 39.7021 44.1989 31.5675 44.1989 21.9741C44.1989 9.97812 34.4736 0.254117 22.4776 0.254117Z" fill="white"/>
                      </svg>
                    </a>

                    <a className='work__icon-container' href='https://leespictureframing.com.au' target='_blank'>
                      <svg className='work__icon' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" fill="white" d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z"/>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 className='work__application-title'>Website</h4>
                    <h3 className='work__project-title secondary-color'>Lee's Picture Framing</h3>
                  </div>
                </div>
                <p className='work__content'>This is a website I made for a local picture framing business in Melbourne. This website is built using npm scripts. I used posthml to compile the html code, node-sass to compile the scss into css and webpack to compile the javascript code. I integrated the React library to feature in a small component of the website, where user interaction in prevalent.</p>
                <ul className='work__list'>
                  <li className='work__skill'>NPM Scripts</li>
                  <li className='work__skill'>React</li>
                  <li className='work__skill'>Netlify</li>
                </ul>
              </div>
            </div>
            <div className='work__card work__drop-the-needle shadow first-fade'>
              <div className='work__image-container'>
                <a href='https://damolew19.github.io/dtn' target='_blank' >
                  <div className='work__overlay'></div>
                  <StaticImage className='work__image'src='../images/portfolio/dtnPage.jpg' alt='Drop The Needle Website'/>
                </a>
              </div>
              <div className='work__body'>
                <div className='work__header'>
                  <div>
                    <a className='work__icon-container' href='https://github.com/damolew19/dtn' target='_blank'>
                      <svg className='work__icon' width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" d="M22.4776 0.254117C10.4843 0.254117 0.760254 9.97812 0.760254 21.9741C0.760254 31.5701 6.98292 39.7101 15.6136 42.5834C16.7003 42.7821 17.0963 42.1114 17.0963 41.5354C17.0963 41.0208 17.0776 39.6541 17.0669 37.8421C11.0256 39.1541 9.75092 34.9301 9.75092 34.9301C8.76292 32.4208 7.33892 31.7528 7.33892 31.7528C5.36692 30.4061 7.48825 30.4328 7.48825 30.4328C9.66825 30.5861 10.8149 32.6714 10.8149 32.6714C12.7523 35.9901 15.8989 35.0314 17.1363 34.4754C17.3336 33.0728 17.8936 32.1154 18.5149 31.5728C13.6923 31.0248 8.62159 29.1608 8.62159 20.8381C8.62159 18.4674 9.46825 16.5288 10.8576 15.0101C10.6336 14.4608 9.88825 12.2528 11.0696 9.26212C11.0696 9.26212 12.8936 8.67812 17.0429 11.4888C18.7749 11.0061 20.6336 10.7661 22.4803 10.7581C24.3243 10.7661 26.1829 11.0061 27.9176 11.4888C32.0643 8.67812 33.8843 9.26212 33.8843 9.26212C35.0696 12.2528 34.3243 14.4608 34.1003 15.0101C35.4923 16.5288 36.3336 18.4674 36.3336 20.8381C36.3336 29.1821 31.2549 31.0181 26.4163 31.5554C27.1963 32.2261 27.8909 33.5514 27.8909 35.5781C27.8909 38.4808 27.8643 40.8234 27.8643 41.5354C27.8643 42.1168 28.2549 42.7928 29.3576 42.5808C37.9816 39.7021 44.1989 31.5675 44.1989 21.9741C44.1989 9.97812 34.4736 0.254117 22.4776 0.254117Z" fill="white"/>
                      </svg>
                    </a>

                    <a className='work__icon-container' href='https://damolew19.github.io/dtn' target='_blank'>
                      <svg className='work__icon' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" fill="white" d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z"/>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 className='work__application-title'>Web Application</h4>
                    <h3 className='work__project-title secondary-color'>Drop The Needle</h3>
                  </div>
                </div>
                <p className='work__content'>An online music magazine, which features record labels artists from around the world. Each feature includes a description and a list of highlighted songs.</p>
                <ul className='work__list'>
                  <li className='work__skill'>React</li>
                  <li className='work__skill'>Figma</li>
                  <li className='work__skill'>Responsive Web Design</li>
                </ul>
              </div>
            </div>
            <div className='work__card work__home-page shadow first-fade'>
              <div className='work__image-container'>
                <a href='https://damolew19.github.io/home-page/' target='_blank' >
                  <div className='work__overlay'></div>
                  <StaticImage className='work__image'src='../images/portfolio/homePage.jpg' alt='Home Page Website'/>
                </a>
              </div>
              <div className='work__body'>
                <div className='work__header'>
                  <div>
                    <a href='https://github.com/damolew19/home-page/tree/master' target='_blank'>
                      <svg className='work__icon' width="45" height="43" viewBox="0 0 45 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" d="M22.4776 0.254117C10.4843 0.254117 0.760254 9.97812 0.760254 21.9741C0.760254 31.5701 6.98292 39.7101 15.6136 42.5834C16.7003 42.7821 17.0963 42.1114 17.0963 41.5354C17.0963 41.0208 17.0776 39.6541 17.0669 37.8421C11.0256 39.1541 9.75092 34.9301 9.75092 34.9301C8.76292 32.4208 7.33892 31.7528 7.33892 31.7528C5.36692 30.4061 7.48825 30.4328 7.48825 30.4328C9.66825 30.5861 10.8149 32.6714 10.8149 32.6714C12.7523 35.9901 15.8989 35.0314 17.1363 34.4754C17.3336 33.0728 17.8936 32.1154 18.5149 31.5728C13.6923 31.0248 8.62159 29.1608 8.62159 20.8381C8.62159 18.4674 9.46825 16.5288 10.8576 15.0101C10.6336 14.4608 9.88825 12.2528 11.0696 9.26212C11.0696 9.26212 12.8936 8.67812 17.0429 11.4888C18.7749 11.0061 20.6336 10.7661 22.4803 10.7581C24.3243 10.7661 26.1829 11.0061 27.9176 11.4888C32.0643 8.67812 33.8843 9.26212 33.8843 9.26212C35.0696 12.2528 34.3243 14.4608 34.1003 15.0101C35.4923 16.5288 36.3336 18.4674 36.3336 20.8381C36.3336 29.1821 31.2549 31.0181 26.4163 31.5554C27.1963 32.2261 27.8909 33.5514 27.8909 35.5781C27.8909 38.4808 27.8643 40.8234 27.8643 41.5354C27.8643 42.1168 28.2549 42.7928 29.3576 42.5808C37.9816 39.7021 44.1989 31.5675 44.1989 21.9741C44.1989 9.97812 34.4736 0.254117 22.4776 0.254117Z" fill="white"/>
                      </svg>
                    </a>
                    <a href='https://damolew19.github.io/home-page/' target='_blank'>
                      <svg className='work__icon' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="45px" height="45px">
                        <path className='work__svg-path' fillRule="evenodd" clipRule="evenodd" fill="white" d="M 33.40625 0 C 32.855469 0.0507813 32.449219 0.542969 32.5 1.09375 C 32.550781 1.644531 33.042969 2.050781 33.59375 2 L 46.5625 2 L 25.6875 22.90625 C 25.390625 23.148438 25.253906 23.535156 25.339844 23.910156 C 25.425781 24.28125 25.71875 24.574219 26.089844 24.660156 C 26.464844 24.746094 26.851563 24.609375 27.09375 24.3125 L 48 3.4375 L 48 16.40625 C 47.996094 16.765625 48.183594 17.101563 48.496094 17.285156 C 48.808594 17.464844 49.191406 17.464844 49.503906 17.285156 C 49.816406 17.101563 50.003906 16.765625 50 16.40625 L 50 0 L 33.59375 0 C 33.5625 0 33.53125 0 33.5 0 C 33.46875 0 33.4375 0 33.40625 0 Z M 2 10 C 1.476563 10 0.941406 10.183594 0.5625 10.5625 C 0.183594 10.941406 0 11.476563 0 12 L 0 48 C 0 48.523438 0.183594 49.058594 0.5625 49.4375 C 0.941406 49.816406 1.476563 50 2 50 L 38 50 C 38.523438 50 39.058594 49.816406 39.4375 49.4375 C 39.816406 49.058594 40 48.523438 40 48 L 40 18 C 40.003906 17.640625 39.816406 17.304688 39.503906 17.121094 C 39.191406 16.941406 38.808594 16.941406 38.496094 17.121094 C 38.183594 17.304688 37.996094 17.640625 38 18 L 38 48 L 2 48 L 2 12 L 32 12 C 32.359375 12.003906 32.695313 11.816406 32.878906 11.503906 C 33.058594 11.191406 33.058594 10.808594 32.878906 10.496094 C 32.695313 10.183594 32.359375 9.996094 32 10 Z"/>
                      </svg>
                    </a>
                  </div>
                  <div>
                    <h4 className='work__application-title'>Web Application</h4>
                    <h3 className='work__project-title secondary-color'>HomePage</h3>
                  </div>
                </div>
                <p className='work__content'>This is a one page web app, designed to be the welcome page to any internet browser. Some key features include a pomodoro timer, customizable design settings, real time weather data and trending news articles. </p>
                <ul className='work__list'>
                  <li className='work__skill'>React</li>
                  <li className='work__skill'>API Integration</li>
                  <li className='work__skill'>GitHub Pages</li>
                </ul>
              </div>
            </div>
          </section>

          <section id='about-screen' className='about section'>
            <div className='about__title-container'>
              <h2 className='about__title section-heading'>Background</h2>
            </div>
            <div className='about__body first-fade'>
              <div className='about__image-container'>
                <StaticImage className='about__image' src='../images/portfolio/me.jpg' alt='Photo of Damien Lewinski'/>
              </div>
              <div className='about__text'>
                <h4>HI, I AM DAMIEN</h4>
                <h3 className='secondary-color'>I enjoy bringing projects to life using code.</h3>
                <p>I am an Applied Mathematics graduate from Monash University.</p>
                <p>Finding solutions to problems is what I do best.</p>
                <p>My goal is to build products that provide a pixel perfect, performant experience.</p>
                <p className='about__skills'>Here are some technologies I've been working with:</p>
                <div className='about__list-container'>
                  <ul className='about_list'>
                    <li className='about__item'>JavaScript (ES6+)</li>
                    <li className='about__item'>HTML & (S)CSS</li>
                    <li className='about__item'>React</li>
                  </ul>
                  <ul className='about_list'>
                    <li className='about__item'>Git</li>
                    <li className='about__item'>Figma</li>
                    <li className='about__item'>Node.js</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id='contact-screen' className='contact section'>
            <div className='contact__title-container'>
              <h2 className='contact__title section-heading'>Want to know more?</h2>
            </div>
            <div className='contact__body first-fade'>
              <div className='contact__image-container'>
                <StaticImage className='contact__image' src='../images/portfolio/contact-img.jpg' alt='Photo of Damien Lewinski'/>

              </div>
              <div className='contact__content'>
                <div className='contact__text'>
                  <h3 className='secondary-color'>Let's Talk.</h3>
                  <p>I am currently available for work.</p>
                  <p>If you would like to get in contact, my inbox is always open.</p>
                </div>
                <form className='contact__form' name="contact" method="POST" data-netlify="true">
                  <p>
                    <label htmlFor="name">Your Name</label><input type="text" name="name" required/>   
                  </p>
                  <p>
                    <label htmlFor="email" >Your Email</label><input type="email" name="email" required/>
                  </p>
                  <p>
                    <label htmlFor="message">Message</label><textarea name="message" required></textarea>
                  </p>
                  <p>	
                    <button type="submit">Send</button>
                  </p>
                </form>
              </div>
            </div>
          </section>	
        </main>
        <footer className='footer'>
          <p className='footer__content'>Designed and built by Damien Lewinski</p>
        </footer>


      

      


    </React.Fragment>
  )
}

export default IndexPage
