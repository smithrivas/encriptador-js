const text = document.querySelector(".text-area");
const message = document.querySelector(".message");
const button = document.querySelector(".copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const dictionary = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncrypt() {
  const textToEncrypt = encrypt(text.value);
  message.value = textToEncrypt;
  text.value = "";
  message.classList.remove("message-image");
}

function btnDecrypt() {
  const textEncrypt = decrypt(text.value);
  message.value = textEncrypt;
  text.value = "";
  message.classList.remove("message-image");
}

function btnCopy() {
  navigator.clipboard.writeText(message.value);
  button.textContent = "Copiado ✔";
  button.style.background = "#0A3871";
  button.style.color = "white";

  setTimeout(() => {
    button.textContent = "Copiar";
    button.style.background = "white";
    button.style.color = "#0A3871";
  }, 3000);
}

function encrypt(textEncrypt) {
  textEncrypt = textEncrypt.toLowerCase();
  for (let i = 0; i < dictionary.length; i++) {
    if (textEncrypt.includes(dictionary[i][0])) {
      textEncrypt = textEncrypt.replaceAll(dictionary[i][0], dictionary[i][1]);
    }
  }
  return textEncrypt;
}

function decrypt(textEncrypt) {
  textEncrypt = textEncrypt.toLowerCase();
  for (let i = 0; i < dictionary.length; i++) {
    if (textEncrypt.includes(dictionary[i][1])) {
      textEncrypt = textEncrypt.replaceAll(dictionary[i][1], dictionary[i][0]);
    }
  }
  return textEncrypt;
}
