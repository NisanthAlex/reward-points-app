import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <div className="error">
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;