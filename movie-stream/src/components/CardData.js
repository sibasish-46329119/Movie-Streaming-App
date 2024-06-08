import inception from '../img/inception-movie-poster-sm.jpg';
import avengerendgame from '../img/avengers-endgame.jpg';
import blackpanther from '../img/black-panther.jpg';
import interstellar from '../img/interstellar.jpg';
import thedarkknight from '../img/the-dark-knight.jpg';
import theflash from '../img/The-Flash.webp';
import wonderwoman from '../img/wonder-woman.webp';

const cardData =
  [
    {
      "id": 1,
      "title": "Inception",
      "year_release": 2010,
      "rated": "PG-13",
      "description": "A thief who enters the dreams of others to steal secrets from their subconscious.",
      "category": {
        "genre": ["Action", "Adventure", "Sci-Fi", "Thriller"]
      },
      "src": inception
    },
    {
      "id": 2,
      "title": "The Dark Knight",
      "year_release": 2008,
      "rated": "PG-13",
      "description": "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      "category": {
        "genre": ["Action", "Crime", "Drama", "Thriller"]
      },
      "src": thedarkknight
    },
    {
      "id": 3,
      "title": "Interstellar",
      "year_release": 2014,
      "rated": "PG-13",
      "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "category": {
        "genre": ["Adventure", "Drama", "Sci-Fi"]
      },
      "src": interstellar
    },
    {
      "id": 4,
      "title": "Black Panther",
      "year_release": 2018,
      "rated": "PG-13",
      "description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      "category": {
        "genre": ["Action", "Adventure", "Sci-Fi"]
      },
      "src": blackpanther
    },
    {
      "id": 5,
      "title": "Flash",
      "year_release": 2022,
      "rated": "TV-MA",
      "description": "Description for Flash goes here.",
      "category": {
        "genre": ["Supernatural", "Superhero", "Thriller", "Action", "Timetravel", "DC"]
      },
      "src": theflash
    },
    {
      "id": 6,
      "title": "Avengers: Endgame",
      "year_release": 2019,
      "rated": "PG-13",
      "description": "After the devastating events of Avengers: Infinity War, the universe is in ruins.",
      "category": {
        "genre": ["Action", "Adventure", "Drama", "Sci-Fi"]
      },
      "src": avengerendgame
},
    {
      "id": 7,
      "title": "Wonder Woman",
      "year_release": 2017,
      "rated": "PG-13",
      "description": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
      "category": {
        "genre": ["Action", "Adventure", "Fantasy"]
      },
      "src": wonderwoman
    },
    {
      "id": 8,
      "title": "The Matrix",
      "year_release": 1999,
      "rated": "R",
      "description": "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
      "category": {
        "genre": ["Action", "Sci-Fi"]
      },
      "src": "https://example.com/matrix.jpg"
    },
    {
      "id": 9,
      "title": "Avatar",
      "year_release": 2009,
      "rated": "PG-13",
      "description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "category": {
        "genre": ["Action", "Adventure", "Fantasy", "Sci-Fi"]
      },
      "src": "https://example.com/avatar.jpg"
    },
    {
      "id": 10,
      "title": "Spider-Man: Into the Spider-Verse",
      "year_release": 2018,
      "rated": "PG",
      "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      "category": {
        "genre": ["Animation", "Action", "Adventure", "Family", "Sci-Fi"]
      },
      "src": "https://example.com/spiderman_into_the_spiderverse.jpg"
    },
    {
      "id": 11,
      "title": "Jurassic Park",
      "year_release": 1993,
      "rated": "PG-13",
      "description": "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
      "category": {
        "genre": ["Adventure", "Sci-Fi", "Thriller"]
      },
      "src": "https://example.com/jurassic_park.jpg"
    },
    {
      "id": 12,
      "title": "The Shawshank Redemption",
      "year_release": 1994,
      "rated": "R",
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "category": {
        "genre": ["Drama"]
      },
      "src": "https://example.com/shawshank_redemption.jpg"
    },
    {
      "id": 13,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year_release": 2001,
      "rated": "PG-13",
      "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "category": {
        "genre": ["Action", "Adventure", "Drama", "Fantasy"]
      },
      "src": "https://example.com/lotr_fellowship.jpg"
    },
    {
      "id": 14,
      "title": "Forrest Gump",
      "year_release": 1994,
      "rated": "PG-13",
      "description": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      "category": {
        "genre": ["Drama", "Romance"]
      },
      "src": "https://example.com/forrest_gump.jpg"
    },
    {
      "id": 15,
      "title": "Pulp Fiction",
      "year_release": 1994,
      "rated": "R",
      "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "category": {
        "genre": ["Crime", "Drama"]
      },
      "src": "https://example.com/pulp_fiction.jpg"
    }
  ]

export default cardData;