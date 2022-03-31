import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { editSeries, addSeries, deleteSeries } from '../../../../../../actions/series';
import dateFormat from 'dateformat';

const CollectionSeriesListForm = ({serie, col_id}) => {
    const volForm = useRef(null)
    const dispatch = useDispatch()
    const [volumeData, setVolumeData] = useState({_id: 0, col_id: 0, collections_id: 0, bwPages: 0, colorPages: 0, price: 0, releaseDate: dateFormat(new Date(), 'yyyy-mm-dd'), volCover: '', volNumber: ''})

    const handleOnSubmit = (e) => {
        e.preventDefault()
 
        if (serie) {
            dispatch(editSeries(new FormData(volForm.current)))
        } else {
            dispatch(addSeries(new FormData(volForm.current)))
            setVolumeData({_id: 0, col_id: 0, collections_id: 0, bwPages: 0, colorPages: 0, price: 0, releaseDate: dateFormat(new Date(), 'yyyy-mm-dd'), volCover: '', volNumber: ''})
        }
    }

    const handleOnDelete = (e) => {    
        e.preventDefault()
        
        if (volumeData._id) { 
            dispatch(deleteSeries(volumeData._id))
        }        
    }

    useEffect(() => {
        if (serie) {
            setVolumeData(serie)
        }
    }, [serie]);
    

    return (
        <div className='border-y-2 border-blue-500 mb-4 rounded-md'>
            <form className="flex flex-wrap w-full p-4" ref={volForm} onSubmit={handleOnSubmit}>            
                <input className="hidden" type="number" name="_id" id="_id" value={volumeData._id || 0} onChange={(e) => { setVolumeData({ ...volumeData, _id: e.target.value }) }} />
                <input className="hidden" type="number" name="col_id" id="col_id" value={col_id || 0} onChange={(e) => { setVolumeData({ ...volumeData, _id: e.target.value }) }} />
                <input className="hidden" type="text" name="actualCover" id="actualCover" value={volumeData.volCover || ''} onChange={(e) => { setVolumeData({ ...volumeData, volCover: e.target.value})}}/>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleEs">Volumen</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="volNumber" id="volNumber" placeholder={ volumeData.volNumber || 'Número del volumen'} value={volumeData.volNumber} onChange={(e) => { setVolumeData({ ...volumeData, volNumber: e.target.value})}}/>
                    </div>  
                </div>    
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleJp">Páginas en blanco y negro</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="number" name="bwPages" id="bwPages" placeholder={ volumeData.bwPages || 'Páginas en blanco y negro'} value={volumeData.bwPages} onChange={(e) => { setVolumeData({ ...volumeData, bwPages: e.target.value})}}/>
                    </div>
                </div> 
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="author">Páginas a color</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="number" name="colorPages" id="colorPages" placeholder={ volumeData.colorPages || 'Páginas a color'} value={volumeData.colorPages} onChange={(e) => { setVolumeData({ ...volumeData, colorPages: e.target.value})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="artist">Precio</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="number" name="price" id="price" placeholder={ volumeData.price || 'Precio'} value={volumeData.price} onChange={(e) => { setVolumeData({ ...volumeData, price: e.target.value})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="seriesCover">Portada</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="file" name="volCover" id="volCover" onChange={(e) => { setVolumeData({ ...volumeData, volCover: e.target.files[0]})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="seriesCover">Fecha de salda</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="date" name="releaseDate" id="releaseDate" value={dateFormat(volumeData.releaseDate, 'yyyy-mm-dd')} onChange={(e) => { setVolumeData({ ...volumeData, releaseDate: e.target.valueAsDate})}}/>
                    </div> 
                </div>
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <button className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200">{serie ? 'Editar' : 'Añadir'}</button>
                    </div> 
                </div>
                {serie ? <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <button className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" onClick={ handleOnDelete }>Borrar</button>
                    </div>
                </div> : ''}
            </form>
        </div>        
    );
};

export default CollectionSeriesListForm;
