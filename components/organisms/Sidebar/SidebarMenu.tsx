import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

interface SidebarMenuProps {
  title: String;
  icon: string;
  isActiveSidebar?: boolean;
  targetLink?: String;
  onclickSidebar: () => void;
  onlogout?: () => void;
}

export default function SidebarMenu(props: Partial<SidebarMenuProps>) {
  const { title, icon, isActiveSidebar, targetLink, onlogout, onclickSidebar } =
    props;

  const classItem = classNames({
    item: true,
    'mb-30': true,
    active: isActiveSidebar,
  });

  if (onlogout) {
    return (
      <div className={classItem} onClick={onlogout}>
        <div className="icon me-3">
          <Image src={'/icon/' + icon + '.svg'} width={25} height={25} />
        </div>
        <p className="item-title m-0">
          <a className="text-lg text-decoration-none">{title}</a>
        </p>
      </div>
    );
  }

  return (
    <div className={classItem} onClick={onclickSidebar}>
      <div className="icon me-3">
        <Image src={'/icon/' + icon + '.svg'} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`/member/${targetLink}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
