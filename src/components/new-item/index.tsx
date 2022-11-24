import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import { useAddTodoMutation, useUpdateTodoMutation } from 'store'

const NewItem: FC = () => {
  const [newTodo, setNewTodo] = useState('')
  const [addTodo] = useAddTodoMutation()

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    addTodo({ userId: 1, title: newTodo, completed: false })
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-todo'>Enter a new todo item</label>
      <div className='new-todo'>
        <input
          type='text'
          id='new-todo'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder='Enter new todo'
        />
      </div>
      <button className='submit'>
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  )
}

export default NewItem
