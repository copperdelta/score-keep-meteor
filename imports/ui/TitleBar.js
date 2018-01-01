import React from 'react';
import propTypes from 'prop-types';

export default class TitleBar extends React.Component {
  renderSubtitle() {
    if (this.props.subtitle) {
      return <h2 className="title-bar__subtitle">{this.props.subtitle}</h2>;
    }
  }

  render() {
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{this.props.title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}
 TitleBar.propTypes = {
   title: propTypes.string.isRequired,
   subtitle: propTypes.string
 };

// this will give a default value if you do not inlcude in props
TitleBar.defaultProps = {
  // title: 'Default title',
  // subtitle: 'Default subtitle'
};
