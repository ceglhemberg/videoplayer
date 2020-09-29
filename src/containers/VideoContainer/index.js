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

  // Handle render content
  const handleRender = (data, error) => {
    if (data && data.length) {
      return <VideoPlayer data={data} />;
    } else if (data) {
      return (
        <Error
          title='No data yet!'
          text='Add some data to the backend before viewing this page'
        />
      );
    } else if (error) {
      return (
        <Error
          title={error}
          text='An error occurred while fetching the data'
          highlight
        />
      );
    } else {
      return <Loading />;
    }
  }; 

  return (
    <div className='content'>
      <Wrapper>
        {handleRender(data, dataError)}
      </Wrapper>
    </div>
  );
}

export default VideoContainer;