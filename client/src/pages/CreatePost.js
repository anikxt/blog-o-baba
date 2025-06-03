import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from '../axios.config';

function CreatePost() {
  let navigate = useNavigate();

  const initialValues = {
    title: '',
    postText: '',
  };

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login');
    }
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('You must input a Title!'),
    postText: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios
      .post('/posts', data, {
        headers: { accessToken: localStorage.getItem('accessToken') },
      })
      .then((response) => {
        navigate('/');
      });
  };

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label htmlFor="">Title: </label>
          <ErrorMessage name="title" component="span"></ErrorMessage>
          <Field
            autocomplete="off"
            id="inputCreatePostUsername"
            name="title"
            placeholder="(Ex. Title...)"
          />

          <label htmlFor="">Post: </label>
          <ErrorMessage name="postText" component="span"></ErrorMessage>
          <Field
            autocomplete="off"
            id="inputCreatePostPassword"
            name="postText"
            placeholder="(Ex. Post...)"
          />

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
