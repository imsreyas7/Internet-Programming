let githubClientId
let githubClientSecret
if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

const getSearchUsersURL = (text) =>
    `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`

// Get User
const getUserURL = async (username) =>
    `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`

// Get Repos
const getUserReposURL = async (username) =>
    `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`

export { getUserURL, getUserReposURL, getSearchUsersURL }
