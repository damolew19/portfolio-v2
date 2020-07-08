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




const sections = document.querySelectorAll('section.section');
const config = {
  rootMargin: '-50px 0px -55%'
};

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});