import { Formik, Form, Field, ErrorMessage } from "formik";
import dotenv from "dotenv";
dotenv.config();
const streetViewURL =
  "https://www.google.com/maps/embed/v1/MAP_MODE?key=" +
  process.env.API_KEY +
  "&q=Eiffel+Tower,Paris+France";
const DataForm = () => (
  <>
    <Formik
      initialValues={{ postalCode: "", year: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.postalCode) {
          errors.postalCode = "Required";
        } else if (
          !/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+\.[0-9]{2,}$/i.test(
            values.postalCode
          )
        ) {
          errors.postalCode = "Invalid postal code";
        }

        if (!values.year) {
          errors.year = "Required";
        } else if (!/^[1-2]+\.[0-9]+\.[0-9]+\.[0-9]{2,}$/i.test(values.year)) {
          errors.year = "Invalid year";
        }

        if (!values.month) {
          errors.year = "Required";
        } else if (!/^[0-9]+\.[0-9]{2,}$/i.test(values.month)) {
          errors.month = "Invalid month";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        // post data to server
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, dirty, handleReset }) => (
        <Form>
          <div>
            <label>
              Postal Code:
              <Field type="text" name="postalCode" />
            </label>
            <ErrorMessage name="postalCode" component="span" />
          </div>
          <div>
            <label>
              Year:
              <Field type="text" name="year" />
            </label>
            <ErrorMessage name="year" component="span" />
          </div>
          <div>
            <label>
              Month:
              <Field type="text" name="year" />
            </label>
            <ErrorMessage name="year" component="span" />
          </div>
          {/* <div>
            <label htmlFor="email">Year: </label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </div> */}
          <button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
    <div>
      <iframe
        title="Insert Postal Code for a pleasant Surprise!"
        width="450"
        height="250"
        frameborder="0"
        src={streetViewURL}
      />
    </div>
  </>
);

export default DataForm;
