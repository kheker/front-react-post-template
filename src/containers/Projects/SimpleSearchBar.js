import React from 'react';
import { withFormik } from 'formik';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchForm = ({
  values,
  isSubmitting,
  handleChange,
  handleSubmit
}) => (
    <Form onSubmit={handleSubmit} loading={isSubmitting}>
      <Form.Input
        size='huge'
        name='query'
        placeholder='Buscar'
        onChange={handleChange}
        value={values.query}
        action={{ content: 'Buscar', color: 'blue' }}
      />
    </Form>
  )

SearchForm.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.any.isRequired
}

export default withFormik({
  mapPropsToValues: (props) => ({ query: props.searchFilter.filterText }),

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
})(SearchForm);
