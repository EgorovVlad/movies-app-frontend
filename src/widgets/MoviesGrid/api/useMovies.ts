import type { IMovie } from "@/entities/movie";

const mock: IMovie[] = [
  {
    id: '1',
    title: 'The Shawshank Redemption',
    year: '1994',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '2',
    title: 'The Godfather',
    year: '1972',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '3',
    title: 'The Dark Knight',
    year: '2008',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._AC_.jpg',
  },
  {
    id: '4',
    title: '12 Angry',
    year: '1957',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '5',
    title: 'Schindler\'s List',
    year: '1993',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '6',
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '7',
    title: 'Pulp Fiction',
    year: '1994',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '8',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '9',
    title: 'Forrest Gump',
    year: '1994',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',
  },
  {
    id: '10',
    title: 'The Lord of the Rings: The Two Towers',
    year: '2002',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg',  
  },
];

export const useMovies = () => {
  return {
    data: mock,
    isLoading: false,
  };    
};