import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Grid';
import productImageCarouselUseStyles from '../../assets/mui-styles/product.image.carousel';
import { Product } from '../../types/states/StoreState';
import ReactImageMagnify from 'react-image-magnify';


const banners = [
	'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
	'https://wallpapercave.com/wp/wp3931374.jpg'
];

interface Prop {
    product: Product
}

const ProductImageCarousel = ({ product }: Prop) => 
{
    const classes = productImageCarouselUseStyles();
    const [ previewImg, setPreviewImg ] = useState('');

    const handleClickImg = (url: string) => setPreviewImg(url);

    useEffect(() => 
    {
        setPreviewImg(product.image);

        return () => {
            setPreviewImg('');
        }
    }, [product]);

    return (
        <Grid container spacing={1} flexDirection="column">
            <Grid item xs={ 12 }>
                {/* <img src={ previewImg } className={ classes.previewImg } alt={ product.title } /> */}
                <ReactImageMagnify {...{
                    className: classes.previewImg,
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: previewImg,
                        width: 472.5,
                        height: 400,
                        isFluidWidth: false,
                    },
                    largeImage: {
                        src: previewImg,
                        width: 1000,
                        height: 1200,
                    },
                    isHintEnabled: true,
                    style: {
                        zIndex: 1
                    },
                    enlargedImageContainerClassName: classes.zoomableImage,
                    enlargedImageStyle: {
                        width: "100%"
                    },
                }} 
            />
            </Grid>
            <Grid item xs={ 12 }>
                <Carousel autoPlay={ false }>
                    {
                        banners.map((prod, index) => 
                            <Grid key={ index } container justifyContent="space-between">
                                <Grid item xs={ 2 } sm={ 2 } onMouseOver={ () => handleClickImg("https://wallpapercave.com/wp/wp3931374.jpg") }>
                                    <img src={ "https://wallpapercave.com/wp/wp3931374.jpg" } className={ classes.img }/>
                                </Grid>
                                <Grid item xs={ 2 } sm={ 2 } onMouseOver={ () => handleClickImg(prod) }>
                                    <img src={ "https://wallpapercave.com/wp/wp3931374.jpg" } className={ classes.img }/>
                                </Grid>
                                <Grid item xs={ 2 } sm={ 2 } onMouseOver={ () => handleClickImg(prod) }>
                                    <img src={ "https://wallpapercave.com/wp/wp3931374.jpg" } className={ classes.img }/>
                                </Grid>
                                <Grid item xs={ 2 } sm={ 2 } onMouseOver={ () => handleClickImg(prod) }>
                                    <img src={ "https://wallpapercave.com/wp/wp3931374.jpg" } className={ classes.img }/>
                                </Grid>
                                <Grid item xs={ 2 } sm={ 2 } onMouseOver={ () => handleClickImg(prod) }>
                                    <img src={ "https://wallpapercave.com/wp/wp3931374.jpg" } className={ classes.img }/>
                                </Grid>
                            </Grid>
                        )
                    }
                </Carousel>
            </Grid>
        </Grid>
    );
};

export default ProductImageCarousel;
