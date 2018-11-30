import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash/get';
import qs from 'query-string';
import { Box, Button, Input } from '@spraoi/base';
import { FORM_ERROR } from 'final-form';
import { Field, Form } from 'react-final-form';
import { compose, minLength, required } from '@spraoi/validations';
import Layout from '../../components/Layout';
import config from '../../config';

const Login = ({ location, ...rest }) => (
  <Layout
    {...rest}
    isPublic
    location={location}
    redirect={get(qs.parse(location.search), 'redirect', '/')}
  >
    {({ signIn }) => (
      <Form
        onSubmit={async values => {
          try {
            return await signIn(values);
          } catch (e) {
            return { [FORM_ERROR]: e.message };
          }
        }}
        render={formContext => (
          <form onSubmit={formContext.handleSubmit}>
            <Field
              component={Input}
              label="Email"
              name="username"
              validate={required}
            />
            <Field
              component={Input}
              label="Password"
              name="password"
              type="password"
              validate={compose(
                minLength(config.minPasswordLength),
                required
              )}
            />
            {formContext.submitError && (
              <Box color="error">{formContext.submitError}</Box>
            )}
            <Button submitting={formContext.submitting} type="submit">
              Sign In
            </Button>
          </form>
        )}
      />
    )}
  </Layout>
);

Login.propTypes = {
  location: PropTypes.shape({ search: PropTypes.string.isRequired }).isRequired,
};

export default Login;
