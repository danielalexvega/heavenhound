/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{ 
        variant: 'links.logo', 
        display: 'flex', 
        cursor: 'pointer', 
        maxWidth: '100px',
        mr: 15 
      }} 
      {...rest}
      >
        <Image src={src} alt="Hound Heaven Recording homepage"/>
      </Link>
  );
}
