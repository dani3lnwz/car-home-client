import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-4xl text-center text-blue-700 font-bold font-mono "> How will you improve the performance of a React Application?</h2>
            <p  className="text-2xl text-center font-bold">
                1.By Keeping component state local where necessary. <br />
                2.Memoizing React components to prevent unnecessary re-renders. <br />
                3.Code-splitting in React using dynamic import() <br />
                4.Windowing or list virtualization in React. <br />
                5.Lazy loading images in React. <br />
            </p>
            <br /><br />
            <h2  className="text-4xl text-center text-blue-700 font-bold font-mono">What are the different ways to manage a state in a React application?</h2>
            <p   className="text-2xl text-center font-bold">
                1.Local state. <br />
                2.Global state. <br />
                3.Server state. <br />
                4.URL state. <br />
            </p>
            <br /><br />
            <h3  className="text-4xl text-center text-blue-700 font-bold font-mono">How does prototypical inheritance work?</h3>
            <p   className="text-2xl text-center font-bold">
            The Prototypal Inheritance is a feature in javascript.It used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
            </p>
            <br /><br />
            <h3  className="text-4xl text-center text-blue-700  font-bold font-mono">What is a unit test? Why should write unit tests?</h3>
            <p   className="text-2xl text-center font-bold">Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.</p> 
            <br />
            <p   className="text-2xl text-center font-bold">We write unit tests because of a lot of benefits, One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency.</p>
            <br /><br />
            <h3  className="text-4xl text-center text-blue-700  font-bold font-mono">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h3>
            <p  className="text-2xl text-center font-bold">It never update the state directly because, If you update it directly, calling the setState() afterward may just replace the update you made.</p>
        </div>
    );
};

export default Blogs;