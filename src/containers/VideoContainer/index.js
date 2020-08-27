import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

import VideoPlayer from '../../components/VideoPlayer';
import Wrapper from '../../components/UI/Wrapper';
import Loading from '../../components/UI/Loading';
import Error from '../../components/UI/Error';

const VideoContainer = () => {

  // State
  const [data, setData] = useState(null);
  const [dataError, setDataError] = useState(null);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND}/teliatestdata.json`);
        if (result) {
          setDataError(null);
          setData(result.data);
        } 
      } catch(error) {
        setDataError(error.response.data);
      }
    }
    fetchData();
  }, []);

  // Handle data
  let content;
  if (data && data.length) {
    content = <VideoPlayer data={data} />;
  } else if (data) {
    content = (
      <Error
        title='No data yet!'
        text='Add some data to the backend before viewing this page'
      />
    );
  } else if (dataError) {
    content = (
      <Error
        title={dataError}
        text='An error occurred while fetching the data'
        highlight
      />
    )
  } else {
    content = <Loading />;
  }

  return (
    <div className='content'>
      <Wrapper>
        {content}
      </Wrapper>
    </div>
  );
}

export default VideoContainer;