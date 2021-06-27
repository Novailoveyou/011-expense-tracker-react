import { createContext, useReducer } from 'react'
import { ADD_TRANSACTION, DELETE_TRANSACTION } from './types'
import AppReducer from './AppReducer.js'

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions
  const addTransaction = transaction => {
    dispatch({
      type: ADD_TRANSACTION,
      payload: transaction
    })
  }

  const deleteTransaction = id => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}>
      {children}
    </GlobalContext.Provider>
  )
}
