import React, {useEffect} from 'react'
import CollectionList from './CollectionList/CollectionList';

import { fetchCollections } from '../../actions/collections'


import { useDispatch } from 'react-redux'


const Admin = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCollections())
    }, [dispatch]);
        

    return (
        <CollectionList />
    )
}

export default Admin