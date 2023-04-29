import React from 'react'

export function ContactsList({contacts, deleteContact}) {
  
    return (
    <ul>
        {contacts.map(contact => {
            return (
                <li key={contact.id}>
                    <span>{contact.name}</span>:
                    <span>{contact.number}</span>
                    <button onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            )
        })}
    </ul>
  )
}
