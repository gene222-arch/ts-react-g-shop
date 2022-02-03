import { FacebookShareButton } from 'react-share';
import { Share } from '@mui/icons-material';
import { Product } from '../../types/states/StoreState';

interface Prop {
    quote?: string | undefined,
    hashtag?: string | undefined,
    product: Product
}

const SocialShareButton = ({ quote = "Sale, sale, sale", hashtag = "#gshopesale", product }: Prop) => 
{
    return (
        <FacebookShareButton
            quote={ quote }
            hashtag={ hashtag }
            url={ product.image }
            style={{ marginTop: "0.5rem" }}
        >
            <Share color="info" />
        </FacebookShareButton>
    )
};

export default SocialShareButton;
