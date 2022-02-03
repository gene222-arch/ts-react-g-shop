import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MaleIcon from "@mui/icons-material/Male";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import FemaleIcon from "@mui/icons-material/Female";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Collapse, Paper, SvgIconTypeMap } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import categoryListUseStyles from "../../assets/mui-styles/category.list";
import { useNavigate } from 'react-router-dom';
import { SORT_BY_CATEGORY_PATH } from "../../routes/paths";

type Category = {
    key: string;
    name: string,
    label: string;
    disablePadding: boolean;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    collapse: boolean
};

const categoriesInitialVal: Category[] = [
    {
        key: "Men`s Fashion",
        name: "men's clothing",
        label: "Men`s Fashion",
        disablePadding: true,
        icon: MaleIcon,
        collapse: false
    },
    {
        key: "Jewelery",
        name: "jewelery",
        label: "Jewelery",
        disablePadding: true,
        icon: SportsBasketballIcon,
        collapse: false
    },
    {
        key: "Women`s Fashion",
        name: "women's clothing",
        label: "Women`s Fashion",
        disablePadding: true,
        icon: FemaleIcon,
        collapse: false
    },
];

const CategoryList = () => 
{
    const classes = categoryListUseStyles();
    const navigate = useNavigate();

    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));

    const [ categories, setCategories ] = useState<Category[]>(categoriesInitialVal);

    const handleClickNavigate = (category: string) =>
    {
        navigate(SORT_BY_CATEGORY_PATH.replace(
            ":category", 
            category)
        );
    };

    const handleClickListItem = (selectedCategory: Category) => 
    {
        const newCategories = categories.map(category => (
            (category.key === selectedCategory.key)
                ? { ...category, collapse: !selectedCategory.collapse }
                : category
        ));

        setCategories(newCategories);
    };

    return (
        <Paper className={ classes.paperContainer }>
            <Box sx={{  width: "100%" }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            categories.map(category => (
                                <div 
                                    key={ category.key }
                                    onClick={ () => isXs && handleClickListItem(category) }
                                    onMouseOver={ () => !isXs && handleClickListItem(category) }
                                    onMouseOut={ () => !isXs && handleClickListItem(category) }
                                >
                                    <ListItem disablePadding={ category.disablePadding }>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <category.icon color={ category.collapse ? "info" : "inherit" } />
                                            </ListItemIcon>
                                            <ListItemText primary={ category.label } />
                                        </ListItemButton>
                                    </ListItem>
                                    <Collapse in={ category.collapse } unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }} onClick={ () => handleClickNavigate(category.name) }>
                                                <ListItemText primary={ category.label } />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                            ))
                        }
                    </List>
                </nav>
            </Box>
        </Paper>
    );
}

export default CategoryList;
