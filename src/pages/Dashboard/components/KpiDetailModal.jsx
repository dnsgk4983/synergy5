import { useState } from 'react';
import KPI_DETAIL_DATA from '../data/kpiDetailData';

const KpiDetailModal = ({ isOpen, onClose }) => {
  const [activeGroup, setActiveGroup] = useState(KPI_DETAIL_DATA[0].group);

  if (!isOpen) {
    return null;
  }

  const currentGroup = KPI_DETAIL_DATA.find(
    (group) => group.group === activeGroup
  );

  const handleClose = () => {
    setActiveGroup(KPI_DETAIL_DATA[0].group);
    onClose();
  };

  return (
    <div className="toast-overlay">
      <div className="toast toast__box">
        <div className="kpi-modal">
          <h2 className="toast__title">상세 KPI</h2>

          <div className="kpi-modal__tabs">
            {KPI_DETAIL_DATA.map((group) => (
              <button
                key={group.group}
                className={activeGroup === group.group ? 'active' : ''}
                type="button"
                onClick={() => setActiveGroup(group.group)}
              >
                {group.group}
              </button>
            ))}
          </div>

          <div className="kpi-modal__list">
            {currentGroup.items.map((item) => (
              <div key={item.label} className="kpi-modal__item">
                <strong>
                  {item.value}
                  {item.unit}
                </strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="btn-wrap">
            <button
              className="btn btn-gray"
              type="button"
              onClick={handleClose}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KpiDetailModal;