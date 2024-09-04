import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 10) {
    errors.message = "Must be 20 characters or more";
  }

  if (!values.number) {
    errors.number = "Required";
  } else if (values.number.length != 10) {
    errors.number = "Invalid Phone Number";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function Popupform() {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: '',
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="contact-area wow fadeInUp">
            <form onSubmit={formik.handleSubmit} className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      placeholder="Name"
                      className="form_control"
                      name="name"
                      required
                      id="name"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div style={{ color: "red" }} className="Danger">
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="form_control"
                      name="number"
                      id="number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.number}
                    />
                    {formik.touched.number && formik.errors.number ? (
                      <div style={{ color: "red" }}>{formik.errors.number}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form_control"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{ color: "red" }}>{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form_group">
                    <input
                      type="url"
                      placeholder="Website"
                      className="form_control"
                      name="website"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group">
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      className="form_control"
                      rows={6}
                      defaultValue={""}
                      id="message"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <div style={{ color: "red" }}>
                        {formik.errors.message}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form_group text-center">
                    <button type="submit" className="main-btn primary-btn">
                      Send Us Message
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popupform;
