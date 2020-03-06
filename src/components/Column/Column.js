import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  static PropTypes = {
    title: PropTypes.node.isRequired,
  }

  render() {
    return (
      <section className = {styles.component}
      <h3 className = {styles.title} > {this.props.title}/>
      </section>
    )
  }
}



export default Column;
