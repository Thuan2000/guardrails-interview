/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons';

import useStyles from './HeroWithBullets.styles';
import { ROUTES } from 'constants/routes.constant';

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>dedicated</span><br /> Full-stack Developer
            </Title>
            <Text color="dimmed" mt="md">
              My name is Thuan Nguyen located in Vietnam. I live to build great products. <br /><br />
              There are three pages in this application, accessible via the left navigation bar, respectively:
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Input Security Scan Page</b> – Fill in the form to record/input a new scan result.
              </List.Item>
              <List.Item>
                <b>View All Scans Page</b> – List all the scan results. Allows delete, update and select a scan result.
              </List.Item>
              <List.Item>
                <b>View Selected Scan Page</b> – List all the findings of a selected scan result.
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href={ROUTES.scanInputFormPage}>
                <Button radius="xl" size="md" className={classes.control}>
                  To "Input Scan Result" Page
                </Button>
              </Link>

              <a target="_blank" href="https://github.com/Thuan2000/guardrails-interview" rel="noopener noreferrer">
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Source code
                </Button>
              </a>
            </Group>
          </div>
          <Image src='/images/programmer.svg' className={classes.image} />
        </div>
      </Container>
    </div>
  );
}