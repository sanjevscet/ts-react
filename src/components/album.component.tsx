import * as React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export interface AlbumProps { }

export class Album {
    id: number = 0;
    name: string = '';
    username: string = '';
    email: string = '';
}

const AlbumComponent: React.SFC<AlbumProps> = (props) => {

    const [albums, setAlbums] = useState<Album[]>([]);

    // const getAlbums = async (): Promise<void> => {
    //     const abortController = new AbortController();
    //     let albums: Album[] = await (await fetch('https://jsonplaceholder.typicode.com/users', { signal: abortController.signal})).json()

    //     setAlbums(albums);
    //     abortController.abort();
    //     return;
    // };
    const loadData = async () => {
        // const abortController = new AbortController();

        const albums: Album[] = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(results => results.json());
        setAlbums(albums);

        // return () => {
        //     abortController.abort();
        // };
    }
    useEffect(() => {


        // const loadData = async () => {
        //     const albums: Album[] = await fetch('https://jsonplaceholder.typicode.com/users', { signal: abortController.signal })
        //         .then(results => results.json());
        //     setAlbums(albums);

        //     return () => {
        //         abortController.abort();
        //     };
        // }
        loadData();
        // getAlbums();
        //console.log(albums);
    }, [])

    return (
        <section className="row my-2">
            <ul className="col-md-6 offset-3 list-group">
                {albums.map(album => (
                    <li key={album.id} className="list-group-items d-flex justify-content-between">
                        <h3>{album.name}</h3>
                        <Link to={`/${album.id}/details`} className="btn btn-info shadow-sm mt-2">{album.name}</Link>
                    </li>
                ))}
            </ul>
        </section>
    );

};

export default AlbumComponent;