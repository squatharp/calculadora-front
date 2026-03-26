import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useState } from 'react'
import { useContext } from 'react'

const addForm = () => {

    //definimos los estados locales para los inputs
    const [descripcion, setDescripcion] = useState("")
    const [importe, setImporte] = useState(0)

    //del contexto global traemos la accion global addMovimiento
    const {addMovimiento} = useContext(GlobalContext)

    //submit para el envio del form
    const onSubmit = (e) => {
        e.preventDefault()

        const nuevoMovimiento = {
            descripcion,
            importe: +importe
        }

        addMovimiento(nuevoMovimiento)
        setDescripcion('')
        setImporte(0)
    }


  return (
    <>
        <h3>Agregar Movimiento</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='descripcion'>Descripción:</label>
                <input
                    type='text'
                    id='descripcion'
                    value={descripcion}
                    placeholder='Teclea la descripción'
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='importe'>Descripción:</label>
                <input
                    type='number'
                    id='importe'
                    value={importe}
                    placeholder='Teclea el importe'
                    onChange={(e) => setImporte(e.target.value)}
                />
            </div>
            <button className='btn'>Agregar Movimiento</button>
        </form>
    </>
  )
}

export default addForm