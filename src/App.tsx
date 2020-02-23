import React from 'react';
import { useState, useEffect } from 'react';

interface IAppProps { }

// interface IAppState {
//     name: string | null;
// }

interface ResponseType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// export default class App extends React.Component<IAppProps, IAppState> {

const App: React.SFC<IAppProps> = props => {

    const [name, setName] = useState<string>('');
    // constructor(props: IAppProps) {
    //     super(props);
    //     this.state = { name: null };
    // }

    // componentDidMount = async (): Promise<void> => {
    //     const data: ResponseType = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         .then(response => response.json())

    //     this.setState({ name: data.title });

    // }

    const getName = async () => {
        const data: ResponseType = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())

        setName(data.title);
    }

    useEffect(() => {getName()})


    return (
        <div className="App">
            Hello Hooks &nbsp; <b>{name}</b>
        </div>
    );
}

export default App;

