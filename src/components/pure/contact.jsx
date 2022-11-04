import React from 'react'
import PropTypes from 'prop-types'
import { ContactModel } from '../../models/contact.class'

const Contact = ({contact}) => {
    return (
    <div>
        <h4>Nombre: {contact.name} {contact.lastname}</h4>
        <h4>Email: {contact.email}</h4>
        <h4>
            Status: {contact.online ? 'Contacto En Línea' : 'Contacto No Disponible'}
        </h4>
    </div>
    )
}

Contact.propTypes = {
    contact: PropTypes.instanceOf(ContactModel)
}

export default Contact
