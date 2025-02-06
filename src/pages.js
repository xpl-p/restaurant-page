const render = (() => {
    const _content = document.getElementById("content")

    const text = (type, text) => {
        const e = document.createElement(type)
        e.textContent = text
        _content.appendChild(e)
    }

    const list = (items) => {
        const newList = document.createElement("ul")
        items.forEach(e => {
            const newItem = document.createElement("li")
            newItem.textContent = e
            newList.appendChild(newItem)
        });
        _content.appendChild(newList)
    }

    const reset = () => {
        _content.replaceChildren();
    }

    return { text, list, reset }
})();

const Home = () => {
    render.reset()
    render.text("h1", "Welcome to Our Website!")
    render.text("p", "Experience the best flavors and discover a place where food meets passion. Explore our delicious menu and learn more about what makes us unique.")
    render.text("h2", "Our Specialties")
    render.list([
                "Freshly prepared gourmet meals", 
                "Locally sourced ingredients",
                "Exceptional customer service"
                ])
    render.text("h2", "Customer Testimonials")
    render.text("blockquote", "The best dining experience I've ever had! Highly recommended.\" - Jane Doe")
    render.text("blockquote", "Amazing flavors and fantastic service. Will definitely return!\" - John Smith")
    render.text("h2", "Contact Us")
    render.text("p", "Email: contact@ourwebsite.com")
    render.text("p", "Phone: (123) 456-7890")
    render.text("p", "Location: 123 Main Street, Foodie Town")
    
};

const Menu = () => {
    render.reset();
    render.text("h1", "Our Menu");
    render.text("p", "Indulge in our delicious menu, crafted with the freshest ingredients.");

    render.text("h2", "Appetizers");
    render.list([
        "Bruschetta - Grilled bread with tomatoes, garlic, and basil",
        "Stuffed Mushrooms - Mushrooms filled with creamy cheese and herbs",
        "Crispy Calamari - Lightly breaded calamari served with aioli"
    ]);

    render.text("h2", "Main Courses");
    render.list([
        "Grilled Salmon - Served with roasted vegetables",
        "Pasta Primavera - Fresh pasta with seasonal vegetables",
        "Steak Frites - Juicy steak with crispy fries and house sauce"
    ]);

    render.text("h2", "Desserts");
    render.list([
        "Chocolate Lava Cake - Warm chocolate cake with a molten center",
        "Cheesecake - Classic cheesecake with berry compote",
        "Tiramisu - Layered espresso-soaked sponge with mascarpone"
    ]);

    render.text("p", "Come visit us and enjoy a delightful meal!");
};

const About = () => {
    render.reset();
    render.text("h1", "About Us");
    render.text("p", "Welcome to our restaurant! We are dedicated to serving delicious meals made with love and the finest ingredients.");
    
    render.text("h2", "Our Story");
    render.text("p", "Founded in 2005, our restaurant started as a small family-owned eatery with a vision to bring fresh, high-quality food to our community. Over the years, we have grown into a beloved establishment known for our passion for food and excellent service.");
    
    render.text("h2", "Our Values");
    render.list([
        "Quality Ingredients - We source only the best local produce and meats.",
        "Customer Satisfaction - Your happiness is our priority.",
        "Passion for Cooking - Every dish is crafted with care and expertise."
    ]);

    render.text("h2", "Meet Our Chef");
    render.text("p", "Chef Antonio, our head chef, brings years of experience and a deep love for culinary arts. His innovative dishes and dedication to quality make our restaurant a must-visit destination.");
    
    render.text("p", "We look forward to serving you!");
};

export { Home, Menu, About }