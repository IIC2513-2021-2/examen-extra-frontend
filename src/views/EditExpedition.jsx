import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Deserializer } from 'jsonapi-serializer';
import api from '../api';
import Loading from '../components/Loading';

const FORM_FIELDS = [
  'name',
  'startDate',
  'endDate',
  'patch',
  'description',
];

const NULLABLE_FIELDS = [
  'endDate',
  'patch',
];

function buildInitialValues(values) {
  return Object.keys(values)
    .filter((key) => FORM_FIELDS.includes(key))
    .reduce((acc, key) => ({
      ...acc,
      [key]: values[key] === null ? '' : values[key],
    }), {});
}

function processSubmitValues(values) {
  return Object.keys(values)
    .reduce((acc, key) => ({
      ...acc,
      [key]: NULLABLE_FIELDS.includes(key) && values[key] === '' ? null : values[key],
    }), {});
}

export default function EditExpedition() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expedition, setExpedition] = useState(null);
  const [error, setError] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    api.getExpeditionDetail(id)
      .then((data) => (
        new Deserializer({ keyForAttribute: 'camelCase' })
          .deserialize(data, (_error, expeditionData) => setExpedition(expeditionData))
      ))
      .catch(() => setError(true));
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await api.updateExpedition(id, processSubmitValues(values));
      navigate(`/expeditions/${id}`);
    } catch (error) {
      setSubmitError(error.message);
    }
  };

  if (error) {
    return <p>There was an error loading the expedition data</p>;
  }

  return (
    <div className="form-container">
      <h1>Edit Expedition</h1>
      {!expedition ? (
          <div className="loading-container">
            <Loading large />
          </div>
        ) : (
          <Formik
            initialValues={buildInitialValues(expedition)}
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
                  <label htmlFor="startDate">Start Date</label>
                  <Field name="startDate" type="date" placeholder="Start Date" />
                </div>

                <div className="field">
                  <label htmlFor="endDate">End Date</label>
                  <Field name="endDate" type="date" placeholder="End Date" />
                </div>

                <div className="field">
                  <label htmlFor="patch">Patch</label>
                  <Field name="patch" type="text" placeholder="Patch URL" />
                </div>

                <div className="field">
                  <label htmlFor="description">Description</label>
                  <Field name="description" as="textarea" placeholder="Description" />
                </div>

                <div className="field">
                  <button
                    className="btn"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting && <Loading />}
                    {' '}
                    Update
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
    </div>
  );
};
