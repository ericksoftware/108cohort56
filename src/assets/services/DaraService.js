import axios from 'axios';

export const mock_catalog = [
    {
        "title": "banana",
        "category": "fruit",
        "price": 10.99,
        "image": "/images/banana.jpg",
        "id": 1
    },
    {
        "title": "apple",
        "category": "fruit",
        "price": 0.99,
        "image": "/images/apple.jpg",
        "id": 2
    },
    {
        "title": "coffee",
        "category": "beverage",
        "price": 2.49,
        "image": "./images/coffee.jpg",
        "id": 3
    },
    {
        "title": "car",
        "category": "vehicle",
        "price": 1200.22,
        "image": "/images/car.jpg",
        "id": 4
    },
    {
        "title": "television",
        "category": "electronics",
        "price": 100.56,
        "image": "/images/television.jpg",
        "id": 5
    },
    {
        "title": "soup",
        "category": "food",
        "price": 1.91,
        "image": "/images/soup.jpg",
        "id": 6
    },
    {
        "title": "guitar",
        "category": "music",
        "price": 32.56,
        "image": "/images/guitar.jpg",
        "id": 7
    },
];

export const mock_categories = [
    "fruit", 
    "beverage", 
    "vehicle", 
    "electronics", 
    "food", 
    "music"];

    class DaraService {
        async getCatalog() {
                const response = await axios.get("http://127.0.0.1:8000/api/products");
                return response.data; 
        }
    
        async getCategories() {
                const response = await axios.get("http://127.0.0.1:8000/api/categories");
                return response.data;
    }

        async saveProduct(product) {
            const response = await axios.post("http://127.0.0.1:8000/api/products", product);
            return response.data;
            }
}

export default new DaraService();