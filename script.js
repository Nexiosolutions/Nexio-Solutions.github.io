* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    color: #fff;
    background: #000000;
}

header {
    background: #000000;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.logo {
    font-family: 'Lora', serif;
    font-size: 2rem;
    color: #a67c00;
    font-weight: 700;
}

nav ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

nav a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 400;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #a67c00;
}

section {
    padding: 4rem 2rem;
    text-align: center;
}

h1, h2 {
    font-family: 'Lora', serif;
    font-weight: 700;
}

h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: #fff;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #a67c00;
}

p {
    max-width: 700px;
    margin: 0 auto 1rem;
    font-size: 1.1rem;
}

#home {
    background: url('https://images.unsplash.com/photo-1516321310766-66f1ce9a6688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') no-repeat center/cover;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0;
}

.hero {
    background: rgba(0, 0, 0, 0.7);
    padding: 4rem 2rem;
    max-width: 800px;
}

.cta-button {
    display: inline-block;
    padding: 1rem 2.5rem;
    background: #a67c00;
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.cta-button:hover {
    background: #8c6700;
}

#about, #contact {
    background: #000000;
}

#services {
    background: #1a1a1a;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
}

.service-item {
    background: #000000;
    padding: 2rem;
    border: 1px solid #a67c00;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 15px rgba(166, 124, 0, 0.3);
}

.service-item h3 {
    font-family: 'Lora', serif;
    font-size: 1.5rem;
    color: #a67c00;
    margin-bottom: 0.5rem;
}

#contact form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 2rem auto;
}

label {
    font-weight: 700;
    text-align: left;
    color: #a67c00;
}

input, textarea {
    padding: 0.75rem;
    border: 1px solid #a67c00;
    border-radius: 5px;
    background: #1a1a1a;
    color: #fff;
    font-size: 1rem;
}

textarea {
    resize: vertical;
    min-height: 120px;
}

button {
    background: #a67c00;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.3s ease;
}

button:hover {
    background: #8c6700;
}
