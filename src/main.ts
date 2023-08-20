// Asynchronous function using async/await
async function fetchData(): Promise<any> {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Using the asynchronous function
fetchData()
  .then((data) => {
    console.log('Fetched data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
