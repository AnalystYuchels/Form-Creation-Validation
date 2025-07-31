// Step 1: Define the async function
async function fetchUserData() {
  
  // Step 2: Define API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the container for displaying data
  const dataContainer = document.getElementById('api-data');

  try {
      // Step 4: Fetch data from the API
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Step 5: Clear loading message
      dataContainer.innerHTML = '';

      // Step 6: Create a UL element to hold the list
      const userList = document.createElement('ul');

      // Step 7: Loop through users and create LI for each
      users.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name;
          userList.appendChild(listItem);
      });

      // Step 8: Append the list to the container
      dataContainer.appendChild(userList);

  } catch (error) {
      // Step 9: Handle errors
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
  }
}

// Step 10: Call function after DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
