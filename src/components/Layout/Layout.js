import React from 'react';
import './Layout.css';

const layout = (props) => (
	<div>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className="toolbar">{props.children}</main>
	</div>
);

export default layout;
