import { withStyles } from '@material-ui/core/styles';
import { PageNavigation } from "./PageNavigation";
import { withRouter } from "react-router-dom";
import {styles} from "./styles";

export default withStyles(styles)(withRouter(PageNavigation));