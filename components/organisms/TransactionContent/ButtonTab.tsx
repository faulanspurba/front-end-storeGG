import cx from 'classnames';

interface ButtonTabProps {
  title: string;
  active: boolean;
  onclick: () => void;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, onclick } = props;

  const classNames = cx({
    'btn btn-status rounded-pill text-sm  me-3': true,
    'btn-active': active,
  });

  return (
    <button type="button" onClick={onclick} className={classNames}>
      {title}
    </button>
  );
}
