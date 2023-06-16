import React, { useState } from "react";
import FormDialog from "./FormDialog";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Notification from "./Notification";
import { useTheme, useMediaQuery } from "@mui/material";
import useDelete from "../hooks/useDelete";

export default function UserTable({ users, getUsers }) {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [dialog, setDialog] = useState({
    open: false,
    action: "",
    payload: {
      username: "",
      firstName: "",
      middleName: "",
      lastName: "",
      age: "",
      address: "",
      role: "",
    },
  });

  const [data, error, isLoading, deleteUser] = useDelete();

  const handleDeleteUser = async (userId) => {
    await deleteUser(`user/${userId}`);
    getUsers((value) => !value);
    setTimeout(() => {
      setNotification({
        open: true,
        message: `User ${userId} has been successfully deleted!`,
        type: "error",
      });
    }, 150);
  };

  const handleUpdateUser = (event, userId) => {
    setDialog({
      payload: users.find(({ userId: id }) => id === userId),
      open: true,
      action: event.currentTarget.getAttribute("data-action"),
    });
  };

  const handleAddUser = (event) => {
    setDialog((value) => ({
      ...value,
      open: true,
      action: event.currentTarget.getAttribute("data-action"),
    }));
  };

  const handleOnClose = () =>
    setDialog((value) => ({
      ...value,
      open: false,
    }));

  const onCloseNotification = () =>
    setNotification((value) => ({ ...value, open: false }));

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={onCloseNotification}
      />
      <FormDialog
        open={dialog.open}
        onClose={handleOnClose}
        data={dialog}
        getUsers={getUsers}
        setNotification={setNotification}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          sx={{ m: 2, alignSelf: "end" }}
          data-action="add"
          variant="contained"
          color="primary"
          size="large"
          onClick={(event) => handleAddUser(event)}
        >
          Add User
        </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="User Table">
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user) => (
                <TableRow key={user.userId}>
                  <TableCell>{user.userId}</TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.middleName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",

                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        data-action="update"
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={(event) =>
                          handleUpdateUser(event, user.userId)
                        }
                      >
                        Update
                      </Button>
                      <Button
                        name="delete"
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => handleDeleteUser(user.userId)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
