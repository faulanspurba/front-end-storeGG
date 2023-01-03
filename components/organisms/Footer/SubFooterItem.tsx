interface SubFooterItem {
  content: String;
}

export default function SubFooterItem(props: SubFooterItem) {
  const { content } = props;

  return (
    <li className="mb-6">
      <a href="" className="text-lg color-palette-1 text-decoration-none">
        {content}
      </a>
    </li>
  );
}
