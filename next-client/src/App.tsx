import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import io, { Socket } from 'socket.io-client';


// interface ApiResponse {
//   message: String;
// }

interface ServerEvent {
  message: string; // Define the expected structure of data from server
}

const MyComponent = () => {
  // const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [socket, setSocket] = useState<Socket<ServerEvent> | null>(null);
  

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const result = await axios.get<ApiResponse>('http://localhost:3001');
    //     setResponse(result.data);
    //   } catch (err) {
    //     setError(err as Error);
    //   }
    // };

    // fetchData();

    const initSocket = () => {
      try{
        const newSocket = io('http://localhost:3001');
        setSocket(newSocket);
      } catch(err){
        setError(err as Error)
      }
      
    };

    initSocket();

    // Cleanup function to disconnect socket on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  return (
    <div>
      {error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Connected...</p>
      )}
    </div>
  );
};

export default MyComponent;