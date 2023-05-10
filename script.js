function uploadImage() {
  let imageInput = document.getElementById("image-input");
  let imageName = document.getElementById("image-name-upload");
  let imageDescription = document.getElementById("image-description-upload");
  let imageGallery = document.querySelector(".image-gallery__container");

  let div = document.createElement("div");
  div.setAttribute("class", "image-card");
  div.innerHTML = `<div class="image-box">
                    <img src="${URL.createObjectURL(
                      imageInput.files[0]
                    )}" alt="" id="image" />
                    </div>
                    <div class="image-content">
                    <p id="image-name">${imageName.value}</p>
                    <p id="image-description">${
                      imageDescription.value
                    }</p> </div>`;

  imageGallery.appendChild(div);

  imageName.value = "";
  imageDescription.value = "";
  imageInput.value = "";
  let imageUploadContainer = document.querySelector(".image-upload__container");
  imageUploadContainer.classList.remove("active");
}

function openModal() {
  let imageUploadContainer = document.querySelector(".image-upload__container");
  imageUploadContainer.classList.add("active");
}

function closeModal() {
  let imageUploadContainer = document.querySelector(".image-upload__container");
  imageUploadContainer.classList.remove("active");
}
