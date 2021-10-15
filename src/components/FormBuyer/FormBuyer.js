import React from 'react'
import { db } from "../Firebase/Firebase";
import { addDoc, collection, Timestamp } from '@firebase/firestore';
import { useCartContext } from '../CardContext/CardContext'
import { Formik } from 'formik';
import '../FormBuyer/FormCss.css'

export const FormBuyer = () => {
    const { newCompra, cart, totalPrice, setNewCompra } = useCartContext()
     
    return (
        <div className="container mb-5" >
        {(newCompra === undefined ) ? 
        (<div className="mt-5">
        <h2>Para terminar su compra Complete el siguiente formulario</h2>
        <Formik
        initialValues={{
            nombre: '',
            mail: '',
            telefono: '',
        }}
        validate={(values) => {
            let errores = {};

            if(!values.nombre){
                errores.nombre = "Porfavor ingresa un nombre"
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)){
                errores.nombre = "El nombre solo puede contener letras y espacios"
            }
            if(!values.mail){
                errores.mail = "Porfavor ingresa correo valido"
            } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)){
                errores.mail = "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo"
            }
            if(!values.telefono){
                errores.telefono = "Por favor ingresa un numero valido"
            } else if(!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(values.telefono)){
                errores.telefono = "El numero de celular debe comenzar con 11 y tener 10 numeros en total"
            }
            return errores
        }}
        onSubmit={async (values) => {
            const buyer = {
                name: values.nombre,
                phone: values.telefono,
                email: values.mail,
                items: cart,
                date: Timestamp.fromDate(new Date()),
                total: totalPrice,
            };
            const NewBougth = await addDoc(collection(db, "compras"), buyer)
            console.log("Document written with ID: ", NewBougth.id );
            setNewCompra(NewBougth.id)  
            console.log(NewBougth.id)   
        }}>
        {({values, handleSubmit, handleChange, handleBlur, errors, touched}) => (   
        <form onSubmit={handleSubmit} id="form">
            <div className="formulario">
            <div className="grupo">
                <input type="text"
                className="input1"
                id="name"  
                name="nombre"
                placeholder=""
                value={values.nombre} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <label htmlFor="" className="label1">Ingresa tu nombre</label>
                <span className="barra"></span>
                {touched.nombre && errors.nombre && <div className="w-50 alert alert-danger" role="alert">{errors.nombre}</div>}
            </div>
            <div className="grupo">               
                <input type="email" 
                className="input1"
                id="email"
                name="mail"
                placeholder=""
                value={values.mail} 
                onChange={handleChange}
                onBlur={handleBlur}
                />
                <label htmlFor="" className="label1">Ingresa tu email</label>
                <span className="barra"></span>
                {touched.mail && errors.mail && <div className="w-50 alert alert-danger" role="alert">{errors.mail}</div>}
            </div>
            <div className="grupo">               
                <input type="number"
                className="input1" 
                id="password"
                name="telefono"
                placeholder="1160452518"
                value={values.telefono}
                onChange={handleChange} 
                onBlur={handleBlur}/>
                <label htmlFor=""className="label1">Ingresa un numero de celular</label>
                <span className="barra"></span>
                {touched.telefono && errors.telefono && <div className="w-50 alert alert-danger" role="alert">{errors.telefono}</div>}
            </div>
            <button type="submit" id="btnForm">Submit</button>
            </div>
            </form>)}</Formik> </div>)
                
        :(<div className="mt-5 text-center"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg> <h1>Gracias por su compra!</h1>
        <h2 className="idCompra"><b>El ID de su compra es: {newCompra}</b></h2>
        </div>)
        }
        </div>
    )
}
