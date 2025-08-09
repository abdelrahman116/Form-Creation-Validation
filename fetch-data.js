document.addEventListener("DOMContentLoaded", fetchUserData);
const dataContainer = document.getElementById("api-data");

const fetchUserData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");

    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name;

      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
    console.error(error);
  }
};
fetchUserData();
