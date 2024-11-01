let viewer = document.querySelector('.profile-container')
let image = document.querySelector('img')
let gname = document.getElementById('name')
let userid = document.getElementById('userid')
let about = document.getElementById('about')
let repos = document.getElementById('repos')
let following = document.getElementById('following')
let followers = document.getElementById('followers')
let profile = document.getElementById('profile')


let input = document.querySelector('input')
let button = document.querySelector('button')


function requestAPI() {
    let value = input.value
    if (value == "") throw new Error('Invalid Username')
    fetch(`https://api.github.com/users/${value}`).then(
        (res) => res.json()
    ).then(
        (data) => {
            console.log(data);
            image.src = data.avatar_url
            gname.innerHTML = data.name
            userid.innerHTML = `@${data.login}`
            about.innerHTML = data.bio || "Git Profile "
            repos.innerHTML = `${data.public_repos} public repos`
            following.innerHTML = `<img src="./images/following.png"></img>${data.following} following`
            followers.innerHTML = `<img src="./images/followers.png"></img>${data.followers} followers`
            profile.href = data.html_url
            setTimeout(() => viewer.style.display = 'block', 500)

        }
    )

}


button.addEventListener('click', requestAPI)
