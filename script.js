// add or remove open class from these elements
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const csv = e.target.result;
        const rows = csv.split('\n');
        const table = document.getElementById('csvDataTable');

        // Clear previous table content
        table.innerHTML = '';

        rows.forEach(row => {
            const cells = row.split(',');
            const tr = document.createElement('tr');

            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });

            table.appendChild(tr);
        });
    };

    reader.readAsText(file);
}

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const csv = e.target.result;
        const rows = csv.split('\n');
        const paragraphContainer = document.getElementById('paragraphContainer');

        // Clear previous paragraphs
        paragraphContainer.innerHTML = '';

        rows.forEach(row => {
            const p = document.createElement('p');
            p.textContent = row.trim(); // Remove leading/trailing whitespace
            paragraphContainer.appendChild(p);
        });
    };

    reader.readAsText(file);
}

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const csv = e.target.result;
        const rows = csv.split('\n');

        // Clear previous content
        document.getElementById('articleContainer').innerHTML = '';

        rows.pop(); // Remove the last row from the array

        rows.forEach(row => {
            const columns = row.split(',');
            const container = document.createElement('div');
            container.classList.add('details-container-food', 'color-container');

            const articleContainer = document.createElement('div');
            articleContainer.classList.add('article-container');

            const img = document.createElement('img');
            img.src = columns[0]; // Assuming the first column contains image URLs
            img.alt = 'Project Image';
            img.classList.add('project-img');
            articleContainer.appendChild(img);

            const title = document.createElement('h2');
            const titleText = [];
            for (let i = 1; i < columns.length; i++) {
                titleText.push(columns[i]);
            }
            titleText.forEach(item => {
                const paragraph = document.createElement('p');
                paragraph.textContent = item;
                title.appendChild(paragraph);
            });
            // title.textContent = titleText; // Assuming the second column contains project titles
            title.classList.add('experience-sub-title', 'project-title');
            container.appendChild(title);

            const btnContainer = document.createElement('div');
            btnContainer.classList.add('btn-container');

            const githubBtn = document.createElement('button');
            githubBtn.textContent = 'Recipe Link';
            githubBtn.classList.add('btn', 'btn-color-2', 'project-btn');
            githubBtn.onclick = function() {
                window.location.href = columns[0]; // Assuming the third column contains GitHub URLs
            };
            btnContainer.appendChild(githubBtn);

            // const liveDemoBtn = document.createElement('button');
            // liveDemoBtn.textContent = 'Live Demo';
            // liveDemoBtn.classList.add('btn', 'btn-color-2', 'project-btn');
            // liveDemoBtn.onclick = function() {
            //     window.location.href = columns[3]; // Assuming the fourth column contains live demo URLs
            // };
            // btnContainer.appendChild(liveDemoBtn);

            container.appendChild(btnContainer);
            document.getElementById('articleContainer').appendChild(container);
        });
    };

    reader.readAsText(file);
}