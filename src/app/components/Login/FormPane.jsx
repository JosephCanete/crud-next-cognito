import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Link from "@mui/material/Link";
import { useRouter } from "next/router";

export default function FormPane({
  initialValues,
  validationSchema,
  handleSubmit,
}) {
  const router = useRouter();
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 600 }} gutterBottom>
        Login to Your Account
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.email && touched.email}
              helperText={touched.email && errors.email}
            />
            <Field
              as={TextField}
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              fullWidth
              error={!!errors.password && touched.password}
              helperText={touched.password && errors.password}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                href="/forgot"
                underline="none"
                color="error"
                sx={{ textDecoration: "none", alignSelf: "end", mx: 1 }}
              >
                Forgot Password?
              </Link>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: 1, mb: 0.5 }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  alignSelf: "end",
                  border: "none",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                    border: "none",
                  },
                }}
                onClick={() => router.push("/register")}
              >
                Sign Up Here
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
