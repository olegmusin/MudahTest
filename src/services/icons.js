import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faPhone,
    faComments,
    faHeart,
    faShareAlt,
    faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

const registerIcons = () =>
    library.add(
        faEnvelope,
        faPhone,
        faComments,
        faHeart,
        faShareAlt,
        faUserCircle,
    );

export default registerIcons;
