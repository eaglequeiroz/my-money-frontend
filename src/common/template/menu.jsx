import React from 'react'

import MenuItem from './MenuItem'
import MenuTree from './menuTree'

export default props => (
  <ul className="sidebar-menu">
    <MenuItem path='/' label='DashBoard' icon='dashboard' />
    <MenuTree label="Register" icon="edit">
      <MenuItem path="billingCycles" label="Billing Cycles" icon="usd" />
    </MenuTree>
  </ul>
)
