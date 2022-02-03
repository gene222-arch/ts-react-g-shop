import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { STORE_PATH } from '../routes/paths';
import { CSSProperties } from 'react';

interface Prop {
    muiIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    },
    message: string,
    style?: CSSProperties | undefined
}

const ContinueShoppingMessage = ({ message, muiIcon: Icon, style }: Prop) => 
{
    const navigate = useNavigate();

    const handleNavigateHome = () => navigate(STORE_PATH);

    let defaultStyle: CSSProperties | undefined = { textAlign: "center", padding: "3rem 0" };
    defaultStyle = style ? { ...defaultStyle, ...style } : defaultStyle;

    return (
        <div style={ defaultStyle }>
            <Icon color="error" />
            <Typography variant="subtitle1" color="GrayText" mb={ 2 }>
                { message }
            </Typography>
            <Button variant="outlined" color="info" onClick={ handleNavigateHome }>
                CONTINUE SHOPPING
            </Button>
        </div>
    );
};

export default ContinueShoppingMessage;
