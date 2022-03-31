import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Collection from './Collection/Collection'

import { fetchCollections, fetchFollowedCollections, fetchUserCollections } from '../../actions/collections'
import { fetchPublishersEs } from '../../actions/publishers_es'
import { fetchPublishersJp } from '../../actions/publishers_jp'
import { fetchBookTypes } from '../../actions/book_types'

const Collections = ({ isUser }) => {
    const dispatch = useDispatch()    
    const user = useSelector((state) => state.user);
    let collections = useSelector((state) => state.collections);

    useEffect(() => {
        if (!isUser) {
            if (!user._id) {
                dispatch(fetchCollections())    
            } else {
                dispatch(fetchUserCollections(user._id))
            }
            
        } else {
            dispatch(fetchFollowedCollections(user._id))
        }
        
        dispatch(fetchPublishersEs())
        dispatch(fetchPublishersJp())
        dispatch(fetchBookTypes())
    }, [dispatch, isUser, user])    

    return (
        !collections.length ? <div className='px-4'><p>Loading...</p></div> : (
            <div className='text-gray-500 rounded'> 
                <div className='w-full flex flex-wrap align-middle'>
                    {collections.map((collection) => (
                        <Collection data={collection} key={ collection._id } /> 
                    ))}
                </div>                
            </div>
        )        
    )
};

export default Collections;
