document.addEventListener('DOMContentLoaded', function() {
    const studentIDSpan = document.getElementById('studentID');
    const colorInput = document.getElementById('colorInput');
    const changeCustomColorBtn = document.getElementById('changeCustomColor');
    const changeRandomColorBtn = document.getElementById('changeRandomColor');
    const imageSelect = document.getElementById('imageSelect');
    const displayedImage = document.getElementById('displayedImage');

    // Event listener for "Change custom color" button
    changeCustomColorBtn.addEventListener('click', function() {
        // Display student ID in p tag
        studentIDSpan.textContent = "Your Student ID";

        // Change background color based on input value
        const inputValue = parseInt(colorInput.value);
        changeBackgroundColor(inputValue);
    });

    // Event listener for "Change random color" button
    changeRandomColorBtn.addEventListener('click', function() {
        // Generate random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Change background color based on random number
        changeBackgroundColor(randomNumber);
    });

    // Function to change background color based on input value
    function changeBackgroundColor(inputValue) {
        if (inputValue < 0 || inputValue > 100) {
            document.body.style.backgroundColor = '#ff0000'; // Red color
        } else if (inputValue >= 0 && inputValue < 20) {
            document.body.style.backgroundColor = '#00ff00'; // Green color
        } else if (inputValue >= 20 && inputValue < 40) {
            document.body.style.backgroundColor = '#0000ff'; // Blue color
        } else if (inputValue >= 40 && inputValue < 60) {
            document.body.style.backgroundColor = '#ffa500'; // Orange color
        } else if (inputValue >= 60 && inputValue < 80) {
            document.body.style.backgroundColor = '#800080'; // Purple color
        } else {
            document.body.style.backgroundColor = '#ffff00'; // Yellow color
        }
    }

    // Event listener for select tag
    imageSelect.addEventListener('change', function() {
        // Display selected image
        const selectedImage = imageSelect.value;
        displayedImage.src = 'img/' + selectedImage;
    });

    // Function to generate options for select list
    function addList() {
        const imageArray = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

        imageArray.forEach(function(image) {
            const option = document.createElement('option');
            option.value = image;
            option.textContent = image;
            imageSelect.appendChild(option);
        });
    }

    // Call addList function to generate options for select list
    addList();
});
