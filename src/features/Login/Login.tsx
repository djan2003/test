import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {loginTC} from "./auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import { Redirect } from 'react-router-dom';

export const Login = () => {
    const isLoggin = useSelector<AppRootStateType,boolean>(state => state.auth.isLoggedIn)
   const dispatch = useDispatch();
    type FormikErrorType = {
        email?: string
        password?: string
        rememberMe?: boolean
    }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }else if(!values.password){
                errors.password = 'Required';
            }else if (values.password.length<3){
                errors.password = 'minimum 3 symbol';
            }
            return errors;
        },

        onSubmit: values => {
            dispatch(loginTC(values))
          /*  alert(JSON.stringify(values));*/
            formik.resetForm()
        },


    })
   if(isLoggin){
       return <Redirect to={"/"}/>
   }

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}>here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="email"
                            margin="normal"
                            {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email&&formik.touched.email
                            ? <div style={{color: "red"}}>{formik.errors.email}</div>
                            : null
                        }
                        <TextField
                            type="password"
                            label="password"
                            margin="normal"
                            {...formik.getFieldProps("password")}
                        />
                        {formik.errors.password&&formik.touched.password
                            ? <div style={{color: "red"}}>{formik.errors.password}</div>
                            : null
                        }
                        <FormControlLabel
                            label={'rememberMe'}
                            control={<Checkbox/>}
                            {...formik.getFieldProps("rememberMe")}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>

            </form>

        </Grid>
    </Grid>
}
