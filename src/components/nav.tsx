function Nav() {
  return (
    <header className="flex p-4 mb-10 items-center px-4 lg:px-8">
      <a href="/" className="flex items-center gap-2">
        <span className="text-xl font-semibold">Myfer</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 mx-auto">
        <a
          href="/blog"
          className="text-sm font-medium py-2 px-4 hover:bg-white/10 duration-300 rounded transition-colors"
        >
          BLOG 📝
        </a>
      </nav>
    </header>
  );
}

export default Nav;
