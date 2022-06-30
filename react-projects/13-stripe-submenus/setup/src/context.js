import React, { useState, useContext } from 'react'
import sublinks from './data'

// contextAPI =>
const AppContext = React.createContext()

// AppProvider =>
export const AppProvider = ({ children }) => {
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  // functions
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => {
      return link.page === text
    })
    setPage(page)

    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }

  const closeSubmenu = () => setIsSubmenuOpen(false)

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// custom hook =>
export const useGlobalContext = () => {
  return useContext(AppContext)
}

// export { AppContext, AppProvider }
