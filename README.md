# [Battleship]  
![preview](https://github.com/connorwarme/battleship/blob/main/screenshots/begin.png?raw=true "preview")    

## objectives  
* create browser-playable version of classic Battleship game  
* practice Test Driven Development (first time), via Jest  
* responsive design, including mobile  
#### improve AI with two modes:  
* evaluate probability of ship placement (build a heat map), update w/ intel from each turn (hit or miss)  
* after a hit, target adjacent squares and continue on axis of successive hits (and after sinking ship, return to previous mode)  
  
## reflections  
* initial foray into testing, with Jest, which took time to learn and required adjusting workflow (write test first, run it to make sure it failed, then write code, test, and refactor/continue)  
* I enjoyed creating an AI that offers more of a challenge for the player (median game length: ~47 moves) as opposed to simply generating random shots (median length: ~97 moves). I gathered insights from posts by [Nick Berry](https://www.datagenetics.com/blog/december32011/) and [Aydin Schwartz](https://towardsdatascience.com/coding-an-intelligent-battleship-agent-bf0064a4b319).  
* added instructions and emojis to improve UX  

## screenshots  
* place fleet page  
![placeFleet](https://github.com/connorwarme/battleship/blob/main/screenshots/place.png?raw=true "placeFleet")  
* let the battle begin!  
![battle](https://github.com/connorwarme/battleship/blob/main/screenshots/battle.png?raw=true "battle")  
* mobile version:  
![mobilePlaceFleet](https://github.com/connorwarme/battleship/blob/main/screenshots/mobileplace.png?raw=true "mobilePlaceFleet")  
![mobileBattle](https://github.com/connorwarme/battleship/blob/main/screenshots/mobilebattle.png?raw=true "mobileBattle")  
  
## improvements  
* a glitch where removing sunk ship coordinates from the hitsArray doesn't work perfectly. I'm not certain why/what is happening, as it appears to occasionally remove more hits (beyond the coordinates of the ship that was just sunk).  