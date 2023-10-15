document.addEventListener("DOMContentLoaded", function () {
    const textToCopy = document.getElementById("text-to-copy");
    const copyButton = document.getElementById("copy-button");
  
    copyButton.addEventListener("click", function () {

      const tempInput = document.createElement("input");
      tempInput.value = textToCopy.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
  
      copyButton.textContent = "Copied!";
      setTimeout(function () {
        copyButton.textContent = "Copy";
      }, 2000);
    });
  });