

const Footer = () => {

  const contactEmail = 'jakelewisorton@gmail.com';

  const menuLinks = [
    { label: 'Facebook group', url: 'https://www.facebook.com/groups/ukcliffjumping' },
  ];

  return (
    <footer className="footer">
      <div className="contain">
        <div className="col">
          <h1>UK cliff jumping map</h1>
        </div>

        <div className="col">
          <h1>Contact us</h1>
          <ul>
            <li>
              <a className="f-a" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </li>
          </ul>
        </div>

        <div className="col">
          <h1>Menu</h1>
          <nav>
            <ul>
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a className="f-a" href={link.url} aria-label={link.label}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="clearfix"></div>
      </div>
    </footer>
  );
};

export default Footer;
