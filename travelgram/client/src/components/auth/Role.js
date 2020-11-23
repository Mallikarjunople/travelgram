import React from "react";
import { Route } from "react-router-dom";
import { authUser } from "../../App";
import UserProfile from "../user/UserProfile";
import AdminPage from "./admin/AdminPage";

function Role() {
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    blogs: [],
    role: "",
  });
  useEffect(() => {
    authUser
      .get(`/users/${userId}`)
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, []);

  return user.role == "admin" ? (
    <Route to="adminpage" exact component={AdminPage} />
  ) : (
    <Route to="userprofile" exact component={UserProfile} />
  );
}

export default Role;
