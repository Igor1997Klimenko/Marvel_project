import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operation";
import { FormContainer, InputBlock, Register } from "./SignupForm.styles";
import { Input, Button } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';


const SignupForm = () => {
  const dispatch = useDispatch();

  const registerSchema = yup.object().shape({
    name: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required")
  });
  
  const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {
    const {name, email, password} = values;
    dispatch(authOperations.signUp({name, email, password}))
  };

  return (
    <Formik
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
      onSubmit={(values, {resetForm}) => {
        handleFormSubmit(values);
        resetForm()
      }}
    >
      {({values, handleBlur, handleChange,}) => (
       <Form>
          <FormContainer>
          <Register>SignUp</Register>
          <InputBlock>
          
            <Input  
              prefix={<UserOutlined />} 
              placeholder="Username" 
              label='Name'
              variant="outlined"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
            />
          </InputBlock>

          <InputBlock>
            <Input
              prefix={<MailOutlined />}
              placeholder="Your Email" 
              label='Email'
              variant="outlined"
              type='email'
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
            />
          </InputBlock>

          <InputBlock>
            <Input.Password
              prefix={<LockOutlined/>}
              placeholder="Password" 
              label='Password'
              variant="outlined"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
            />
          </InputBlock>

            <Button type="primary" block htmlType="submit">signUp</Button>
          </FormContainer>
        </Form>
        
      )}
    </Formik>
  );
};


 export default SignupForm;





