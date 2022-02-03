import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Path } from './../../types/Path';
import { Link } from '@mui/material';
import CustomerSidebarLink from './CustomerSidebarLink';
import { WISHLIST_PATH } from '../../routes/paths';

type SideBarConfig = {
    name: string,
    path?: Path | undefined,
    options?: {
        name: string,
        path: Path
    }[] | undefined
};

const sideBarConfig: SideBarConfig[] = 
[
    {
        name: "Manage Account",
        options: [
            {
                name: "My Profile",
                path: "/"
            }
        ]
    },
    {
        name: "My Wishlist",
        path: WISHLIST_PATH
    }
];

const CustomerSidebar = () => 
{
    return (
        <Box sx={{ width: '100%' }}>
            <nav aria-label="main mailbox folders">
                <List>
                    {
                        sideBarConfig.map((config) => (
                            <>
                                <ListItem key={ config.name }>
                                    <ListItemText primary={  
                                        config?.path 
                                            ? (
                                                <Link 
                                                    href={ config.path }
                                                    sx={{ textDecoration: "none", color: "black" }}
                                                >
                                                    { config.name }
                                                </Link>
                                            )
                                            : config.name
                                    } />
                                </ListItem>
                                {
                                    config?.options && (
                                        config.options.map(option => (
                                            <CustomerSidebarLink 
                                                key={ option.name } 
                                                name={ option.name }
                                                path={ option.path }
                                            />
                                        ))
                                    )
                                }
                            </>
                        ))
                    }
                </List>
            </nav>

            <Divider />
        </Box>
    );
};

export default CustomerSidebar;
