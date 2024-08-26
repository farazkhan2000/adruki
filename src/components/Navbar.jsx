"use client"
import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "@/assets/icons/logo.png"; 
import { ArrowUpRight } from 'lucide-react';

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="font-urbanist bg-transparent fixed top-0 w-full z-50 py-2" // Fixed at the top
      maxWidth = "2xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image src={logo} alt="Codeto Logo" width={120} height={40} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="danger" href="#" className=" text-white" >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" href="#" className=" text-white" >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="danger" href="#" className=" text-white" >
            Our Work
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button color="primary" variant="solid" className="font-semibold rounded-full text-white px-6" >
            Get in Touch 
            <ArrowUpRight size={21} />
          </Button> 
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
