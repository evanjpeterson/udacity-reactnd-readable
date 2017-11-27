const baseUrl = 'http://localhost:3001'

const headers = {
  'Accept': 'application/json',
  'Authorization': 'authorization-token-goes-here'
}

export function fetchCategories () {
  return fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export function addComment () {
  return fetch(`${baseUrl}/posts`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'POST'
  }).then(res => res.json())
}