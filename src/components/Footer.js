import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { iconsArray } = require('../data/iconsArray');

const Footer = ({ currentPage }) => {
  const icons = iconsArray.map((icon, i) => {
    return (
      <a href={icon.url} target="_blank" rel="noreferrer" key={`a${i}`}>
        <FontAwesomeIcon className="footer-icon" icon={icon.icon} size="2x" key={`icon${i}`} />
      </a>
    );
  });

  const ternaryOperator = ['about-me', '', 'contact', 'portfolio'].includes(currentPage) && 'sticky-footer';

  return (
    <footer className={`${ternaryOperator}`}>
      <div></div>
      <div>{icons}</div>
      <div>
        <span>Copyright KS&copy; 2022</span>
      </div>
    </footer>
  );
};

export default Footer;