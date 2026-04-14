// URLs
export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy/";

export const LOGO_URL =
  "https://marketplace.canva.com/EAFpeiTrl4c/2/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-a1RYzvS1EFo.jpg";

export const NO_IMAGE =
  "https://via.placeholder.com/300x200?text=No+Image";


// Function to check if a number is prime
export const isPrime = (num) => {
  num = Number(num);

  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};



export const findNthPrime = (n) => {
  n = Number(n);

  if (n <= 0) return null;

  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }

  return num - 1;
};