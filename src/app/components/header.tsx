import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  page: String;
}

const Header:React.FC<HeaderProps> = ({page}) => {
  const [token, setToken] = useState<string | null>(null);
  const [profileDropdown, setProfileDropdown] = useState<boolean>(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  const flipDropdown = () => {
    setProfileDropdown(prevState => !prevState);
  };



  return (
    <div >
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="" className="flex items-center">
                    <Image src="/BiciLogo700.svg" className="mr-1 h-9 sm:h-9" width={50} height={50} alt="BiciBids Logo" />
                    <span className="self-center text-2xl mt-1 font-semibold whitespace-nowrap dark:text-white">BiciBids</span>
                </a>
                <div className="flex items-center lg:order-2">
                <form className="max-w-md mx-auto py-2 pr-4 pl-3">   
                      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                              </svg>
                          </div>
                          <input type="search" id="default-search" className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search Bikes, Gear..."  />
                          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                      </div>
                  </form>

                    {token ? (
                      <div className="flex"> 
                        <a className="ml-4">
                          <Image src="/profileicon.png" className="rounded-full h-16 w-16" width={50} height={50} alt="Profile Image" onClick={flipDropdown} onMouseEnter={flipDropdown} style={{ cursor: 'pointer' }}/>
                        </a>
                        {profileDropdown ? (
                        <div className="absolute right-0 z-10 mt-14 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                          <div className="py-1" role="none">
                            
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-1">Support</a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                              <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">Sign out</button>
                            </form>
                          </div>
                        </div>
                        ) : null}
                      </div>
                    ) : (
                      <a href="/signin" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign in</a>
                    )}

                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>

                <div className="hidden mr-auto ml-16 items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                        <a href="/" className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${page === 'Home' ? 'text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`} aria-current={page === 'Home' ? 'page' : undefined}>Home</a>
                        </li>
                        <li>
                        <a href="/buy" className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${page === 'Buy' ? 'text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}`}>Buy</a>
                        </li>
                        <li>
                            <a href="/sell" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sell</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                       
                    </ul>
                    
                </div>
                
            </div>
        </nav>
    </header>
    </div>
  );
};

export default Header;