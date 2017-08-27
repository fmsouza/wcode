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
        case 'close': return <Icons.Close {...props} />;
        case 'collapse': return <Icons.Collapse {...props} />;
        case 'explorer': return <Icons.Explorer {...props} />;
        case 'file': return <Icons.File {...props} />;
        case 'folder': return <Icons.Folder {...props} />;
        case 'folder-open': return <Icons.FolderOpen {...props} />;
        case 'new-file': return <Icons.NewFile {...props} />;
        case 'new-folder': return <Icons.NewFolder {...props} />;
        case 'refresh': return <Icons.Refresh {...props} />;
        case 'search': return <Icons.Search {...props} />;
        default: return null;
    }
};
