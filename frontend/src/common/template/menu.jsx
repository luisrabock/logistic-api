import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className="sidebar-menu">
    <MenuItem path="#/boxes" label="Volumes" icon="dropbox" />
  </ul>
);
