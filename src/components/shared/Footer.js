import { Facebook } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
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
      pathname: "/category",
    },
    {
      route: "About",
      pathname: "/about",
    },
  ];
  return (
    <Box className="bg-black p-4">
       <Box className="w-full text-center"
      sx={{
        "& svg": {
          color: "white",
        },
      }}
    >
      <Container>
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
      </Container>
    </Box> 
    <Box className="w-full text-center">
            {navItems.map((page) => (
             <Link key={page} href={page.pathname}>
                <Button className='text-white'>{page.route}</Button>
             </Link>
            ))}
          </Box>
          <Typography variant="body2" color="gray" textAlign="center">
            @2023 The Dragon News. Design by programming hero.
          </Typography>
    </Box>
    
  );
};

export default Footer;
