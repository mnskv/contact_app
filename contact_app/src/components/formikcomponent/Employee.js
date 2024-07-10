import React from 'react'


const FormWithYup =()=>{
    const [empData, setValues] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        password: ''
    })
    const empValidationSchema= Yup.object.shape({
        firstName: Yup.String.required('First Name is Rquired'),
        lastName: Yup.String.required('Last Name is Rquired'),
        email: Yup.String.email('Email is not valid').required('Email is Rquired'),
        phone: Yup.String.required('Phone is Rquired').matches(/^[0-9]+$/, 'Mustbe only digits'),
        password: Yup.String().required('Password is Required')
            .min(8,'password must be atleast 8 characers')
            .max(15,'password mut not exceed 15 characters')
            .matches(/^(?=.*[a-z])/,'password must contain atleast one lower case letter' )
            
    })
}
export default function Employee() {
  return (
    <div class="container">
        <div class="col-lg-12">
            <Formik
            initialValues={
                {
                    fname: '',
                    lname: '',
                    email: '',
                    phone:''
                }
            }
            validationSchema ={InputValidationSchema}
            onSubmit={values=>{
                console.log(values)
            }
            }
            ></Formik>
        </div>
        
    </div>
  )
}
