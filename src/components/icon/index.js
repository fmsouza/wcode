import React from 'react';
import * as Icons from './components';

/**
 * Icon component
 * @param {object} props - React component properties
 * @return {React.Component}
 */
export default ({ name, ...props }) => {
    switch (name) {
        case 'chevron-down': return <Icons.ChevronDown {...props} />;
        case 'chevron-right': return <Icons.ChevronRightOutline {...props} />;
        case 'file': return <Icons.File {...props} />;
        default: return null;
    }
};
