import Carousel from 'react-material-ui-carousel';
import advertisementBannerUseStyles from './../../assets/mui-styles/advertisement.banner';

const banners = [
	'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
	'https://wallpapercave.com/wp/wp3931374.jpg'
];

const AdvertisementBanner = () => 
{
	const classes = advertisementBannerUseStyles();

    return (
        <div>
			<Carousel
				stopAutoPlayOnHover
				animation="slide"
				interval={ 5000 }
				swipe
			>
			{
				banners.map((banner, index) => (
					<img 
						key={ index }
						src={ banner } 
						className={ classes.banner }
					/>
				))
			}
			</Carousel>
        </div>
    );
};

export default AdvertisementBanner;
