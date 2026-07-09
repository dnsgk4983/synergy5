import { useRef, useState } from 'react';
import AppFrame from '../../components/AppFrame';
import TATable from './components/TATable';
import TAAddModal from './components/TAAddModal';
import ScriptModal from './components/ScriptModal';
import useTAList from './hooks/useTAList';
import copyTableImage from './utils/copyTableImage';
import createTAReportText from './utils/createTAReportText';

const CallSupport = ({ currentUser, onLogout }) => {
  const { customers, addCustomer } = useTAList();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptOpen, setIsScriptOpen] = useState(false);

  const captureRef = useRef(null);

  const today = new Date();

  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const handleCopyImage = async () => {
    await copyTableImage(captureRef.current);
  };

  const handleCopyReport = async () => {
    const reportText = createTAReportText(customers, currentUser.name);
    await navigator.clipboard.writeText(reportText);
  };

  return (
    <AppFrame
      currentUser={currentUser}
      onLogout={onLogout}
    >
      <div className="call-support">
        <div className="btn-action btn-wrap">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setIsScriptOpen(true)}
          >
            스크립트보기
          </button>

          <button
            className="btn btn-gray"
            type="button"
          >
            대면스크립트
          </button>
        </div>

        <div className="call-support__frame">
          <div className="call-support__content">
            <div
              className="call-support__capture"
              ref={captureRef}
            >
              <div className="call-support__title">
                <h1>Daily DB TA</h1>
                <small>{formattedDate}</small>
              </div>

              <TATable customers={customers} />
            </div>

            <div className="btn-wrap">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => setIsModalOpen(true)}
              >
                추가하기
              </button>
            </div>
          </div>
        </div>

        <div className="btn-action btn-wrap">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleCopyImage}
          >
            복사하기
          </button>

          <button
            className="btn btn-gray"
            type="button"
            onClick={handleCopyReport}
          >
            TA보고하기
          </button>
        </div>

        <TAAddModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={addCustomer}
        />

        <ScriptModal
          isOpen={isScriptOpen}
          onClose={() => setIsScriptOpen(false)}
        />
      </div>
    </AppFrame>
  );
};

export default CallSupport;