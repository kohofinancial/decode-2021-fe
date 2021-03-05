import './CampaignEntries.css';

/*
  USAGE / EXAMPLE:

  <CampaignEntries
    transactionLogo="https://static01.nyt.com/images/2021/03/03/us/03xp-amazon-logo/oakImage-1614794068335-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    transactionName="Amazon"
    donationDate="March 1, 2021"
    donationAmount={0.25} 
  />

  Props:
    transactionLogo: string, expected to be the src of the charity logo image
    transactionName: string, expected to be name of the company in which the roundup was donated to this campaign
    donationDate: string, expected to be representing date of donation(s)
    donationAmount: number, expected to be contributions to charity
*/

interface Props {
  transactionLogo: string;
  transactionName: string;
  donationDate: string;
  donationAmount: number;
}

const CampaignEntries: React.FC<Props> = ({ transactionLogo, transactionName, donationDate, donationAmount }) => {
  return (
    <div className="entryContainer">
      <div className="imageContainer">
        <img
          src={transactionLogo}
          className="transactionLogo"
        />
      </div>

      <div className="entryTextContents">
        <p>
          <span className="transactionName"> {transactionName} </span> <br />
          <span className="donationDate"> {donationDate} </span>
        </p>
      </div>

      <p className="transactionName"> ${donationAmount.toFixed(2)} </p>
    </div>
  );
};

export default CampaignEntries;
