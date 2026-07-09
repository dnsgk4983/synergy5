const DashboardChart = ({ stats }) => {
  const maxCalls = Math.max(...stats.map((member) => member.calls));

  return (
    <div className="dashboard__chart">
      {stats.map((member) => {
        const widthPercent = (member.calls / maxCalls) * 100;
        const opacity = Math.max(member.calls / maxCalls, 0.15);

        return (
          <div key={member.name} className="dashboard__chart__row">
            <span className="dashboard__chart__label">
              {member.name}
            </span>

            <div className="dashboard__chart__bar">
              <div
                className="dashboard__chart__fill"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: `rgba(0, 100, 255, ${opacity})`,
                }}
              >
                <span className="dashboard__chart__value">
                  {member.calls}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardChart;