const username = 'StanleyPhung'; // Replace with your GitHub username
fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => {
    const repoSection = document.createElement('div');
    repoSection.style.margin = '20px';

    const header = document.createElement('h2');
    header.textContent = 'My Projects';
    repoSection.appendChild(header);

    data.forEach(repo => {
      const repoContainer = document.createElement('div');
      repoContainer.style.marginBottom = '15px';

      const repoName = document.createElement('h3');
      repoName.textContent = repo.name;

      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.textContent = 'View Repository';
      repoLink.target = '_blank';
      repoLink.style.color = '#7ea3c1';
      repoLink.style.textDecoration = 'none';

      const repoDesc = document.createElement('p');
      repoDesc.textContent = repo.description || 'No description provided.';
      repoDesc.style.fontSize = '14px';
      repoDesc.style.color = '#ccc';

      repoContainer.appendChild(repoName);
      repoContainer.appendChild(repoDesc);
      repoContainer.appendChild(repoLink);

      repoSection.appendChild(repoContainer);
    });

    document.body.appendChild(repoSection);
  })
  .catch(error => {
    console.error('Error fetching repositories:', error);
  });
