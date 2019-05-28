import { withStyles } from '@material-ui/core/styles';
import { Home } from './Home';
import { styles } from './styles';

export default withStyles(styles, {withTheme : true})(Home);