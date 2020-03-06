import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    titleColumn: PropTypes.node,
    children: PropTypes.node,
    text: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: < p > I can do all the things!!! < /p>,
  }
  render() {
    return ( <
      section className = {
        styles.component
      } >
      <
      Hero titleText = {
        this.props.title
      } text={this.props.text}
      /> <
      div className = {
        styles.description
      } > {
        this.props.children
      } </div>

       <div className = {styles.columns}>
       <Column titleColumn = 'Animals'/>
       <Column titleColumn = 'Plants'/>
       <Column titleColumn = 'Minerals'/>
       </div>
      </section>
    )
  }
}

export default List;
