import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { followCollection, unfollowCollection } from '../../../actions/collections'

const Collection = ({ data }) => {  
    const user = useSelector((state) => state.user)
    const [isFav, setIsFav] = useState(false)
    const dispatch = useDispatch()

    const handleFollowCollection = (e) => {
        e.preventDefault()

        dispatch(followCollection({ col: data._id, user: user._id }))
        setIsFav(!isFav)
    }

    const handleUnfollowCollection = (e) => {
        e.preventDefault()

        dispatch(unfollowCollection({ col: data._id, user: user._id }))
        setIsFav(!isFav)
    }

    useEffect(() => {      
        if (data.user_id) {
            setIsFav(true)
        }
    }, [data])
    

    return (
        <div className='w-[20%] relative'>
            {user ?
            <div className='absolute right-4 top-2 z-20'>                
                {isFav ? <button className='bg-blue-500 text-gray-200 p-2 rounded-md hover:bg-blue-400 block' onClick={handleUnfollowCollection}>DEL</button> : <button className='bg-blue-500 text-gray-200 p-2 rounded-md hover:bg-blue-400 block mb-2' onClick={handleFollowCollection}>FAV</button>}
            </div>
             : ''}
            <Link to={`/col/${data._id}`}>
                <div className='relative mx-2 mb-4 drop-shadow-md shadow-black-900 overflow-hidden group max-h-[350px] rounded-md'>                
                    <img className='w-full my-0 mx-auto' src={`http://localhost:5000/${data.seriesCover}`} alt={data.titleEs} title={data.titleEs} />
                    <div className='bg-blue-400 text-md text-gray-100 p-2 flex-column text-center flex-wrap hidden group-hover:flex group-hover:bottom-0 absolute bottom-[-20em] right-0 left-0'>
                        <p className='font-bold'>Serie: <span className='font-normal'>{data.titleEs}</span></p>                
                        <p className='font-bold'>Autor: <span className='font-normal'>{data.author}</span></p>
                        <p className='font-bold'>Dibujante: <span className='font-normal'>{data.artist}</span></p>                
                    </div>
                </div>      
            </Link>    
        </div>
    )
}

export default Collection
