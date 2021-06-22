import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

const Icon = ({ name, size, color, ...otherProps }) => {
  const [iconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const importIconModule = async () => {
      // manually add loader to generate ReactComponent
      // issue: https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
      const reactComponent = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../../assets/icons/${name}.svg`)).default;
      setIconComponent(reactComponent);
    };

    importIconModule();
  }, [name]);

  const renderIcon = () => {
    if (!iconComponent) return null;
    const Component = iconComponent
    return (
      <Component 
        width={size} 
        height={size} 
        fill={color} 
        { ...otherProps }
      />
    )
  };

  return renderIcon();
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string
};

Icon.defaultProps = {
  size: 16,
  color: 'var(--theme-color-dark-600)'
};

export default Icon;