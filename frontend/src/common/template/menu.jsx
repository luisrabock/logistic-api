import React from 'react';

import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default () => (
  <ul className="sidebar-menu">
    <MenuItem path="#/boxes" label="Volumes" icon="dropbox" />

    <MenuTree label="Cadastro" icon="edit">
      <MenuItem path="#/notfis" label="Arquivo NOTFIS" icon="plus-circle" />
    </MenuTree>
  </ul>
);
