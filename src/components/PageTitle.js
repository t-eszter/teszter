import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
  React.useEffect(() => {
    const prevTitle = document.title; // Store the previous document title

    document.title = title; // Set the document title when the component mounts

    return () => {
      document.title = prevTitle; // Reset the document title when the component unmounts
    };
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default PageTitle;
