import React, { Children, Component, PropTypes } from 'react';

import debounce from 'lodash.debounce';
import IconButton from 'material-ui/IconButton';

import './action-icon.css';

function handleClick(onClick) {
  return debounce(() => {
    return onClick();
  }, 150);
}

function ActionIcon(props) {
  const { color, onClick, ...otherProps } = props;
  return (
    <div className="action-icon">
      <IconButton {...otherProps} >
        {
          Children.map(props.children, (child) => {
            return React.cloneElement(child, {
              color,
              onTouchTap: handleClick(onClick)
            });
          })
        }
      </IconButton>
    </div>
  );
}

ActionIcon.defaultProps = {
  color: 'white',
  onClick: () => {}
};

ActionIcon.propTypes = {
  color: PropTypes.string,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

export default ActionIcon;
