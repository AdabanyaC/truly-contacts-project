import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import Navbar from "../../components/Navbar";

const RegisterUI = ({ form: { onChange, form, registerFormValid, onSubmit, loading, fieldErrors } }) => {
  return (
    <div>
      <Navbar />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <Header>Signup Here</Header>

          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  placeholder="Username"
                  label="Username"
                  error={
                    fieldErrors.username && {
                      content: fieldErrors.username,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.firstName || ""}
                  onChange={onChange}
                  name="firstName"
                  placeholder="First Name"
                  label="First Name"
                  error={
                    fieldErrors.first_name && {
                      content: fieldErrors.first_name,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.lastName || ""}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  label="Last Name"
                  error={
                    fieldErrors.last_name && {
                      content: fieldErrors.last_name,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  error={
                    fieldErrors.email && {
                      content: fieldErrors.email,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  type="password"
                  name="password"
                  placeholder="Password"
                  label="Password"
                  error={
                    fieldErrors.password && {
                      content: fieldErrors.password,
                      pointing: "below",
                    }
                  }
                />
              </Form.Field>

              <Button
                onClick={onSubmit}
                disabled={registerFormValid || loading}
                fluid
                loading={loading}
                primary
                type="submit"
              >
                Submit
              </Button>
            </Form>

            <Segment>
              Already have an account? <NavLink to="/auth/login">Login</NavLink>.
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default RegisterUI;
