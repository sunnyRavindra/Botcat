'use client'
import React,{ useState } from "react";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,         
  LinkedinIcon,
  CompanyIcon,
} from "@/components/icons";

export const Navbar = () => {

const [isMenuOpen, setIsMenuOpen] = React.useState(false);

return (
		<NextUINavbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen} >

     <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <CompanyIcon/>
            <p className="font-bold text-inherit">B O T C A T</p>
          </NextLink>
        </NavbarBrand>

 {/*       <Dropdown >
          <NavbarItem>
            <DropdownTrigger>
              <Button 
                radius="full"
                variant="bordered" 
                as={Link}
                color="default"
                size="sm">
                Products 
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Botcat features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="BotCat"
              description="BotCat a proffesional Test Automation soution for Quality Engineers."
            >
            <Link href="/auto">BotCat Auto</Link>
            </DropdownItem>
            <DropdownItem
              key="BotCat Profiles"
              description="BotCat Profiles builds proffesional looking portfolio's for Tecnical proffesional."
            >
            <Link href="/profile">BotCat Profile</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
*/}
				<ul className="hidden sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
              <Link
								color="foreground"
                size="sm"
							  href={item.href}
              >{item.label}</Link>
						</NavbarItem>
					))}
				</ul>

			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
						<LinkedinIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link>
				</NavbarItem>
			</NavbarContent>

      <NavbarMenu>
          <NavbarMenuItem key="MenuItem">
            <Link
              className="w-full"
              href="/"
              size="sm"
              color="foreground"
            >
            Home
            </Link>
            <Link
              className="w-full"
              href="/about"
              size="sm"
              color="foreground"
            >
            About 
            </Link>
            <Link
              className="w-full"
              href="/login"
              size="sm"
              color="foreground"
            >
            LogIn
            </Link>
            <Link
              className="w-full"
              href="/signin"
              size="sm"
              color="foreground"
            >
            SignIn
            </Link>
          </NavbarMenuItem>
      </NavbarMenu>

		</NextUINavbar>
	);
};
