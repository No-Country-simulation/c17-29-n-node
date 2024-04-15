"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { FaRegUser, FaMagnifyingGlass } from "react-icons/fa6";

// <nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm' role='navigation'>
//     <article className='pl-8 w-1/3 [&>*]:mx-4 [&>*]:text-2xl'>
//         <a href='/'>Logo</a>
//         <a href='/'>Inicio</a>
//         <a href='/'>Informacion</a>
//     </article>
//     <article className='pr-8 w-1/3 flex justify-end gap-4 [&>*]:w-11 [&>*]:h-11 [&>*]:rounded-full [&>*]:hover:cursor-pointer'>
//         {/* user svg */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="border-[#834AA4] border-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//         </svg>
//         {/* person svg for user logo */}
//         <FaRegUser className='bg-[#834AA4]' />
//     </article>
// </nav>
export const NavbarComponent = () => {
    return (
        <>
            <Navbar isBordered>
                <NavbarContent justify="start">
                    <NavbarBrand className="mr-4">
                        <span>LOGO</span>
                        <p className="hidden sm:block font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-3">
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Link href="#" aria-current="page" color="secondary">
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" href="#">
                                Integrations
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </NavbarContent>

                <NavbarContent as="div" className="items-center" justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        startContent={<FaMagnifyingGlass size={18} />}
                        type="search"
                    />
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name="Jason Hughes"
                                size="sm"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">zoey@example.com</p>
                            </DropdownItem>
                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            </Navbar>
        </>
    )
}
