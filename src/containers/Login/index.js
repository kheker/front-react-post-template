import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { Grid, Header, Message, Form, Segment, Divider } from 'semantic-ui-react';
// import { LoginAction } from '../../actions';
const LoginInner = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid
  } = props;
  return (
    <Grid columns={1} textAlign='center' centered verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column computer={6} tablet={10} mobile={16} >
          <Header content='PIXELANCE' />
          <Form size='big' onSubmit={handleSubmit}>
            <Segment textAlign='left'>
              <Form.Button icon='facebook' content='Inicia sesión con Google' color='google plus' fluid size='large' />
              <Divider />
              <Form.Button icon='google plus' content='Inicia sesión con Facebook' color='facebook' fluid size='large' />
              <Divider horizontal section content='O' />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Email'
                name='email'
                autoComplete='off'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(errors.email && touched.email)}
                label='Email'
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Contraseña'
                type='password'
                name='password'
                autoComplete='off'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(errors.password && touched.password)}
                label='Contraseña'
              />
              <Form.Checkbox label='Recordarme' />
              {Object.keys(errors).length ? (
                <Message error visible header="Hay algunos errores" list={Object.values(errors)} />
              ) : null}
              <Form.Button
                color='blue'
                fluid size='large'
                content='Iniciar sesión'
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </Segment>
          </Form>
          <Segment>
            ¿ Aun no tienes cuenta ? <a href='/register'>Unete a nuestra comunidad</a>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Por favor, ingresa tu email'),
    password: Yup.string().required('Por favor, ingresa tu contraseña'),
  }),

  handleSubmit: (
    values,
    {
      setSubmitting,
      resetForm
    }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      resetForm()
    }, 1000);
  }

})(LoginInner);

