import { Link, LinkProps } from '@mui/material';

const StyledLink = (props: LinkProps) => <Link { ...props } sx={{ textDecoration: "none" }} />;

export default StyledLink;
