import React, { useState, useEffect } from 'react'
import mockUser from './mockData.js/mockUser'
import mockRepos from './mockData.js/mockRepos'
import mockFollowers from './mockData.js/mockFollowers'
import axios from 'axios'

const rootUrl = 'https://api.github.com'

// creating context for app
const GithubContext = React.createContext()

// Provider, Consumer - we can access them with GithubContext.Provider
const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={'hello'}>{children}</GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
