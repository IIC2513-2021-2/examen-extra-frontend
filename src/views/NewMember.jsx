import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import api from '../api';
import Loading from '../components/Loading';

const INITIAL_VALUES = {
  name: '',
  agency: '',
  nationality: '',
  bio: '',
  photo: '',
  role: '',
};

const NULLABLE_FIELDS = [
  'photo',
];

function processSubmitValues(values) {
  return Object.keys(values)
    .reduce((acc, key) => ({
      ...acc,
      [key]: NULLABLE_FIELDS.includes(key) && values[key] === '' ? null : values[key],
    }), {});
}

export default function NewMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      await api.addMemberToExpedition(id, processSubmitValues(values));
      navigate(`/expeditions/${id}`);
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Add member to expedition</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {submitError && (
              <div className="error">{submitError}</div>
            )}

            <div className="field">
              <label htmlFor="name">Name</label>
              <Field name="name" type="text" placeholder="Name" />
            </div>

            <div className="field">
              <label htmlFor="agency">Agency</label>
              <Field name="agency" type="text" placeholder="Agency" />
            </div>

            <div className="field">
              <label htmlFor="nationality">Nationality</label>
              <Field name="nationality" type="text" placeholder="Nationality" />
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <Field name="role" type="text" placeholder="Role" />
            </div>

            <div className="field">
              <label htmlFor="photo">Photo</label>
              <Field name="photo" type="text" placeholder="Photo URL" />
            </div>

            <div className="field">
              <label htmlFor="bio">Bio</label>
              <Field name="bio" as="textarea" placeholder="Bio" />
            </div>

            <div className="field">
              <button
                className="btn"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting && <Loading />}
                {' '}
                Add member
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
