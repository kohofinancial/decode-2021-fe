import {  IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

//css
import './RecommendedSearchbar.css';

interface ContainerProps {
    text: string;
    setText: any;
    handleKeyDown: any;
  }

const RecommendedSearchbar: React.FC<ContainerProps> = ({ text, setText, handleKeyDown }) => {
    return (
        <div className = "searchBar">
            <IonIcon icon={searchOutline} />
            <input className = "searchBarInput" value={text} placeholder="Search" onChange={e => setText(e.target.value)} onKeyDown = {(e) => handleKeyDown(e)}/>
        </div>
    );
};

export default RecommendedSearchbar;
