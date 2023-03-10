# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX allows us to use HTML in a javascript file. Well its kind of nested wthin each other... You are in a JS (javascript) file, then in HTML tags and then you use JSX tags to write java script functionality within your HTML tags. The syntax you use to  are curlys {} to let your code editor know you are now writing javascript within your HTML tags.

Researched answer: JSX provides sintactic sugar with in react. JSX is an extension of the JavaScript language and provides a way to structure component rendering using syntax similar to HTML. JSX allows us to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements. It gives developers the tools to provide java script logic within the HTML elements of the component.

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: yarn is a package manager for node. It installs all needed files and dependencies that are required for the package manager. its also nice because you will also allow you to instal and run test cases for your programs through jest. When you first run yarn this package manager will modify/add a package.json file, yarn.lock file. node modules and a readME file.

Researched answer: Yarn is a popular package manager for JavaScript. It allows developers to manage and install packages, and makes it easy to update and remove packages as needed.When you run the yarn command in your terminal, several files may be modified, depending on the specific command being run and the state of your project:

package.json: This file is the main configuration file for your project, and lists the dependencies and devDependencies that your project needs. When you run yarn add <package> or yarn remove <package>, this file is updated to reflect the changes in your project's dependencies.

yarn.lock: This file is generated by Yarn and lists the exact versions of each package that your project is using. It ensures that everyone working on the project is using the same versions of each package, which can help prevent compatibility issues. When you run yarn install or yarn add <package>, this file is updated to reflect the changes in your project's dependencies.

node_modules: This directory contains all of the packages that your project depends on, as well as their own dependencies. When you run yarn install or yarn add <package>, new packages are downloaded and installed in this directory. 

3. What is a React component?

Your answer: A React component is a file in react that holds a specific type of data. The way i look at it; its almost like an object or a class. it is used for all similar data to run through for orgnization purposes and more importantly reusablility and scalability purposes. Components are also very helpful for keeping DRY and clean looking code becuase data can be passed form the parent to the child component through "props" which keeps our parent component much cleaner.

Researched answer: In React, a component is a self-contained unit of code that represents a part of a user interface. It can be thought of as a reusable building block that can be composed together with other components to create more complex user interfaces. When a parent component renders a child component, it can pass data to the child component through props. Props are passed as an object with key-value pairs, where the key is the name of the prop, and the value is the data being passed. The child component can then access this data and use it in its rendering or behavior.

4. What is the difference between state values and props in React?

Your answer: First of all props and state both store data within our components. Props is used a parameter (or a place holder) to pass data from parent to child component using the object of the state as the argument. Which mean thats yes props and state both hold data but the state is the data that is being sent through the props parameter.

Researched answer: In React, both state and props are used to store and manage data in a component, but they serve different purposes; State is a built-in feature of React that represents the internal data of a component. It is a JavaScript object that contains data that can be modified by the component itself. State is managed within the component and can only be updated using the setState() method provided by React. When the state of a component changes, React re-renders the component and its children, updating the UI to reflect the new state. The key differences between state and props in React are. State is used to manage the internal state of a component, while props are used to configure the child component and pass data down from parent components.

5. What is the DOM?

Your answer: DOM(Document Object Model) is what is rendering all of our HTML onto the web browser. From my understanding it sounded like DOM is the interface that is updating our state on to the browser. It does this by hanging on to multie DOMs or state and comparing the two when a change happens and then updating the DOM to the web bowser(This made sense in my head while typing it out lol -I hope it makes sense for you reading it :) 

Researched answer: The DOM is a programming interface for web documents. In React, the DOM is a hierarchical representation of the HTML elements that make up the user interface of an application.When a React application is rendered, it creates a virtual representation of the DOM in memory called the virtual DOM. This virtual DOM is a lightweight copy of the actual DOM and is used to manage the state of the application and to update the UI in response to user actions or changes in the application's state.
When the state of the application changes, React compares the virtual DOM with the previous virtual DOM and identifies the differences. It then generates a set of efficient updates to the actual DOM, which minimizes the amount of work required to update the UI and makes the application more performant.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer: I know that a div tag is pretty much a container tag, which out of the box, will take up farthest left to right.  I had to 100% go to google for the span tag because I had no ideas what that was. (I came back to finish this portion of the question after researching what a span tag was). It seems that the biggest differnce between the two is that a DIV will take up the entire page horizontally and  grow vertically based of the context that is placed inside the DIV. While the span tag takes up only the space required of what its containing (horizontally and vertically).

Researched answer: A span tag is an inline element. typically used to apply styling to a portion of inline content. An inline element does not start a new line and only takes up as much space on the page as its content. Span tags are used on small segments of text, links, images, and other HTML elements that appear inline with the surrounding content.


## Looking Ahead: Terms for Next Week

1. Object-oriented programming: OBJ is a style or model of programming that that places all data, function and attibutes of a particular subject of data in its out object. Those attributes and functions of said object can then be called upon if its within its scope.

2. Ruby: Ruby is a backend language most used for web development. Its specifcally focuses on server and data processing or in other words the backend langauge
.

3. Implicit return: In many programming languages, including Ruby, an implicit return is a shorthand syntax for returning a value from a method or function without using the return keyword explicitly.In Ruby, if a method has only one expression, you can omit the return keyword and the expression itself will be implicitly returned as the result of the method. Here's an example:

4. Ruby blocks: Blocks are a powerful feature of Ruby that allow you to write concise and expressive code. They are commonly used with hashes to perform operations on the key-value pairs, such as filtering, mapping, and sorting.

5. Ruby hashes: In Ruby, a hash is a collection of key-value pairs, where each key is unique and maps to a corresponding value. Hashes are similar to dictionaries in other programming languages and are commonly used to store and retrieve data based on a unique key.
