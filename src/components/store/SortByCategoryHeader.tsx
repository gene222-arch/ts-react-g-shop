import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

interface Prop {
    category: string,
    itemsCount: number,
    handleSelectSort: (sort: string) => void
}

const SortByCategoryHeader = ({ category, itemsCount, handleSelectSort }: Prop) => 
{
    const [ category_, setCategory ] = useState('');

    const handleChangeCategory = (e: SelectChangeEvent<string>) => 
    {
        const selectedCategory = e.target.value;

        handleSelectSort(selectedCategory);
        setCategory(selectedCategory);
    };

    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="subtitle1" color="GrayText">
                    { itemsCount } items found in { category }
                </Typography>
            </Grid>
            <Grid item xs={ 5 } sm={ 2 }>
                <FormControl fullWidth>
                    <InputLabel id="select-label">Sort By</InputLabel>
                    <Select
                        labelId="select-label"
                        autoWidth
                        label="Age"
                        onChange={ handleChangeCategory }
                        value={ category_ }
                    >
                        <MenuItem value="">
                            <em>Best Match</em>
                        </MenuItem>
                        <MenuItem value="bottom-up">Price low to high</MenuItem>
                        <MenuItem value="top-to-bottom">Price high to low</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default SortByCategoryHeader;
