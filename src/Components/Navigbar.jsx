
'use client';

import { Button, Navbar } from 'flowbite-react';
import {  Link } from 'react-router-dom';

export default function Navigbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://cdn-icons-png.flaticon.com/512/2620/2620769.png" className="mr-3 w-12 h-12 sm:h-9" alt="Hackathon Logo" />
        
      </Navbar.Brand>
      <div className="flex md:order-2 space-x-4">
        <Button>Get started</Button>
        <Button>Sign Up</Button>
        <Button>Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" active>
          Hackathons
        </Navbar.Link>
        <Navbar.Link as= {Link} to="/organizers ">Organizers</Navbar.Link>
        <Navbar.Link as= {Link} to="resources">Resources</Navbar.Link>
        <Navbar.Link as= {Link} to="about">About</Navbar.Link>
        <Navbar.Link as= {Link} to="contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

