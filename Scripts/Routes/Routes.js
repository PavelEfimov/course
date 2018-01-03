import Contacts from '../Contacts/Contacts';
import Feedback from '../Feedback/Feedback';
import Remembrance from '../Remembrance/Remembrance';
import Schedule from '../Schedule/Schedule';
import History from  '../Home/Links/History';
import Shrines from '../Home/Links/Shrines';
import School from '../Home/Links/School';
import Elders from '../Home/Links/Elders';
import Audio from '../Home/Links/Audio';
import Video from '../Home/Links/Video';
import Photo from '../Home/Links/Photo';
import Library from '../Home/Links/Library';
import Help from '../Home/Links/Help';
import Home from '../Home/Home';
import Location from '../Home/Links/Location';
import Dugna from '../Home/Links/Dugna';
import Cloister from '../Home/Links/Cloister';
import Center from '../Home/Links/Center';

import News from '../Home/News';

const ROUTES = [
    {path: '/Home', component: Home, exact: true},
    {path: '/Home/News/:newsID', component: News},
    {path: '/Feedback', component: Feedback},
    {path: '/Remembrance', component: Remembrance},
    {path: '/Contacts', component: Contacts},
    {path: '/Schedule', component: Schedule},
    {path: '/Home/History', component: History},
    {path: '/Home/Shrines', component: Shrines},
    {path: '/Home/School', component: School},
    {path: '/Home/Elders', component: Elders},
    {path: '/Home/AudioGallery', component: Audio},
    {path: '/Home/VideoGallery', component: Video},
    {path: '/Home/PhotoGallery', component: Photo},
    {path: '/Home/Library', component: Library},
    {path: '/Home/Help', component: Help},
    {path: '/Home/Location', component: Location},
    {path: '/Home/Dugna', component: Dugna},
    {path: '/Home/Cloister', component: Cloister},
    {path: '/Home/Center', component: Center},
];

 export default ROUTES;
