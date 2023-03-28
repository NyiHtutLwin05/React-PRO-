import React from 'react';
import { GiMeal } from 'react-icons/gi';
import { BsDroplet, BsDoorOpen } from 'react-icons/bs';
import {
  Title,
  Text,
  Flex,
  Container,
  Box,
  Space,
  Grid,
  Center,
  Paper,
  SimpleGrid,
} from '@mantine/core';
import NavBar from './careers-page.nav';

function CareersPageTablet() {
  return (
    <>
      <Container size="md" py="lg" my="lg">
        <Flex justify="center" direction="column" align="center" wrap="wrap">
          <Title order={1} sx={{ fontFamily: 'Poppins_Bold' }}>
            Careers
          </Title>

          <Text c="dimmed" align="center" mt="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur obcaecati iste necessitatibus deserunt incidunt, fuga
            non amet veritatis ?
          </Text>
        </Flex>
      </Container>
      <Container size="md" py="lg" my="lg">
        <Flex justify="center">
          <Title order={2} sx={{ fontFamily: 'Poppins_Bold' }}>
            Why work with us?
          </Title>
        </Flex>
        <Flex mt={30} justify="center" gap="xs">
          <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
            <Flex gap="xl">
              <div>
                <GiMeal style={{ color: '#11B7CD' }} size={30} />
              </div>
              <div>
                <Text fw={500}>Catered Meals</Text>
                <Space h="xs" />
                <Box w={290}>
                  <Text c="dimmed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur obcaecati iste necessitatibus
                    <br />
                  </Text>
                </Box>
              </div>
            </Flex>
            <Flex gap="md">
              <div>
                <BsDroplet style={{ color: '#11B7CD' }} size={30} />
              </div>
              <div>
                <Text fw={500}>Health Care</Text>
                <Space h="xs" />
                <Box w={290}>
                  <Text c="dimmed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur obcaecati iste necessitatibus
                    <br />
                  </Text>
                </Box>
              </div>
            </Flex>
            <Flex gap="md">
              <div>
                <BsDoorOpen style={{ color: '#11B7CD' }} size={30} />
              </div>
              <div>
                <Text fw={500}>Flexible Environment</Text>
                <Space h="xs" />
                <Box w={290}>
                  <Text c="dimmed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur obcaecati iste necessitatibus
                    <br />
                  </Text>
                </Box>
              </div>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Container>

      <Container
        fluid
        py="lg"
        my="lg"
        sx={(theme) => ({
          backgroundColor: '#FAFAFA',
        })}
      >
        <Flex justify="center">
          <Title order={2} sx={{ fontFamily: 'Poppins_Bold' }}>
            Similar Openings
          </Title>
        </Flex>
        <div
          style={{
            width: '100%',
            marginLeft: '5rem',
            height: '100%',
          }}
        >
          <Grid mt={30} gutter="md">
            <SimpleGrid cols={2} spacing="sm" verticalSpacing="sm">
              <Grid.Col span={4}>
                <Flex
                  justify="center"
                  style={{
                    width: '18rem',
                    height: '8rem',
                    padding: '1.4rem',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.15)',
                  }}
                >
                  <div>
                    <Title order={6}>Front-end Designer</Title>

                    <Text c="dimmed">Sidney,Australia</Text>
                    <Space h="md" />
                    <Title order={6} style={{ color: '#11B7CD' }}>
                      View & Apply
                    </Title>
                  </div>
                  <div
                    style={{
                      padding: '1px 4px',
                      height: '1.4rem',
                      backgroundColor: '#11B7CD',
                      color: 'white',
                      borderRadius: '6px',
                      marginLeft: '20px',
                      fontSize: '10px',
                      marginTop: '3px',
                    }}
                  >
                    <Title order={6}>Full Time </Title>
                  </div>
                </Flex>
              </Grid.Col>

              <Grid.Col span={4}>
                <Flex
                  justify="center"
                  style={{
                    width: '18rem',
                    height: '8rem',
                    padding: '1.4rem',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.15)',
                  }}
                >
                  <div>
                    <Title order={6}>Lead Designer</Title>

                    <Text c="dimmed">San Francisco,USA</Text>
                    <Space h="md" />
                    <Title order={6} style={{ color: '#11B7CD' }}>
                      View & Apply
                    </Title>
                  </div>
                  <div
                    style={{
                      padding: '1px 4px',
                      height: '1.4rem',
                      backgroundColor: '#11B7CD',
                      color: 'white',
                      borderRadius: '6px',
                      marginLeft: '20px',
                      fontSize: '10px',
                      marginTop: '3px',
                    }}
                  >
                    <Title order={6}>Remote </Title>
                  </div>
                </Flex>
              </Grid.Col>
              <Grid.Col span={4}>
                <Flex
                  justify="center"
                  style={{
                    width: '18rem',
                    height: '8rem',
                    padding: '1.4rem',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.15)',
                  }}
                >
                  <div>
                    <Title order={6}>Head Of Idea</Title>

                    <Text c="dimmed">Sidney,Australia</Text>
                    <Space h="md" />
                    <Title order={6} style={{ color: '#11B7CD' }}>
                      View & Apply
                    </Title>
                  </div>
                  <div
                    style={{
                      padding: '1px 4px',
                      height: '1.4rem',
                      backgroundColor: '#11B7CD',
                      color: 'white',
                      borderRadius: '6px',
                      marginLeft: '20px',
                      fontSize: '10px',
                      marginTop: '3px',
                    }}
                  >
                    <Title order={6}>Full Time </Title>
                  </div>
                </Flex>
              </Grid.Col>
              <Grid.Col span={4}>
                <Flex
                  justify="center"
                  style={{
                    width: '18rem',
                    height: '8rem',
                    padding: '1.4rem',
                    backgroundColor: 'white',
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.15)',
                  }}
                >
                  <div>
                    <Title order={6}>Front-end Designer</Title>

                    <Text c="dimmed">Sidney,Australia</Text>
                    <Space h="md" />
                    <Title order={6} style={{ color: '#11B7CD' }}>
                      View & Apply
                    </Title>
                  </div>
                  <div
                    style={{
                      padding: '1px 4px',
                      height: '1.4rem',
                      backgroundColor: '#11B7CD',
                      color: 'white',
                      borderRadius: '6px',
                      marginLeft: '20px',
                      fontSize: '10px',
                      marginTop: '3px',
                    }}
                  >
                    <Title order={6}>Full Time </Title>
                  </div>
                </Flex>
              </Grid.Col>
              <Grid.Col span={4}>
                <Flex
                  justify="center"
                  style={{
                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.15)',
                    width: '18rem',
                    height: '8rem',
                    padding: '1.4rem',
                    backgroundColor: 'white',
                  }}
                >
                  <div>
                    <Title order={6}>Front-end Designer</Title>

                    <Text c="dimmed">Sidney,Australia</Text>
                    <Space h="md" />
                    <Title order={6} style={{ color: '#11B7CD' }}>
                      View & Apply
                    </Title>
                  </div>
                  <div
                    style={{
                      padding: '1px 4px',
                      height: '1.4rem',
                      backgroundColor: '#11B7CD',
                      color: 'white',
                      borderRadius: '6px',
                      marginLeft: '20px',
                      fontSize: '10px',
                      marginTop: '3px',
                    }}
                  >
                    <Title order={6}>Full Time </Title>
                  </div>
                </Flex>
              </Grid.Col>
            </SimpleGrid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
export default CareersPageTablet;
