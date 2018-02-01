import Contacts from '../Pages/Contacts';
import Feedback from '../Pages/Feedback';
import Remembrance from '../Pages/Remembrance';
import Schedule from '../Pages/Schedule';
import History from  '../Pages/History';
import Shrines from '../Pages/Shrines';
import School from '../Pages/School';
import Elders from '../Pages/Elders';
import Audio from '../Pages/Audio';
import Video from '../Pages/Video';
import Photo from '../Pages/Photo';
import Library from '../Pages/Library';
import Help from '../Pages/Help';
import Home from '../Home/Home';
import Location from '../Pages/Location';
import Dugna from '../Pages/Dugna';
import Cloister from '../Pages/Cloister';
import Center from '../Pages/Center';

import News from '../Home/Content/News';

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
