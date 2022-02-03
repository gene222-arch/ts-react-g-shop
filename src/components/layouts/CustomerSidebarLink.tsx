import { Link, ListItem, ListItemText } from '@mui/material';
import { Path } from '../../types/Path';

interface Prop {
    name: string,
    path: Path
};

const CustomerSidebarLink = ({ name, path }: Prop) => 
{
    return (
        <ListItem key={ name } sx={{ ml: 2 }}>
            <ListItemText primary={  
                <Link
                    href={ path }
                    sx={{ textDecoration: "none", color: "GrayText" }}
                >
                    { name }
                </Link>
            } />
        </ListItem>
    );
};

export default CustomerSidebarLink;
