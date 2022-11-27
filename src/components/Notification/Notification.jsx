import propTypes from 'prop-types';
import notifscss from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={notifscss.message}>{message}</p>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
