-- Database schema for Sanjana Waterproofing Projects
-- This is an example schema for your backend database

CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    category_id INT NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255),
    completed_date DATE,
    client_name VARCHAR(255),
    area_sqft INT,
    duration_days INT,
    status ENUM('completed', 'in_progress', 'planned') DEFAULT 'completed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Insert sample categories
INSERT INTO categories (name, description) VALUES
('Residential', 'Home and apartment waterproofing projects'),
('Commercial', 'Office and commercial building projects'),
('Industrial', 'Factory and industrial facility projects');

-- Insert sample projects (you can add more)
INSERT INTO projects (title, category_id, image_url, description, location, completed_date, client_name, area_sqft, duration_days) VALUES
('Residential Terrace Waterproofing', 1, 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'Complete terrace waterproofing for a 3BHK apartment in Koramangala using premium polyurethane coating', 'Koramangala, Bangalore', '2024-01-15', 'Mr. Rajesh Kumar', 1200, 5),
('Commercial Building Waterproofing', 2, 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'Large-scale waterproofing project for IT office complex in Whitefield with advanced membrane technology', 'Whitefield, Bangalore', '2024-02-20', 'TechCorp Solutions', 5000, 12),
('Bathroom Waterproofing', 1, 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'Modern bathroom waterproofing with premium materials and advanced sealing techniques', 'Indiranagar, Bangalore', '2024-01-28', 'Mrs. Priya Sharma', 80, 2);

-- Query to get projects with category names
SELECT 
    p.id,
    p.title,
    c.name as category,
    p.image_url as image,
    p.description,
    p.location,
    p.completed_date as completedDate,
    p.client_name as client,
    p.area_sqft as area,
    p.duration_days as duration
FROM projects p
JOIN categories c ON p.category_id = c.id
WHERE p.status = 'completed'
ORDER BY p.completed_date DESC;
