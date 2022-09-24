import sanityClient from '@sanity/client';
import ImageUrlBuilder  from '@sanity/image-url';

export const client= sanityClient({
    projectId: "6b99yz5b",
    dataset: 'production',
    apiVersion:"2022-07-16",
    useCdn:true,
    useCdn: true,
    token : "sk55eci1EzFYCEYhlBFZokXlZUtdWPpyU2nWOPrSRwfd6wDfFoIQEYsG3XVvLI9Ep2CPSszqNz0Dg7gxJyqeDgU0IkYONaDQBk1MPsr6u5AamEsnCGWhrFJ9Te5wwnngp3X6uXMmNektmClwbsWcLYnxLiArFTqnRyntMAkw5he1qbiCSH7R"

})
const builder =ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)