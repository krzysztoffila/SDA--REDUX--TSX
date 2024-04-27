interface LinkProps {
  link: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ link, children }) => {
  return (
    <a
      href={link}
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: 'blue',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
      }}
    >
      {children}
    </a>
  );
};

export default Link;
