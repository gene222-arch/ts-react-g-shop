import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
};

const HeaderNavigation = () => 
{
    return (
        <div role="presentation" onClick={ handleClick }>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/getting-started/installation/"
                >
                    Core
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/components/breadcrumbs/"
                    aria-current="page"
                >
                    Breadcrumbs
                </Link>
            </Breadcrumbs>
        </div>
    );
};

export default HeaderNavigation;
