const image1 =  "/public/Project Image/P1_HomeShare/pic1.png"
const image2 =  "/public/Project Image/P1_HomeShare/pic2.png"
const image3 =  "/public/Project Image/P1_HomeShare/pic3.png"
const image4 =  "/public/Project Image/P1_HomeShare/pic4.png"

export const images: string[] = [image1, image2, image3, image4]

const P1_image = (index: number): string => images[index % images.length]

export default P1_image
