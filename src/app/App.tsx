import React, {useEffect} from 'react'
import './App.css'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {initializeAppTC, RequestStatusType} from './app-reducer'
import {Login} from "../features/Login/Login";
import {Redirect, Route, Switch} from 'react-router-dom'
import {logoutTC} from "../features/Login/auth-reducer";

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const dispatch = useDispatch();
    const status = useSelector<AppRootStateType, RequestStatusType>(
        (state) => state.app.status
    )
    const isInitialized = useSelector<AppRootStateType,boolean>(state => state.app.isInitialized)
    const isLoggin = useSelector<AppRootStateType,boolean>(state => state.auth.isLoggedIn)
    useEffect(()=>{
        dispatch(initializeAppTC())
    },[])

    if (!isInitialized) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }


    return (
        <div className="App">
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    {isLoggin&&<Button color="inherit" onClick={()=>{dispatch(logoutTC())}}>Log out</Button>}
                   {/* {isLoggin
                        ? <Button color="inherit" onClick={dispatch(logoutTC())}>Log out</Button>
                        : <Button color="inherit">Login</Button>
                    }*/}

                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Switch>
                    <Route exact path={"/"} render={() => <TodolistsList/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect path={'*'} to={"404"}/>
                </Switch>
            </Container>
        </div>
    )
}

export default App
