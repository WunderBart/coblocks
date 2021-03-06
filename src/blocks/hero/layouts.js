/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import icons from './icons';

export const layoutOptions = [
	{ value: 'top-left', label: __( 'Top Left', 'coblocks' ), icon: icons.colOne },
	{ value: 'top-center', label: __( 'Top Center', 'coblocks' ), icon: icons.colTwo },
	{ value: 'top-right', label: __( 'Top Right', 'coblocks' ), icon: icons.colThree },
	{ value: 'center-left', label: __( 'Center Left', 'coblocks' ), icon: icons.colFour },
	{ value: 'center-center', label: __( 'Center Center', 'coblocks' ), icon: icons.colOne },
	{ value: 'center-right', label: __( 'Center Right', 'coblocks' ), icon: icons.colTwo },
	{ value: 'bottom-left', label: __( 'Bottom Left', 'coblocks' ), icon: icons.colThree },
	{ value: 'bottom-center', label: __( 'Bottom Center', 'coblocks' ), icon: icons.colFour },
	{ value: 'bottom-right', label: __( 'Bottom Right', 'coblocks' ), icon: icons.colOne },
];
