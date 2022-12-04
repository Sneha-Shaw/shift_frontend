import { Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'

//Function which wrap its child components with normal navbar
export const NavRoute = ({ exact, path, component: Component }) => (
    <Route
        exact={exact}
        path={path}
        render={(props) => (
            <div>
                <Navbar />
                <Component {...props} />
            </div>
        )}
    />
)
