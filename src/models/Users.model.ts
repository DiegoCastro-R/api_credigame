import moment from "moment";
import mongodb from "../configs/db";
import "moment/locale/pt";

const UsersSchema = new mongodb.Schema({
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createAt: {
    type: String,
    default: moment(new Date()).format("L"),
  },
});

const Users = mongodb.model("users", UsersSchema);

module.exports = Users;
