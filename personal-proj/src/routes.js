import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Cart from './components/Cart'
import Dash from './components/Dash'
import Utah from './components/StateUtah'
import California from './components/StateCalifornia'

export default(
    <Switch>
        <Route exact path = '/' component={Dash} />
        {/* <Route path = '/auth' component={Auth} /> */}
        <Route path = '/cart' component={Cart} />
        <Route path = '/utah' component={Utah} />
        <Route path = '/california' component={California} />
    </Switch>
)