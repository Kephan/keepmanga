import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { fetchSeries, fetchFollowedSeries } from '../../actions/series'
import { fetchCollections, fetchUserCollections } from '../../actions/collections'

import SeriesList from './SeriesList/SeriesList';
import SeriesBudget from './SeriesList/SeriesBudget';

const Series = ({ budget }) => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const collection = useSelector((state) => state.collections.find((p) => p._id === parseInt(id)))
    const user = useSelector((state) => state.user)

    useEffect(() => {
        if (!budget) {
            dispatch(fetchSeries(id, user._id || 0))    
            if (!user._id) {
                dispatch(fetchCollections())    
            } else {
                dispatch(fetchUserCollections(user._id))
            }
        } else {
            dispatch(fetchFollowedSeries(user._id)) 
            if (!user._id) {
                dispatch(fetchCollections())    
            } else {
                dispatch(fetchUserCollections(user._id))
            }
        }
        
    }, [dispatch, id, user, budget]);
    

    return budget ? <div><SeriesBudget budget={ user.budget } /></div> : <div><SeriesList collection={ collection }/></div>;
};

export default Series;
