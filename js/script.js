let filters = document.querySelectorAll('.filter');
let projects = document.querySelectorAll('.project');

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(e => {
            e.classList.remove('active');
        })
        if (filter.getAttribute('data-sign') === 'all') {
            filter.classList.add('active');
            projects.forEach(project => {
                project.classList.remove('hidden');
            })
        } else if (filter.getAttribute('data-sign') === 'sites') {
            filter.classList.add('active');
            projects.forEach(project => {
                if (project.getAttribute('data-name') === 'web-site') {
                    project.classList.remove('hidden');
                } else project.classList.add('hidden');
            })
        } else if (filter.getAttribute('data-sign') === 'js') {
            filter.classList.add('active');
            projects.forEach(project => {
                if (project.getAttribute('data-name') === 'web-site') {
                    project.classList.add('hidden');
                } else project.classList.remove('hidden');
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

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    for (let i = 0; i < sections.length; i++){


        if (i < 4) {
            if(window.pageYOffset >= sections[i].offsetTop && window.pageYOffset <= sections[i+1].offsetTop) {
                navli.forEach(e => {
                    if (e.dataset.value === sections[i].id) {
                        e.classList.add('active')
                    } else e.classList.remove('active')
                })
            }
        }
        else {
            if (window.pageYOffset > (sections[i].offsetTop - ((sections[i-1].offsetTop - sections[i-2].offsetTop)/2))) {
                navli.forEach(e => {
                    if (e.dataset.value === sections[i].id) {
                        e.classList.add('active')
                    } else e.classList.remove('active')
                })
            }
        }  
    }
});
