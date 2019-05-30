import React , { Component } from 'react';
import Button from '@material-ui/core/Button';
import  Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import classNames from 'classnames';

export class InfoTooltip extends Component {

    constructor(props){
        super(props);

        this.state = {
            open: false
        };
    }
    handleTooltipClose = () => {
        this.setState({open : false});
    };

    handleTooltipOpen= () => {
        this.setState({open : true});
    };

    render() {

        const { info, className, classes} = this.props;

        return(
            <ClickAwayListener onClickAway={this.handleTooltipClose}>
                <div className={classNames(classes.tooltipWrap, className)}>
                    <Tooltip
                        PopperProps={{
                            disablePortal: true,
                        }}
                        onClose={this.handleTooltipClose}
                        open={this.state.open}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title={info}
                    >
                        <Button onClick={this.handleTooltipOpen} className={classes.tooltipAction}>i</Button>
                    </Tooltip>
                </div>
            </ClickAwayListener>
        )
    }

}