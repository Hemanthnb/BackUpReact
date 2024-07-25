import listOfMovies from "../../../shared/types/movieList";
import apiClient from "../api.client"

const moviesEndpoint = {
    getlistOfMovies: async (): Promise<listOfMovies[]> => {
        const response = await apiClient.get('/movies.json')
        const movies_data = await response.data;
        return movies_data
    }
}
export default moviesEndpoint;