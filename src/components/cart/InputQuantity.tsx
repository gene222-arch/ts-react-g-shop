import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography'


interface Prop {
    quantity: number,
    handleIncrement: () => void,
    handleDecrement: () => void
};

const InputQuantity = ({ quantity, handleIncrement, handleDecrement }: Prop) => 
{
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group" size="small">
            <Button 
                variant="contained" 
                color="error" 
                onClick={ handleDecrement }
            >
                -
            </Button>
            <Typography variant="body1" py={ 1 } px={ 2 }>{ quantity }</Typography>
            <Button 
                variant="contained" 
                color="success" 
                onClick={ handleIncrement }
            >
                +
            </Button>
        </ButtonGroup>
    );
}

export default InputQuantity;
