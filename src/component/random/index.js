import { useState } from 'react'
import '../../css/style.css'

const Random = () => {
    const [selected, setSelected] = useState(0)

    const items = [
        '',
        'Lunettes',
        'Santé et beauté',
        'Produits pour animaux de compagnie',
        'Articles de sport',
        'Articles pour bébés et enfants',
        'Alimentation et boissons',
        'Bagagerie',
        'Beauté et Parfum',
        'Bijoux',
        'Bricolage',
        'Chaussures et Sacs',
        'Fournitures de bureau',
        'High-Tech',
        'Informatique',
        'Jardin',
        'Jeux et Jouets',
        'Jeux vidéo',
        'Livres',
        'Montres',
        'Vêtements et accessoires',
        'Automobile',
        'Manga / Anime',
        'Auto / Moto',
        'Sneakers',
        'Restaurant',
        'Sport',
        'Musique',
        'Mode',
        'Animaux',
        'Vacances / Exploration',
        'Film / Séries',
        'Histoire',
        'Évènements',
        'Cuisine',
        'Coiffure',
    ]

    return (
        <section>
            <div className="center">
                <div className="contain">
                    <h1>Sujet</h1>
                    <p>{items[selected]}</p>
                    <button onClick={() => setSelected(Math.floor(Math.random() * items.length))}>
                        Obtenir un sujet !
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Random
