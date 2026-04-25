const projects = [{
    title: "voidstep",
    description: "this is a process tracer and debugger for unix"
}, {
    title: "blueos",
    description: "my own kernel"
}, {
    title: "controld",
    description: "startup system and service manager"
}, {
    title: "mist.vim",
    description: "dark color scheme for n/vim"
}, {
    title: "nimmy.vim",
    description: "dark & light color scheme for n/vim"
}, {
    title: "vim-airline",
    description: "ean & mean status/tabline for vim that's light as air (PR)"
}, {
    title: "vim-nightfly-colors",
    description: "dark color scheme (PR)"
}, {
    title: "srcery-vim",
    description: "dark color scheme (PR)"
}];

const container = document.querySelector(".container");
const container_prjs = document.querySelector(".container_prjs");
const close = document.querySelector(".close__");
const modal = document.querySelector(".modal");
const showMore = document.querySelector(".show__more");

function create_project (title, description) {
    container.innerHTML += `
        <div class="cards_projects">
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
    `
}

function create_project__modal (title, description) {
    container_prjs.innerHTML += `
        <div class="cards_projects">
            <h1>${title}</h1>
            <p>${description}</p>
        </div>
    `
}

close.addEventListener('click', function() {
    modal.style.display = "none";
});

showMore.addEventListener('click', function() {
    modal.style.display = "initial";
});


create_project(projects[0].title, projects[0].description);
create_project(projects[1].title, projects[1].description);
create_project(projects[2].title, projects[2].description);
create_project(projects[3].title, projects[3].description);


for (let i = 0; i < projects.length; i++) {
    create_project__modal(projects[i].title, projects[i].description);
    
}
