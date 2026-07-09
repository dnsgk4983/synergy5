import { useState } from 'react';
import TEAM_DAILY_REPORTS from '../data/teamDailyReports';

const DAILY_REPORT_ROWS = [
  { group: '활동분석', label: '대면상담', today: 3, total: 63 },
  { group: '활동분석', label: '비대면상담', today: 4, total: 223 },
  { group: '활동분석', label: '정보전달 KA', today: 1, total: 12 },
  { group: '활동분석', label: 'TA', today: 25, total: 664 },
  { group: '활동분석', label: '부재', today: 10, total: 379 },
  { group: '활동분석', label: '유효', today: 8, total: 222 },
  { group: '활동분석', label: '거절', today: 2, total: 76 },
  { group: '활동분석', label: '정보파악', today: 1, total: 44 },
  { group: '활동분석', label: '1차제안', today: 1, total: 31 },
  { group: '활동분석', label: '3차제안', today: 0, total: 17 },
  { group: '활동분석', label: '콜로직', today: 0, total: 8 },
  { group: '활동분석', label: '사후관리', today: 1, total: 21 },

  { group: '고객분석', label: 'DB 계약', today: 1, total: 10 },
  { group: '고객분석', label: '병원 계약', today: 0, total: 3 },
  { group: '고객분석', label: 'CI 계약', today: 0, total: 2 },
  { group: '고객분석', label: '소개 계약', today: 1, total: 5 },
  { group: '고객분석', label: '가족 계약', today: 0, total: 4 },
  { group: '고객분석', label: 'SNS 계약', today: 0, total: 1 },

  { group: '계약분석', label: '생명 CASE', today: 1, total: 12 },
  { group: '계약분석', label: '손해 CASE', today: 1, total: 18 },
  { group: '계약분석', label: '일반보험', today: 0, total: 6 },
  { group: '계약분석', label: '자동차', today: 0, total: 4 },
];

const TeamDailyReport = () => {
  const [selectedMemberId, setSelectedMemberId] = useState(1);

  const selectedMember = TEAM_DAILY_REPORTS.find(
    (member) => member.id === selectedMemberId
  );

  return (
    <div className="team__report">
      <div className="team__report__tabs">
        {TEAM_DAILY_REPORTS.map((member) => (
          <button
            key={member.id}
            className={selectedMemberId === member.id ? 'active' : ''}
            type="button"
            onClick={() => setSelectedMemberId(member.id)}
          >
            {member.name}
          </button>
        ))}
      </div>

      <div className="team__report__head">
        <h2>
          {selectedMember.name}
          {selectedMember.position} 일일 업무 리포트
        </h2>

        <p>2026년 07월 TEAM REPORT</p>
      </div>

      <div className="team__report__summary">
        <ul>
          <li>
            <strong>3건</strong>
            <span>대면상담</span>
          </li>

          <li>
            <strong>4건</strong>
            <span>비대면상담</span>
          </li>

          <li>
            <strong>25건</strong>
            <span>TA</span>
          </li>

          <li>
            <strong>1건</strong>
            <span>계약체결</span>
          </li>
        </ul>
      </div>

      <div className="team__report__board">
        <div className="team__report__table">
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>항목</th>
                <th>오늘</th>
                <th>누적</th>
              </tr>
            </thead>

            <tbody>
              {DAILY_REPORT_ROWS.map((row) => (
                <tr key={`${row.group}-${row.label}`}>
                  <td>{row.group}</td>
                  <td>{row.label}</td>
                  <td>{row.today}</td>
                  <td>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamDailyReport;