import { useState } from 'react';
import SCRIPT_LIST from '../data/scriptList';

const ScriptModal = ({ isOpen, onClose }) => {
  const [selectedScripts, setSelectedScripts] = useState([]);
  const [visibleScripts, setVisibleScripts] = useState([]);

  const isScriptVisible = visibleScripts.length > 0;

  if (!isOpen) {
    return null;
  }

  const handleCheckbox = (scriptId) => {
    setSelectedScripts((prev) => {
      if (prev.includes(scriptId)) {
        return prev.filter((id) => id !== scriptId);
      }

      return [...prev, scriptId];
    });
  };

  const handleShowScripts = () => {
    const selectedContents = SCRIPT_LIST.filter((script) =>
      selectedScripts.includes(script.id)
    );

    setVisibleScripts(selectedContents);
  };

  const handleClose = () => {
    setSelectedScripts([]);
    setVisibleScripts([]);
    onClose();
  };

  return (
    <div className="toast-overlay">
      <div className="toast toast__box">
        <div className="script-modal">
          <h2 className="toast__title">스크립트 보기</h2>

          {!isScriptVisible && (
            <div className="toast__checkbox">
              {SCRIPT_LIST.map((script) => {
                const isChecked = selectedScripts.includes(script.id);

                return (
                  <label
                    key={script.id}
                    className={`script-modal__item ${
                      isChecked ? 'script-modal__item--active' : ''
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckbox(script.id)}
                    />
                    {script.title}
                  </label>
                );
              })}
            </div>
          )}

          {isScriptVisible && (
            <div className="toast__script">
              {visibleScripts.map((script) => (
                <p key={script.id}>{script.content}</p>
              ))}

              <p>대면스크립트</p>
            </div>
          )}

          <div className="btn-wrap">
            {!isScriptVisible && (
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleShowScripts}
              >
                선택한 스크립트 보기
              </button>
            )}

            <button className="btn btn-gray" type="button" onClick={handleClose}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptModal;