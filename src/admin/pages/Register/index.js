import { connect } from "react-redux";

import Register from "./Register";
import {
    registerUser,
  } from "../../../store/features/account/action";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
    registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
