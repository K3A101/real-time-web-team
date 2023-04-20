# Real-Time Web @cmda-minor-web 2022 - 2023
## 🏫 Cursus
Voor deze cursus moeten we een chat ontwikkelen die in real time data ontvangt en uitdeelt (je kunt de data direct zien). Om te beginnen met deze cursus krijgen we de opdracht om samen als team aan de slag te gaan met het bouwen van een chatapplicatie. Zodat we een sterke basis hebben om te beginnen en dan kunnen we onze eigen functionaliteiten toevoegen om deze cursus te halen. Deze opdracht is behoorlijk tijdrovend, omdat we op maandag met dit project beginnen en de volgende dag (dinsdag) de opdracht moeten voltooien en feedback van de docenten moeten krijgen.

## 🤔 Concept
We hebben besloten om ons eerst te richten op het leren kennen van socket.io, omdat het verschillende soorten evenementen heeft en we nog onbekend zijn met de evenementen. Ons ontwerp zal dus eenvoudig zijn en we zullen ook maar 1 pagina ontwikkelen, een heel eenvoudige chatroom. Waar je met meerdere gebruikers kunt chatten, zullen de gebruikers ook niet anoniem zijn, ze krijgen namen.

## ✏️ Schetsen / ontwerp

### Schets
![afbeelding 1](https://user-images.githubusercontent.com/94360732/232487129-7857ca76-19d2-41d1-80d1-c9af0ead5c89.png)

### LoFi-prototype
![iPhone 14 - 1](https://user-images.githubusercontent.com/94360732/232489788-bcc8ba8a-e43b-47a3-89cf-1da7c4f038aa.png)

### HiFi-prototype


## 🪆 MoSCoW

### Hebbeding
- Chat met meerdere gebruikers
- Realtime gegevens ontvangen en verzenden

### Zou moeten hebben
- Zie elkaars namen
- Zie de datum
- Mooie gebruikersinterface

### Zou kunnen hebben
- De tijd van het bericht dat wordt verzonden

### Zou hebben
- U kunt zien dat de andere gebruiker een bericht aan het typen is


## 🛠️ Gebruikte tools
- Npm
- Nodejs
- Nadrukkelijk
- Template engine ejs
- Socket.io

## ⚙️ Installatie
Clone repository

```
Git clone https://github.com/RainbowJM/real-time-web-2223.git
```

NVM installeren

```
nvm-installatie 19.8.1
```

Snelle installatie
```
npm installeren express
```
EJS installeren

```
npm ejs installeren

```
Socket.io installeren

```
npm installeer socket.io

```

Start applicatie

```
npm begin
```

## 🛣️ Expres + route
Hier importeren we expres en bouwen we onze eigen route. We bouwen voorlopig alleen een applicatie van één pagina, dus daarom hebben we maar één routeringspad.

```
const express = vereisen('express');
const router = express.Router();

router.get('/', (req, res) => {
     res.render('index');
});


module.exports = router;

```
## ⏰ Realtime / Socket.io-gebeurtenissen
In realtime / Socket.io zijn de gebeurtenissen iets anders dan javascript. Hier gebruiken we specifieke gebeurtenissen om verschillende gegevens te ontvangen en te verzenden.

**.uitzenden**
Hier stuurt de beheerder verschillende soorten gegevens naar de gebruikers. U kunt eenvoudig de .emit achter de gegeven functie gebruiken. (voorbeeld: socket.emit("hallo", "wereld"); )

**Verbinding**
Dit evenement is het belangrijkste evenement. Het wordt uitgevoerd wanneer een gebruiker een nieuwe verbinding met de server maakt. Dit is de verbinding met het stopcontact.

**Gebruiker verbinden**
Deze gebeurtenis wordt geactiveerd wanneer een nieuwe gebruiker verbinding maakt met de game. Het verzendt de gebruikersnaam en activeert een deelnamebericht met de gebruikersnaam, zodat iedereen in het spel kan zien wie zich heeft aangemeld.

**Bericht**
Deze gebeurtenis wordt uitgevoerd wanneer een gebruiker een bericht in de chat wil sturen, dit kan zijn om met anderen te chatten of om het antwoord voor het spel te raden.

**Gegevens ophalen (nieuw karakter)**
Deze gebeurtenissen worden geactiveerd wanneer de gebruiker de chat betreedt na het verzenden van zijn gebruikersnaam. De marvel API-gegevens worden verzameld en gefilterd en een willekeurig item uit de array wordt weergegeven. Het wordt opnieuw geactiveerd nadat de vorige vraag goed is beantwoord.

**Antwoord**
Wanneer een gebruiker het juiste antwoord probeert te raden, wordt deze gebeurtenis geactiveerd. Bij het versturen van een chatbericht wordt gecontroleerd of het bericht het juiste antwoord bevat. Als dit het geval is, wordt er een ander bericht weergegeven dat het juiste antwoord is gegeven.

**Gebruiker vertrokken**
Deze gebeurtenis wordt uitgevoerd wanneer een gebruiker vertrekt. Het zorgt ervoor dat er een bericht wordt verzonden dat een gebruiker is vertrokken (met gebruikersnaam).

## Mijn unieke eigenschap
Zo kreeg ik de kans om mijn eigen chat app te ontwikkelen. Wat ik deed, is mijn teamrepository splitsen en ik ging verder waar ik was gebleven met mijn eigen unieke functie.

### Functies
   Wat ik wilde implementeren zijn:
   - Kijk wie er online is
   - Dat iemand aan het typen is
   - De gebruikersnaam op een andere pagina
   -

## ⚖ Licentie
[MIT](https://github.com/RainbowJM/real-time-web-2223/blob/main/LICENSE)

## ✍ Auteur