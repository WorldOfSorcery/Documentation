const Dashboard = () => {

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Documentation</h1>
      </div>

      <div className="dashboard-content">
        <div className="content-main">
          <div className="placeholder-card">
            <h3>Changelogs</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Players</h4>
                <p>//</p>
              </div>
              <div className="stat-card">
                <h4>Active Sessions</h4>
                <p>//</p>
              </div>
              <div className="stat-card">
                <h4>Total Interactions</h4>
                <p>//</p>
              </div>
              <div className="stat-card">
                <h4>Total Staff</h4>
                <p>//</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-sidebar">
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <div className="activity-list">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;