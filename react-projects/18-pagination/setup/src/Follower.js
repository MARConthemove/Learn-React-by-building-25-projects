import React from 'react'

// or {html_url}! but also working with a template string
const Follower = ({ avatar_url, login, url }) => {
  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={`https://github.com/${login}`} className='btn'>
        view profile
      </a>
    </article>
  )
}

export default Follower
