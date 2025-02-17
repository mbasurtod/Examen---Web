const cocktailController = (() => {

    const Coincidences = async () => {
        try {
            const response = await fetch('/Cocktail/Coincidences?name=whiskey');
            if (!response.ok) {
                throw new Error('Error al obtener las coincidencias');
            }
            const apiResponse = await response.json();
            if (apiResponse.isSuccess) {
                await SetCocktail(apiResponse.result);
            } else {
                console.error('No se encontraron coincidencias o hubo un error en la respuesta.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const SetCocktail = async (cocktails) => {
        
    };

    const Init = () => {
        Coincidences();
    };

    return { Init };

})();

document.addEventListener('DOMContentLoaded', cocktailController.Init);