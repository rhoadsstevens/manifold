import React, { Component, PropTypes } from 'react';
import { AppearanceMenuButton, AppearanceMenuBody, TextTitles, TocDrawer } from './';
import {
  HeaderNotifications,
  SearchMenuButton,
  SearchMenuBody,
  UIPanel,
  UserMenuButton,
  UserMenuBody
} from '../../components/shared';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Header extends Component {

  static propTypes = {
    text: PropTypes.object,
    section: PropTypes.object,
    authenticated: PropTypes.bool,
    visibility: PropTypes.object,
    appearance: PropTypes.object,
    notifications: PropTypes.object,
    visibilityToggle: PropTypes.func,
    visibilityHide: PropTypes.func,
    visibilityShow: PropTypes.func,
    panelToggle: PropTypes.func,
    panelHide: PropTypes.func,
    selectFont: PropTypes.func,
    incrementFontSize: PropTypes.func,
    decrementFontSize: PropTypes.func,
    incrementMargins: PropTypes.func,
    decrementMargins: PropTypes.func,
    setColorScheme: PropTypes.func,
    scrollAware: PropTypes.object,
    startLogout: PropTypes.func,
    addNotification: PropTypes.func,
    removeNotification: PropTypes.func,
    removeAllNotifications: PropTypes.func
  };

  constructor() {
    super();
    this.handleContentsButtonClick = this.handleContentsButtonClick.bind(this);
    this.handleSearchMenuButtonClick = this.handleSearchMenuButtonClick.bind(this);
    this.handleAppearanceMenuButtonClick = this.handleAppearanceMenuButtonClick.bind(this);
    this.triggerShowLoginOverlay = this.triggerShowLoginOverlay.bind(this);
    this.triggerToggleUserMenu = this.triggerToggleUserMenu.bind(this);
    this.triggerHideToc = this.triggerHideToc.bind(this);
    this.renderContentsButton = this.renderContentsButton.bind(this);
  }

  handleContentsButtonClick() {
    this.props.visibilityToggle('tocDrawer');
  }

  handleSearchMenuButtonClick() {
    this.props.panelToggle('search');
  }

  handleAppearanceMenuButtonClick() {
    this.props.panelToggle('appearance');
  }

  triggerShowLoginOverlay() {
    this.props.visibilityShow('loginOverlay');
  }

  triggerToggleUserMenu() {
    this.props.panelToggle('user');
  }

  triggerHideToc() {
    this.props.visibilityHide('tocDrawer');
  }

  renderContentsButton = (contents) => {
    if (contents.length <= 0) {
      return null;
    }

    const buttonIndexClass = classNames({
      'button-index': true,
      active: this.props.visibility.tocDrawer
    });

    return (
      <button className={buttonIndexClass} onClick={this.handleContentsButtonClick}>
        {'Contents'}<i className="manicon manicon-caret-down"></i>
      </button>
    );
  }

  render() {
    const colorScheme = this.props.appearance.colors.colorScheme;

    const bannerGradientClass = classNames({
      'banner-gradient': true,
      'scheme-light': colorScheme === 'light',
      'scheme-dark': colorScheme === 'dark'
    });

    return (
      <header className="header-reader">
        <nav className="container-banner">
          <Link to={`/browse/project/${this.props.text.relationships.project.id}`} >
            <button className="button-close" >
              <i className="manicon manicon-x"></i>
                <span className="screen-reader-text">
                  {'Click to close reader'}
                </span>
            </button>
          </Link>
          { this.renderContentsButton(this.props.text.attributes.toc) }
          { this.props.section ?
            <TextTitles
              textTitle={this.props.text.attributes.title}
              sectionTitle={this.props.section.attributes.name}
              showSection={!this.props.scrollAware.top}
            />
          : null }
          <nav className="menu-buttons">
            <ul>
              <li>
                <SearchMenuButton
                  toggleSearchMenu={this.handleSearchMenuButtonClick}
                  active={this.props.visibility.uiPanels.search}
                />
              </li>
              <li>
                <AppearanceMenuButton
                  toggleAppearanceMenu={this.handleAppearanceMenuButtonClick}
                  active={this.props.visibility.uiPanels.appearance}
                />
              </li>
              <li>
                <UserMenuButton
                  authenticated={this.props.authenticated}
                  active={this.props.visibility.uiPanels.user}
                  showLoginOverlay={this.triggerShowLoginOverlay}
                  toggleUserMenu={this.triggerToggleUserMenu}
                />
              </li>
            </ul>
          </nav>
        </nav>
        <div className={bannerGradientClass}></div>
        <TocDrawer
          text={this.props.text}
          visible={this.props.visibility.tocDrawer}
          hideTocDrawer={this.triggerHideToc}
        />
        <nav className="menu-panels">
          <UIPanel
            id="search"
            visibility={this.props.visibility.uiPanels}
            bodyComponent={SearchMenuBody}
          />
          <UIPanel
            id="appearance"
            visibility={this.props.visibility.uiPanels}
            bodyComponent={AppearanceMenuBody}

            // Props required by body component
            appearance={this.props.appearance}
            selectFont={this.props.selectFont}
            setColorScheme={this.props.setColorScheme}
            incrementFontSize={this.props.incrementFontSize}
            decrementFontSize={this.props.decrementFontSize}
            incrementMargins={this.props.incrementMargins}
            decrementMargins={this.props.decrementMargins}
          />
          <UIPanel
            id="user"
            visibility={this.props.visibility.uiPanels}
            bodyComponent={UserMenuBody}

            // Props required by body component
            startLogout={this.props.startLogout}
          />
        </nav>
        <HeaderNotifications
          notifications={this.props.notifications}
          addNotification={this.props.addNotification}
          removeNotification={this.props.removeNotification}
          removeAllNotifications={this.props.removeAllNotifications}
        />
      </header>
    );
  }
}
