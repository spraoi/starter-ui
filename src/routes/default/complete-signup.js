import React from 'react';
import { FORM_ERROR } from 'final-form';
import { Field, Form as FinalForm } from 'react-final-form';
import { Input, Redirect } from '@spraoi/base';
import { Mutation } from 'react-apollo';
import { composeValidations, minLength, required } from '@spraoi/validations';
import AuthContainer from '../../containers/AuthContainer';
import Form from '../../components/Form';
import FormError from '../../components/FormError';
import FormHeading from '../../components/FormHeading';
import SubmitButton from '../../components/SubmitButton';
import config from '../../config';
import { UPDATE_SELF_MUTATION } from '../../graphql/mutations';

const CompleteSignupPage = () => (
  <AuthContainer>
    {({ completeNewPasswordChallenge, newPasswordRequired }) => (
      <Mutation mutation={UPDATE_SELF_MUTATION}>
        {updateSelf => (
          <FinalForm
            onSubmit={async values => {
              try {
                const user = await completeNewPasswordChallenge(values);
                await updateSelf({ variables: user.attributes });
              } catch (e) {
                return { [FORM_ERROR]: e.message };
              }
            }}
            render={formContext => (
              <Form onSubmit={formContext.handleSubmit}>
                <Redirect to="/login" when={!newPasswordRequired} />
                <FormHeading>Complete Signup</FormHeading>
                <Field
                  component={Input}
                  label="First Name"
                  name="given_name"
                  validate={required}
                />
                <Field
                  component={Input}
                  label="Last Name"
                  name="family_name"
                  validate={required}
                />
                <Field
                  component={Input}
                  label="New Password"
                  name="password"
                  type="password"
                  validate={composeValidations(
                    minLength(config.minPasswordLength),
                    required
                  )}
                />
                <FormError>{formContext.submitError}</FormError>
                <SubmitButton submitting={formContext.submitting}>
                  Complete Signup
                </SubmitButton>
              </Form>
            )}
          />
        )}
      </Mutation>
    )}
  </AuthContainer>
);

export default CompleteSignupPage;
