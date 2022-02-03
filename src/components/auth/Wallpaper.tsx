import Grid from '@mui/material/Grid';

const Wallpaper = () => 
{
    return (
        <Grid
            item
            xs={ false }
            sm={ 4 }
            md={ 7 }
            sx={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1640979736972-f1cb43579b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MzQxODc1Mw&ixlib=rb-1.2.1&q=80&w=1080)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light' 
                        ? theme.palette.grey[50] 
                        : theme.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    );
};

export default Wallpaper;
