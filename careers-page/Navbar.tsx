import {
  Flex,
  NavLink,
  Burger,
  Collapse,
  Button,
  SimpleGrid,
} from '@mantine/core';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import BookLayout from '../pages/BookLayout';
import Booklist from '../pages/Booklist';
import Books from '../pages/Books';
import Home from '../pages/Home';
import NewBook from '../pages/newBook';
import NotFound from '../pages/NotFound';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';

function NavbarPractive() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [menuOpen, setMenuOpen] = useState(false);
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <nav style={{ margin: '10px' }}>
      <Flex align="center" justify="space-around" mt={14}>
        {isMobile ? (
          <>
            <div className="logo">
              <h1>Bureua.</h1>
            </div>
            <div>
              <Burger opened={menuOpen} onClick={toggle} />
            </div>

            <Collapse in={opened}>
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
            </Collapse>
          </>
        ) : (
          <Flex justify="space-around">
            <div className="logo">
              <h1>Bureua.</h1>
            </div>
            <Flex justify="center" gap="xs">
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
            </Flex>
          </Flex>
        )}
      </Flex>
    </nav>
  );
}
export default NavbarPractive;
