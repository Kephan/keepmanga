import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CalendarDay from './CalendayDay/CalendarDay';

import { fetchAllSeries } from '../../actions/series'
import { fetchCollections } from  '../../actions/collections'


const Calendar = () => {
  const dispatch = useDispatch()
  const series = useSelector((state) => state.series);
  const activeDate = new Date()  

  const [activeYear, setActiveYear] = useState(activeDate.getFullYear())
  const [activeMonth, setActiveMonth] = useState(activeDate.getMonth())
  
  
  const [lastDay, setLastDay] = useState()

  useEffect(() => {
      let lastDayMonth = new Date(activeYear, activeMonth + 1, 0) 
      setLastDay(lastDayMonth.getDate())
    
      dispatch(fetchAllSeries())
      dispatch(fetchCollections())
  }, [dispatch, activeMonth, activeYear])

  const handleSustractBtn = () => {
    if (activeMonth - 1 > -1) {
      setActiveMonth(activeMonth - 1)
    } else {
      setActiveMonth(11)
      setActiveYear(activeYear - 1)      
    }
  }
  
  const handleAddBtn = () => {
    if (activeMonth + 1 < 12) {
      setActiveMonth(activeMonth + 1)
    } else {
      setActiveMonth(0)
      setActiveYear(activeYear + 1)      
    }
  }

  return (
    <div className='w-full flex flex-wrap justify-center'>
        <div className='w-full flex flex-wrap justify-between'>
        <button className='px-4 py-2 bg-blue-500 text-white mb-4 rounded-sm' onClick={handleSustractBtn}>&lt; { activeMonth === 0 ? `12/${activeYear - 1}` : `${activeMonth}/${activeYear}` }</button>
            <button className='px-4 py-2 bg-blue-500 text-white mb-4 rounded-sm'>{ `${activeMonth + 1}/${activeYear}` }</button>
        <button className='px-4 py-2 bg-blue-500 text-white mb-4 rounded-sm' onClick={handleAddBtn}>{ activeMonth + 2 > 12 ? `1/${activeYear + 1}` : `${activeMonth + 2}/${activeYear}` } &gt;</button>
        </div>
        <div className='w-full flex flex-wrap text-center justify-center'>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Lunes</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Martes</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Miércoles</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Jueves</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Viernes</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Sábado</p>
          <p className='w-[14.2%] bg-blue-500 text-white py-2'>Domingo</p>
        </div>
        {[...Array(lastDay)].map((day, i) => (
          <CalendarDay key={i} day={i + 1} month={activeMonth + 1} year={activeYear} series={series}/>  
        ))}
      </div>    
   )
};

export default Calendar;
