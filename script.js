const linksSocialMedia = {
  youtube: 'maykbrito',
  facebook: 'karla.nunes.94009',
  instagram: 'karla_nunes15',
  twitter: 'karlaNunesDev',
  github: 'KarlaNunes'
}

function changeSocialMediaLinks() {
  //acessando filhos da ul via DOM direto (socialLinks = id da ul)
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    //substituindo href
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  //consumindo API e transformando em json
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //acessando a DOM direto (usando id)
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
