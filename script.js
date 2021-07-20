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