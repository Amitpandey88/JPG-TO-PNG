const inputFile = document.getElementById('inputFile');
const convertBtn = document.getElementById('convertBtn');
const outputImg = document.getElementById('outputImg');
const downloadBtn = document.getElementById('downloadBtn');

convertBtn.addEventListener('click', () => {
  if (inputFile.files.length === 0) {
    alert('Please select a JPG file to convert');
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(inputFile.files[0]);
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const pngData = canvas.toDataURL('image/png');
      outputImg.src = pngData;
      downloadBtn.href = pngData;
    };
  };
});

// JavaScript for pop-up
window.onload = function() {
  var popupWrapper = document.querySelector('.popup-wrapper');
  var closePopup = document.querySelector('#close-popup');
  
  if(!sessionStorage.getItem('popupDisplayed')) {
    popupWrapper.style.display = 'flex';
    sessionStorage.setItem('popupDisplayed', 'true');
  }
  
  closePopup.addEventListener('click', function() {
    popupWrapper.style.display = 'none';
  });
}

