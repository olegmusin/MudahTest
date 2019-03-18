import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faPhone,
    faComments,
    faShareAlt,
    faUserCircle,
    faFlag,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import WebFont from 'webfontloader';

/**
 * Registers additional icons and fonts for easy use inside React app.
 */
const registerCustomStyling = () => {
    library.add(
        faEnvelope,
        faPhone,
        faComments,
        faHeart,
        faShareAlt,
        faUserCircle,
        faFlag,
    );

    WebFont.load({
        google: {
            families: ['Roboto:400,600,700', 'Open Sans: Semibold'],
        },
    });
};

export default registerCustomStyling;
