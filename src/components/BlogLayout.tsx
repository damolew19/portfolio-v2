import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './Seo';
import '../styles/global.css';

const BlogLayout = ({
    children,
    title = false,
    description = false,
    img = false,
    path = false, 
} : any) => {

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
        <div className='max-w-screen-md mx-4 md:mx-auto my-10'>
            <Seo title={title} description={description} img={img} path={path}/>
            <header >
                <nav className=' sm:flex justify-around text-lg md:text-xl hidden'>
                    <Link className='mr-2' to='/blog'>All Articles</Link>
                    <Link className='mr-2' to='/dev'>Dev</Link>
                    <Link className='mr-2' to='/music'>Music</Link>
                </nav>

                <div className='mobile-screen block sm:hidden '>

                  <div>
                  <a className='mobile-screen__button' 
                href='./blog'>
		      DL
		    </a>
			<button className='mobile-screen__button' onClick={openMobileNav} aria-label="Main Menu">
		      <svg className='mobile-screen__svg' width="60" height="60" viewBox="0 0 100 100">
		        <path className="mobile-screen__line mobile-screen__line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
		        <path className="mobile-screen__line mobile-screen__line2" d="M 20,50 H 80" />
		        <path className="mobile-screen__line mobile-screen__line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
		      </svg>
		    </button>

                  </div>

                
			<aside className='mobile-screen__side-bar'>
				<nav className='mobile-screen__nav'>
					<ul className='mobile-screen__list'>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link' href='/blog'><span className='secondary-color'>01. </span>ALL ARTICLES</a>
						</li>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link'  href='/dev'><span className='secondary-color'>02. </span>DEV ARTICLES</a>
						</li>
						<li className='mobile-screen__list-item'>
							<a className='mobile-screen__link' href='/music'><span className='secondary-color'>03. </span>MUSIC ARTICLES</a>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
        <div className='mobile-dark-shadow'>
		</div>
            
                <div >
                    
                <div className="flex justify-center">
  {/* <div className="form-check form-switch">
    <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
    <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckChecked">
        <span className='dark-mode-on'>Dark</span>
        <span className='dark-mode-off'>Light</span>
    </label>
  </div> */}
</div>
                </div>
                
            </header>
            <hr className='my-4 hidden sm:block'/>
            <main className='p-0'>
                {children}
            </main>
            <footer className='text-center py-4'>
                <p>@Damien Lewinski, 2022 | This site was built using Gatsby</p>
            </footer>
        </div>
    )
}

export default BlogLayout

