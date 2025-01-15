// Function to handle video uploads
function uploadVideos() {
  const videoInput = document.getElementById("video-upload");
  const videoFiles = videoInput.files;
  
  if (videoFiles.length === 0) {
    alert("Please select some videos to upload.");
    return;
  }

  const videosList = document.getElementById("videos-list");

  // Loop through each selected video
  for (let i = 0; i < videoFiles.length; i++) {
    const file = videoFiles[i];
    const videoUrl = URL.createObjectURL(file);

    // Create a video element to display the uploaded video
    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

    const videoElement = document.createElement("video");
    videoElement.controls = true;
    const sourceElement = document.createElement("source");
    sourceElement.src = videoUrl;
    sourceElement.type = "video/mp4";
    videoElement.appendChild(sourceElement);

    // Append the video item to the video list
    videoItem.appendChild(videoElement);
    videosList.appendChild(videoItem);
  }
}
