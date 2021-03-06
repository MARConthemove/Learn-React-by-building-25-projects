import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <div className='likes'>
            <p>
              <FaHeart className='heart-icon' />{' '}
              <span style={{ fontSize: '1.1rem' }}>{likes}</span>
            </p>
          </div>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
