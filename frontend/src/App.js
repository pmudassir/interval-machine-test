import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTask from './components/TaskCard/AddTask';
import EditTask from './components/TaskCard/EditTask';
import TaskPage from './components/TaskPage/TaskPage';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <TaskPage />
      },
      {
        path: "addTask",
        element: <AddTask />
      },
      {
        path: "editTask/:id",
        element: <EditTask />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;