import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: {}, opened: false };
  }

  componentWillMount() {
    this.setStyle();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setStyle);
    setTimeout(this.openSidenbar, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setStyle);
  }

  setStyle = () => {
    if (window.innerWidth < 992) {
      this.setState({
        style: {
          height: 65,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
        },
      });
    } else {
      this.setState({
        style: {
          height: '100%',
        },
      });
    }
  };

  openSidenbar = () => {
    this.setState({ opened: true });
  };

  isActive(path) {
    const { location } = this.props;
    if (location.pathname === path) return 'active-link';
    return '';
  }

  render() {
    const { style, opened } = this.state;
    const { className, position } = this.props;
    return (
      <div
        id="sidebar"
        className={`pt-3 pl-2 pl-lg-3 pb-3 ${position} ${opened ? '' : className}`}
        style={style}
      >
        <Link to="/" className={this.isActive('/')}>
          <h3 className="h-25 d-inline d-lg-block">
About
          </h3>
        </Link>
        <Link to="/skills" className={this.isActive('/skills')}>
          <h4 className="mt-5 d-inline d-lg-block ml-3 ml-lg-0">
Skills
          </h4>
        </Link>
        <Link to="/projects" className={this.isActive('/projects')}>
          <h4 className="d-inline d-lg-block ml-3 ml-lg-0">
Recent projects
          </h4>
        </Link>
      </div>
    );
  }
}

export default Sidebar;
