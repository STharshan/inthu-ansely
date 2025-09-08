import React, { useState } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const menuItems = [
  {
    name: 'Products & Services',
    submenu: ['Systems', 'Instruments', 'Digital Tools', 'Support Services'],
  },
  {
    name: 'Healthcare Professionals',
    submenu: [
      'Surgeons',
      'OR Staff',
      'Hospital Executives',
      'Referring Physicians',
      'Academics',
    ],
  },
  {
    name: 'Patients',
    submenu: ['What to Expect', 'Treatment Options', 'Support Resources'],
  },
  {
    name: 'About',
    submenu: ['Our Mission', 'Leadership', 'Careers', 'Newsroom'],
  },
]

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState(null)

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
    setMobileSubmenu(null) // Close any open submenu
  }

  return (
    <nav className="border-b border-gray-200">
      {/* Top Nav */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-widest">
          INTU<span className="inline-block relative top-[-0.35em] text-sm">•</span>ITIVE
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-900 relative">
          {menuItems.map(({ name }) => (
            <li
              key={name}
              className="relative pb-1 cursor-pointer"
              onMouseEnter={() => setActiveMenu(name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className={`transition-colors ${activeMenu === name ? 'text-blue-600' : ''}`}>
                {name}
              </div>
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-blue-600 transition-all duration-200 ${activeMenu === name ? 'w-full' : 'w-0'}`}
              />
            </li>
          ))}
        </ul>

        {/* Search + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-gray-400">
            <FaSearch size={16} />
          </div>
          <div className="md:hidden text-gray-600" onClick={toggleMobileMenu}>
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>

      {/* Submenu (Desktop Only) */}
      {menuItems.map(
        ({ name, submenu }) =>
          activeMenu === name && (
            <div key={name} className="hidden md:block bg-white border-t border-gray-200 py-4">
              <div className="max-w-screen-xl mx-auto px-6 flex justify-center">
                <div className="flex space-x-10 text-sm text-gray-500">
                  {submenu.map((subItem) => (
                    <div key={subItem} className="hover:text-gray-900 cursor-pointer">
                      {subItem}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          {menuItems.map(({ name, submenu }) => (
            <div key={name}>
              <button
                className="w-full flex justify-between items-center text-left font-medium text-gray-900 py-2"
                onClick={() => setMobileSubmenu(mobileSubmenu === name ? null : name)}
              >
                {name}
                <span className="text-sm text-gray-500">{mobileSubmenu === name ? '−' : '+'}</span>
              </button>
              {mobileSubmenu === name && (
                <div className="ml-4 mt-1 space-y-2 text-sm text-gray-600">
                  {submenu.map((subItem) => (
                    <div key={subItem} className="hover:text-gray-900 cursor-pointer">
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
