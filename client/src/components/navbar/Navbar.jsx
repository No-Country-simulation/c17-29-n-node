"use client"
import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Image } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
import { FiSearch, FiPlusCircle } from "react-icons/fi";

export const NavbarComponent = () => {
    const router = useRouter()
    return (
        <>
            <Navbar className='w-full mainTheme bg-main'>
                <NavbarBrand className="flex mr-4">
                    <Image src='/logo.svg' alt='Logo' className='h-full select-none pointer-events-none' draggable="false" onClick={(() => router.push("/"))} />
                    <section className="flex flex-col justify-center ml-2 hidden md:block">
                        <span className="text-xs">Viajá acompañado</span>
                        <h2 className="text-xl font-semibold">Rutas Doradas</h2>
                    </section>
                </NavbarBrand>
                <NavbarContent justify="center" className='justify-center align-center'>
                    <Dropdown placement="top">
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
                <NavbarContent as="div" className="items-center" justify="end">
                    <NavbarItem>
                        <Input
                            classNames={{
                                base: "max-w-full sm:max-w-[10rem] h-10",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                            }}
                            placeholder="Type to search..."
                            size="sm"
                            startContent={<FiSearch size={18} className='select-none pointer-events-none' draggable="false" />}
                            type="search"
                        />
                        <span className="sr-only">Search</span>
                    </NavbarItem>
                    <NavbarItem className="flex items-center justify-center ml-4">
                        <FiPlusCircle size={30} className='select-none pointer-events-none' draggable="false" />
                        <span className="text-sm pl-2 hidden md:block">Publicar Viaje</span>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    )
}
