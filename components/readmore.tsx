// components/ReadMore.tsx

import { useState } from 'react';
import styles from '../styles/Movies.module.css'; // Import CSS module

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      <button onClick={toggleReadMore} className={styles.readMoreButton}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </p>
  );
};

export default ReadMore;
