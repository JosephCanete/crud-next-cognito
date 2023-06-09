import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
  username: Yup.string().email("Invalid email").required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string().required("Middle Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number"),
  address: Yup.string().required("Address is required"),
  role: Yup.string().required("Role is required"),
});

export default function FormDialog({
  open,
  onClose,
  data,
  getUsers,
  setNotification,
}) {
  const { action, payload } = data;
  const { userId } = payload;

  const handleFormSubmit = ({
    username,
    firstName,
    middleName,
    lastName,
    age,
    role,
    address,
  }) => {
    const requestBody = {
      username,
      firstName,
      middleName,
      lastName,
      age,
      role,
      address,
    };
    const endpoint =
      "https://kqj4xsva5i.execute-api.ap-southeast-1.amazonaws.com/dev/user";

    if (action === "add") {
      axios
        .post(endpoint, requestBody)
        .then(() => {
          getUsers((value) => !value);
          setNotification(() => ({
            open: true,
            message: `User ${userId} has successfully added!`,
            type: "success",
          }));
        })
        .catch((error) => console.log(error));
      return onClose();
    }
    if (action === "update") {
      axios
        .post(`${endpoint}/${userId}`, requestBody)
        .then(() => {
          getUsers((value) => !value);
          setNotification(() => ({
            open: true,
            message: `User ${userId} has successfully updated!`,
            type: "info",
          }));
        })
        .catch((error) => console.log(error));
      return onClose();
    }
  };

  const initialValues = action === "update" ? payload : {};

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{action === "add" ? "ADD USER" : "UPDATE USER"}</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& > *": { m: 1 },
                }}
              >
                <Field
                  name="username"
                  as={TextField}
                  label="Username"
                  error={touched.username && errors.username}
                  helperText={touched.username && errors.username}
                />
                <Field
                  name="firstName"
                  as={TextField}
                  label="First Name"
                  error={touched.firstName && errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                />
                <Field
                  name="middleName"
                  as={TextField}
                  label="Middle Name"
                  error={touched.middleName && errors.middleName}
                  helperText={touched.middleName && errors.middleName}
                />
                <Field
                  name="lastName"
                  as={TextField}
                  label="Last Name"
                  error={touched.lastName && errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                />
                <Field
                  name="age"
                  as={TextField}
                  label="Age"
                  type="number"
                  error={touched.age && errors.age}
                  helperText={touched.age && errors.age}
                />
                <Field
                  name="address"
                  as={TextField}
                  label="Address"
                  error={touched.address && errors.address}
                  helperText={touched.address && errors.address}
                />
                <Field
                  name="role"
                  as={TextField}
                  label="Role"
                  error={touched.role && errors.role}
                  helperText={touched.role && errors.role}
                />
                <DialogActions>
                  <Button onClick={onClose} color="secondary">
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    {action === "add" ? "ADD USER" : "UPDATE USER"}
                  </Button>
                </DialogActions>
              </Box>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
