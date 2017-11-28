const uuidv1 = require('uuid/v1')

const baseUrl = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorization-token-goes-here'
}

export function getCategories () {
  return fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export function getPosts (category) {
  return fetch(`${baseUrl}/${category}/posts`, { headers })
    .then(res => res.json())
}

export function getAllPosts () {
  return fetch(`${baseUrl}/posts`, { headers })
    .then(res => res.json())
}

export function addPost (post) {
  return fetch(`${baseUrl}/posts`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      ...post,
      id: uuidv1(),
      timestamp: Date.now()
    })
  }).then(res => res.json())
}

export function getPost (id) {
  return fetch(`${baseUrl}/posts/${id}`, { headers })
    .then(res => res.json())
}

export function voteOnPost (id, voteType) {
  return fetch(`${baseUrl}/posts/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      option: voteType
    })
  }).then(res => res.json())
}

export function editPost (id, title, body) {
  return fetch(`${baseUrl}/posts/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      title,
      body
    })
  }).then(res => res.json())
}

export function removePost (id) {
  return fetch(`${baseUrl}/posts/${id}`, {
    headers,
    method: 'DELETE'
  }).then(res => res.json())
}

export function getComments (postId) {
  return fetch(`${baseUrl}/posts/${postId}/comments`)
    .then(res => res.json()) 
}

export function addComment (comment) {
  return fetch(`${baseUrl}/comments`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      ...comment,
      id: uuidv1(),
      timestamp: Date.now()
    })
  }).then(res => res.json())
}

export function getComment (id) {
  return fetch(`${baseUrl}/comments/${id}`)
    .then(res => res.json()) 
}

export function voteOnComment (id, voteType) {
  return fetch(`${baseUrl}/comments/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      option: voteType
    })
  }).then(res => res.json())
}

export function editComment (id, body) {
  return fetch(`${baseUrl}/comments/${id}`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({
      timestamp: Date.now(),
      body
    })
  }).then(res => res.json())
}

export function removeComment (id) {
  return fetch(`${baseUrl}/comments/${id}`, {
    headers,
    method: 'DELETE'
  }).then(res => res.json())
}