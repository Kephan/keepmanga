import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CalendarDaySerie = ({ volume }) => {
    const collection = useSelector((state) => state.collections.find((col) => col._id === volume.collections_id))

    return (
        !collection ? '' : <div className='mt-2 bg-blue-400 text-white py-2 px-2 rounded-sm hover:bg-blue-500 text-sm w-full'>
            <Link to={`/col/${collection._id}`}>
                <p className='overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal'>{collection.titleEs} n.º {volume.volNumber}</p>
            </Link>
        </div>
    )
}

export default CalendarDaySerie