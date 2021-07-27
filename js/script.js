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
let navbar = document.querySelector('.navbar');
let sidebar = document.querySelector('.sidebar')
let zIndex = document.querySelector('.z-index')

function scrollto(event) {
    if(event.target.dataset.value === undefined){
        return;
    } else {
        let value = event.target.getAttribute('data-value');
        let positionY = document.querySelector(`#${value}`).offsetTop;
        window.scrollTo({top: positionY - 60, behavior: "smooth"});
    }
}

nav.addEventListener('click', event => {
    scrollto(event);
})

navbar.addEventListener('click', event => {
    scrollto(event);

    if (document.documentElement.clientWidth < 500 && event.target.dataset.value != undefined) {
        sidebar.classList.toggle('appear')
        zIndex.classList.toggle('changeIndex')
    }
})


let sections = document.querySelectorAll('.section');
let navli = nav.querySelectorAll('li');
let navbarli = navbar.querySelectorAll('li');
let header = document.querySelector('.header')

function addANDRemoveClass(array, elem, className) {
    array.forEach (e => {
        e.classList.remove(className);
    })
    array[elem].classList.add(className)
}

function addORRemoveClass(array, className, index) {
    array.forEach (e => {
        if (e.dataset.value === sections[index].id) {
            e.classList.add(className)
        } else e.classList.remove(className)
    })
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset === 0) {
        header.classList.remove('active-header')

        addANDRemoveClass(navli, 0, 'active');
        addANDRemoveClass(navbarli, 0, 'activeli');
    } else { 
        header.classList.add('active-header')
        if (20 >= (document.documentElement.scrollHeight - document.documentElement.clientHeight - window.pageYOffset)) {
            addANDRemoveClass(navli, 4, 'active');
            addANDRemoveClass(navbarli, 4, 'activeli');
        }
        else {
            for (let i = 1; i < sections.length - 1; i++) {
                if (window.pageYOffset > (sections[i].offsetTop - 2*sections[i-1].offsetHeight/3)) {
                    addORRemoveClass(navli, 'active', i);
                    addORRemoveClass(navbarli, 'activeli', i);
                }
            }
        }
    }
});


let navBtnOpen = document.querySelector('.nav-menu-open')
let navBtnClose = document.querySelector('.nav-menu-close')

navBtnOpen.addEventListener ('click', () => {
    sidebar.classList.add('appear')
    zIndex.classList.add('changeIndex')
})

navBtnClose.addEventListener ('click', () => {
    sidebar.classList.remove('appear')
    zIndex.classList.remove('changeIndex')
})



import dictionary from './language.js';

let langBtns = document.querySelector('.languages');

if(localStorage.getItem('myLanguage')) {
    let userLanguage = localStorage.getItem('myLanguage');

    langBtns.querySelectorAll('button').forEach (e => {
        if (e.id === userLanguage) {
            e.classList.remove('dark')
        } else e.classList.add('dark')
    });
    
    langChangeTo (dictionary[userLanguage]);
}


langBtns.addEventListener ('click', event => {
    langBtns.querySelectorAll('button').forEach (e => e.classList.add('dark'));
    event.target.classList.remove('dark');
    langChangeTo (dictionary[event.target.id]);
    localStorage.setItem('myLanguage', event.target.id);
})

function langChangeTo (necessaryDictionary) {
    for (const property in necessaryDictionary) {
        Array.from(document.querySelectorAll(`[data-translate = "${property}"]`)).forEach(e => {
            e.innerHTML = necessaryDictionary[`${property}`];
        })
    }
}


