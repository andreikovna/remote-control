# RSSchool NodeJS websocket task

> Static http server and base task packages.
> By default WebSocket client tries to connect to the 8080 port.

## Installation

1. Clone/download repo
2. cd remote-control
3. git checkout development
4. `npm install`

## Usage

**Development**

`npm run start:dev`

* App served @ `http://localhost:8181` with nodemon

## All commands

Using websocket you can control Front app:
*Navigation*
- ↑ arrow UP on keyboard - move mouse up to {x} px
- ↓ arrow DOWN on keyboard - move mouse down to {x} px
- ← arrow LEFT on keyboard - move mouse left to {x} px
- → arrow RIGHT on keyboard - move mouse right to {x} px

- press button "p" on keyboard - get mouse coordinates

*Drawing*
- press button "c" on keyboard - draw circle
- press button "r" on keyboard - draw rectangle
- press button "s" on keyboard - draw square
- press button "ctrlLeft + p" on keyboard - screen image

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `npm run start:dev` | App served @ `http://localhost:8181` with nodemon    |


**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
