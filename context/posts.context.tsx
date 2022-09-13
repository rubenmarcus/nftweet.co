
import { useState, createContext } from 'react'
const ContextDataMock:any = [];



const PostsContext = createContext({
    data: ContextDataMock,
    searchQuery: '',
    setData: (data:any) => {},
    setQuery: (query:string) => {}
  });

  const PostsContextProvider = (props:any) => {

    const setData = (data:any) => {
      setState({...state, data: data})
    }

    const setQuery = (query:string) => {
      setState({...state, searchQuery: query})
    }
  
    const initState = {
      data: ContextDataMock,
      searchQuery: '',
      setData: setData,
      setQuery: setQuery,
    } 
  
    const [state, setState] = useState(initState)
  
    return (
      <PostsContext.Provider value={state}>
        {props.children}
      </PostsContext.Provider>
    )
  }

  
  

  export { PostsContext , PostsContextProvider}