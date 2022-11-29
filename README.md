# [Battleship]  
* under development  
* approach: TDD (first time), using Jest 

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
* 
  
# improvements  
* a glitch where removing sunk ship coordinates from the hitsArray doesn't work perfectly. I'm not certain why/what is happening, as it appears to occasionally remove more hits (beyond the coordinates of the ship that was just sunk).  
  
# [WeatherWatch](https://connorwarme.github.io/weather/): a weather app  
  
![preview](https://github.com/connorwarme/weather/blob/main/screenshots/la.png?raw=true "preview")  

## objectives  
* provide weather for given location   
* utilize OpenWeatherMap API  
* display images that correlate with weather data  
* create toggle for Fahrenheit / Celsius  
* implement mobile-friendly UI  
  
## reflections  
* initial foray into asynchronous JS (learned promises, async/await syntax, fetch API, utilize data returned)  
* strove for simplicity and clarity in UI  
* first effort at a mobile-friendly app  
 
## screenshots  
* mobile friendly UI - added menu button to select view: current info, detailed data, and forecast  
![main](https://github.com/connorwarme/weather/blob/main/screenshots/mobilea.png?raw=true "main")  
![details](https://github.com/connorwarme/weather/blob/main/screenshots/mobileb.png?raw=true "details")  
![forecast](https://github.com/connorwarme/weather/blob/main/screenshots/mobilec.png?raw=true "forecast")  
  
* the whole page:  
![full](https://github.com/connorwarme/weather/blob/main/screenshots/nyfull!.png?raw=true "full")  
  
## notes  
* to future self: Safari processes date differently. for Firefox and Chrome, format of '2022-10-01 11:57:00' works fine. Safari needs '2022-10-01T11:57:00', which I accomplished with a dateString.replace(/ /g,"T").  