
import measureWhatMatters from "../assets/books/1-measure-what-matters.webp";
import principles from "../assets/books/2-principles.jpg";

export const books = [
  {
    title: "Measure What Matters",
    author: "John Doerr",
    comment:
      "Recommended by Bill Gates, this book is a must-read for anyone who wants to become a better manager. It’s a practical guide to setting and achieving goals that will motivate you and your team.",
    img: measureWhatMatters,
    year: 2017,
    loading: "eager" as const,
  },
  {
    title: "Principles: Life and Work",
    author: "Ray Dalio",
    comment:
      "Recommended read for anyone who wants to learn how to make decisions effectively, and how to create a culture of radical transparency and honesty.",
    img: principles,
    year: 2017,
    loading: "eager" as const,
  },
];
