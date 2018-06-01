export const alertMessage = (message) => ({
  type: 'ALERT_MESSAGE',
  message
});

export const alertLoading = () => ({
  type: 'ALERT_LOADING'
});

export default { alertMessage, alertLoading };
