customElements.define('style-js', class extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <link rel="stylesheet" href="css/config.css">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/guides.css">
        <link rel="stylesheet" href="css/table.css">
        <link rel="stylesheet" href="css/forms.css">
        <style>
        nav.custom {
            box-shadow: none;
        }
        nav.custom ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 1rem;
            box-shadow: none;
        }
        nav.custom ul li {
            box-shadow: none;
        }
        nav.custom ul li a {
            box-shadow: none;
        }
        .grid {
            display: flex;
            justify-content: space-between;
            gap: 3rem;
            // flex-wrap: wrap;
        }
        .col {
            flex: 0 1 50%;
        }
        </style>`;
    }
});
