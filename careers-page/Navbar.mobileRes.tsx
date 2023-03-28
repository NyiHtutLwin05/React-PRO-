import { Flex, NavLink, Burger, Grid } from '@mantine/core';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import BookLayout from '../pages/BookLayout';
import Booklist from '../pages/Booklist';
import Books from '../pages/Books';
import Home from '../pages/Home';
import NewBook from '../pages/newBook';
import NotFound from '../pages/NotFound';
import '../careers-page/Nav.css';
import { useDisclosure } from '@mantine/hooks';

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin-left: 10px;
  margin-right: 10px;
`;

function NavbarPractiveMobile() {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <>
      <nav style={{ margin: '10px' }}>
        <Flex align="center" justify="space-around" mt={14}>
          <div className="logo">
            <h1>Bureua.</h1>
          </div>
          {/* <Burger opened={opened} onClick={toggle} size="sm" /> */}
        </Flex>
        <div className="navList">
          <li
            color="red.3"
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              listStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <NavLink
              label="Home"
              to="/about"
              childrenOffset="sm"
              component={Link}
              styles={(theme) => ({
                label: {
                  color: theme.colors.dark[6],
                },
              })}
            />
          </li>
          <li
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              listStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <NavLink
              color="red.5"
              label="About"
              childrenOffset="sm"
              to="/about"
              component={Link}
              styles={(theme) => ({
                label: {
                  color: theme.colors.dark[6],
                },
              })}
            />
          </li>
          <li
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              listStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <NavLink
              label="Pages"
              childrenOffset="sm"
              to="/about"
              component={Link}
              styles={(theme) => ({
                label: {
                  color: theme.colors.dark[6],
                },
              })}
            />
          </li>
          <li
            style={{
              marginLeft: '5px',
              marginRight: '5px',
              listStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <NavLink
              label="News"
              childrenOffset="sm"
              to="/about"
              component={Link}
              styles={(theme) => ({
                label: {
                  color: theme.colors.dark[6],
                },
              })}
            />
          </li>
          <li
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              listStyle: 'none',
              textDecoration: 'none',
            }}
          >
            <NavLink
              variant="subtle"
              childrenOffset="sm"
              active
              label="Contact Us"
              to="/about"
              component={Link}
              styles={(theme) => ({
                label: {
                  color: theme.colors.dark[6],
                },
              })}
            />
          </li>
        </div>
      </nav>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Books />} />
          <Route path="new" element={<NewBook />} />
        </Route> */}
      {/* <Route path="/books" element={<Booklist />} />
        <Route path="/books/:id" element={<Books />} />
        <Route path="/books/new" element={<NewBook />} /> */}
      {/* <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}
export default NavbarPractiveMobile;
