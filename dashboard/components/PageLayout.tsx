/**
 * Copyright Thuan Nguyen ©2022
 * Good codes make the world a better place!
 */
 
import React from "react";
import { AppShell, Header, Footer } from '@mantine/core';
import { NavbarMinimal } from '@components/NavBar';

const PageLayout: React.FC = ({ children }) => {
    return (
        <AppShell
            padding="md"
            navbar={<NavbarMinimal />}
            header={
                <Header height={50} p="xs">
                    <h3>
                        [Thuan Nguyen]: Guardrails Fullstack Challenge (22<sup>nd</sup> Aug - 29<sup>th</sup> Aug)
                    </h3>
                </Header>
            }
            footer={
                <Footer height={50} p="xs" style={{ textAlign: 'center' }}>
                    Thuan Nguyen © 2022
                </Footer>
            }
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            {children}
        </AppShell>
    );
};

export default PageLayout;