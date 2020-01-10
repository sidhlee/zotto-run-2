import { connect } from "react-redux";
import Input from "./Input";

const mapState = ({ success }) => ({ success });
export default connect(mapState)(Input);
