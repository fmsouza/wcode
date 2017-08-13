import React from 'react';
import * as Icons from './components';

/**
 * Icon component
 * @param {object} props - React component properties
 * @return {React.Component}
 */
export default ({ name, ...props }) => {
    switch (name) {
        case 'file': return <Icons.File {...props} />;
        default: return null;
    }
};
