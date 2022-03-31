import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { addCollection, editCollection, clearCollection } from '../../../../../actions/collections'
import { fetchSeries, clearSeries } from '../../../../../actions/series'

import CollectionSeriesListForm from './CollectionSeriesListForm/CollectionSeriesListForm'

const CollectionForm = () => {    
    const { id, type } = useParams();
    const [formData, setFormData] = useState({ _id: 0, titleEs: '', titleJp: '', author: '', artist: '', publisherEs: 0, publisherJp: 0, bookType: 0, seriesCover: '', description: '' })
    const collection = useSelector((state) => state.collections.find((p) => p._id === parseInt(id)))
    const publisher_es = useSelector((state) => state.publishers_es)
    const publisher_jp = useSelector((state) => state.publishers_jp)
    const book_type = useSelector((state) => state.book_types)    
    const series = useSelector((state) => state.series);
    const dispatch = useDispatch()
    const form = useRef(null)
    const user = useSelector((state) => state.user)
    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (type === "add") {
            dispatch(addCollection(new FormData(form.current)))    
            navigate("/")
        } else {
            dispatch(editCollection(new FormData(form.current)))    
        }        
    }

    useEffect(() => {
        if (type === "edit") {
            dispatch(fetchSeries(id, user._id))
        } else {
            dispatch(clearCollection())
            dispatch(clearSeries())
        }
        
        if(collection && type === "edit") setFormData(collection)        
    }, [dispatch, id, collection, type, user])

    return (        
        <div className='w-full'>            
            <form className="flex flex-wrap w-full px-4" ref={form} onSubmit={handleOnSubmit}>
                <input className="hidden" type="number" name="_id" id="_id" value={formData._id} onChange={(e) => { setFormData({ ...formData, _id: e.target.value }) }} />
                <input className="hidden" type="text" name="actualCover" id="actualCover" value={formData.seriesCover} onChange={(e) => { setFormData({ ...formData, seriesCover: e.target.value})}}/>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleEs">Título (ES)</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="titleEs" id="titleEs" placeholder={ formData.titleEs || 'Título de España'} value={formData.titleEs} onChange={(e) => { setFormData({ ...formData, titleEs: e.target.value})}}/>
                    </div>  
                </div>    
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="titleJp">Título (JP)</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="titleJp" id="titleJp" placeholder={ formData.titleJp || 'Título de Japón'} value={formData.titleJp} onChange={(e) => { setFormData({ ...formData, titleJp: e.target.value})}}/>
                    </div>
                </div> 
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="author">Autor</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="author" id="author" placeholder={ formData.author || 'Autor de la obra'} value={formData.author} onChange={(e) => { setFormData({ ...formData, author: e.target.value})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="artist">Dibujante</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="text" name="artist" id="artist" placeholder={ formData.artist || 'Dibujante de la obra'} value={formData.artist} onChange={(e) => { setFormData({ ...formData, artist: e.target.value})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="seriesCover">Portada</label>
                        <input className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" type="file" name="seriesCover" id="seriesCover" onChange={(e) => { setFormData({ ...formData, seriesCover: e.target.files[0]})}}/>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="publisherEs">Editorial (ES)</label>
                        <select className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" name="publisherEs" id="publisherEs" value={formData.publisherEs} onChange={(e) => { setFormData({ ...formData, publisherEs: e.target.value})}}>
                            {publisher_es.map((publisher) => <option key={publisher._id} value={publisher._id}>{publisher.name}</option>)}
                        </select>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="publisherJp">Editorial (JP)</label>
                        <select className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" name="publisherJp" id="publisherJp" value={formData.publisherJp} onChange={(e) => { setFormData({ ...formData, publisherJp: e.target.value})}}>
                            {publisher_jp.map((publisher) => <option key={ publisher._id } value={publisher._id}>{ publisher.name }</option>)}
                        </select>
                    </div> 
                </div>
                <div className='w-[25%] mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="bookType">Tipo de libro</label>
                        <select className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200" name="bookType" id="bookType" value={formData.bookType} onChange={(e) => { setFormData({ ...formData, bookType: e.target.value})}}>
                            {book_type.map((type) => <option key={ type._id } value={type._id}>{ type.type }</option>)}
                        </select>
                    </div> 
                </div>
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <label className="w-full mb-2" htmlFor="bookType">Sinopsis</label>
                        <textarea className='border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200' name="desc" id="desc" placeholder={ formData.description || 'Sinopsis de la obra'} value={formData.description} onChange={(e) => { setFormData({ ...formData, description: e.target.value})}}/>
                    </div> 
                </div>
                <div className='w-full mb-4'>
                    <div className='mx-4 flex flex-wrap'>
                        <button className="border-b-2 border-blue-500 w-full py-1 px-1 outline-none hover:border-blue-400 bg-gray-100 rounded-t hover:bg-gray-200">{type === "add" ? 'Añadir' : 'Editar'}</button>
                    </div> 
                </div>
            </form>            
            {!series.length ?
                '' :
                <div className='w-full'>
                    {series.map((serie) => (
                        <CollectionSeriesListForm key={serie._id} serie={serie} />
                    ))}
                </div>
            }    
            
            {type === "add" ? '' : <CollectionSeriesListForm col_id={formData._id} />}
        </div>
    )
}

export default CollectionForm