import React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { style: {}, opened: false };
  }

  componentWillMount() {
    this.setStyle();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setStyle);
    setTimeout(this.openSidebar, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setStyle);
  }

  setStyle = () => {
    if (window.innerWidth < 992 && window.innerWidth > 330) {
      this.setState({
        style: {
          height: 65,
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
        },
      });
    } else if (window.innerWidth <= 330) {
      this.setState({
        style: {
          height: 55,
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

  openSidebar = () => {
    this.setState({ opened: true });
  };

  isActive(path) {
    const { location } = this.props;
    if (location.pathname === path) return 'active-link';
    return '';
  }

  handleClick = async (path) => {
    await this.setState({ opened: false });
    const { history } = this.props;
    setTimeout(() => {
      history.push(path);
    }, 600);
  };

  render() {
    const { style, opened } = this.state;
    const { className, position } = this.props;
    return (
      <div
        id="sidebar"
        className={`pt-3 pl-2 pl-lg-3 pb-3 ${position} ${opened ? '' : className}`}
        style={style}
      >
        <h3
          className={`d-inline d-lg-block delay-0 ${this.isActive('/')}`}
          onClick={() => {
            this.handleClick('/');
          }}
        >
          About
        </h3>

        <h4
          className={`mt-5 d-inline d-lg-block ml-3 ml-lg-0 delay-1 ${this.isActive('/skills')}`}
          onClick={() => {
            this.handleClick('/skills');
          }}
        >
          Skills
        </h4>

        <h4
          className={`d-inline d-lg-block ml-3 ml-lg-0 delay-2 ${this.isActive('/projects')}`}
          onClick={() => {
            this.handleClick('/projects');
          }}
        >
          Recent projects
        </h4>
      </div>
    );
  }
}

export default Sidebar;
