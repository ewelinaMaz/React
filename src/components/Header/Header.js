import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container.js';
import { settings } from '../../data/dataStore';

class Header extends React.Component {
  static propTypes = {
    to: PropTypes.node,
    icon: PropTypes.any,
  }
  render() {
    const {icon} = settings.header;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={icon}></Icon>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;