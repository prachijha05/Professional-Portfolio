window.addEventListener("load", function() {
    const img = document.getElementById("profilePic");

    setTimeout(() => {
        img.classList.add("show-image");
    }, 300); 
});

document.addEventListener("click", () => {
    const audio = document.getElementById("bg-music");
    audio.play();
}, { once: true });

document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // Using SweetAlert for a premium feedback feel
  Swal.fire({
    title: "Message Sent!",
    text: "Thanks for reaching out, Prachi. I will get back to you soon!",
    icon: "success",
    confirmButtonColor: "#ff78e3",
    background: "#1a1a1a",
    color: "#fff",
  });
});
