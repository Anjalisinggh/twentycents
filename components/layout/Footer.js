"use client";
import { Instagram, Twitter, Youtube } from 'lucide-react'; 
import { FaTiktok } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const socialLinks = [
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/20cent_studio?igsh=Zms2YW1pdHg2dnln&utm_source=qr" },
    { icon: <Twitter size={24} />, href: "https://x.com/20cent_studio" },
    { icon: <FaTiktok size={24} />, href: "https://www.tiktok.com/@20cent_studio?_r=1&_t=ZS-92clBY4K5Hr" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@20CENT_Studio" },
  ];

  return (
    <footer className="bg-[#111] text-white py-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        
        {/* Left Section: Socials and Links */}
        <div className="flex flex-col gap-8 ml-20">
          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-400 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <nav className="flex flex-col gap-7 text-xs text-#C3C3C3 font-light">
            <a href="#" className="hover:text-white transition-colors w-fit">{t('links.company')}</a>
            <a href="#" className="hover:text-white transition-colors w-fit">{t('links.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors w-fit">{t('links.terms')}</a>
            <a href="#" className="hover:text-white transition-colors w-fit">{t('links.copyright')}</a>
            <a href="#" className="hover:text-white transition-colors w-fit">{t('links.commerce')}</a>
          </nav>
        </div>

        {/* Right Section: Brand Logo */}
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <img
            src="/twentylogo.png"
            alt="Twenty Cents."
            className="h-20 sm:h-24 md:h-28 w-auto mb-15 mr-20"
          />
        </div>

      </div>

      
    </footer>
  );
}