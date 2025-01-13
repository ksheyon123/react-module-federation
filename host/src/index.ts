// src/index.ts
import("./bootstrap").catch((err) => {
  console.error("Error loading the app:", err);
});
