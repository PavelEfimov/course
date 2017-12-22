import Contacts from '../Contacts/Contacts';
import Feedback from '../Feedback/Feedback';
import Remembrance from '../Remembrance/Remembrance';
import Schedule from '../Schedule/Schedule';
import Home from '../Home/Home';

const ROUTES = [
    {path: '/Home', component: Home, exact: true},
    {path: '/Feedback', component: Feedback},
    {path: '/Remembrance', component: Remembrance},
    {path: '/Contacts', component: Contacts},
    {path: '/Schedule', component: Schedule}
];

export default ROUTES;