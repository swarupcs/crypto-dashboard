import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BellIcon,
  SearchIcon,
  MenuIcon,
  BarChart3,
  BookmarkIcon,
} from 'lucide-react';
import { Avatar } from '@radix-ui/react-avatar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
export const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close mobile menu
    navigate(path);
  };

  const isActivePage = (path) => {
    return location.pathname === path;
  };
  return (
    <>
      <header className='sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border'>
        <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-10'>
          <div className='flex items-center justify-between h-20'>
            {/* Logo Section */}
            <div
              className='flex items-center gap-4 cursor-pointer'
              onClick={() => handleNavigation('/')}
            >
              <div className='w-10 h-10 bg-gradient-to-r from-[#54d12b] to-[#0ad835] rounded-lg flex items-center justify-center'>
                <span className='text-[#0a0f0a] font-bold text-xl'>₿</span>
              </div>
              <h1 className="font-bold text-foreground text-2xl [font-family:'Manrope',Helvetica]">
                CryptoAdda
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-10'>
              <button
                onClick={() => handleNavigation('/')}
                className={`transition-colors font-medium ${
                  isActivePage('/')
                    ? 'text-[#54d12b]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/markets')}
                className={`transition-colors font-medium ${
                  isActivePage('/markets')
                    ? 'text-[#54d12b]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Markets
              </button>
              <button
                onClick={() => handleNavigation('/watchlist')}
                className={`transition-colors font-medium ${
                  isActivePage('/watchlist')
                    ? 'text-[#54d12b]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Watchlist
              </button>
              <a
                href='#about'
                className='text-muted-foreground hover:text-foreground transition-colors font-medium'
              >
                About
              </a>
              <a
                href='#contact'
                className='text-muted-foreground hover:text-foreground transition-colors font-medium'
              >
                Contact
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className='hidden lg:flex items-center gap-6'>
              {/* Search Bar */}
              <div className='relative'>
                <div className='flex items-center rounded-xl bg-muted px-1'>
                  <div className='flex items-center justify-center pl-4 pr-2 py-3'>
                    <SearchIcon className='h-5 w-5 text-muted-foreground' />
                  </div>
                  <Input
                    className='border-0 bg-transparent text-muted-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 w-52 h-12'
                    placeholder='Search cryptocurrencies...'
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className='flex items-center gap-3'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => handleNavigation('/watchlist')}
                  className={`hover:bg-muted h-11 px-4 ${
                    isActivePage('/watchlist')
                      ? 'text-[#54d12b] hover:text-[#54d12b]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <BookmarkIcon className='h-5 w-5 mr-2' />
                  Watchlist
                </Button>

                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setIsComparisonOpen(true)}
                  className='text-muted-foreground hover:text-foreground hover:bg-muted h-11 px-4'
                >
                  <BarChart3 className='h-5 w-5 mr-2' />
                  Compare
                </Button>
              </div>

              {/* Theme Toggle */}
              <div className='flex items-center'>
                {/* <ThemeToggle /> */}
              </div>

              {/* Get Started Button */}
              <Button className='bg-[#54d12b] hover:bg-[#54d12b]/90 text-[#0a0f0a] font-semibold h-12 px-6'>
                Get Started
              </Button>

              {/* User Actions */}
              <div className='flex items-center gap-4'>
                <div className='flex items-center justify-center h-12 w-12 bg-muted rounded-full hover:bg-muted/80 transition-colors cursor-pointer'>
                  <BellIcon className='h-6 w-6 text-foreground' />
                </div>

                <Avatar className='h-12 w-12 rounded-full cursor-pointer'>
                  <img
                    src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1'
                    alt='User profile'
                    className='h-full w-full object-cover'
                  />
                </Avatar>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='lg:hidden p-3 text-foreground hover:bg-muted rounded-lg transition-colors'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className='h-7 w-7' />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='lg:hidden py-6 border-t border-border'>
              <nav className='flex flex-col space-y-6'>
                <button
                  onClick={() => handleNavigation('/')}
                  className={`text-left transition-colors font-medium text-lg ${
                    isActivePage('/')
                      ? 'text-[#54d12b]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavigation('/markets')}
                  className={`text-left transition-colors font-medium text-lg ${
                    isActivePage('/markets')
                      ? 'text-[#54d12b]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Markets
                </button>
                <button
                  onClick={() => handleNavigation('/watchlist')}
                  className={`text-left transition-colors font-medium text-lg ${
                    isActivePage('/watchlist')
                      ? 'text-[#54d12b]'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Watchlist
                </button>
                <a
                  href='#about'
                  className='text-muted-foreground hover:text-foreground transition-colors font-medium text-lg'
                >
                  About
                </a>
                <a
                  href='#contact'
                  className='text-muted-foreground hover:text-foreground transition-colors font-medium text-lg'
                >
                  Contact
                </a>

                {/* Mobile Action Buttons */}
                <div className='flex flex-col gap-4 pt-6 border-t border-border'>
                  <div className='flex items-center gap-4'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => handleNavigation('/watchlist')}
                      className={`flex-1 h-12 ${
                        isActivePage('/watchlist')
                          ? 'text-[#54d12b] hover:text-[#54d12b] hover:bg-muted'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <BookmarkIcon className='h-5 w-5 mr-2' />
                      Watchlist
                    </Button>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => setIsComparisonOpen(true)}
                      className='text-muted-foreground hover:text-foreground hover:bg-muted flex-1 h-12'
                    >
                      <BarChart3 className='h-5 w-5 mr-2' />
                      Compare
                    </Button>
                    <ThemeToggle />
                  </div>

                  <Button className='bg-[#54d12b] hover:bg-[#54d12b]/90 text-[#0a0f0a] font-semibold w-full h-12'>
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
