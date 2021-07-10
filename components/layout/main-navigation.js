import Link from 'next/link';

import Logo from './logo';

const MainNavigation = () => {
  return (
    <header>
      <Link href="/">
        {/* o elemento link não cria a âncora qndo é passado pra ele qualquer coisa
        que não seja apenas texto - eh o caso do componente de logo */}
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
