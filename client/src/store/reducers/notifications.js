const initialState = {
  notifications: []
};

const addNotification = (state, action) => {
  const notification = Object.assign({}, action.payload);
  const notifications = state.notifications.slice(0);
  const index = notifications.findIndex(n => n.id === notification.id);
  if (index >= 0) {
    notifications[index] = notification;
    return Object.assign({}, state, { notifications });
  }
  notifications.unshift(notification);
  return Object.assign({}, state, { notifications });
};

const removeNotification = (state, action) => {
  let found = false;
  const arrayClone = state.notifications.slice(0);
  arrayClone.forEach((notification, index) => {
    if (notification.id === action.payload) {
      found = true;
      arrayClone.splice(index, 1);
    }
  });
  const output = found ? arrayClone : state.notifications;
  return Object.assign({}, state, { notifications: output });
};

const removeNotificationsByScope = (state, action) => {
  let found = false;
  const arrayClone = state.notifications.slice(0);
  arrayClone.forEach((notification, index) => {
    if (notification.scope === action.payload) {
      found = true;
      arrayClone.splice(index, 1);
    }
  });
  const output = found ? arrayClone : state.notifications;
  return Object.assign({}, state, { notifications: output });
};

const clearDrawerNotifications = (state, action) => {
  if (action.payload && action.payload.keepNotifications) return state;
  return removeNotificationsByScope(state, { payload: "drawer" });
};

const removeAllNotifications = state => {
  return Object.assign({}, state, { notifications: [] });
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return addNotification(state, action);
    case "REMOVE_NOTIFICATION":
      return removeNotification(state, action);
    case "REMOVE_NOTIFICATIONS":
      return removeNotificationsByScope(state, action);
    case "REMOVE_ALL_NOTIFICATIONS":
      return removeAllNotifications(state, action);
    case "ROUTE_UPDATE":
      return clearDrawerNotifications(state, action);
    default:
      return state;
  }
};

export default notificationReducer;
