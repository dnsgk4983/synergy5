const Toast = ({ message, isVisible, type = 'info', onClose }) => {
  if (!isVisible) {
    return null;
  }

  const icon = type === 'success' ? '✓' : '✕';

  return (
    <div className="toast-overlay">
      <div className={`toast toast__box toast__${type}`}>
        <div className="toast__box__text">
          <span className="toast__icon">{icon}</span>
          <p className="toast__message">{message}</p>
        </div>

        {onClose && (
          <button
            className="toast__close"
            type="button"
            onClick={onClose}
          >
            닫기
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;