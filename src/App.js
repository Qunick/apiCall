import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home,{fetch} from './routes/Home';
import Post, { postLoader } from './routes/Post';
import About from './routes/About';
import Root from './routes/Root';

import './App.css';
import NewPost, { submitPost } from './routes/NewPost';

function App()
{
    const router = createBrowserRouter([
        {
        path:'/',
        element : <Root/>,
        children:
            [
                {
path :'/',
element :<Home/>,
loader : fetch
            },
            {
                path : '/about',
                element :<About/>,
                
            
            },
            {
                path:"/post/:id",
                element:<Post />,
                loader: postLoader,
            },
            {
                path:'/new',
                element : <NewPost/>,
                action: submitPost,
                
        
            }
        ]
    }])

    
    return (
        <>
   <RouterProvider router = {router}/>
      </>
    )
}
export default App;