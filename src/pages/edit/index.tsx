import { Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, ListItemButton, ListItemIcon, TextField } from "@mui/material";
import { Container } from "@mui/system";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Field, Formik, useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import { useActions } from "../../hooks/useActions";
import Loader from "../../components/loader"
import { Link, Navigate } from "react-router-dom";
import { EditSchema } from "../auth/validation";
const Edit: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const { IdEditUser, user, message } = useTypedSelector((store) => store.UserReducer);
    const { EditUser, DeleteUser } = useActions();
    let initialValues = { name: String(IdEditUser.name), surname: String(IdEditUser.surname), phone: String(IdEditUser.phoneNumber) };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);


        const editUser = {
            Id: String(IdEditUser.id),
            Name: data.get("name"),
            Surname: data.get("surname"),
            PhoneNumber: data.get("phone"),
        };
        EditUser(editUser);
    };

    const DeleteUserHandleSubmit = (event: any) => {
        event.preventDefault();
        if (IdEditUser.id === user.Id) {
            alert("You cannot delete yourself!!!");
        } else {
            DeleteUser(IdEditUser.id);
            setOpen(false);
        }
    }
    if (message == "User has been deleted successfully!") {
        toast(message);
        return <Navigate to="/dashboard/users"></Navigate>
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (event: any) => {
        event.preventDefault();
        setOpen(true);
    };

    return (
        <Container>
            <form onSubmit={handleSubmit} >
                <ToastContainer autoClose={5000} />

                <Box sx={{
                    flexDirection: "column",
                    "& .MuiTextField-root": { width: "30ch" },
                    mb: "10",
                }
                }>
                    <ListItemButton sx={{ display: "flex", justifyContent: "center", }}>
                        <ListItemIcon>
                            <AccountBoxIcon sx={{ fontSize: 200, }} />
                        </ListItemIcon>
                        Update Photo
                    </ListItemButton>
                </Box >
                <Formik
                    initialValues={initialValues}
                    onSubmit={() => { }}
                    validationSchema={EditSchema}
                >
                    {({ errors, touched, isSubmitting, isValid = false }) => (
                        <Box sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                            <Field
                                margin="normal"
                                required
                                fullWidth
                                as={TextField}
                                label="Name"
                                name="name"
                                id="name"
                                style={{ width: "40%", }}
                                inputProps={{ style: { fontWeight: "bolder", color: "black" } }}
                                InputLabelProps={{ style: { fontWeight: "bolder", color: "red" } }} />
                            {errors.name && touched.name ? (
                                <div style={{ color: "red" }}>{errors.name}</div>
                            ) : null}
                            <Field
                                margin="normal"
                                required
                                fullWidth
                                as={TextField}
                                label="Surname"
                                name="surname"
                                id="surname"

                                style={{ width: "40%", }}
                                inputProps={{ style: { fontWeight: "bolder", color: "black" } }}
                                InputLabelProps={{ style: { fontWeight: "bolder", color: "red" } }} />
                            {errors.surname && touched.surname ? (
                                <div style={{ color: "red" }}>{errors.surname}</div>
                            ) : null}
                            <Field
                                margin="normal"
                                required
                                fullWidth
                                as={TextField}
                                label="Phone"
                                name="phone"
                                id="phone"
                                style={{ width: "40%", }}
                                inputProps={{ style: { fontWeight: "bolder", color: "black" } }}
                                InputLabelProps={{ style: { fontWeight: "bolder", color: "red" } }} />
                            {errors.phone && touched.phone ? (
                                <div style={{ color: "red" }}>{errors.phone}</div>
                            ) : null}
                            <Grid style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
                                <Button
                                    onClick={handleOpen}
                                    style={{ width: "40%", }}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color="error"
                                    size="medium"
                                >
                                    Delete

                                </Button>
                                <div>

                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Delete user ?"}
                                        </DialogTitle>
                                        <DialogActions>
                                            <Button onClick={handleClose} >Disagree</Button>
                                            <Button onClick={DeleteUserHandleSubmit} > Agree</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                                <Button
                                    size="medium"
                                    disabled={!isValid}
                                    style={{ width: "40%", }}
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Save

                                </Button>
                            </Grid>
                            <Button component={Link} to="/dashboard/users" style={{ width: "40%", }} variant="contained" color="primary">
                                Back
                            </Button>

                        </Box>

                    )}
                </Formik>

            </form >
        </Container >

    );
};

export default Edit;
