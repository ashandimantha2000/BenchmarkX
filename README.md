
# BenchmarkX

User Experience Evaluation and Digital Insight Platform
## Tech Stack

ReactJS, Vite, TailwindCSS, NodeJs, ExpressJS, MongoDB, JWT, ChartJS, ApexJS, Jest with Super Test and React Testing Library
## Run Locally - Server

Clone the project

```bash
  git clone https://github.com/ashandimantha2000/BenchmarkX.git
```

Go to the project directory

```bash
  cd Server
```
Add .env file to root of the server directory

Define port as

```bash
PORT=5555
```
Add connection string as

```bash
MONGO_URI=mongodb+srv://ashan:root@benchmarkx.wwck7lx.mongodb.net/benchmarkx?retryWrites=true&w=majority&appName=BenchmarkX

```
Define JSON Web Token secrect as
```bash
JWT_SECRET=secret
```
Define SALT as
```bash
SALT=10
```
Export Values
```bash
export { PORT, MONGO_URI, JWT_SECRET, SALT };
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Run Locally - Client

Go to the project directory

```bash
  cd Client
```
Install dependencies

```bash
  npm install
```
Start the client

```bash
  npm run dev
```
## Screenshots

![App Screenshot](https://i.ibb.co/6PYqPhT/Capture1.png)

![App Screenshot](https://i.ibb.co/qWX6bwf/Capture2.png)

![App Screenshot](https://i.ibb.co/V9Ds0Xd/Capture3.png)

