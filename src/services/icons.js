import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faPhone,
    faComments,
    faHeart,
    faShareAlt,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import WebFont from 'webfontloader';

const registerIconsAndFonts = () => {
    library.add(
        faEnvelope,
        faPhone,
        faComments,
        faHeart,
        faShareAlt,
        faUserCircle,
    );

    WebFont.load({
        google: {
            families: ['Roboto:400,600,700'],
        },
    });
};

export default registerIconsAndFonts;
