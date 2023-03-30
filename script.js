"use strict"

const reviews = [
  {
    id: 1,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    img: "./assets/images/image-tanya.jpg",
    text:
      "“ I've been interested in coding for a while but never taken the jump, \
      until now. I couldn't recommend this course enough. I'm now in the job of \
      my dreams and so excited about the future. ”",
  },
  {
    id: 2,
    img: "./assets/images/image-john.jpg",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: 
      "“ If you want to lay the best foundation possible I'd recommend taking \
      this course. The depth the instructors go into is incredible. I now feel \
      so confident about starting up as a professional developer. ”",
  }
]

const img = document.getElementById("img"),
      personName = document.getElementById("name"),
      personJob = document.getElementById("job"),
      text = document.getElementById("text");

const nextBtn = document.getElementById("next"),
      prevBtn = document.getElementById("prev");

let currentReview = 0;

// initial state
window.addEventListener("DOMContentLoaded", () => {
  showReview(0);
})

function showReview(id) {
  const item = reviews[id];
  img.src = item.img;
  text.textContent = item.text;
  personName.textContent = item.name;
  personJob.textContent = item.job;
}

nextBtn.addEventListener("click", () => {
  currentReview++;
  if(currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showReview(currentReview);
})

prevBtn.addEventListener("click", () => {
  currentReview--;
  if(currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview(currentReview);
})