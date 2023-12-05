"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '@/assets/logo.svg'
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import Link from 'next/link';
import Header from './Header';
const navItems = [
    {
        route: "Home",
        pathname: "/",
    },
    {
        route: "Pages",
        pathname: "/pages",
    },
    {
        route: "Category",
        pathname: "/categories/news?category=all-news",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },
    {
      route: "Contact",
      pathname: "/contact",
    },
];

function Navbar() {

  return (
    <>
    <Header />
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt="logo" />
          <Box className="w-full text-center">
            {navItems.map((page) => (
             <Link key={page} href={page.pathname}>
                <Button className='text-white'>{page.route}</Button>
             </Link>
            ))}
          </Box>
                <Box>
                    <Stack direction="row" sx={{"& svg":{
                        color:"white"
                    }}}>
                        <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                        <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                        <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                        <IconButton>
                        <Facebook></Facebook>
                    </IconButton>
                    </Stack>
                    
                </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
    </>
    
  );
}
export default Navbar;