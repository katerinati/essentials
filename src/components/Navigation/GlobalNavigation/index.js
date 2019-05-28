import { withStyles } from '@material-ui/core/styles';
import GlobalNavigation from './GlobalNavigation';
import { styles } from './styles';

export default withStyles(styles, {withTheme : true})(GlobalNavigation);