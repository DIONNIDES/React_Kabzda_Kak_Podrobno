import React, {useState} from 'react';
import Rating from './Rating';


export default {
    title: 'Rating stories',
    component: Rating,
};

export const EmptyRating = () => <Rating value={0} evaluate={(x) => x}/>
export const Rating1 = () => <Rating value={1} evaluate={(x) => x}/>
export const Rating2 = () => <Rating value={2} evaluate={(x) => x}/>
export const Rating3 = () => <Rating value={3} evaluate={(x) => x}/>
export const Rating4 = () => <Rating value={4} evaluate={(x) => x}/>
export const Rating5 = () => <Rating value={5} evaluate={(x) => x}/>

export const RatingChanging = () => {
    const [ratingValue, setRatingValue] = useState<number>(0);
    return <Rating value={ratingValue} evaluate={setRatingValue}/>
}
