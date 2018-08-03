import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: {}, className: 'closed' };
  }

  componentWillMount() {
    this.setStyle();
  }

  componentDidMount() {
    window.addEventListener('resize', this.setStyle);
    setTimeout(this.openSidenbar, 1000);
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
    this.setState({ className: '' });
  };

  render() {
    const { style, className } = this.state;
    return (
      <div id="sidebar" className={`pt-3 pl-2 pl-lg-3 pb-3 ${className}`} style={style}>
        <a href="#" className="active-link">
          <h3 className="h-25 d-inline d-lg-block">
About
          </h3>
        </a>
        <a href="#" className="">
          <h4 className="mt-5 d-inline d-lg-block ml-3 ml-lg-0">
Skills
          </h4>
        </a>
        <a href="#" className="">
          <h4 className="d-inline d-lg-block ml-3 ml-lg-0">
Recent projects
          </h4>
        </a>
      </div>
    );
  }
}

export default Sidebar;
