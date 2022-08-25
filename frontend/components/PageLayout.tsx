/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */
 
import React from "react";
import { AppShell, Header } from '@mantine/core';
import { NavbarMinimal } from '@components/NavBar';

const PageLayout: React.FC = ({ children }) => {
    return (
        <AppShell
            padding="md"
            navbar={<NavbarMinimal />}
            header={<Header height={60} p="xs">App Header</Header>}
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {children}
        </AppShell>
    );
};

export default PageLayout;