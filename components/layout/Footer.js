import { Instagram, Twitter, Video , Youtube } from 'lucide-react'; 

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 sm:gap-10 md:gap-12">
        
        {/* Left Section: Socials and Links */}
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full md:w-auto">
          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 md:gap-6">
            <Instagram size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 cursor-pointer hover:opacity-70" />
            <Twitter size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 cursor-pointer hover:opacity-70" />
            <Video size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 cursor-pointer hover:opacity-70" /> {/* Using Video for TikTok if needed */}
            <Youtube size={18} className="sm:w-5 sm:h-5 md:w-5 md:h-5 cursor-pointer hover:opacity-70" />
          </div>

          {/* Legal Links */}
          <nav className="flex flex-col gap-3 sm:gap-4 text-[11px] sm:text-xs md:text-[13px] text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">会社概要</a>
            <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-white transition-colors">利用規約</a>
            <a href="#" className="hover:text-white transition-colors">著作権および免責事項</a>
            <a href="#" className="hover:text-white transition-colors">特定商取引法に基づく表示</a>
          </nav>
        </div>

        {/* Right Section: Brand Logo aligned to the right */}
        <div className="w-full md:flex-1 flex md:justify-end mt-4 sm:mt-6 md:mt-0">
          <img
            src="/twentylogo.png"
            alt="Twenty Cents."
            className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto"
          />
        </div>

      </div>
    </footer>
  );
}