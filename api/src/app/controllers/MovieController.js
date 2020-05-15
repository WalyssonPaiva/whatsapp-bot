import movies from '../assets/filmes.json';

class MovieController {
  async sortMovie(req, res) {
    const { word } = req.params;
    const id = Math.floor(Math.random() * 264 + 1);
    const { filme } = movies[id];
    const movieWithWord = filme.replace('{word}', word);
    // const moviesJson = await csv().fromFile('./filmes.csv');

    return res.json(movieWithWord);
  }
}

export default new MovieController();
