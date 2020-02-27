import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Album } from './album.component';
export interface DetailProps extends RouteComponentProps<{ id: string; }> { }

const DetailComponent: React.SFC<DetailProps> = ({ history, match: { params: { id } } }) => {

    const [album, setAlbum] = useState<Album>(new Album());

    // const getAlbum = async (): Promise<void> => {
    //     const abortController = new AbortController();
    //     const album = await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal: abortController.signal})).json()
    //     setAlbum(album);
    //     abortController.abort();
    //     return;
    // };

    const loadData = async () => {
        // const abortController = new AbortController();

        const albums: Album = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(results => results.json());
        setAlbum(albums);

        // return () => {
        //     abortController.abort();
        // };
    }

    useEffect(() => {

        loadData()

    }, [])


    return (
        <section>
            <article>
                <div className="card m-1 p-1 shadow">
                    <div className="card-body card-center">
                        {album.name}
                    </div>
                </div>
                <button className="btn btn-warning btn-block shadow mx-auto" onClick={() => history.goBack()}>
                    Go Back
                </button>
            </article>
        </section>
    );
};

export default DetailComponent;