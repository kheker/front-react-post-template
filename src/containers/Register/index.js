import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { Grid, Segment, Header, Message, Form, Divider } from 'semantic-ui-react';

const RegisterForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
    <Grid columns={1} textAlign='center' centered verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column computer={6} tablet={10} mobile={16}>
          <Header content='Unetenos' />
          <Form size='large' onSubmit={handleSubmit}>
            <Segment textAlign='left'>
              <Form.Button icon='facebook' content='Registrate con Google' color='google plus' fluid size='large' />
              <Divider />
              <Form.Button icon='google plus' content='Registrate con Facebook' color='facebook' fluid size='large' />
              <Divider horizontal section content='O' />
              <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                placeholder='Nombre Completo'
                name='fullName'
                autoComplete='off'
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!(errors.fullName && touched.fullName)}
                label='Nombres'
              />
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
              {Object.keys(errors).length ? (
                <Message error visible header="Hay algunos errores" list={Object.values(errors)} />
              ) : null}
              <Form.Button
                color='blue'
                fluid size='large'
                content='Crear cuenta'
                loading={isSubmitting}
                disabled={isSubmitting}
              />
            </Segment>
          </Form>
          <Segment textAlign='center'>
            Ya tienes cuenta ? <a href='/login'>Ingresa!</a>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

export default withFormik({
  mapPropsToValues: () => ({ email: '', fullName: '', password: '' }),

  validationSchema: Yup.object().shape({
    fullName: Yup.string().required('Por favor, ingresa tu nombre'),
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
})(RegisterForm);
