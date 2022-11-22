import { createElement } from "./utility";

// build legend to explain emojis, provide detailed instructions
const ship = {
  emoji: " ",
  text: "friendly ship",
  class: "ship",
};
const wave = {
  emoji: "🌊",
  text: "attack miss",
  class: "miss",
};
const hit = {
  emoji: "🔥",
  text: "attack hit",
  class: "hit",
};
const sunk = {
  emoji: "🔱",
  text: "you sunk enemy ship",
  class: "sunk",
};
const enemySunk = {
  emoji: "🏴‍☠️",
  text: "enemy sunk friendly ship",
  class: "sunk",
};
const emojiArray = [ship, wave, hit, sunk, enemySunk];
const createLegend = () => {
  const container = createElement("div", { class: "legendContainer" });
  const legendBox = createElement("div", { class: "legendBox" });
  legendBox.textContent = "Legend:";
  const list = createElement("ul", { class: "legendList" });
  emojiArray.forEach((emoji) => {
    const li = createElement("li", { class: "emojiLi" });
    const box = createElement("div", { class: `emojiBox ${emoji.class}` });
    box.textContent = `${emoji.emoji}`;
    const text = createElement("div", { class: "emojiText" });
    text.textContent = `- ${emoji.text}`;
    li.appendChild(box);
    li.appendChild(text);
    list.appendChild(li);
  });
  legendBox.appendChild(list);
  container.appendChild(legendBox);
  const instructBox = createElement("div", { class: "instructBox" });
  instructBox.textContent = "Instructions:";
  const instructText = createElement("div", { class: "instructText" });
  instructText.textContent =
    "Select coordinates in enemy waters to launch an attack. The board will indicate a hit or miss, or if you sunk the enemy ship. Find and eliminate all five enemy ships before they eliminate yours!";
  const objectiveBox = createElement("div", { class: "objectiveBox" });
  objectiveBox.textContent = "Objective:";
  const objectiveText = createElement("div", { class: "objectiveText" });
  objectiveText.textContent = "Sink the enemy fleet!";
  objectiveBox.appendChild(objectiveText);
  container.appendChild(objectiveBox);
  instructBox.appendChild(instructText);
  container.appendChild(instructBox);
  return container;
};
export default createLegend;
