const Header = () => {
  return (
    <header className="flex justify-between items-end pt-[72px] px-20 lg:px-5 lg:py-6 lg:items-center">
      <img src="./logo.svg" alt="logo" className="lg:w-20" />
      <nav className="flex gap-10 lg:gap-5 text-white opacity-70 lg:text-xs">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
