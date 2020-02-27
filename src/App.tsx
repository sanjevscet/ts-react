import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AlbumComponent  from './components/album.component';
import DetailComponent from './components/detail.component';

interface IAppProps { }

const App: React.SFC<IAppProps> = props => {



    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={AlbumComponent}/>
                    <Route exact path="/:id/details" component={DetailComponent}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

