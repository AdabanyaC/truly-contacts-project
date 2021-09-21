import ContactsComponent from "../containers/Contacts";
import CreateContactsComponent from "../containers/CreateContacts";
import LoginComponent from "../containers/Login";
import RegisterComponent from "../containers/Register";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
  },
  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
  },
  {
    path: "/",
    component: ContactsComponent,
    title: "Contacts",
  },
  {
    path: "/contacts/create",
    component: CreateContactsComponent,
    title: "Create Contact",
  },
];

export default routes;
