using Web.DTO;

namespace Web.Services
{
    public class ApiCocktailService : IApiCocktailService
    {
        public async Task<List<CocktailDto>?> GetCocktailsAsync(string name)
        {
            try
            {
                /*
                 * Documentación
                 * https://www.api-ninjas.com/api/cocktail
                 * Tu código va aqui
                 */
                return new List<CocktailDto>();
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine($"Error en la solicitud: {e.Message}");
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error inesperado: {e.Message}");
                return null;
            }
        }
    }
}