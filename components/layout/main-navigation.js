import Link from 'next/link';

import classes from './main-navigation.module.css';

import Logo from './logo';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
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
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
