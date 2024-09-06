customElements.define('custom-navigation', class Navigation extends HTMLElement {
    /**
     * Constructor for the custom navigation element.
     * Calls the parent constructor, HTMLElement().
     */
    constructor() {
        super();
    }

    /**
     * Called when the component is inserted into the DOM tree.
     * Populates the innerHTML of the component with the links to the
     * different components.
     */
    connectedCallback() {
        this.innerHTML = `
              <nav class="custom">
                  <ul>
                      <li><a href="/">Index</a></li>
                      <li><a href="components-text.html">Text</a></li>
                      <li><a href="components-media.html">Media</a></li>
                      <li><a href="components-table.html">Tables</a></li>
                      <li><a href="components-form.html">Forms</a></li>
                      <li><a href="colors.html">Colors</a></li>
                  </ul>
              </nav>
                  `;
    }
});
