import './ProgressBar.css';

/*
  USAGE / EXAMPLE:

  <ProgressBar percentage={90} />

  Props:
    percentage: number, expected to be the completed percentage of current goal for campaign
*/

interface Props {
  percentage: number;
}

const ProgressBar: React.FC<Props> = ({ percentage }) => {
  const styles = {
    progressBarContainer: {
      backgroundColor: "#E5E5E5",
      borderRadius: "100px",
      width: "90%",
      height: "0.8rem",
      margin: "0 auto",
      marginTop: "3%",
      marginBottom: "3%",
    },
  
    progressBarFilling: {
      backgroundColor: "#F38374",
      borderRadius: "100px 0px 0px 100px",
      width: `${percentage}%`,
      height: "100%",
    },
  }

  return (
    <div style={styles.progressBarContainer}>
      <div style={styles.progressBarFilling} />
    </div>
  );
};

export default ProgressBar;
