# CryptoMask


## Setup and Run
Prerequisites
### Node.js
Node.js is a cross-platform, open-source runtime environment for running JavaScript code outside the browser window. It's an event-driven, non-blocking I/O model, hence lightweight, efficient, and powered by Chrome's V8 JavaScript Engine.

Node.js is primarily used for server-side application development, the creation of RESTful APIs, and command-line utilities. It enables server-side development in a homogeneous and rather effective way with JavaScript.

### In the context of CryptoMask DApp:

#### Why Node.js is Needed:
It will help you run a development server for your DApp, on which you can then serve your frontend interface to interact with Ethereum smart contracts and do all other operations that relate to the functionality of your application.

#### Package Management:
Node.js comes with a package manager known as the Node Package Manager. This package manager enables the easy installation of packages, management, and sharing of reusable code. You use NPM to install all libraries and packages your project needs. As such, you will use it to install React, Web3.js, and Hardhat.

### Hardhat:
Hardhat is a development environment targeting Ethereum, specifically designed for compiling, deploying, and testing smart contracts, with interaction options.

### In the context of CryptoMask DApp:

#### Smart Contract Deployment
Hardhat is used for compiling and deploying the smart contract of Transactions to the Ethereum network. The following deploy.js script utilizes Hardhat to start the deployment process.

#### Testing
Hardhat can also be used with respect to writing and running tests for your smart contracts in order to verify that they work correctly and securely. You have in your sample code a test script named sampletest.js in which you'll use Chai and write tests for the Greeter smart contract.

#### Local Development:
In development, you would be able to make use of Hardhat's local development network to test how your DApp interacts with the smart contract without incurring the cost of real Ethereum transactions.

Both Node.js and Hardhat form the core within which Ethereum-based applications like the CryptoMask DApp are developed. Node.js provides the runtime environment, while Hardhat provides special tools and capabilities for dealing with Ethereum smart contract development.

## Installation

### Clone the repository:
This means duplicating the code repository of the project onto your local machine. You'll be performing this duplication using Git commands.

### Install dependencies:
The installation of all the libraries and packages that need to be run with the DApp, making the linkage to Ethereum possible, is done with the use of the npm install command.

## Deploy Smart Contact

### Navigate to the Contracts Directory
When you see the message, "Navigate to the contracts directory", you should open your command-line interface and change the current directory to where the `transactions.sol` file is kept. This is accomplished with the cd command, which stands for "change directory." All of these CLI commands can be something like: cd path/to/your/project/contracts Replace path/to/your/project with the actual path to your project's root directory. Once in the correct directory, with the above command, you will be ready to work with the DeFi transactions.sol file containing the Solidity code for your smart contract.

### Edit the transactions.sol file:
In this step, you can edit the transactions.sol file. This contains the Solidity code of your smart contract, defining the behavior and logic of the said smart contract. You may wish to change any parameters of the contract, add more functions, or adjust existing ones according to your project's needs.

Simply use any text editor or an IDE that helps you in writing Solidity. Common text editors which are in use for the development of Solidity are Visual Studio Code along with the Solidity extension, Remix IDE, and others.

Note that each modification done at the Solidity code level will finally impact the behavior of the smart contract when deployed and interacted with.

### Deploy the smart contract using hardhat:
It's getting deployed in the Ethereum blockchain through a development environment such as Hardhat. What the detailed actions do is the following:

#### npx: 
In this line, the npx command is used to run CLI tools that aren't globally installed in your system. It's part of Node.js and ensures that the right environment runs the tool.

#### Hardhat:
This will be the CLI command to use the Hardhat development environment. You are running npx hardhat, which is Hardhat's commands for doing all kinds of tasks related to Ethereum development.

#### run scripts/deploy.js: 
This specifies running the deploy.js script in the scripts directory of your project. The script includes logic for deploying the smart contract to the Ethereum network.

#### The Deploy Script:
The `deploy.js` script interacts with the APIs exposed by Hardhat to compile and deploy the smart contract. This script will connect to one of the Ethereum networks, compile the contract, and deploy it. Consequently, it will show the address of the deployed contract.

If you run this command: "npx hardhat run scripts/deploy.js" You will start the deployed operation for the instructions found in the deploy.js script. If the process is completed successfully, then the smart contract is deployed to the Ethereum network and you receive the information needed regarding the address and related data.

Make sure to adjust the deployment script based on your smart contract requirements and the Ethereum network you'd like to deploy to.

## Run the DApp

### Navigate into the src directory: 
When you are asked to "Navigate into the src directory", you are simply being told to change the current working directory to where your frontend code exists using your CLI. This would typically include HTML, CSS, JavaScript, and other assets relating to your DApp's user interface.

The command to navigate into the src directory would look something like this: cd path/to/your/project/src. Replace path/to/your/project with the actual path to where you cloned your project's root directory. Once in the src directory, you are then ready to begin working with your DApp's frontend code.

### Edit the main.jsx file:
This step requires you to open the main.jsx file. It would probably contain the primary JavaScript code for the frontend UI of your DApp, possibly comprising React components and other logic related to the user interface.

You will possibly need to modify this file so that either the look, behavior, or functionality of your DApp can be changed. You may need to add some new components or fix something in the styling area, implement user interactions, or connect with your smart contract using libraries like Web3.js or Ethers.js.

Editing the main.jsx file is how one might go about shaping their DApp as desired or according to their requirements.

### Start Development Server Locally:
Running the command `npm start` is equivalent to spinning up a local development server that hosts your DApp. It serves this development server in front of the code to your web browser so you can experience and test your DApp in a controlled environment.

This means having a local development server running, which will compile React components, bundle JavaScript files, or just update your browser in real-time for changes. It all contributes to a much more streamlined development and testing process.

### Open the DApp in your web browser:
After booting up the local development server, load your DApp by entering http://localhost:3000 into the address bar of a web browser. Here, 'http' stands for a transfer protocol used to relay data over the web; 'localhost' represents the domain for the local server hosting your DApp; and '3000' stands for the port your server is listening on.

At this point, hit Enter. Your web browser will render the user interface, and you will be able to see what your DApp looks and feels like in the context of a web browser—exactly the same way users would experience it if it were live on the web.

While you make changes to the main.jsx file or any of the other files that it is inclusive of, the local development server would automatically refresh your browser and update it with real-time changes. This feedback enables changes to be made and the design and functionality of the DApp to be polished.

In that way, you can run and test the frontend of the DApp successfully on any local machine you want. Make sure main.jsx is formed according to your DApp's needs and also that, while starting your project, the local development server is running.


## Technologies Used

### Solidity: 
This is the high-level language, particularly adapted for writing smart contracts in the Ethereum blockchain. It is statically typed and supports inheritance, libraries, complex user-defined types, and more. The rules by which your smart contract behaves are specified within the Solidity code. Smart contracts written in Solidity are compiled into bytecode that can run on the EVM.

In the CryptoMask DApp:

Usage: The file transactions.sol contains the Solidity code for the smart contract called Transactions. Within it, it defines functions, data structures, and events that define the behavior when executing and then recording a transaction on the Ethereum blockchain.

### Hardhat:
Hardhat is a great development environment for creating Ethereum smart contracts. It provides tools and utilities that simplify many of the phases involved in the development cycle, from compilation and deployment to testing and scripting of the contracts.

In the context of the CryptoMask DApp:

Role: Hardhat is used to compile the Solidity code, deploy the smart contract in the Ethereum blockchain, and write tests to ensure that the behavior of the contract is correct.

### React: 
React is a JavaScript library focused on building user interfaces. The primary use of React is for dynamic, interactive web apps. React introduces the concept of reusable components that 'encapsulate' UI elements and their behavior.

In the context of the CryptoMask DApp:

Frontend: With React, a modular and organized user interface could be built for the DApp. Its creation allows for component reuse and state management from React, making UI updates really efficient during data change.

### Web3.js:
Web3.js is a JavaScript library that provides the interface for interacting with the Ethereum blockchain. It enables communication between your front end and the Ethereum network to read data from and send transactions to, the blockchain.

In the context of the CryptoMask DApp:

Blockchain Interaction: Web3.js is responsible for connecting a React frontend to the Ethereum blockchain. It enables functions such as fetching data from the Transactions smart contract, sending transactions, and listening to events emitted by the contract.

### Chai:
Chai is an assertion library for testing in JavaScript. It is a bunch of styles of assertions that can be used to express the expected behavior and results of the code in a very human-readable form.

In the context of the CryptoMask DApp:

Testing: Chai is used for writing tests that validate the behavior of the smart contract. Test cases using Chai ensure that smart contract functions perform as expected and that events that have been emitted are correct.

### Ethers.js
The above is yet another JavaScript library for interaction with the Ethereum blockchain. It provides a clean, simple API to operate on Ethereum accounts, transactions, contracts, and much more.

In the context of the CryptoMask DApp:

Alternative to Web3.js: Ethers.js does the same job as Web3.js. It's an alternative library meant for the same purpose, which is to somehow link the DApp frontend with the Ethereum blockchain, hence being used for doing things like sending transactions or querying data from smart contracts.

### HTML/CSS:
HTML  refers to the standard markup language used for creating web pages. It structures content on a webpage using elements that represent headings, paragraphs, links, and more.

CSS is used to present and layout HTML elements on a page. It primarily specifies the style, color, font, and spacing for all the elements on a web page.

In the case of the CryptoMask DApp:

Web Page Structure: HTML structures the content of the web pages for the DApp by defining the elements of the web pages, which include headers, text, forms, and others. Styling: These HTML elements are styled by CSS, defining their appearance and placing them on the page. These technologies together enable you to create a functional, user-friendly decentralized application. They cover end-to-end smart contract development at the backend, front-end design, interaction with the blockchain, and testing for the reliability of your application.



## Design Choices

### Smart Contract Structure:
Smart Contract Structure: How the Transactions smart contract is structured to achieve the intended functionality. In the CryptoMask DApp, it is designed to handle transactions between users. More details of this are explained below:

#### Transaction data:
There is a structured data format that the smart contract keeps for every transaction. It contains the sender's and receiver's Ethereum addresses, the amount of the transaction, a message associated with the transaction, a timestamp of when the transaction took place, and finally, a keyword associated with the transaction.

#### Struct: 
Using a TransferStruct struct within the smart contract enables the smart contract to organize all these data points together for every transaction. 

#### Transaction Count:
It keeps track of the total number of transactions that have been made. This count may be useful in understanding the extent of usage and activity of the DApp.

This structured approach to storing transaction data makes it efficient to retrieve and manage information about transactions on the Ethereum blockchain.

### Event Emission
In simpler terms, Event Emission means that an 'event' gets emitted in a smart contract whenever any high-importance action occurs. For instance, a Transfer event is emitted each time a new transaction is created in the smart contract Transactions of the CryptoMask DApp. This explains why event emission is important:

#### Realtime Notifications:
Broadcasting the Transfer event will make the frontend of the DApp aware of any new transaction that is placed in real-time. In this way, users of the DApp will be able to visualize updates without having to manually refresh the source.
Events make this possible by enabling decoupled communication of the smart contract with the frontend. One side is the emission of events by the smart contract, while the other side is the listening of those events by the frontend. Such separation of concerns allows for a more modular and scalable architecture.
Events can also help to maintain a history log of all the important actions that took place. The Transfer event, for instance, provides a way of keeping a log of details on every transaction over time.


### Frontend Interface:
Frontend Interface refers to the user interface (UI) that users interact with when using the DApp. In the CryptoMask DApp, the frontend is built using React to provide a user-friendly and dynamic experience. Here's more about the frontend design:

#### User Interaction:
On the frontend, it enables the user to originate transactions. In particular, users can specify the address of the receiver, the amount intended to be sent, a message, and a keyword for the transaction.
Total Transaction Count

Displaying the total count of transactions in the frontend allows users to see how frequently a DApp is used and how active it is.

React's component-based structure contributes to the proper management of multiple parts of the UI, while its state management provides a responsive interface with each new data related to transactions.

#### Transaction History
It also allows a user to get a view of all their past transactions, hence giving them visibility into the transactions they have made for more transparency.


### Testing
Testing lies at the core of software development to ensure that code behaves according to expectations and that possible bugs are detected before they affect users. In CryptoMask DApp, testing is done both for the smart contract and the front end using Chai and Hardhat's testing tools. Here's why testing is essential:

#### Smart Contract Verification:
Chai tests the smart contract to see if the functions in the contract work as expected, including the correct execution of transactions and the accurate emission of events.

#### Frontend Behaviour

It ensures that every user action triggers the proper behavior to execute. For instance, frontend testing might confirm that submitting a transaction form updates the transaction history as expected.


#### Preventing Bugs
Extensive testing will reduce the possibility of releasing code containing critical bugs or vulnerabilities, hence providing better reliability to the DApp and the user experience.

Chai and the Hardhat testing feature will let the development team automate the verification of the smart contract's behavior and the interactions on the front end, hence building an application that is more resilient and reliable.

These design choices thus contribute to the collective functionality, usability, and quality of CryptoMask DApp. They address significant concerns, such as data organization, real-time communication, user experience, and reliability of code.

