let filters = document.querySelectorAll('.filter');
let projects = Array.from(document.querySelectorAll('.project'));

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(e => {
            e.classList.remove('active');
        })
        filter.classList.add('active')
        if (filter.dataset.sign === 'all') {
            projects.forEach (project => {
                project.classList.remove('hidden');
            })
        } else {
            projects.forEach (project => {
                console.log(project.dataset.sign);
                if (filter.dataset.sign ===  project.dataset.sign) {
                    project.classList.remove('hidden');
                } else project.classList.add('hidden');
                
            })
    
        }
    })
})


const fullYear = document.querySelector('#fullYear')
const date = new Date()

fullYear.innerHTML = date.getFullYear()



let nav = document.querySelector('.nav');

// let windowPageYOffset = 0;

nav.addEventListener('click', event => {
    let value = event.target.getAttribute('data-value');
    let positionY = document.querySelector(`#${value}`).offsetTop;

    window.scrollTo({top: positionY - 60, behavior: "smooth"});

    // windowPageYOffset = window.pageYOffset;
    // if (value != null && windowPageYOffset != document.querySelector(`#${value}`).offsetTop) {
    //     setTimeout(scroll, 50, value);
    // }
})

// function scroll(value) {
//     if (windowPageYOffset < document.querySelector(`#${value}`).offsetTop) {
//         window.scrollBy(0, document.querySelector(`#${value}`).offsetTop - windowPageYOffset)
//     } else if (windowPageYOffset > document.querySelector(`#${value}`).offsetTop) {
//         window.scrollBy(0, -(windowPageYOffset - document.querySelector(`#${value}`).offsetTop))
//     }
// }



let sections = document.querySelectorAll('.section');
let navli = nav.querySelectorAll('li');
let header = document.querySelector('.header')

window.addEventListener('scroll', function() {
    if (window.pageYOffset === 0) {
        header.classList.remove('active-header')
        navli.forEach (e => {
            e.classList.remove('active')
        })
        navli[0].classList.add('active')
    } else { 
        header.classList.add('active-header')
        if (0 > (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset)) {
            navli.forEach (e => {
                e.classList.remove('active')
            })
            navli[4].classList.add('active')
        }
        else {
            for (let i = 1; i < sections.length - 1; i++) {
                if (window.pageYOffset > (sections[i].offsetTop - 2*sections[i-1].offsetHeight/3)) {
                    navli.forEach (e => {
                        if (e.dataset.value === sections[i].id) {
                            e.classList.add('active')
                        } else e.classList.remove('active')
                    })
                }
            }
        }
    }
});
