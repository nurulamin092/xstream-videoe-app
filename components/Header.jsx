import { getDictionary } from "@/app/[lang]/disctionaries";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { SearchSvg } from "./Ui/UiSvg";

const Header = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-8">
          <Logo />
          <nav className=" hidden md:flex space-x-6">
            <a href="#" className="text-color-purple font-semibold">
              {dictionary.topStreaming}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {dictionary.game}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              {dictionary.teams}
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
            />
            <SearchSvg />
          </div>
          <LanguageSwitcher />
          <img
            src="/avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
