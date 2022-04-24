{
    ('use strict');
  
    document
      .querySelector('.show-github-info')
      .addEventListener('click', fetchGet);
  
    async function fetchGet() {
      try {
        const response = await fetch('my-data.json');
        const userName = await response.json();
  
        const githubResponse = await fetch(
          `https://api.github.com/users/${userName.name}`
        );
        const githubUser = await githubResponse.json();
  
        createCover(githubUser);
  
        setTimeout(() => {
          document.body.removeChild(document.querySelector('.cover-div'));
        }, 3000);
      } catch (error) {
        console.error('ERROR', error);
      }
    }
  
    function createCover(user) {
      const coverDiv = document.createElement('div');
      coverDiv.className = 'cover-div';
  
      const img = document.createElement('img');
      img.src = user.avatar_url;
      img.alt = 'GitHub avatar';
      img.className = 'github-avatar';
      coverDiv.appendChild(img);
  
      const parag = document.createElement('p');
  
      parag.innerHTML =
        `<b>Name:</b> ${user.name}<br>` +
        `<b>Created:</b> ${new Date(user.created_at).toLocaleDateString()}<br>` +
        `<b>Location:</b> ${user.location}<br>` +
        `<b>Public repositories:</b> ${user.public_repos}<br>` +
        `<b>Link:</b> <a href='${user.html_url}'>GitHub</a>`;
      coverDiv.appendChild(parag);
  
      document.body.appendChild(coverDiv);
    }
  
    const clock = document.createElement('div');
    clock.className = 'clock';
    document.querySelector('header').appendChild(clock);
    setInterval(() => (clock.innerText = new Date().toLocaleTimeString()), 1000);
  
    /*
     * Carousel code(for my projects)
     *
     
    let imgs = document.querySelectorAll('img');
    const count = 3;
    const imgWidth = 130;
    let position = 0;
    const onClick = event => {
      let target = event.target;
      let ul = document.querySelector('ul');
      if (target.classList.contains('next')) {
        position += -count * imgWidth;
        position = Math.max(position, -imgWidth * (imgs.length - count));
        ul.style.transform = `translateX(${position}px)`;
      }
      if (target.classList.contains('prev')) {
        position += count * imgWidth;
        position = Math.min(position, 0);
        ul.style.transform = `translateX(${position}px)`;
      }
    };
    document.getElementById('carousel').addEventListener('click', onClick);
    */
  }