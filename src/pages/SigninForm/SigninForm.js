import { Formik, Form } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth/auth-operation";
import { FormContainer, InputBlock, Register } from "../SignupForm/SignupForm.styles";
import { Input, Button } from "antd";
import { LockOutlined, MailOutlined } from '@ant-design/icons';

const SigninForm = () => {
  const dispatch = useDispatch();

  const registerSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required")
  });
  
  const initialValuesRegister = {
    email: "",
    password: "",
  };

  const handleFormSubmit = (values) => {
    const { email, password} = values;
    dispatch(authOperations.signIn({ email, password}))
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
          <Register>SignIn</Register>

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

            <Button type="primary" block htmlType="submit">signIn</Button>
          </FormContainer>
        </Form>
        
      )}
    </Formik>
  )
}

export default SigninForm