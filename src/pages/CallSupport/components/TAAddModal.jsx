import { useState } from 'react';

const TAAddModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [ageGender, setAgeGender] = useState('');
  const [phone, setPhone] = useState('');
  const [memo, setMemo] = useState('');
  const [result, setResult] = useState('X');
  const [meetingType, setMeetingType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (!name.trim()) {
      setErrorMessage('이름을 입력해주세요.');
      return;
    }

    if (!ageGender.trim()) {
      setErrorMessage('나이/성별을 입력해주세요.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('전화번호를 입력해주세요.');
      return;
    }

    if (result === 'O' && !meetingType) {
      setErrorMessage('대면 / 비대면을 선택해주세요.');
      return;
    }

    let finalMemo = memo.trim();

    if (result === 'O' && meetingType) {
      finalMemo = finalMemo ? `${finalMemo} / ${meetingType}` : meetingType;
    }

    onAdd({
      name,
      ageGender,
      phone,
      memo: finalMemo,
      result,
    });

    setName('');
    setAgeGender('');
    setPhone('');
    setMemo('');
    setResult('X');
    setMeetingType('');
    setErrorMessage('');

    onClose();
  };

  return (
    <div className="toast-overlay">
      <div className="toast toast__box">
        <h2 className="toast__title">콜 고객 추가</h2>

        {errorMessage && (
          <p className="toast__error">✕ {errorMessage}</p>
        )}

        <input
          className="toast__input"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="toast__input"
          placeholder="나이/성별 예: 20남"
          value={ageGender}
          onChange={(e) => setAgeGender(e.target.value)}
        />

        <input
          className="toast__input"
          placeholder="전화번호 8자리"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="toast__input"
          placeholder="메모"
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />

        <select
          className="toast__select"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        >
          <option value="O">O</option>
          <option value="△">△</option>
          <option value="X">X</option>
        </select>

        {result === 'O' && (
          <select
            className="toast__select"
            value={meetingType}
            onChange={(e) => setMeetingType(e.target.value)}
          >
            <option value="">대면 / 비대면 선택</option>
            <option value="대면">대면</option>
            <option value="비대면">비대면</option>
          </select>
        )}

        <div className="toast__actions btn-wrap">
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            추가
          </button>

          <button type="button" className="btn btn-gray" onClick={onClose}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default TAAddModal;