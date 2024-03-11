// log_click.js
export default function log_click(node, {message = 'Element clicked'} = {}) {
    // Add an event listener for the 'click' event
    node.addEventListener('click', () => {
      console.log(message);
    });
  
    return {
      // On destroy, make sure to remove the event listener
      destroy() {
        node.removeEventListener('click', () => {
          console.log('Element clicked!');
        });
      }
    };
  }