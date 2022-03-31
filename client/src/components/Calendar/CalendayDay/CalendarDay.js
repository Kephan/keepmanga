import React from 'react'
import CalendarDaySerie from './CalendarDaySerie/CalendarDaySerie'
import dateFormat from 'dateformat'

const CalendarDay = ({ day, month, year, series }) => {
    let date = dateFormat(year + '-' + month + '-' + day, "yyyy-mm-dd")
    const volumes = series.filter((serie) => dateFormat(serie.releaseDate, "yyyy-mm-dd") === date)

    return (
        <div className='w-[14.2%] border-blue-500 border-2 h-72 max-h-72 overflow-y-auto'>
            <div className='p-1'>
                <span className='bg-blue-500 px-2 rounded-sm text-white'>{ day }</span>
                {!volumes.length ? '' : volumes.map((volume) =>
                (
                    <CalendarDaySerie key={ volume._id } volume={volume}/>
                ))}
            </div>            
        </div>
    )
}

export default CalendarDay