// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 1.0
// }

// let observer = new IntersectionObserver((entries, observer) => {
// 	entries.forEach(entry => {
// 		if (entry.isIntersecting) {
// 			console.log(entry)
// 			entry.style.opacity = '1';
// 			observer.unobserve(entry.target)
// 		}
// 	})
// 	}, options);

// let target = document.querySelector('.about__body');

// observer.observe(target);



// four main sections of web page
const sections = document.querySelectorAll('section.section');
const config = {
  rootMargin: '-50px 0px -55%'
};

// function used to highlight onpage element on navigation bar
let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
  	if (entry.isIntersecting) {
      intersectionHandler(entry); 
    }
  });
}, config);

sections.forEach(section => {
  observer.observe(section);
});

// function used to dictate which element will highlight and unhighlight
function intersectionHandler(entry) {
	const id = entry.target.id
	const currentlyActive = document.querySelector('.large-screen-nav a.active');
	const shouldBeActive = document.querySelector('.large-screen-nav a[data-ref=' +id+']')

  if (currentlyActive) {
    currentlyActive.classList.remove('active');
  } 
  if (shouldBeActive) {
  	shouldBeActive.classList.add('active');
  }
}


// smooth scroll effect for navigation bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// intersection oberserver home screen
const homePage = document.querySelectorAll('.first-fade');
const largeScreenNav= document.querySelectorAll('.second-fade');
// const homePageLink = document.querySelector('.home-page__link');
// const navigationLeft = document.querySelector('large-screen-nav__orientation-left');
// const navigationTopRight = document.querySelector('large-screen-nav__orientation-top-right');
// const navigationBottomRight = document.querySelector('large-screen-nav__orientation-bottom-right');

let observerFadeUp = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('fade-up');
      }   
    });
});

let observerFade = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry)
        entry.target.classList.add('fade');
      }   
    });
});

homePage.forEach((element, index) => {
  setTimeout(() => observerFadeUp.observe(element), 300 * index)
}); 

largeScreenNav.forEach(element => {
  setTimeout(() => observerFade.observe(element), 1200) 
})
