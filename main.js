const display = (text) => console.log("display1:" + text);
const display2 = (text) => console.log("display2:" + text);

// display("test");

// ESM syntax is supported.
export {
	display,
	display2
}
