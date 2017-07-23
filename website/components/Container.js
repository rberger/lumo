import React, { Component } from 'react';
import classNames from 'classnames';

import {
  container,
  darkBackground,
  highlightBackground,
  lightBackground,
  paddingAll,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
} from './Container.scss';

export default class Container extends Component {
  static defaultProps = {
    background: 'transparent',
    padding: [],
    wrapper: true,
  };

  render() {
    const containerClasses = classNames(container, this.props.className, {
      [darkBackground]: this.props.background === 'dark',
      [highlightBackground]: this.props.background === 'highlight',
      [lightBackground]: this.props.background === 'light',
      [paddingAll]: this.props.padding.indexOf('all') >= 0,
      [paddingBottom]: this.props.padding.indexOf('bottom') >= 0,
      [paddingLeft]: this.props.padding.indexOf('left') >= 0,
      [paddingRight]: this.props.padding.indexOf('right') >= 0,
      [paddingTop]: this.props.padding.indexOf('top') >= 0,
    });
    let wrappedChildren;

    if (this.props.wrapper) {
      wrappedChildren = (
        <div className="wrapper">
          {this.props.children}
        </div>
      );
    } else {
      wrappedChildren = this.props.children;
    }
    return (
      <div className={containerClasses} id={this.props.id}>
        {wrappedChildren}
      </div>
    );
  }
}
