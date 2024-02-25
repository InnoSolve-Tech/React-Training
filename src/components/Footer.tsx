import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="w-full bg-white flex justify-between p-4">
      <div className="flex items-center pl-3">
        <FacebookIcon className="text-[#0047AB] mr-3" />
        <TwitterIcon className="text-[#0047AB] mr-3" />
        <InstagramIcon className="text-[#0047AB]" />
      </div>
    </footer>
  );
};

export default Footer;
