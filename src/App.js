import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Home from './Components/Home';
import QuizPage from './Components/QuizPage';
import Blog from './Components/Blog';

const router = createBrowserRouter([
{
  path:'/',
  element:<Root></Root>,
  loader:()=> fetch ('https://openapi.programming-hero.com/api/quiz'),
  children:
  [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'home',
      element:<Home></Home>
    },
    {
      path:'quiz',
      element:<Home></Home>
    },
    {
      path:'quiz/:id',
      element:<QuizPage></QuizPage>,
      loader:({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
    },
    {
      path:'blog',
      element:<Blog></Blog>
    }

    

  ]
}



])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
