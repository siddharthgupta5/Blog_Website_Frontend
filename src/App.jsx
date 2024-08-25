
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/PostDetails"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import ProfilePage from "./pages/ProfilePage"
import BlogHistory from "./pages/BlogHistory"
import { UserContextProvider } from "./context/UserContext"


const App = () => {
  return (
    <UserContextProvider>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/create" element={<CreatePost/>}/>
    <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
    <Route exact path="/edit/:id" element={<EditPost/>}/>
    <Route exact path="/profile/:id" element={<ProfilePage/>}/>
    <Route exact path="/history/:id" element={<BlogHistory/>}/>
    </Routes>
    </UserContextProvider>
  )
}

export default App
