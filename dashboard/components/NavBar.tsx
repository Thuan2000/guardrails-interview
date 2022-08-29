/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */

import {
  Image,
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconList,
  IconListCheck,
  IconForms,
} from "@tabler/icons";
import { useRouter } from "next/router";
import { ROUTES } from "constants/routes.constant";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  logoImage: {
    width: 30,
    height: 30,
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", href: ROUTES.home },
  { icon: IconForms, label: "Input Scan Result", href: ROUTES.scanInputFormPage },
  { icon: IconList, label: "All Scan Results", href: ROUTES.allScansPage },
];

function getIsActive(href: string, pathname: string) {
  return href === pathname;
}

export function NavbarMinimal() {
  const { classes } = useStyles();

  const { pathname, ...router } = useRouter();

  function handleNavbarLinkClick(url: string) {
    router.push(url);
  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={getIsActive(link.href, pathname)}
      onClick={() => handleNavbarLinkClick(link.href)}
    />
  ));

  return (
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <Image
          src="/images/guardrails-logo.png"
          className={classes.logoImage}
        />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
