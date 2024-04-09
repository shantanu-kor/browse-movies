import React from 'react';
import { Card } from 'flowbite-react';
import UpVotes from './movieCardComp/UpVotes';
import Image from './movieCardComp/Image';
import Data from './movieCardComp/Data';
import Button from './movieCardComp/Button';

const MovieCard = (props) => {
    return (
        <Card className="max-w-lg md:mx-auto mx-5 mt-6">
            <div className="flex flex-col gap-1">
                <div className="flex gap-1 md:flex-nowrap flex-wrap">
                    <UpVotes votes={props.votes} />
                    <Image image={props.image} />
                    <Data
                        name={props.name}
                        genre={props.genre}
                        director={props.director}
                        starring={props.starring}
                        runtime={props.runtime}
                        language={props.language}
                        date={props.date}
                        views={props.views}
                        votes={props.totalVotes}
                    />
                </div>
                <Button />
            </div>
        </Card>
    )
}

export default MovieCard;