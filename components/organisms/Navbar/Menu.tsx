import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
  title: string;
  isActive?: boolean;
  href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, isActive, href = '/' } = props;
  const activedTitle = cx({
    'nav-link': true,
    active: isActive,
  });

  return (
    <>
      <li className="nav-item my-auto">
        <Link href={href}>
          <a className={activedTitle} aria-current="page">
            {title}
          </a>
        </Link>
      </li>
    </>
  );
}
