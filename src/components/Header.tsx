import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/partners", label: "Partners" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-header-background/95 backdrop-blur supports-backdrop-blur:bg-header-background/60 border-b border-header-border shadow-soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="text-2xl font-black text-header-logo tracking-tight hover:opacity-80 transition-opacity duration-300"
            >
              EN-QR-AVE
            </NavLink>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-all duration-300 ease-smooth group ${
                    isActive
                      ? "text-header-nav-active"
                      : "text-header-nav hover:text-header-nav-hover"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute inset-x-0 -bottom-px h-0.5 bg-header-nav-active transform transition-transform duration-300 ease-smooth origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-header-nav hover:text-header-nav-hover hover:bg-header-border/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}