import React from 'react';
import './RecipeCard.css'

export default function RecipeCard() {
    return (
        <main className='my-4'>
            <div className='row recipe-card-container'>
            <div className='recipe-card col-md-5'>
            <img src="https://foodloversmarket.co.za/wp-content/uploads/website_recipe_1140x641_27.05.20-2-992x558.jpg" alt="" />
                <h4>Chicken</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum incidunt repudiandae accusantium earum facere laboriosam, labore, dolorem ab error, consectetur dignissimos! Perspiciatis at quaerat accusantium magni explicabo, ea doloremque numquam!</p>
            </div>
            <div className='recipe-card col-md-5'>
            <img src="https://foodloversmarket.co.za/wp-content/uploads/website_recipe_1140x641_27.05.20-2-992x558.jpg" alt="" />
                <h4>Chicken</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum incidunt repudiandae accusantium earum facere laboriosam, labore, dolorem ab error, consectetur dignissimos! Perspiciatis at quaerat accusantium magni explicabo, ea doloremque numquam!</p>
            </div>
            <div className='recipe-card col-md-6'>
            <img src="https://foodloversmarket.co.za/wp-content/uploads/website_recipe_1140x641_27.05.20-2-992x558.jpg" alt="" />
                <h4>Chicken</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum incidunt repudiandae accusantium earum facere laboriosam, labore, dolorem ab error, consectetur dignissimos! Perspiciatis at quaerat accusantium magni explicabo, ea doloremque numquam!</p>
            </div>
            </div>
        </main>
    )
}
