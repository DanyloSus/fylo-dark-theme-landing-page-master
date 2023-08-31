const Header = () => {
  return (
    <header className="flex justify-between items-end pt-[72px] px-20">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-10 text-white opacity-70">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
