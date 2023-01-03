import SubFooterItem from './SubFooterItem';

interface FooterItemProps {
  title: String;
  subtitle: Array<String>;
}

export default function FooterItem(props: FooterItemProps) {
  const { title, subtitle } = props;

  return (
    <>
      <div className="col-md-4 col-6 mb-lg-0 mb-25">
        <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
        <ul className="list-unstyled">
          <>
            {subtitle.map((e) => {
              return <SubFooterItem content={e} />;
            })}
          </>
        </ul>
      </div>
    </>
  );
}
