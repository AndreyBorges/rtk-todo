import { FC } from 'react'
import { NewItem } from 'components'
import { useDeleteTodoMutation, useGetTodosQuery, useUpdateTodoMutation } from 'store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface GetTodo {
  id: number
  title: string
  completed: boolean
}

const Home: FC = () => {
  const { data: todos, isLoading, isSuccess } = useGetTodosQuery(null)
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  let content: any
  if (isLoading) {
    content = <div>Loading...</div>
  }
  if (isSuccess) {
    content = todos.map((todo: GetTodo) => (
      <article key={todo.id}>
        <div className='todo'>
          <input
            type='checkbox'
            id={todo.id.toString()}
            checked={todo.completed}
            onChange={() =>
              updateTodo({
                ...todo,
                completed: !todo.completed
              })
            }
          />
          <label htmlFor={todo.id.toString()}>{todo.title}</label>
          <button className='trash' onClick={() => deleteTodo({ id: todo.id })}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </article>
    ))
  }

  return (
    <main>
      <h1>Todo List</h1>
      <NewItem />
      {content}
    </main>
  )
}

export default Home
