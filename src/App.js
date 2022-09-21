import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Logo, Footer } from "./components/common";
import { Login, SignUp, ToDoList } from "./pages";
import { Provider } from 'react-redux';
import store from './redux/Store';
import rootReducer from './redux/RootReducer';
import { getCookie } from './client/Cookie';

const App = () => {
	return (
		<Provider store={store(rootReducer)}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Logo />
            <Routes>
                {getCookie("token") === null || getCookie("token") === undefined || getCookie("token") === ''
                ? <Route path='/' element={<Login />} />
                : <Route path='/' element={<ToDoList />} />
                }
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Footer />           
        </BrowserRouter>
        </Provider>
	);
}

export default App;
