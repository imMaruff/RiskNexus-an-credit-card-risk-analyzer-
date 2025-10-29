// Credit Score Page Component
import { Chart } from "chart.js";
import { useEffect } from "react";
import { useRef } from "react";
const CreditScore = () => {
  const scoreHistoryChartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (scoreHistoryChartRef.current) {
      const ctx = scoreHistoryChartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Credit Score',
            data: [710, 715, 720, 725, 730, 735, 740, 738, 742, 745, 748, 742],
            backgroundColor: 'rgba(49, 130, 206, 0.7)',
            borderColor: 'rgba(49, 130, 206, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: false,
              min: 700,
              max: 800,
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { color: 'rgba(255, 255, 255, 0.7)' }
            },
            x: {
              grid: { color: 'rgba(255, 255, 255, 0.1)' },
              ticks: { color: 'rgba(255, 255, 255, 0.7)' }
            }
          }
        }
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="page active" id="credit-score">
      <div className="page-header">
        <h1 className="page-title">Credit Score</h1>
        <p className="page-subtitle">Detailed view of your credit score and factors</p>
      </div>
      
      <div className="card">
        <h2 className="card-title"><i className="fas fa-chart-line"></i> Your Credit Score</h2>
        <div className="credit-score-circle">
          <div className="credit-score-inner">
            <div className="credit-score-value">742</div>
            <div className="credit-score-label">Good</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: 'var(--text-secondary)' }}>Your credit score is higher than 62% of Indian consumers</p>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Last updated: May 15, 2023</p>
        </div>
      </div>
      
      <div className="card">
        <h2 className="card-title"><i className="fas fa-chart-bar"></i> Score Factors</h2>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Payment History</span>
            <span style={{ color: 'var(--success-color)' }}>Excellent</span>
          </div>
          <div className="risk-meter">
            <div className="risk-meter-fill" style={{ width: '95%', backgroundColor: 'var(--success-color)' }}></div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Credit Utilization</span>
            <span style={{ color: 'var(--warning-color)' }}>Fair</span>
          </div>
          <div className="risk-meter">
            <div className="risk-meter-fill" style={{ width: '65%', backgroundColor: 'var(--warning-color)' }}></div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Credit Age</span>
            <span style={{ color: 'var(--success-color)' }}>Good</span>
          </div>
          <div className="risk-meter">
            <div className="risk-meter-fill" style={{ width: '80%', backgroundColor: 'var(--success-color)' }}></div>
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Credit Mix</span>
            <span style={{ color: 'var(--warning-color)' }}>Fair</span>
          </div>
          <div className="risk-meter">
            <div className="risk-meter-fill" style={{ width: '60%', backgroundColor: 'var(--warning-color)' }}></div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span>Recent Inquiries</span>
            <span style={{ color: 'var(--success-color)' }}>Good</span>
          </div>
          <div className="risk-meter">
            <div className="risk-meter-fill" style={{ width: '85%', backgroundColor: 'var(--success-color)' }}></div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="card-title"><i className="fas fa-history"></i> Score History</h2>
        <div className="chart-container">
          <canvas ref={scoreHistoryChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;