import React, { useState, useContext } from 'react'
import sublinks from './data'

// contextAPI =>
const AppContext = React.createContext()

// AppProvider =>
export const AppProvider = ({ children }) => {
  // state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true)

  // functions
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)

  const openSubmenu = () => setIsSubmenuOpen(true)
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
