import React from 'react'
import PropTypes from 'prop-types'

import iconChevronDown from './iconChevronDown.png'
import './styles.css'
class NestedDropdown extends React.Component {
  static displayName = 'NestedDropdown';

  static defaultProps = {
    hasCaret: true,
    openDirection: 'left'
  };

  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      selectedIds: []
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.options !== nextProps.options
      || this.state.showDropdown !== nextState.showDropdown
      || this.state.selectedIds !== nextState.selectedIds;
  }

  handleDropdownToggle = () => {
    let nextState = !this.state.showDropdown;
    if(nextState === false)this.handleDropdownClose();
    this.setState({
      showDropdown: nextState,
      selectedIds: []
    });
  };

  handleDropdownClose = () => {
    this.props.onSelect(this.state.selectedIds);
  };

  handleSelectedId = (selected, depthLevel) => {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray
      });
    };
  };
  handleSelectedIdOut = (selected, depthLevel) => {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);
      updatedArray.pop();
      this.setState({
        selectedIds: updatedArray
      });
    };
  };

  renderDisplay(opened) {
    const caret = (
            <img
              className={'nestedDropdown-dropdown_display-caret'+(opened?'Opened':'Closed') }
              src={ iconChevronDown }
              size={ 'small' }
            />
          );

    return (
      <div className='nestedDropdown-dropdown_display'>
        { this.props.displayText }
        { this.props.hasCaret ? caret : null }
      </div>
    );
  }

  renderSubMenu(options, depthLevel = 0) {
    if (this.state.showDropdown !== true) {
      return null;
    }

    const classes = ['nestedDropdown-dropdown_options'];
    classes.push('nestedDropdown-dropdown_options--'+((depthLevel%2)?'odd':'even'));
    classes.push(`nestedDropdown-dropdown_options--${this.props.openDirection}-align`);
    const partClasses = ['nestedDropdown-part'];
    partClasses.push('nestedDropdown-part--'+((depthLevel%2)?'odd':'even'));
    const menuOptions = options.map(option => {
      const display   = (option.link
              ? <a href={ option.link }>{ option.message }</a>
              : <span>{ option.message }</span>
            ),
            hasOptions = (option.options
              && option.options.length > 0
            );

      let subMenu;

      // only render selected submenu and only if nested options exist
      if ((this.state.selectedIds[depthLevel] === option.id)
        && hasOptions
      ) {
        const newDepthLevel = depthLevel + 1;

        subMenu = this.renderSubMenu(option.options, newDepthLevel);
      }

      return (
        <li
          key={ option.id }
          onMouseEnter={ this.handleSelectedId(option.id, depthLevel) }
          onMouseLeave={ this.handleSelectedIdOut(option.id, depthLevel)}
          className ={partClasses.join(' ')}
        >
          { display }
          { subMenu }
        </li>
      );
    });

    return (
        <ul className={classes.join(' ')}>
          { menuOptions }
        </ul>
    );
  }

  render() {
    return (
      <div
        className='nestedDropdown'
        onClick={ this.handleDropdownToggle }
      >
        {this.props.name}: { this.renderDisplay(this.state.showDropdown) }
        { this.renderSubMenu(this.props.options) }
      </div>
    );
  }
}
const NestedDropdownShape = {
  id: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  link: PropTypes.string,
  options:PropTypes.arrayOf(
    PropTypes.shape(NestedDropdown.shape)
  )
};
NestedDropdown.propTypes = {
  openDirection: PropTypes.oneOf(['left', 'right']),
  displayText: PropTypes.node.isRequired,
  hasCaret: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape(NestedDropdownShape).isRequired
  ).isRequired
};
export default NestedDropdown;
