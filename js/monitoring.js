//Monitoring system Bar chart
//Data for products sold over 12 months
const products = ['Smart watch', 'Headphones', 'SmartPhones', 'Laptop', 'Smart home', 'Accessories'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const data = [
    [800, 550, 205, 350, 500, 900, 400, 250, 300, 405, 600, 265], // Smart watch
    [600, 265, 205, 550, 900, 350, 300, 500, 405, 400, 250, 650],  // Headphones
    [500, 250, 725, 830, 350, 400, 405, 650, 655, 360, 265, 470], // SmartPhones
    [800, 710, 312, 314, 256, 528, 320, 225, 724, 526, 280, 430], // Laptop
    [600, 708, 510, 412, 214, 316, 818, 325, 422, 624, 826, 428],  // Smart home
    [412, 218, 624, 430, 336, 242, 748, 554, 640, 696, 532, 878]  // Accessories
];

// Create a bar chart
const ctx = document.getElementById('productSalesChart').getContext('2d');
const productSalesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: months,
        datasets: products.map((product, index) => ({
            label: product,
            data: data[index],
            backgroundColor: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`,
        })),
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
//GAME
document.addEventListener("DOMContentLoaded", function() {
    const captchaPassed = sessionStorage.getItem('captchaPassed');
    if (captchaPassed === 'true') {
    } else {
        window.location.href = "game1.html";
    }
});