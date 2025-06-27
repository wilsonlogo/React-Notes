
// function createElement(reactElement,container){
//     const domElement=document.createElement(reactElement.type)
//     domElement.textContent=reactElement.children
//     domElement.setAttribute("href",reactElement.props.href)
//     domElement.setAttribute("target",reactElement.props.target)
//     container.appendChild(domElement)
// }

function createElement(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.textContent=reactElement.children
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}




const reactElement={
    type : 'a',
    props :{
        href : "https://react.dev",
        target : "_blank"
    },
    children :"Click me to learn React"
}
const mainContainer=document.querySelector("#root")

createElement(reactElement,mainContainer)