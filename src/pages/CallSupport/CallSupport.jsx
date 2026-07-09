import { useRef, useState } from 'react';
import AppFrame from '../../components/AppFrame';
import Toast from '../../components/Toast';
import TATable from './components/TATable';
import TAAddModal from './components/TAAddModal';
import ScriptModal from './components/ScriptModal';
import useTAList from './hooks/useTAList';
import copyTableImage from './utils/copyTableImage';
import createTAReportText from './utils/createTAReportText';

const CallSupport = ({ currentUser }) => {
  const { customers, addCustomer } = useTAList();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScriptModalOpen, setIsScriptModalOpen] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const captureRef = useRef(null);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, 1200);
  };

  const handleCopyImage = async () => {
    await copyTableImage(captureRef.current);
    showToast('클립보드에 복사되었습니다.');
  };

  const handleCopyReport = async () => {
    const reportText = createTAReportText(customers, currentUser.name);
    await navigator.clipboard.writeText(reportText);
    showToast('클립보드에 복사되었습니다.');
  };

  return (
    <AppFrame currentUser={currentUser}>
      <div className="call-support">
        <Toast
          message={toastMessage}
          isVisible={isToastVisible}
          type="success"
        />

        <div className="btn-action btn-wrap">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setIsScriptModalOpen(true)}
          >
            스크립트보기
          </button>

          <button className="btn btn-gray">
            대면스크립트
          </button>
        </div>

        <div className="call-support__frame">
          <div className="call-support__content">
            <div className="call-support__capture" ref={captureRef}>
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
          isOpen={isScriptModalOpen}
          onClose={() => setIsScriptModalOpen(false)}
        />
      </div>
    </AppFrame>
  );
};

export default CallSupport;