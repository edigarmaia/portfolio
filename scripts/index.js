const elemProjects = document.getElementById('project__content')

// criar a imagem
const createImage = (projectImage) => {
    const elemPicture = document.createElement('picture')
    const elemImg = document.createElement('img')

    elemImg.setAttribute('src', projectImage)

    elemPicture.appendChild(elemImg)

    return elemPicture
}

// criar strong
const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong')
    elemStrong.innerText = projectName

    return elemStrong
}


// criar as tags
const createTags = (projectTags) => {
    const elemTags = document.createElement('div')
    projectTags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag
            elemTags.appendChild(elemTag)
        })

        return elemTags
}

// criar o projeto
const createProject = (project) => {
    const elemProject = document.createElement('a')

    elemProject.setAttribute('href', project.link)
    elemProject.setAttribute('target', '-blank')

    elemProject.classList.add('project')

    // Adiciona imagem de capa
    elemProject.appendChild(createImage(project.image))

    // Adiciona nome do projeto
    elemProject.appendChild(createStrong(project.name))

    // Adiciona tags
    elemProject.appendChild(createTags(project.tags))

    return elemProject

}

const loadProjects = (projects) => {
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project))

    });

}

fetch('./projects.json').then(response => response.json()).then(loadProjects);