// api.js

export const getRestData = async () => {
    try {
      const response = await fetch('/api/rest-route');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  